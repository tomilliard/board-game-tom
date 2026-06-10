/* ════════════════════════════════════════════════════════════════
   Board Game Tom — Vérification points / Elo
   À coller dans la console du navigateur (F12 → Console) en étant
   connecté sur https://boardgametom.com/ (admin de préférence).

   Le script REJOUE les parties confirmées de la saison en cours,
   depuis zéro, avec exactement la même logique que l'app, puis
   compare le résultat aux points/Elo réellement stockés.
   ════════════════════════════════════════════════════════════════ */
(() => {
  // ── Constantes (identiques à app.js) ──
  const DURATION_MULT = { court: 1, moyen: 1.5, long: 2 };
  const ELO_BASE = 1000;

  // Bornes basses des 36 rangs (Bois V … Challenger) pour retrouver l'index.
  const DIVS = [
    ['bois',0,49,5],['bronze',50,149,5],['argent',150,349,5],['or',350,699,5],
    ['platine',700,1199,5],['diamant',1200,1999,5],['maitre',2000,2999,5],
    ['challenger',3000,Infinity,1],
  ];
  const RANK_MIN = [];
  DIVS.forEach(([,start,end,count]) => {
    if (count === 1) { RANK_MIN.push(start); return; }
    const step = Math.floor((end - start + 1) / count);
    for (let i = 0; i < count; i++) RANK_MIN.push(start + i * step);
  });
  const rankIdx = (pts) => {
    for (let i = RANK_MIN.length - 1; i >= 0; i--) if (pts >= RANK_MIN[i]) return i;
    return 0;
  };

  const RANK_LOSS = (() => {
    const BASE = [[0,0],[1,0],[2,1],[4,2],[6,3],[9,4],[12,6],[16,8]];
    const arr = [];
    BASE.forEach((pair, i) => { const rep = (i === BASE.length - 1) ? 1 : 5; for (let r = 0; r < rep; r++) arr.push(pair); });
    return arr;
  })();

  const gameDur = (gid) => (games.find((g) => g.id === gid) || {}).duration;
  const durMult = (gid) => DURATION_MULT[gameDur(gid)] || 1;

  const calcPoints = (rank, n, gid) => {
    let base;
    if      (rank === 1) base = 10 + (n - 1) * 3;
    else if (rank === 2) base = 6 + Math.max(0, (n - 2) * 2);
    else if (rank === 3) base = 3 + Math.max(0, n - 3);
    else                 base = 1;
    return Math.round(base * durMult(gid));
  };
  const calcLoss = (pts, place, n) => {
    const idx = rankIdx(pts);
    if (idx === 0) return 0;
    const [last, second] = RANK_LOSS[idx];
    if (place === n) return last;
    if (n >= 5 && place === n - 1) return second;
    return 0;
  };
  const eloK = (rating, g) => (g < 10 ? 40 : rating >= 2000 ? 16 : 24);

  // Bonus d'exploit (doit rester identique à app.js)
  const UPSET_DIV = 40, UPSET_CAP = 10;
  const upsetBonus = (myElo, beatenElos) => {
    let acc = 0; beatenElos.forEach((e) => { if (e > myElo) acc += e - myElo; });
    return Math.min(UPSET_CAP, Math.round(acc / UPSET_DIV));
  };

  // ── État simulé par joueur ──
  const sim = {};
  players.forEach((p) => { sim[p.id] = { pts: 0, elo: ELO_BASE, streak: 0, peakPts: 0, peakElo: ELO_BASE, games: 0 }; });

  // ── Parties de la saison, ordre de CONFIRMATION ──
  const start = (currentSeason && currentSeason.started_at) ? String(currentSeason.started_at).slice(0,10) : '0000-00-00';
  const season = matches
    .filter((m) => m.status !== 'pending' && String(m.date || '') >= start)
    .slice()
    .sort((a,b) => String(a.confirmed_at||a.date||'').localeCompare(String(b.confirmed_at||b.date||'')) || (a.id||0)-(b.id||0));

  console.log(`%c▶ ${season.length} partie(s) confirmée(s) sur la saison (début ${start})`, 'color:#fbbf24;font-weight:700');

  const anomalies = [];

  season.forEach((m) => {
    const ids = (m.players || []).map((pp) => pp.id).filter((id) => sim[id]);
    if (ids.length < (m.players || []).length) anomalies.push(`Partie #${m.id} : joueur(s) introuvable(s).`);
    if (!ids.length) return;
    const winners = (m.winners || []).filter((id) => ids.includes(id));
    const scores  = m.scores || {};
    const n = ids.length;

    // placement
    const losers = ids.filter((id) => !winners.includes(id));
    if (Object.keys(scores).length) losers.sort((a,b) => (Number(scores[b])||0) - (Number(scores[a])||0));
    const place = (id) => winners.includes(id) ? 1 : winners.length + 1 + losers.indexOf(id);

    // Elo (pairwise) — utilise l'elo simulé courant + games joués AVANT cette partie
    const R = {}; ids.forEach((id) => R[id] = Math.round(sim[id].elo));
    const eloDelta = {};
    if (n >= 2) ids.forEach((i) => {
      let exp = 0, act = 0;
      ids.forEach((j) => { if (i===j) return;
        exp += 1/(1+Math.pow(10,(R[j]-R[i])/400));
        const pi=place(i), pj=place(j); act += pi<pj?1:pi>pj?0:0.5;
      });
      eloDelta[i] = Math.round(eloK(R[i], sim[i].games) * (act-exp)/(n-1));
    });

    // points + streak + elo
    ids.forEach((id) => {
      const s = sim[id];
      const isW = winners.includes(id);
      let gain = calcPoints(place(id), n, m.game_id);
      if (m.is_challenge && isW) gain += 5;
      const newStreak = isW ? s.streak + 1 : 0;
      if (isW && newStreak % 3 === 0) gain += 3;
      if (isW) {
        const beaten = ids.filter((o) => o !== id && !winners.includes(o)).map((o) => R[o]);
        gain += upsetBonus(R[id], beaten);
      }
      const idx = rankIdx(s.pts);
      const penalty = (!isW && s.streak >= 3 && idx >= 3) ? 3 : 0;
      const loss = calcLoss(s.pts, place(id), n);
      const net = gain - loss - penalty;
      s.pts = Math.max(0, s.pts + net);
      s.elo = s.elo + (eloDelta[id] || 0);
      s.streak = newStreak;
      s.peakPts = Math.max(s.peakPts, s.pts);
      s.peakElo = Math.max(s.peakElo, s.elo);
      s.games += 1;
    });
  });

  // ── Comparaison ──
  const rows = []; let mism = 0;
  players.forEach((p) => {
    const s = sim[p.id];
    const storedPts = p.points || 0;
    const storedElo = Math.round(p.elo != null ? p.elo : ELO_BASE);
    const compElo = Math.round(s.elo);
    const dP = storedPts - s.pts, dE = storedElo - compElo, dS = (p.streak||0) - s.streak;
    if (dP || dE) mism++;
    rows.push({
      Joueur: p.name,
      'Pts stockés': storedPts, 'Pts calculés': s.pts, 'Δ pts': dP,
      'Elo stocké': storedElo, 'Elo calculé': compElo, 'Δ elo': dE,
      'Série stockée': p.streak||0, 'Série calc.': s.streak, 'Δ série': dS,
    });
  });
  rows.sort((a,b) => b['Pts calculés'] - a['Pts calculés']);
  console.table(rows);
  if (anomalies.length) { console.warn('Anomalies :'); anomalies.forEach((a) => console.warn('  • '+a)); }
  console.log(mism === 0
    ? '%c✅ Tout concorde : points & Elo cohérents avec l\'historique.'
    : `%c⚠️ ${mism} joueur(s) avec un écart (voir colonnes Δ).`,
    `color:${mism===0?'#4ade80':'#f87171'};font-weight:700`);
  console.log('Astuce : un écart vient souvent d\'une partie modifiée/supprimée après validation, d\'un ajustement manuel, ou de l\'ordre de confirmation. Copie-moi le tableau si besoin.');
  return rows;
})();
