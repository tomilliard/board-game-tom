// app.js — logique applicative (UI, rangs, Supabase, evenements...)


// ── DATA BLOBS ─────────────────────────────────────────────────
const SEED_GAMES = [{"id": 1, "name": "Catan", "status": "own", "price": 39.9, "pmin": 3, "pmax": 4, "duration": "moyen", "notes": "", "extensions": [], "link": "", "ratings": []}, {"id": 4, "name": "7 Wonders", "status": "own", "price": 42.95, "pmin": 2, "pmax": 7, "duration": "moyen", "notes": "", "extensions": [{"name": "Cities", "price": 24.95}, {"name": "Armada", "price": 29.95}, {"name": "Leaders", "price": 29.95}, {"name": "Edifice", "price": 24.95}], "link": "", "ratings": []}, {"id": 6, "name": "Mythologies", "status": "own", "price": 31.5, "pmin": 1, "pmax": 1, "duration": "moyen", "notes": "", "extensions": [], "link": "", "ratings": []}, {"id": 7, "name": "Dune Imperium Insurrection", "status": "own", "price": 62.9, "pmin": 1, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Dune : Imperium", "price": 64.95}, {"name": "Immortalite", "price": 31.5}, {"name": "Lignees", "price": 39.95}, {"name": "Avenement d'Ix", "price": 39.95}], "ratings": [5]}, {"id": 8, "name": "Res Arcana", "status": "own", "price": 34.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Perlea Imperii", "price": 17.95}, {"name": "Lux et Tenebrae", "price": 17.95}], "ratings": []}, {"id": 9, "name": "Nidavellir", "status": "own", "price": 33.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Thingvellir", "price": 13.5}, {"name": "Idavoll", "price": 13.5}], "ratings": []}, {"id": 10, "name": "Citadelle", "status": "own", "price": 14.95, "pmin": 2, "pmax": 7, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 11, "name": "Terraforming Mars", "status": "own", "price": 59.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "prelude 2", "price": 19.95}, {"name": "prelude", "price": 19.95}, {"name": "Turmoil", "price": 24.46}], "ratings": []}, {"id": 12, "name": "Château Combo", "status": "own", "price": 17.95, "pmin": 2, "pmax": 5, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "cachot", "price": 5.9}], "ratings": []}, {"id": 13, "name": "The Witcher L'ancien Monde", "status": "own", "price": 81.9, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Mages", "price": 59}, {"name": "Legendary Hunt", "price": 54.9}, {"name": "Skellige", "price": 49}], "ratings": []}, {"id": 14, "name": "Iki", "status": "own", "price": 55.9, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Akebono", "price": 29.9}], "ratings": []}, {"id": 15, "name": "Altered TCG", "status": "own", "price": 358, "pmin": 1, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 16, "name": "Cyberpunk TCG", "status": "own", "price": 179.95, "pmin": 1, "pmax": 2, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 17, "name": "Brass Birmingham", "status": "own", "price": 62.95, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 18, "name": "Courtisans", "status": "own", "price": 17.95, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "courtisans", "price": 17.95}], "ratings": []}, {"id": 19, "name": "Moon colony Bloodbath", "status": "own", "price": 39.5, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 20, "name": "Recall", "status": "own", "price": 70.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 21, "name": "World Order", "status": "own", "price": 61.9, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Dans la tourmante", "price": 20.9}, {"name": "Diplomatie et Domination", "price": 20.9}], "ratings": []}, {"id": 22, "name": "Duel pour Cardia", "status": "own", "price": 13.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Protecteur de la nature", "price": 4.5}], "ratings": []}, {"id": 23, "name": "Dorfromantik - Sakura", "status": "own", "price": 39.9, "pmin": 1, "pmax": 6, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 24, "name": "Legion : Abyss Universe", "status": "own", "price": 22.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 25, "name": "Riftbound TCG", "status": "own", "price": 294.85, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 26, "name": "Kronologic Babylon", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 27, "name": "Kronologic Cuzco", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 28, "name": "Kronologic Paris", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "L'invite Mystere", "price": 7.5}, {"name": "Panique a L'opera", "price": 7.5}], "ratings": []}, {"id": 29, "name": "Dead Cells", "status": "own", "price": 76.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 30, "name": "Carcassone", "status": "own", "price": 64.9, "pmin": 2, "pmax": 6, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Extension 3", "price": 15.9}, {"name": "Extension 5", "price": 15.9}, {"name": "Extension 6", "price": 15.9}, {"name": "Extensions 7", "price": 15.9}, {"name": "Extension 8", "price": 15.9}, {"name": "Extension 9", "price": 15.9}], "ratings": []}, {"id": 31, "name": "Arcs", "status": "own", "price": 58.5, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Heros et Savoir", "price": 10.9}, {"name": "Les confins devastes", "price": 99.9}], "ratings": []}, {"id": 32, "name": "SETI", "status": "own", "price": 62.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Recherche d'intelligence", "price": 28.95}], "ratings": []}, {"id": 33, "name": "Root", "status": "own", "price": 81.95, "pmin": 1, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Monde Souterrain", "price": 59.95}], "ratings": []}, {"id": 34, "name": "The Vale of Eternity", "status": "own", "price": 26.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Artifacts", "price": 16.5}, {"name": "Curse", "price": 16.5}], "ratings": []}, {"id": 35, "name": "Skull King", "status": "own", "price": 14.9, "pmin": 2, "pmax": 8, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Extensions", "price": 9.5}], "ratings": []}, {"id": 36, "name": "Duel pour la terre du milieu", "status": "own", "price": 27.95, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 37, "name": "Dewan", "status": "own", "price": 33.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 38, "name": "L'ombre du Kraken", "status": "own", "price": 35.95, "pmin": 3, "pmax": 15, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 39, "name": "Divinus", "status": "own", "price": 149.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Divinus", "price": 58.9}], "ratings": []}, {"id": 40, "name": "foret mixte", "status": "own", "price": 25.95, "pmin": 2, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Alpes", "price": 9.5}, {"name": "Lisiere de la foret", "price": 9.5}, {"name": "Exploration", "price": 9.5}], "ratings": []}, {"id": 41, "name": "Rivals", "status": "own", "price": 53.9, "pmin": 2, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 42, "name": "Kutna Hora", "status": "own", "price": 54.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 43, "name": "It's a wonderful World", "status": "own", "price": 39.95, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Guerre ou paix", "price": 19.95}, {"name": "Loisirs et Decadence", "price": 33.95}, {"name": "Corruption et Ascension", "price": 30}], "ratings": []}, {"id": 44, "name": "Sankore", "status": "own", "price": 71.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 45, "name": "Cyberpunk : Gangs of night city", "status": "own", "price": 99.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Families et Parias", "price": 45.95}], "ratings": []}, {"id": 46, "name": "Monumental", "status": "own", "price": 59.9, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Lost Kingdoms", "price": 40.9}, {"name": "Africain Empire", "price": 40.9}], "ratings": []}, {"id": 47, "name": "Black Forest", "status": "own", "price": 67.5, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 48, "name": "Akropolis", "status": "own", "price": 26.9, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Athena", "price": 11.9}, {"name": "Pantheon", "price": 11.9}], "ratings": []}, {"id": 49, "name": "Naishi", "status": "own", "price": 16.9, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 50, "name": "Far Away", "status": "own", "price": 17.9, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Le Peuple du dessous", "price": 5.9}, {"name": "Sous un ciel d'etoiles", "price": 5.9}], "ratings": []}, {"id": 51, "name": "Harmonies", "status": "own", "price": 32.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 52, "name": "Chateau Blanc", "status": "own", "price": 31.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Mathca", "price": 17.9}], "ratings": []}, {"id": 53, "name": "Eternitium", "status": "own", "price": 21.95, "pmin": 1, "pmax": 5, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Next Gen", "price": 5.95}], "ratings": []}, {"id": 54, "name": "Darwin's Journey", "status": "own", "price": 44.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 55, "name": "Flowers", "status": "own", "price": 13.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 56, "name": "Senjutsu", "status": "own", "price": 58.95, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 57, "name": "La Famiglia", "status": "own", "price": 76.95, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 58, "name": "Now!", "status": "own", "price": 13.5, "pmin": 3, "pmax": 8, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 59, "name": "Living Forest", "status": "own", "price": 34.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 60, "name": "Dilemme du Roi", "status": "own", "price": 78.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 61, "name": "Rauha", "status": "own", "price": 35.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Syntyma", "price": 13.9}], "ratings": []}, {"id": 62, "name": "Tower Up", "status": "own", "price": 35.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 63, "name": "Cites Royales", "status": "own", "price": 19.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 64, "name": "Take Time", "status": "own", "price": 22.5, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 65, "name": "Abyss", "status": "own", "price": 41.95, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Kraken", "price": 18.95}, {"name": "Leviathan", "price": 18.95}, {"name": "De Profundis", "price": 5.5}], "ratings": []}, {"id": 66, "name": "Civolution", "status": "own", "price": 80.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 67, "name": "For a Crown", "status": "own", "price": 31.5, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 68, "name": "Skyrise", "status": "own", "price": 84, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 69, "name": "Gwent", "status": "own", "price": 34.95, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 70, "name": "Rebirth", "status": "own", "price": 36.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 71, "name": "Zenith", "status": "own", "price": 29.95, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 72, "name": "Odin", "status": "own", "price": 12, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 73, "name": "Toy battle", "status": "own", "price": 22.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}];




// Insets exacts de l'avatar dans chaque cadre (mesurés sur les PNGs 150x150)
const FRAME_HOLES = {
  bois:       { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  bronze:     { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  argent:     { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  or:         { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  platine:    { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  diamant:    { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  maitre:     { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  challenger: { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
};


const isMobile = () => window.innerWidth <= 700;

const getRankAssets = (rankKey) => {
  const isMob = window.innerWidth <= 700;
  const rk = RANKS.find(r => r.key === rankKey);
  const bk = (rk && rk.baseKey) ? rk.baseKey : rankKey;
  // Merge: baseKey assets, then overridden by specific sub-rank assets
  const md = RANK_ASSETS_DESKTOP[bk] || {};
  const ms = RANK_ASSETS_DESKTOP[rankKey] || {};
  const mm = RANK_ASSETS_MOBILE[bk] || {};
  const ms2= RANK_ASSETS_MOBILE[rankKey] || {};
  const d  = { ...md, ...ms };
  const m  = { ...mm, ...ms2 };
  return isMob ? { ...d, ...m } : d;
};


// ── APPLICATION ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════════

const SB_URL    = 'https://cdzufqxojizqdujpupex.supabase.co';
const SB_KEY    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkenVmcXhvaml6cWR1anB1cGV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzUyMzEsImV4cCI6MjA5NTQ1MTIzMX0.zpSuhOv0R6XwnF4EAWWA5n4hxgQnDm7SVxdHO8TKoJw';
// Mode admin lié au compte (colonne profiles.is_admin) — plus de mot de passe en clair.
const SITE_URL  = 'https://boardgametom.netlify.app';

// Les avatars 2-10 seront ajoutés au fur et à mesure

const COLORS = [
  '#4ade80','#60a5fa','#f472b6','#fb923c',
  '#a78bfa','#34d399','#f87171','#fbbf24',
  '#38bdf8','#e879f9',
];

const DURATION_LABELS = {
  court: '<30 min',
  moyen: '30–90 min',
  long:  '>90 min',
};

const DURATION_MULT = { court: 1, moyen: 1.5, long: 2 };

const RANKS = (() => {
  const DIVS = [
    { name:'Bois',       key:'bois',       color:'#8B6914', start:0,    end:49,   count:5 },
    { name:'Bronze',     key:'bronze',     color:'#c47b3a', start:50,   end:149,  count:5 },
    { name:'Argent',     key:'argent',     color:'#94a3b8', start:150,  end:349,  count:5 },
    { name:'Or',         key:'or',         color:'#fbbf24', start:350,  end:699,  count:5 },
    { name:'Platine',    key:'platine',    color:'#60a5fa', start:700,  end:1199, count:5 },
    { name:'Diamant',    key:'diamant',    color:'#a78bfa', start:1200, end:1999, count:5 },
    { name:'Maitre',     key:'maitre',     color:'#f472b6', start:2000, end:2999, count:5 },
    { name:'Challenger', key:'challenger', color:'#fbbf24', start:3000, end:Infinity, count:1 },
  ];
  const NUMS = ['V','IV','III','II','I'];
  const ranks = [];
  DIVS.forEach(div => {
    if (div.count === 1) {
      ranks.push({ name: div.name, key: div.key, baseKey: div.key, min: div.start, max: div.end, color: div.color, sub: null });
    } else {
      const range = div.end - div.start + 1;
      const step  = Math.floor(range / div.count);
      for (let i = 0; i < div.count; i++) {
        const subMin = div.start + i * step;
        const subMax = (i === div.count - 1) ? div.end : div.start + (i + 1) * step - 1;
        const subNum = NUMS[i];
        ranks.push({
          name:    div.name + ' ' + subNum,
          key:     div.key + '_' + (i+1),
          baseKey: div.key,
          min:     subMin,
          max:     subMax,
          color:   div.color,
          sub:     subNum,
        });
      }
    }
  });
  return ranks;
})();

// Loss at [last_place, second_to_last (5+ players)]
// 5 sous-rangs × 7 divisions + 1 Challenger = 36 entrées
const RANK_LOSS = (() => {
  const BASE = [
    [0,0],[1,0],[2,1],[4,2],[6,3],[9,4],[12,6],[16,8]
  ];
  const arr = [];
  BASE.forEach((pair, i) => {
    const repeat = (i === BASE.length - 1) ? 1 : 5;
    for (let r = 0; r < repeat; r++) arr.push(pair);
  });
  return arr;
})();

// SVG icon strings reused across renders
const SVG_EDIT = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
const SVG_TRASH = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
const SVG_CLOSE = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// ═══════════════════════════════════════════════════════════════
// APPLICATION STATE
// ═══════════════════════════════════════════════════════════════

let games        = [];
let players      = [];
let matches      = [];
let ratingsCache = {};   // { gameId: { sum, count, myScore } }
let comments     = {};   // { gameId: Comment[] }
let suggestions  = [];
let challenges   = [];
let events       = [];
let subscribers  = [];

let authToken     = null;
let currentUser   = null;
let currentProfile = null;

let isAdmin      = false;
let isOwner      = false;   // vrai uniquement si le compte connecté a profiles.is_admin = true
let curPage      = 'games';
let curTab       = 'all';
let socialTab    = 'suggestions';

let editGameId       = null;
let modalExts        = [];
let selColor         = '#4ade80';
let selAvatar        = null;  // id de l'avatar sélectionné
let authSelColor     = '#4ade80';
let currentChallengeId = null;

// ═══════════════════════════════════════════════════════════════
// PURE HELPERS
// ═══════════════════════════════════════════════════════════════

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const ini = (name) =>
  (name || '?').trim().split(/\s+/).map((w) => w[0]).join('').toUpperCase().slice(0, 2) || '?';

const fmtDate = (d) => {
  if (!d) return '';
  const [y, m, da] = d.split('-');
  return `${da}/${m}/${y}`;
};

const fmtPrice = (n) =>
  n ? n.toFixed(2).replace('.', ',') + '\u202f€' : null;

const durLabel = (d) => DURATION_LABELS[d] || d;

// ─── Rank helpers ────────────────────────────────────────────

const getRank = (pts) => {
  for (let i = RANKS.length - 1; i >= 0; i--)
    if (pts >= RANKS[i].min) return { ...RANKS[i], idx: i };
  return { ...RANKS[0], idx: 0 };
};

const rankImg = (rk, size = 20) => {
  const src = RANK_EMBLEMS[rk.baseKey||rk.key];
  return src
    ? `<img src="${src}" width="${size}" height="${size}"
           style="vertical-align:middle" title="${rk.name}">`
    : rk.name;
};

// ─── Points helpers ──────────────────────────────────────────

const durationMult = (gameId) => {
  const g = games.find((x) => x.id === gameId);
  return g ? (DURATION_MULT[g.duration] || 1) : 1;
};

const calcPoints = (rank, totalPlayers, gameId) => {
  let base;
  if      (rank === 1) base = 10 + (totalPlayers - 1) * 3;
  else if (rank === 2) base = 6 + Math.max(0, (totalPlayers - 2) * 2);
  else if (rank === 3) base = 3 + Math.max(0, totalPlayers - 3);
  else                 base = 1;
  return Math.round(base * durationMult(gameId));
};

const calcLoss = (pts, placement, totalPlayers) => {
  const idx = getRank(pts).idx;
  if (idx === 0) return 0;          // Bois protected
  const [lastLoss, secondLoss] = RANK_LOSS[idx];
  if (placement === totalPlayers)                           return lastLoss;
  if (totalPlayers >= 5 && placement === totalPlayers - 1) return secondLoss;
  return 0;
};

// ─── Note Elo (niveau relatif) ───────────────────────────────
// Contrairement aux points (cumulés, récompensent le volume), l'Elo mesure
// le NIVEAU : battre plus fort que soi rapporte beaucoup, perdre contre plus
// faible coûte cher. La somme des variations d'une partie est ~nulle.
const ELO_BASE = 1000;

const getElo = (p) => Math.round((p && p.elo != null) ? p.elo : ELO_BASE);

// Expérience du joueur (sert au facteur K) — comptée sur l'historique en mémoire.
const eloGamesPlayed = (pid) =>
  matches.filter((m) => m.players?.some((pp) => pp.id === pid)).length;

// Facteur K : fort tant que le joueur est "provisoire", plus stable ensuite.
const eloK = (rating, games) => {
  if (games < 10)     return 40;   // provisoire : la note converge vite
  if (rating >= 2000) return 16;   // élite : on bouge peu
  return 24;                       // régime établi
};

// Elo multijoueur par comparaisons par paires : chaque joueur est confronté
// à tous les autres en "1v1 virtuel" selon le classement de la partie.
// placeOf(pid) renvoie le classement (1 = meilleur) ; égalité de place = nul.
const eloDeltas = (ids, placeOf) => {
  const out = {};
  const n = ids.length;
  if (n < 2) return out;
  const R = {};
  ids.forEach((id) => { R[id] = getElo(players.find((x) => x.id === id)); });
  ids.forEach((i) => {
    let expected = 0, actual = 0;
    ids.forEach((j) => {
      if (i === j) return;
      expected += 1 / (1 + Math.pow(10, (R[j] - R[i]) / 400));
      const pi = placeOf(i), pj = placeOf(j);
      actual  += pi < pj ? 1 : pi > pj ? 0 : 0.5;
    });
    const k = eloK(R[i], eloGamesPlayed(i));
    out[i] = Math.round(k * (actual - expected) / (n - 1));
  });
  return out;
};

// ─── Rating helpers ──────────────────────────────────────────

const avgRating = (g) => {
  const c = ratingsCache[g.id];
  return (!c || !c.count) ? 0 : Math.round(c.sum / c.count * 10) / 10;
};

const myRating = (g) => {
  const c = ratingsCache[g.id];
  return c ? (c.myScore || 0) : 0;
};

const ratingCount = (g) => {
  const c = ratingsCache[g.id];
  return c ? c.count : 0;
};

// ─── Match helpers ───────────────────────────────────────────

const timesPlayed = (gameId) =>
  matches.filter((m) => m.game_id === gameId).length;

const sortedLosers = (allIds, winnerIds, scores) => {
  const losers = allIds.filter((id) => !winnerIds.includes(id));
  if (scores && Object.keys(scores).length)
    losers.sort((a, b) => (Number(scores[b]) || 0) - (Number(scores[a]) || 0));
  return losers;
};

const placements = (allIds, winnerIds, scores) => {
  const losers = sortedLosers(allIds, winnerIds, scores);
  const map = {};
  allIds.forEach((id) => {
    map[id] = winnerIds.includes(id)
      ? 1
      : winnerIds.length + 1 + losers.indexOf(id);
  });
  return map;
};

// ─── Player stat helpers ─────────────────────────────────────

const playerStats = (pid) => {
  const played  = matches.filter((m) => m.players?.some((p) => p.id === pid));
  const won     = matches.filter((m) => m.winners?.includes(pid));
  const scored  = played.filter((m) => m.scores?.[pid] !== undefined);
  const scores  = scored.map((m) => Number(m.scores[pid]));
  return {
    played:     played.length,
    won:        won.length,
    lost:       played.length - won.length,
    avgScore:   scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*10)/10 : null,
    bestScore:  scores.length ? Math.max(...scores) : null,
  };
};

const bestGame = (pid) => {
  const stat = {};
  matches.forEach((m) => {
    if (!m.players?.some((p) => p.id === pid)) return;
    if (!stat[m.game_id]) stat[m.game_id] = { pl: 0, w: 0 };
    stat[m.game_id].pl++;
    if (m.winners?.includes(pid)) stat[m.game_id].w++;
  });
  const sorted = Object.entries(stat)
    .filter(([, v]) => v.pl >= 1)
    .sort((a, b) => b[1].w / b[1].pl - a[1].w / a[1].pl);
  if (!sorted.length) return null;
  const g = games.find((x) => x.id === parseInt(sorted[0][0]));
  return g ? { name: g.name, rate: Math.round(sorted[0][1].w / sorted[0][1].pl * 100) } : null;
};

const bestAdversary = (pid) => {
  const vs = {};
  matches.forEach((m) => {
    if (!m.players?.some((p) => p.id === pid)) return;
    m.players.forEach((pp) => {
      if (pp.id === pid) return;
      if (!vs[pp.id]) vs[pp.id] = { pl: 0, w: 0 };
      vs[pp.id].pl++;
      if (m.winners?.includes(pid)) vs[pp.id].w++;
    });
  });
  const entries = Object.entries(vs).filter(([, v]) => v.pl >= 1);
  if (!entries.length) return null;
  entries.sort((a, b) => b[1].w / b[1].pl - a[1].w / a[1].pl);
  const best = players.find((x) => x.id === parseInt(entries[0][0]));
  const worst = entries.length > 1
    ? players.find((x) => x.id === parseInt(entries[entries.length - 1][0]))
    : null;
  return {
    best:  best  ? { name: best.name,  rate: Math.round(entries[0][1].w / entries[0][1].pl * 100) } : null,
    worst: worst ? { name: worst.name, rate: Math.round(entries[entries.length-1][1].w / entries[entries.length-1][1].pl * 100) } : null,
  };
};

// ═══════════════════════════════════════════════════════════════
// SUPABASE CLIENT
// ═══════════════════════════════════════════════════════════════

const sb = {
  async req(method, table, opts = {}) {
    const url = new URL(`${SB_URL}/rest/v1/${table}`);
    if (opts.select) url.searchParams.set('select', opts.select);
    if (opts.order)  url.searchParams.set('order',  opts.order);
    if (opts.eq) {
      Object.entries(opts.eq).forEach(([k, v]) => {
        const val = String(v).match(/^(eq|neq|gt|gte|lt|lte|like|ilike|is)\./)
          ? v : `eq.${v}`;
        url.searchParams.set(k, val);
      });
    }
    const headers = {
      apikey:        SB_KEY,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken || SB_KEY}`,
    };
    if (method === 'POST' || method === 'PATCH')
      headers['Prefer'] = 'return=representation';
    let res = await fetch(url, {
      method,
      headers,
      body: opts.body ? JSON.stringify(opts.body) : undefined,
    });
    if (!res.ok) {
      const text = await res.text();
      if (text.includes('JWT expired') && localStorage.getItem('gbs_refresh')) {
        const refreshed = await auth.refresh(localStorage.getItem('gbs_refresh'));
        if (refreshed?.access_token) {
          authToken = refreshed.access_token;
          saveSession(refreshed.access_token, refreshed.refresh_token, refreshed.expires_in);
          headers.Authorization = `Bearer ${authToken}`;
          res = await fetch(url, { method, headers, body: opts.body ? JSON.stringify(opts.body) : undefined });
          if (!res.ok) throw new Error(await res.text());
          return res.status === 204 ? null : res.json();
        }
      }
      throw new Error(text);
    }
    return res.status === 204 ? null : res.json();
  },
  get:   (t, o)        => sb.req('GET',    t, o || {}),
  post:  (t, body)     => sb.req('POST',   t, { body }),
  patch: (t, body, eq) => sb.req('PATCH',  t, { body, eq }),
  del:   (t, eq)       => sb.req('DELETE', t, { eq }),
};

// ═══════════════════════════════════════════════════════════════
// SUPABASE AUTH
// ═══════════════════════════════════════════════════════════════

const auth = {
  async signUp(email, pass) {
    const r = await fetch(`${SB_URL}/auth/v1/signup`, {
      method: 'POST',
      headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });
    const d = await r.json();
    if (!r.ok) throw new Error(d.error_description || d.msg || 'Erreur inscription');
    return d;
  },

  async signIn(email, pass) {
    const r = await fetch(`${SB_URL}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });
    const d = await r.json();
    if (!r.ok) throw new Error(d.error_description || d.msg || 'Email ou mot de passe incorrect');
    return d;
  },

  async refresh(token) {
    const r = await fetch(`${SB_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: token }),
    });
    return r.ok ? r.json() : null;
  },

  async signOut() {
    if (!authToken) return;
    await fetch(`${SB_URL}/auth/v1/logout`, {
      method: 'POST',
      headers: { apikey: SB_KEY, Authorization: `Bearer ${authToken}` },
    });
  },

  async getUser() {
    if (!authToken) return null;
    const r = await fetch(`${SB_URL}/auth/v1/user`, {
      headers: { apikey: SB_KEY, Authorization: `Bearer ${authToken}` },
    });
    return r.ok ? r.json() : null;
  },
};

// ─── Session storage ─────────────────────────────────────────

const saveSession = (token, refresh, expiresIn = 3600) => {
  localStorage.setItem('gbs_token',   token);
  localStorage.setItem('gbs_refresh', refresh || '');
  localStorage.setItem('gbs_expiry',  String(Date.now() + (expiresIn - 60) * 1000));
};

const clearSession = () => {
  localStorage.removeItem('gbs_token');
  localStorage.removeItem('gbs_refresh');
  localStorage.removeItem('gbs_expiry');
};

const isTokenExpired = () =>
  Date.now() > parseInt(localStorage.getItem('gbs_expiry') || '0');

// Auto-refresh every minute
setInterval(async () => {
  if (!authToken || !isTokenExpired()) return;
  const token = localStorage.getItem('gbs_refresh');
  if (!token) { clearSession(); authToken = null; currentUser = null; updateUserUI(); return; }
  const d = await auth.refresh(token).catch(() => null);
  if (d?.access_token) {
    authToken = d.access_token;
    saveSession(d.access_token, d.refresh_token, d.expires_in);
  } else {
    clearSession(); authToken = null; currentUser = null; updateUserUI();
  }
}, 60_000);

// ─── Mot de passe oublié / récupération ──────────────────────
// Brevo ne permet pas de désactiver le tracking des liens (qui « brûle »
// le jeton à usage unique) → on utilise un CODE à 6 chiffres, pas de lien.

// 1) Demande d'un code de réinitialisation par e-mail
async function doForgotPassword() {
  const pre   = (document.getElementById('l-email')?.value || '').trim();
  const email = prompt('Entre ton adresse e-mail pour recevoir un code de réinitialisation :', pre);
  if (!email) return;
  showLoading('Envoi du code…');
  try {
    await fetch(`${SB_URL}/auth/v1/recover`, {
      method: 'POST',
      headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  } catch (e) { /* on reste discret (anti-énumération) */ }
  hideLoading();
  openResetPasswordModal({ email });
  toast('Si un compte existe, un code vient d’être envoyé par e-mail 📩');
}

// 2) Repli : si on revient quand même via un lien (#access_token / #error)
function handleRecoveryRedirect() {
  const hash = location.hash || '';
  if (hash.length < 2) return;
  const p = new URLSearchParams(hash.slice(1));
  if (p.get('error')) {
    const desc = (p.get('error_description') || 'Lien invalide ou expiré.').replace(/\+/g, ' ');
    history.replaceState(null, '', location.pathname + location.search);
    toast('⚠️ ' + decodeURIComponent(desc), true);
    return;
  }
  if (p.get('type') === 'recovery' && p.get('access_token')) {
    const sess = {
      token:     p.get('access_token'),
      refresh:   p.get('refresh_token') || '',
      expiresIn: parseInt(p.get('expires_in') || '3600', 10),
    };
    history.replaceState(null, '', location.pathname + location.search);
    openResetPasswordModal({ sess });
  }
}

// 3) Modal « nouveau mot de passe » (code + mot de passe), construit en JS
//    opts.email → flux par code (on vérifie le code) ; opts.sess → flux par lien (déjà une session)
function openResetPasswordModal(opts = {}) {
  if (document.getElementById('reset-pw-overlay')) return;
  const byCode = !opts.sess;            // true = on demande un code
  const email  = opts.email || '';
  const ov = document.createElement('div');
  ov.id = 'reset-pw-overlay';
  ov.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;padding:20px';
  const inp = 'width:100%;box-sizing:border-box;padding:11px 12px;border-radius:9px;border:1px solid var(--border,#334155);background:var(--bg,#0f172a);color:inherit;font-size:14px;margin-bottom:10px';
  ov.innerHTML = `
    <div style="background:var(--surface,#1e293b);border:1px solid var(--border,#334155);border-radius:14px;padding:24px;max-width:380px;width:100%;color:var(--text,#e2e8f0);box-shadow:0 12px 48px rgba(0,0,0,.6)">
      <h2 style="margin:0 0 6px;font-size:18px">Réinitialiser le mot de passe</h2>
      <p style="margin:0 0 16px;font-size:13px;color:var(--text-muted,#94a3b8)">${byCode
        ? 'Entre le code à 6 chiffres reçu par e-mail' + (email ? ' à <b>' + esc(email) + '</b>' : '') + ', puis ton nouveau mot de passe.'
        : 'Choisis un nouveau mot de passe pour ton compte.'}</p>
      ${byCode ? `<input id="reset-code" inputmode="numeric" autocomplete="one-time-code" placeholder="Code à 6 chiffres" style="${inp};letter-spacing:3px">` : ''}
      <input id="reset-pw-input"  type="password" placeholder="Nouveau mot de passe"  autocomplete="new-password" style="${inp}">
      <input id="reset-pw-input2" type="password" placeholder="Confirme le mot de passe" autocomplete="new-password" style="${inp};margin-bottom:6px">
      <div id="reset-pw-err" style="display:none;color:#f87171;font-size:12px;margin-bottom:8px"></div>
      <button id="reset-pw-btn" style="width:100%;padding:11px;border:none;border-radius:9px;background:var(--accent,#4ade80);color:#06240f;font-weight:700;font-size:14px;cursor:pointer">Valider</button>
      <div id="reset-pw-cancel" style="text-align:center;margin-top:10px;font-size:12px;color:var(--text-muted,#94a3b8);cursor:pointer">Annuler</div>
    </div>`;
  document.body.appendChild(ov);
  const errEl = ov.querySelector('#reset-pw-err');
  const fail  = (m) => { hideLoading(); errEl.textContent = m; errEl.style.display = 'block'; };
  ov.querySelector('#reset-pw-cancel').onclick = () => ov.remove();
  ov.querySelector('#reset-pw-btn').onclick = async () => {
    const p1 = ov.querySelector('#reset-pw-input').value;
    const p2 = ov.querySelector('#reset-pw-input2').value;
    const code = byCode ? ov.querySelector('#reset-code').value.trim() : '';
    if (byCode && !code)  return fail('Entre le code reçu par e-mail.');
    if (p1.length < 6)    return fail('Mot de passe trop court (6 caractères min.).');
    if (p1 !== p2)        return fail('Les deux mots de passe ne correspondent pas.');
    showLoading('Mise à jour…');
    try {
      let token, refresh, expiresIn;
      if (byCode) {
        // Vérifie le code → ouvre une session
        const vr = await fetch(`${SB_URL}/auth/v1/verify`, {
          method: 'POST',
          headers: { apikey: SB_KEY, 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'recovery', email, token: code }),
        });
        const vd = await vr.json().catch(() => ({}));
        if (!vr.ok || !vd.access_token) return fail(vd.msg || vd.error_description || 'Code invalide ou expiré.');
        token = vd.access_token; refresh = vd.refresh_token; expiresIn = vd.expires_in;
      } else {
        token = opts.sess.token; refresh = opts.sess.refresh; expiresIn = opts.sess.expiresIn;
      }
      // Met à jour le mot de passe
      const ur = await fetch(`${SB_URL}/auth/v1/user`, {
        method: 'PUT',
        headers: { apikey: SB_KEY, Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: p1 }),
      });
      const ud = await ur.json().catch(() => ({}));
      if (!ur.ok) return fail(ud.msg || ud.error_description || 'Erreur lors de la mise à jour.');
      hideLoading();
      saveSession(token, refresh, expiresIn);   // connecte directement
      ov.remove();
      toast('Mot de passe mis à jour ✅');
      setTimeout(() => location.reload(), 900);
    } catch (e) { fail(e.message); }
  };
}

// 4) Injecte le lien « Mot de passe oublié ? » sous le champ mot de passe de connexion
function injectForgotLink() {
  const pass = document.getElementById('l-pass');
  if (!pass || document.getElementById('forgot-pw-link')) return;
  const link = document.createElement('div');
  link.id = 'forgot-pw-link';
  link.textContent = 'Mot de passe oublié ?';
  link.style.cssText = 'font-size:12px;color:var(--text-muted,#94a3b8);cursor:pointer;margin-top:8px;text-align:right;text-decoration:underline';
  link.onclick = doForgotPassword;
  (pass.parentElement || pass).appendChild(link);
}

// ═══════════════════════════════════════════════════════════════
// DATA LOADING
// ═══════════════════════════════════════════════════════════════

const safeGet = async (table, opts) => {
  try { return await sb.get(table, opts); }
  catch (e) { console.warn(`[loadAll] ${table}:`, e.message); return []; }
};

async function loadAll() {
  const uid = currentUser?.id;
  const [g, p, m, r] = await Promise.all([
    safeGet('games',   { order: 'name.asc' }),
    safeGet('players', { order: 'name.asc' }),
    safeGet('matches', { order: 'date.desc' }),
    safeGet('ratings', { select: 'game_id,score,user_id' }),
  ]);
  games   = g;
  players = p;
  matches = m;
  ratingsCache = {};
  r.forEach((row) => {
    if (!ratingsCache[row.game_id])
      ratingsCache[row.game_id] = { sum: 0, count: 0, myScore: null };
    ratingsCache[row.game_id].sum   += Number(row.score);
    ratingsCache[row.game_id].count += 1;
    if (uid && row.user_id === uid)
      ratingsCache[row.game_id].myScore = Number(row.score);
  });
}

async function loadSocial() {
  const [c, sg, ch, ev] = await Promise.all([
    safeGet('comments',    { order: 'created_at.asc' }),
    safeGet('suggestions', { order: 'created_at.desc' }),
    safeGet('challenges',  { order: 'created_at.desc' }),
    safeGet('events',      { order: 'event_date.asc' }),
  ]);
  comments = {};
  c.forEach((cm) => {
    if (!comments[cm.game_id]) comments[cm.game_id] = [];
    comments[cm.game_id].push(cm);
  });
  suggestions = sg;
  challenges  = ch;
  events      = ev;
  updateNotifBadge();
}

// ═══════════════════════════════════════════════════════════════
// UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════

// ─── Loading overlay ─────────────────────────────────────────

const showLoading = (msg = 'Chargement…') => {
  document.getElementById('loading').classList.add('show');
  document.getElementById('loading-text').textContent = msg;
};

const hideLoading = () =>
  document.getElementById('loading').classList.remove('show');

// ─── Toast ───────────────────────────────────────────────────

const toast = (msg, isError = false) => {
  const el = document.getElementById('toast');
  el.className = 'toast' + (isError ? ' error' : '');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
};

const toastErr = (msg) => toast(msg, true);

// ─── Modal helpers ───────────────────────────────────────────

const openModal  = (id) => document.getElementById(id).classList.add('open');
const closeModal = (id) => document.getElementById(id).classList.remove('open');

const bgClose = (e, id) => {
  if (e.target === document.getElementById(id)) closeModal(id);
};

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  [
    'modal-game', 'modal-match', 'modal-reco', 'modal-admin',
    'modal-profile', 'modal-challenge', 'modal-challenge-result',
    'modal-comments', 'modal-palmares', 'modal-suggestion', 'modal-event', 'modal-player-profile',
  ].forEach(closeModal);
});

// ─── Floating points indicator ───────────────────────────────

const showPtsGain = (val) => {
  const el  = document.createElement('div');
  const neg = String(val).startsWith('-');
  el.className  = 'pts-gain';
  el.textContent = (neg ? '' : '+') + val + ' pts';
  el.style.color = neg ? 'var(--danger)' : 'var(--gold)';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1300);
};

// ─── Notification badge ──────────────────────────────────────

const updateNotifBadge = () => {
  const myPlayer = currentUser
    ? players.find((p) => p.user_id === currentUser.id)
    : null;
  const count = myPlayer
    ? challenges.filter((c) => c.to_player_ids?.includes(myPlayer.id) && c.status === 'pending').length
    : 0;
  const badge = document.getElementById('notif-badge');
  if (badge) {
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
    badge.textContent   = count;
  }
};

// ═══════════════════════════════════════════════════════════════
// AUTH WALL
// ═══════════════════════════════════════════════════════════════

const showAuthWall = () => {
  document.getElementById('auth-wall').classList.add('show');
  switchAuthTab('login', document.querySelector('.auth-tab'));
};

const hideAuthWall = () =>
  document.getElementById('auth-wall').classList.remove('show');

const switchAuthTab = (tab, el) => {
  document.querySelectorAll('.auth-tab').forEach((t) => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('tab-login').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('tab-register').style.display = tab === 'register' ? 'block' : 'none';
  clearAuthMsg();
};

const clearAuthMsg = () => {
  ['auth-err', 'auth-ok', 'auth-err2'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
};

const showAuthErr = (msg) => {
  const el = document.getElementById('auth-err');
  el.textContent = msg; el.style.display = 'block';
};

// ─── Register step 1 ─────────────────────────────────────────

let pendingEmail = '';
let pendingPass  = '';

const doRegisterStep1 = () => {
  clearAuthMsg();
  const email = document.getElementById('r-email').value.trim();
  const pass  = document.getElementById('r-pass').value;
  const pass2 = document.getElementById('r-pass2').value;
  if (!email)             return showAuthErr('Email requis.');
  if (pass.length < 6)   return showAuthErr('Mot de passe trop court (6 car. min.).');
  if (pass !== pass2)    return showAuthErr('Les mots de passe ne correspondent pas.');
  pendingEmail = email;
  pendingPass  = pass;
  document.getElementById('auth-step-1').style.display = 'none';
  document.getElementById('auth-step-2').style.display = 'block';
  buildAuthColorPicker('#4ade80');
  setTimeout(() => document.getElementById('r-name').focus(), 100);
};

const backToStep1 = () => {
  document.getElementById('auth-step-2').style.display = 'none';
  document.getElementById('auth-step-1').style.display = 'block';
};

const buildAuthColorPicker = (selected) => {
  authSelColor = selected;
  document.getElementById('auth-cpicker').innerHTML = COLORS.map((c) =>
    `<div class="color-swatch" onclick="authSelCol('${c}')"
          style="background:${c};box-shadow:${c === selected
            ? '0 0 0 3px white,0 0 0 5px ' + c : 'none'}"></div>`
  ).join('');
};

const authSelCol = (c) => buildAuthColorPicker(c);

const doRegisterStep2 = async () => {
  const name = document.getElementById('r-name').value.trim();
  if (!name) {
    const el = document.getElementById('auth-err2');
    el.textContent = 'Pseudo requis.'; el.style.display = 'block';
    return;
  }
  showLoading('Création du compte…');
  try {
    const d = await auth.signUp(pendingEmail, pendingPass);
    authToken    = d.access_token;
    currentUser  = d.user || { id: d.user_id };
    await sb.post('profiles', { id: currentUser.id, name, color: authSelColor, email: pendingEmail, avatar: 1 });
    await sb.post('players',  { name, color: authSelColor, user_id: currentUser.id, avatar: 1 });
    currentProfile = { id: currentUser.id, name, color: authSelColor, email: pendingEmail };
    saveSession(d.access_token, d.refresh_token, d.expires_in);
    hideAuthWall();
    await Promise.all([loadAll(), loadSocial()]);
    updateUserUI();
    renderGames();
    toast(`Bienvenue ${name} ! 🎉`);
  } catch (e) {
    const el = document.getElementById('auth-err2');
    el.textContent = e.message; el.style.display = 'block';
  }
  hideLoading();
};

const doLogin = async () => {
  clearAuthMsg();
  const email = document.getElementById('l-email').value.trim();
  const pass  = document.getElementById('l-pass').value;
  if (!email || !pass) return showAuthErr('Email et mot de passe requis.');
  showLoading('Connexion…');
  try {
    const d = await auth.signIn(email, pass);
    authToken   = d.access_token;
    currentUser = d.user;
    saveSession(d.access_token, d.refresh_token, d.expires_in);
    const pr = await sb.get('profiles', { eq: { id: currentUser.id } }).catch(() => []);
    currentProfile = pr?.length ? pr[0] : null;
    hideAuthWall();
    await Promise.all([loadAll(), loadSocial()]);
    updateUserUI();
    renderGames();
    toast(`Bon retour ${currentProfile?.name || ''} !`);
  } catch (e) { showAuthErr(e.message); }
  hideLoading();
};

const doLogout = async () => {
  showLoading('Déconnexion…');
  await auth.signOut();
  authToken = null; currentUser = null; currentProfile = null;
  clearSession();
  closeUserMenu();
  updateUserUI();
  await Promise.all([loadAll(), loadSocial()]);
  renderGames();
  hideLoading();
  toast('Déconnecté');
};

// ─── User UI ─────────────────────────────────────────────────

const updateUserUI = () => {
  const loggedIn = !!currentUser;
  document.getElementById('login-btn').style.display  = loggedIn ? 'none' : 'flex';
  document.getElementById('user-chip').style.display  = loggedIn ? 'flex' : 'none';

  // Boutons flottants mobile : profil (connecté) vs connexion (déconnecté)
  const _mb = document.getElementById('mobile-profile-btn');
  if (_mb) _mb.style.display = loggedIn ? '' : 'none';
  let _loginFab = document.getElementById('mobile-login-fab');
  if (!_loginFab) {
    _loginFab = document.createElement('button');
    _loginFab.id = 'mobile-login-fab';
    _loginFab.className = 'mobile-login-fab';
    _loginFab.type = 'button';
    _loginFab.innerHTML = '🔑 Connexion';
    _loginFab.onclick = showAuthWall;
    document.body.appendChild(_loginFab);
  }
  _loginFab.style.display = loggedIn ? 'none' : '';

  // Admin lié au compte : le bouton n'est visible que pour le propriétaire (Tom)
  isOwner = !!(currentProfile && currentProfile.is_admin);
  if (!isOwner && isAdmin) isAdmin = false;
  const _lbl = document.getElementById('admin-btn-label');
  const _adminBtnEl = _lbl && (_lbl.closest('button') || _lbl.closest('a') || _lbl.parentElement);
  if (_adminBtnEl) _adminBtnEl.style.display = isOwner ? '' : 'none';

  if (loggedIn && currentProfile) {
    const bg  = currentProfile.color || '#4ade80';
    const av  = document.getElementById('user-av');
    const avImg = AVATARS.find(a => a.id === (currentProfile.avatar || 1));
    if (avImg) {
      av.innerHTML = `<img src="${avImg.src}" class="user-av-img" alt="">`;
      av.style.cssText = '';
    } else {
      av.innerHTML = ini(currentProfile.name);
      av.style.cssText = `background:${bg}22;color:${bg}`;
    }
    document.getElementById('user-name-chip').textContent = currentProfile.name;
    document.getElementById('um-name').textContent         = currentProfile.name;
    document.getElementById('um-email').textContent        = currentProfile.email || currentUser.email || '';
    // Bouton mobile profil
    const mobileBtn = document.getElementById('mobile-profile-btn');
    const mobileAv  = document.getElementById('mobile-av');
    if (mobileBtn && loggedIn) {
      mobileBtn.style.display = '';
      if (avImg && mobileAv) {
        mobileAv.innerHTML = `<img src="${avImg.src}" style="width:100%;height:100%;object-fit:cover">`;
      } else if (mobileAv) {
        mobileAv.style.cssText = `background:${bg}22;color:${bg};width:100%;height:100%;display:flex;align-items:center;justify-content:center`;
        mobileAv.textContent = ini(currentProfile.name);
      }
    } else if (mobileBtn) {
      mobileBtn.style.display = 'none';
    }
  }
  updateAddBtn();
};

const toggleUserMenu  = () => document.getElementById('user-menu').classList.toggle('open');
const closeUserMenu   = () => document.getElementById('user-menu').classList.remove('open');

document.addEventListener('click', (e) => {
  if (!e.target.closest('#user-chip') && !e.target.closest('#user-menu')) closeUserMenu();
});

// ─── Profile edit modal ──────────────────────────────────────


// ─── Ouvre le modal profil avec config ──────────────────────────
const _openProfileModal = (cfg) => {
  document.getElementById('modal-profile-title').textContent = cfg.title;
  document.getElementById('pe-save-btn').textContent = cfg.saveLabel;
  document.getElementById('modal-profile').dataset.targetPlayer = cfg.targetId || '';
  document.getElementById('modal-profile').dataset.isCreate     = cfg.isCreate ? '1' : '';

  const nameIn = document.getElementById('pe-name');
  nameIn.value = cfg.name;
  document.getElementById('pe-name-preview').textContent = cfg.name || 'Nouveau joueur';

  selColor  = cfg.color;
  selAvatar = cfg.avatar;

  buildProfileColorPicker(selColor);

  // Calcule les assets de rang pour la preview du cadre
  const _previewPts = (cfg.points != null) ? cfg.points : (currentProfile ? (currentProfile.points || 0) : 0);
  const _previewRank = RANKS.slice().reverse().find(r => _previewPts >= r.min) || RANKS[0];
  const _previewRA   = isMobile() ? RANK_ASSETS_MOBILE[_previewRank.key] : RANK_ASSETS_DESKTOP[_previewRank.key];
  peRankAssets = _previewRA || null;

  buildAvatarPicker();

  // Points
  const ptsRow   = document.getElementById('pe-points-row');
  const ptsInput = document.getElementById('pe-points');
  ptsRow.style.display = cfg.showPts ? 'block' : 'none';
  if (cfg.showPts) {
    ptsInput.value = cfg.points ?? 0;
    const updatePrev = () => {
      const rk = getRank(parseInt(ptsInput.value) || 0);
      document.getElementById('pe-rank-preview').innerHTML =
        `Rang : <span style="color:${rk.color};font-weight:500">${rankImg(rk,14)} ${rk.name}</span>`;
    };
    ptsInput.oninput = updatePrev;
    updatePrev();
  }

  // Email + mot de passe (création)
  document.getElementById('pe-email-row').style.display = cfg.showEmail ? 'block' : 'none';
  document.getElementById('pe-pass-row').style.display  = cfg.showPass  ? 'block' : 'none';
  if (cfg.showEmail) document.getElementById('pe-email').value = '';
  if (cfg.showPass)  document.getElementById('pe-pass').value  = '';

  openModal('modal-profile');
  setTimeout(() => nameIn.focus(), 50);
};

// openProfileEdit → voir _openProfileModal ci-dessus

let peRankAssets = null;
const openProfileEdit = () => {
  closeUserMenu();
  if (!currentProfile) return;
  _openProfileModal({
    title:     'Mon profil',
    name:      currentProfile.name  || '',
    color:     currentProfile.color || '#4ade80',
    avatar:    currentProfile.avatar || 1,
    points:    null,
    showPts:   false,
    showEmail: false,
    showPass:  false,
    targetId:  null,
    isCreate:  false,
    saveLabel: 'Enregistrer',
  });
};

const buildProfileColorPicker = (selected) => {
  selColor = selected;
  document.getElementById('pe-cpicker').innerHTML = COLORS.map((c) =>
    `<div class="color-swatch" onclick="peSelCol('${c}')"
          style="background:${c};box-shadow:${c === selected
            ? '0 0 0 3px white,0 0 0 5px ' + c : 'none'}"></div>`
  ).join('');
};

const peSelCol = (c) => buildProfileColorPicker(c);
const buildAvatarPicker = () => {
  const grid = document.getElementById('pe-avatar-grid');
  if (!grid) return;
  if (!AVATARS.length) {
    grid.innerHTML = '<p style="font-size:12px;color:var(--text-faint);grid-column:1/-1">Aucune illustration disponible.</p>';
    return;
  }
  // Grille auto selon nb d'avatars (max 5 par ligne)
  const cols = Math.min(AVATARS.length, 5);
  grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  grid.innerHTML = AVATARS.map(a => {
    const sel = selAvatar === a.id;
    return `<div onclick="selectAvatar(${a.id})"
               style="cursor:pointer;border-radius:50%;overflow:hidden;aspect-ratio:1;
                      border:3px solid ${sel ? 'var(--accent)' : 'transparent'};
                      box-shadow:${sel ? '0 0 0 2px var(--accent)' : 'none'};
                      transition:border-color .15s,box-shadow .15s;flex-shrink:0"
               data-avid="${a.id}" title="${a.label}">
             <img src="${a.src}" style="width:100%;height:100%;object-fit:cover;display:block">
           </div>`;
  }).join('');
  _updateAvatarPreview();
};

const _updateAvatarPreview = () => {
  const prev = document.getElementById('pe-avatar-preview');
  if (!prev) return;
  const av = AVATARS.find(a => a.id === selAvatar);
  if (av) {
    prev.style.cssText = `position:absolute;inset:0;border-radius:50%;overflow:hidden;
      background-image:url('${av.src}');background-size:cover;background-position:center;
      border:2px solid var(--accent)`;
    prev.innerHTML = '';
  } else {
    const bg = selColor || '#4ade80';
    prev.style.cssText = `position:absolute;inset:0;border-radius:50%;overflow:hidden;
      background:${bg}22;display:flex;align-items:center;justify-content:center;
      border:2px solid var(--border)`;
    prev.innerHTML = `<span style="font-size:24px;font-weight:700;color:${bg};
      font-family:'DM Serif Display',serif">${ini(document.getElementById('pe-name')?.value || '?')}</span>`;
  }
  // Affiche le cadre de rang si disponible
  const frameDiv = document.getElementById('pe-frame-preview');
  const frameImg = document.getElementById('pe-frame-img');
  if (frameDiv && frameImg && peRankAssets && peRankAssets.profile_frame) {
    frameImg.src = peRankAssets.profile_frame;
    frameDiv.style.display = 'block';
  } else if (frameDiv) {
    frameDiv.style.display = 'none';
  }
};

const selectAvatar = (id) => {
  selAvatar = id;
  const grid = document.getElementById('pe-avatar-grid');
  if (grid) {
    grid.querySelectorAll('[data-avid]').forEach((el) => {
      const elId = parseInt(el.dataset.avid);
      const sel  = elId === id;
      el.style.borderColor = sel ? 'var(--accent)' : 'transparent';
      el.style.boxShadow   = sel ? '0 0 0 2px var(--accent)' : 'none';
    });
  }
  _updateAvatarPreview();
};


const saveProfileEdit = async () => {
  const name     = document.getElementById('pe-name').value.trim();
  if (!name) { document.getElementById('pe-name').focus(); return; }
  const modal    = document.getElementById('modal-profile');
  const targetId = modal.dataset.targetPlayer;
  const isCreate = modal.dataset.isCreate === '1';

  showLoading(isCreate ? 'Création du compte…' : 'Enregistrement…');
  try {
    if (isCreate && isAdmin) {
      // ── Créer un joueur (admin) ──
      const email = document.getElementById('pe-email').value.trim();
      const pass  = document.getElementById('pe-pass').value.trim();
      const pts   = parseInt(document.getElementById('pe-points').value) || 0;

      if (!email) {
        // Email vide → joueur de test SANS compte (ne peut pas se connecter)
        await sb.post('players', { name, color: selColor, points: pts, avatar: selAvatar });
        toast(`Joueur de test créé : ${name} ✓`);
      } else {
        // Email rempli → compte complet (peut se connecter)
        if (pass.length < 6) { hideLoading(); toastErr('Mot de passe trop court (6 car. min.).'); return; }
        const adminToken = authToken;               // mémorise la session admin
        try {
          const d = await auth.signUp(email, pass);
          const uid = d.user?.id || d.user_id || d.id;
          if (!uid) throw new Error('Création du compte échouée (identifiant introuvable).');
          // Insère le profil + le joueur EN TANT QUE le nouveau compte,
          // sinon les règles de sécurité (RLS) bloquent l'insertion.
          if (d.access_token) authToken = d.access_token;
          await sb.post('profiles', { id: uid, name, color: selColor, email, avatar: selAvatar });
          await sb.post('players',  { name, color: selColor, user_id: uid, points: pts, avatar: selAvatar });
        } finally {
          authToken = adminToken;                   // restaure la session admin
        }
        toast(`Compte créé pour ${name} ✓`);
      }

    } else if (targetId && isAdmin) {
      // ── Modifier un joueur existant (admin) ──
      const pts = parseInt(document.getElementById('pe-points').value) || 0;
      await sb.patch('players', { name, color: selColor, points: pts, avatar: selAvatar }, { id: parseInt(targetId) });
      const pl = players.find((x) => x.id === parseInt(targetId));
      if (pl?.user_id) await sb.patch('profiles', { name, color: selColor, avatar: selAvatar }, { id: pl.user_id });
      toast(`${name} mis à jour — ${getRank(pts).name}`);

    } else if (currentUser) {
      // ── Modifier son propre profil ──
      await sb.patch('profiles', { name, color: selColor, avatar: selAvatar }, { id: currentUser.id });
      const myPlayer = players.find((p) => p.user_id === currentUser.id);
      if (myPlayer) await sb.patch('players', { name, color: selColor, avatar: selAvatar }, { id: myPlayer.id });
      currentProfile = { ...currentProfile, name, color: selColor, avatar: selAvatar };
      updateUserUI();
      toast('Profil mis à jour ✓');
    }

    modal.dataset.targetPlayer = '';
    modal.dataset.isCreate     = '';
    await loadAll();
    closeModal('modal-profile');
    renderPlayers();
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// ═══════════════════════════════════════════════════════════════
// ADMIN
// ═══════════════════════════════════════════════════════════════

const toggleAdmin = () => {
  if (!isOwner) return;                 // réservé au propriétaire du compte
  isAdmin = !isAdmin;
  updateAdminUI();
  toast(isAdmin ? 'Mode admin activé ⚡' : 'Mode admin désactivé');
};

// Ancien flux par mot de passe désactivé (conservé pour ne rien casser dans l'index)
const checkAdmin = () => closeModal('modal-admin');

const updateAdminUI = () => {
  document.getElementById('admin-badge').style.display = isAdmin ? '' : 'none';
  document.getElementById('admin-btn-label').textContent = isAdmin ? 'Quitter admin' : 'Admin';
  const nlTab = document.getElementById('tab-newsletter');
  if (nlTab) nlTab.style.display = isAdmin ? 'flex' : 'none';
  updateAddBtn();
  const cpBtn = document.getElementById('admin-create-player-btn');
  if (cpBtn) cpBtn.style.display = isAdmin ? 'flex' : 'none';
  if      (curPage === 'games')   renderGames();
  else if (curPage === 'players') renderPlayers();
  else if (curPage === 'history') renderHistory();
  else if (curPage === 'social')  renderCurrentSocialTab();
  else if (curPage === 'events')  renderEvents();
};

// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════

const showPage = (page, el) => {
  curPage = page;
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach((t) => t.classList.remove('active'));
  if (el) el.classList.add('active');
  syncMobileNav(page);
  updateAddBtn();
  if      (page === 'games')   renderGames();
  else if (page === 'players') renderPlayers();
  else if (page === 'history') renderHistory();
  else if (page === 'social')  loadSocial().then(() => renderCurrentSocialTab());
  else if (page === 'events')  loadSocial().then(renderEvents);
};

const syncMobileNav = (page) => {
  ['games', 'players', 'history', 'social', 'events'].forEach((p) => {
    document.getElementById(`mnav-${p}`)?.classList.toggle('active', p === page);
  });
};

const updateAddBtn = () => {
  const btn = document.getElementById('main-add-btn');
  if (!btn) return;
  if (curPage === 'social' || curPage === 'events' || curPage === 'players') {
    btn.style.display = 'none';
  } else if (curPage === 'games') {
    btn.style.display = isAdmin ? 'flex' : 'none';
  } else {
    btn.style.display = currentUser ? 'flex' : 'none';
  }
  const labels = {
    games:   'Ajouter un jeu',
    players: 'Ajouter un joueur',
    history: 'Enregistrer une partie',
  };
  const lbl = document.getElementById('add-btn-label');
  if (lbl) lbl.textContent = labels[curPage] || 'Ajouter';
  updateFab();
};

const updateFab = () => {
  const fab = document.getElementById('fab-btn');
  if (!fab) return;
  if (curPage === 'social' || curPage === 'events' || curPage === 'players') {
    fab.classList.add('fab-hidden');
    return;
  }
  fab.classList.remove('fab-hidden');
  const isCeSoir = curPage === 'games' && !isAdmin;
  if (isCeSoir) {
    fab.title = 'Ce soir ?';
    fab.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
        12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  } else {
    fab.title = curPage === 'players' ? 'Ajouter un joueur' : 'Enregistrer une partie';
    fab.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5"  y1="12" x2="19" y2="12"/></svg>`;
  }
};

const handleFab = () => {
  if (curPage === 'games')   { isAdmin ? openGameModal() : openRecoModal(); return; }
  if (!currentUser)          { showAuthWall(); return; }
  if (curPage === 'players') openProfileEdit();
  else                       openMatchModal();
};

const handleAddBtn = () => {
  if (curPage === 'games' && isAdmin) { openGameModal(); return; }
  if (currentUser) {
    if (curPage === 'players') openProfileEdit();
    else                       openMatchModal();
  }
};

// ═══════════════════════════════════════════════════════════════
// STAR RATING BUILDER
// ═══════════════════════════════════════════════════════════════

const buildStars = (gid, myR) =>
  [1,2,3,4,5,6,7,8,9,10].map((i) => {
    const full = myR >= i;
    const half = !full && myR >= i - 0.5;
    const stroke = (full || half) ? '#fbbf24' : 'var(--text-faint)';
    return `<span class="half-star-wrap" title="Noter ${i - 0.5} ou ${i}/10">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="lh${gid}_${i}">
          <rect x="0" y="0" width="12" height="24"/>
        </clipPath></defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
          12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="${stroke}" stroke-width="1.5" fill="${full ? '#fbbf24' : 'none'}"/>
        ${half ? `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
          12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="#fbbf24" clip-path="url(#lh${gid}_${i})"/>` : ''}
      </svg>
      <span class="half-star-left"  onclick="rateGame(${gid},${i - 0.5})"></span>
      <span class="half-star-right" onclick="rateGame(${gid},${i})"></span>
    </span>`;
  }).join('');

const buildStarsReadOnly = (gid, avg) =>
  [1,2,3,4,5,6,7,8,9,10].map((i) => {
    const full = avg >= i;
    const half = !full && avg >= i - 0.5;
    const stroke = (full || half) ? '#fbbf24' : 'var(--text-faint)';
    return `<span class="half-star-wrap" style="cursor:default">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="ro${gid}_${i}">
          <rect x="0" y="0" width="12" height="24"/>
        </clipPath></defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
          12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="${stroke}" stroke-width="1.5" fill="${full ? '#fbbf24' : 'none'}"/>
        ${half ? `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
          12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="#fbbf24" clip-path="url(#ro${gid}_${i})"/>` : ''}
      </svg>
    </span>`;
  }).join('');

// ═══════════════════════════════════════════════════════════════
// COLLECTION PAGE
// ═══════════════════════════════════════════════════════════════

const renderGames = () => {
  renderGStats();
  renderGrid();
};

// ─── Stats bar ───────────────────────────────────────────────

const renderGStats = () => {
  const own  = games.filter((g) => g.status === 'own');
  const wish = games.filter((g) => g.status === 'wish');
  const durMin = { court: 20, moyen: 60, long: 120 };
  const totMin = matches.reduce((s, m) => {
    const g = games.find((x) => x.id === m.game_id);
    return s + (g ? durMin[g.duration] || 60 : 60);
  }, 0);
  let topGame = null; let topN = 0;
  own.forEach((g) => { const t = timesPlayed(g.id); if (t > topN) { topN = t; topGame = g; } });

  const top3 = players
    .filter((p) => (p.points || 0) > 0)
    .sort((a, b) => (b.points || 0) - (a.points || 0))
    .slice(0, 3);

  const top3Html = top3.length
    ? top3.map((p) => {
        const rk = getRank(p.points || 0);
        return `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">
          <span style="font-size:12px;color:var(--text);font-weight:500;flex:1;
                       white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
            ${esc(p.name)}
          </span>
          ${rankImg(rk, 16)}
          <span style="font-size:11px;color:var(--text-faint)">${p.points} pts</span>
        </div>`;
      }).join('')
    : '<span style="font-size:12px;color:var(--text-faint)">Aucun joueur classé</span>';

  const valOwn = own.reduce((s, g) => {
    const extV = (g.extensions || []).reduce((a, e) => a + (e.price || 0), 0);
    return s + (g.price || 0) + extV;
  }, 0);
  const valWish = wish.reduce((s, g) => s + (g.price || 0), 0);

  document.getElementById('stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Possédés</div>
      <div class="stat-value">${own.length}</div>
      <div class="stat-sub">${wish.length} souhaits</div>
    </div>
    ${isAdmin ? `
    <div class="stat-card">
      <div class="stat-label">Valeur collection</div>
      <div class="stat-value">${Math.round(valOwn)}&nbsp;€</div>
      <div class="stat-sub">jeux + extensions</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Budget souhaits</div>
      <div class="stat-value">${Math.round(valWish)}&nbsp;€</div>
      <div class="stat-sub">${wish.length} jeux</div>
    </div>` : ''}
    <div class="stat-card">
      <div class="stat-label">Jeu le + joué</div>
      <div class="stat-value" style="font-size:16px">
        ${topGame ? esc(topGame.name) : '—'}
      </div>
      <div class="stat-sub">
        ${topGame ? topN + ' partie' + (topN > 1 ? 's' : '') : '—'}
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Temps estimé</div>
      <div class="stat-value">${Math.round(totMin / 60)}h</div>
      <div class="stat-sub">${matches.length} partie${matches.length > 1 ? 's' : ''}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">🏆 Top joueurs</div>
      <div style="margin-top:8px">${top3Html}</div>
    </div>`;
};

// ─── Game card builder ───────────────────────────────────────

const buildRatingRow = (g) => {
  const avg  = avgRating(g);
  const cnt  = ratingCount(g);
  const myR  = myRating(g);
  const avgSpan = avg > 0
    ? `<span style="color:var(--gold);font-weight:500">${avg.toFixed(1)}</span>/10
       <span style="color:var(--text-faint)">(${cnt})</span>`
    : '<span style="color:var(--text-faint)">Non noté</span>';
  const removeBtn = currentUser && myR > 0
    ? `<button onclick="removeRating(${g.id})" title="Retirer ma note"
               style="background:none;border:none;color:var(--text-faint);
                      cursor:pointer;font-size:16px;line-height:1;padding:2px">✕</button>`
    : '';
  const lockBtn = !currentUser
    ? `<button onclick="showAuthWall()" title="Connexion pour noter"
               style="margin-left:auto;background:none;border:none;color:var(--text-faint);
                      cursor:pointer;font-size:11px;display:flex;align-items:center;
                      gap:3px;padding:2px 6px;border-radius:4px;border:1px solid var(--border)">
         🔒 Noter
       </button>`
    : '';
  const adminRmvBtn = isAdmin && cnt > 0
    ? `<button onclick="removeAllRatings(${g.id})" title="Supprimer toutes les notes"
               style="background:none;border:none;color:var(--danger);cursor:pointer;
                      font-size:11px;padding:2px 6px;border-radius:4px;
                      border:1px solid var(--border-strong)">
         🗑 Notes (${cnt})
       </button>`
    : '';
  const stars = currentUser
    ? buildStars(g.id, myR)
    : buildStarsReadOnly(g.id, avg);
  return `<div class="stars-row">
    ${stars}
    <span class="avg-r" style="margin-left:4px">${avgSpan}</span>
    ${removeBtn}${lockBtn}${adminRmvBtn}
  </div>`;
};

const buildMiniPalmares = (g) => {
  const gMatches = matches.filter((m) => m.game_id === g.id);
  if (!gMatches.length) return '';
  const stat = {};
  gMatches.forEach((m) => {
    (m.players || []).forEach((pp) => {
      if (!stat[pp.id]) stat[pp.id] = { pl: 0, w: 0 };
      stat[pp.id].pl++;
      if (m.winners?.includes(pp.id)) stat[pp.id].w++;
    });
  });
  const ranked = Object.entries(stat)
    .map(([pid, s]) => ({ pl: players.find((x) => x.id === parseInt(pid)), ...s }))
    .filter((x) => x.pl && x.pl.name)
    .sort((a, b) => b.w / b.pl - a.w / a.pl)
    .slice(0, 3);
  if (!ranked.length) return '';
  const medals = ['🥇', '🥈', '🥉'];
  return `<div style="border-top:1px solid var(--border);padding-top:7px;margin-top:6px">
    <div style="font-size:10px;color:var(--text-faint);text-transform:uppercase;
                letter-spacing:.05em;margin-bottom:5px">
      🏆 Palmarès (${gMatches.length} partie${gMatches.length > 1 ? 's' : ''})
    </div>
    ${ranked.map((r, i) => {
      const bg = r.pl.color || '#4ade80';
      return `<div style="display:flex;align-items:center;gap:7px;font-size:12px;margin-bottom:3px">
        <span>${medals[i]}</span>
        <span style="display:inline-flex;align-items:center;justify-content:center;
                     width:20px;height:20px;border-radius:50%;
                     background:${bg}22;color:${bg};font-size:10px;font-weight:600">
          ${ini(r.pl.name)}
        </span>
        <span style="flex:1;color:var(--text-muted)">${esc(r.pl.name)}</span>
        <span style="color:var(--accent);font-weight:500">${Math.round(r.w / r.pl * 100)}%</span>
        <span style="color:var(--text-faint);font-size:11px">${r.w}V/${r.pl}p</span>
      </div>`;
    }).join('')}
  </div>`;
};

const buildExtList = (g) => {
  const exts = g.extensions || [];
  const extAddBtn = isAdmin
    ? `<button class="btn-ext-add" onclick="toggleExtForm(${g.id})">+ Ajouter</button>`
    : '';
  const extItems = exts.map((e, i) => {
    const own = (e.status || 'own') === 'own';
    return `<div class="ext-item"
                 style="background:${own ? 'var(--accent-light)' : 'var(--wish-light)'};
                        color:${own ? 'var(--accent-text)' : 'var(--wish-text)'};
                        border:1px solid ${own ? '#2d5a3d' : '#5a3410'}">
      <span class="ext-item-name">${esc(e.name)}</span>
      ${e.price ? `<span class="ext-item-price"
                        style="color:${own ? 'var(--accent)' : 'var(--wish)'}">
                     ${fmtPrice(e.price)}
                   </span>` : ''}
      ${isAdmin ? `<button class="btn-ext-del" onclick="delExt(${g.id},${i})">×</button>` : ''}
    </div>`;
  }).join('');
  const inlineForm = isAdmin
    ? `<div id="ef-${g.id}" style="display:none">
         <div class="ext-inline-form">
           <input type="text" id="en-${g.id}" placeholder="Nom">
           <input type="number" id="ep-${g.id}" placeholder="€" min="0" step="0.01" style="max-width:65px">
           <select id="es-${g.id}"
                   style="height:26px;padding:0 20px 0 6px;border:1px solid var(--border);
                          border-radius:6px;background:var(--border-strong);font-family:inherit;
                          font-size:11px;color:var(--text);outline:none;cursor:pointer;
                          appearance:none">
             <option value="own">✓</option>
             <option value="wish">♡</option>
           </select>
           <button class="btn-ext-ok" onclick="addExt(${g.id})">OK</button>
         </div>
       </div>`
    : '';
  return `<div class="ext-section">
    <div class="ext-hdr">
      <span class="ext-lbl">Extensions${exts.length ? ` (${exts.length})` : ''}</span>
      ${extAddBtn}
    </div>
    ${exts.length ? `<div class="ext-list">${extItems}</div>` : ''}
    ${inlineForm}
  </div>`;
};

const buildGameCard = (g) => {
  const tp    = timesPlayed(g.id);
  const exts  = g.extensions || [];
  const extV  = exts.reduce((s, e) => s + (e.price || 0), 0);
  const pMin  = g.pmin === g.pmax
    ? `${g.pmin} joueur${g.pmin > 1 ? 's' : ''}`
    : `${g.pmin}–${g.pmax} joueurs`;

  const extraBtns = `<div style="display:flex;gap:8px;margin-top:6px">
    <button class="palmares-card-btn" onclick="openComments(${g.id})">
      💬 Avis ${(comments[g.id] || []).length > 0 ? '(' + comments[g.id].length + ')' : ''}
    </button>
  </div>`;

  const adminActions = isAdmin
    ? `<div class="card-footer">
         <button class="btn-icon" onclick="openGameModal(${g.id})">${SVG_EDIT} Modifier</button>
         <button class="btn-icon danger" onclick="delGame(${g.id})">${SVG_TRASH} Supprimer</button>
       </div>`
    : '';

  return `<div class="game-card" id="gc-${g.id}">
    <div class="game-card-bg"></div>
    <div class="game-card-content">
      <div class="card-header">
        <div class="game-name">${esc(g.name)}</div>
        <span class="badge ${g.status === 'own' ? 'badge-own' : 'badge-wish'}">
          ${g.status === 'own' ? 'Possédé' : 'Souhait'}
        </span>
      </div>
      ${buildRatingRow(g)}
      <div class="card-pills">
        <span class="pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          ${pMin}
        </span>
        <span class="pill">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${durLabel(g.duration)}
        </span>
        ${tp > 0 ? `<span class="pill">🎮 ${tp}×</span>` : ''}
      </div>
      ${isAdmin && g.price
        ? `<div class="card-price">${fmtPrice(g.price)}${extV > 0
            ? ` <span style="font-size:11px;color:var(--text-faint)">+ ${fmtPrice(extV)} ext.</span>`
            : ''}</div>`
        : ''}
      ${g.link
        ? `<div class="card-link">
             <a href="${esc(g.link)}" target="_blank" rel="noopener">
               <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                 <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
               </svg>
               Voir en boutique
             </a>
           </div>`
        : ''}
      ${g.notes ? `<div class="card-notes">${esc(g.notes)}</div>` : ''}
      ${buildExtList(g)}
      ${buildMiniPalmares(g)}
      ${extraBtns}
      ${adminActions}
    </div>
  </div>`;
};

// ─── Grid renderer ───────────────────────────────────────────

const renderGrid = () => {
  const q    = document.getElementById('search').value.toLowerCase();
  const fp   = document.getElementById('fp').value;
  const fd   = document.getElementById('fd').value;
  const sort = document.getElementById('fsort').value;

  let list = games.filter((g) => {
    if (curTab === 'own'  && g.status !== 'own')  return false;
    if (curTab === 'wish' && g.status !== 'wish') return false;
    if (q && !g.name.toLowerCase().includes(q))  return false;
    if (fp) {
      const n = parseInt(fp);
      if (n === 4) { if (g.pmax < 4) return false; }
      else if (g.pmin > n || g.pmax < n) return false;
    }
    if (fd && g.duration !== fd) return false;
    return true;
  });

  list.sort((a, b) => {
    if (sort === 'name')       return a.name.localeCompare(b.name, 'fr');
    if (sort === 'rating')     return avgRating(b) - avgRating(a);
    if (sort === 'played')     return timesPlayed(b.id) - timesPlayed(a.id);
    if (sort === 'price-asc')  return (a.price || 0) - (b.price || 0);
    return (b.price || 0) - (a.price || 0);
  });

  document.getElementById('count').textContent =
    list.length === 0 ? 'Aucun jeu'
    : list.length === 1 ? '1 jeu'
    : `${list.length} jeux`;

  if (!list.length) {
    document.getElementById('grid').innerHTML =
      '<div class="empty"><div class="empty-icon">🎲</div><p>Aucun jeu ne correspond.</p></div>';
    return;
  }

  document.getElementById('grid').innerHTML = list.map(buildGameCard).join('');

  // Trigger BGG image fetch for visible cards
  setTimeout(() => {
    list.forEach((g) => {
      const card = document.getElementById(`gc-${g.id}`);
      if (card) applyGameImage(card, g);
    });
  }, 100);
};

['search', 'fp', 'fd', 'fsort'].forEach((id) => {
  document.getElementById(id)?.addEventListener('input',  renderGrid);
  document.getElementById(id)?.addEventListener('change', renderGrid);
});

const setTab = (t, el) => {
  curTab = t;
  document.querySelectorAll('.tab').forEach((x) => x.classList.remove('active'));
  el.classList.add('active');
  renderGrid();
};

// ─── Game image (BGG fallback) ───────────────────────────────

const bggCache = {};

const fetchBGGImage = async (name) => {
  if (bggCache[name] !== undefined) return bggCache[name];
  bggCache[name] = null;
  try {
    const r = await fetch(
      `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(name)}&type=boardgame&exact=1`
    );
    const doc = new DOMParser().parseFromString(await r.text(), 'text/xml');
    let id = doc.querySelector('item')?.getAttribute('id');
    if (!id) {
      const r2  = await fetch(
        `https://boardgamegeek.com/xmlapi2/search?query=${encodeURIComponent(name)}&type=boardgame`
      );
      const d2  = new DOMParser().parseFromString(await r2.text(), 'text/xml');
      id = d2.querySelector('item')?.getAttribute('id');
    }
    if (!id) return null;
    const r3  = await fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${id}`);
    const d3  = new DOMParser().parseFromString(await r3.text(), 'text/xml');
    const img = d3.querySelector('image')?.textContent?.trim();
    const url = img ? (img.startsWith('http') ? img : 'https:' + img) : null;
    bggCache[name] = url;
    return url;
  } catch { bggCache[name] = null; return null; }
};

const applyGameImage = (cardEl, game) => {
  const bg = cardEl.querySelector('.game-card-bg');
  if (!bg) return;
  if (game.image_url) { bg.style.backgroundImage = `url(${game.image_url})`; return; }
  fetchBGGImage(game.name).then((url) => {
    if (url) bg.style.backgroundImage = `url(${url})`;
  });
};

// ─── Rating actions ──────────────────────────────────────────

const rateGame = async (gid, val) => {
  if (!currentUser) { showAuthWall(); return; }
  try {
    const existing = ratingsCache[gid]?.myScore;
    if (existing !== null && existing !== undefined) {
      await sb.req('DELETE', 'ratings', { eq: { game_id: `eq.${gid}`, user_id: `eq.${currentUser.id}` } });
    }
    await sb.post('ratings', { game_id: gid, user_id: currentUser.id, score: val });
    await loadAll();
    renderGrid();
    toast(`Note ${val}/10 ✓`);
  } catch (e) { toastErr('Erreur : ' + e.message); }
};

const removeRating = async (gid) => {
  if (!currentUser) return;
  try {
    await sb.req('DELETE', 'ratings', { eq: { game_id: `eq.${gid}`, user_id: `eq.${currentUser.id}` } });
    await loadAll();
    renderGrid();
    toast('Note retirée');
  } catch (e) { toastErr('Erreur : ' + e.message); }
};

const removeAllRatings = async (gid) => {
  if (!isAdmin) return;
  const g = games.find((x) => x.id === gid);
  if (!confirm(`Supprimer toutes les notes de "${g.name}" ?`)) return;
  try {
    await sb.req('DELETE', 'ratings', { eq: { game_id: `eq.${gid}` } });
    await loadAll();
    renderGrid();
    toast('Toutes les notes supprimées');
  } catch (e) { toastErr('Erreur : ' + e.message); }
};

// ─── Game modal ──────────────────────────────────────────────

const renderModalExts = () => {
  document.getElementById('mg-ext-list').innerHTML = modalExts.length
    ? modalExts.map((e, i) => {
        const own = (e.status || 'own') === 'own';
        const badge = `<span style="font-size:10px;padding:1px 6px;border-radius:10px;
          background:${own ? 'var(--accent-light)' : 'var(--wish-light)'};
          color:${own ? 'var(--accent-text)' : 'var(--wish-text)'}">
          ${own ? 'Possédée' : 'Souhait'}</span>`;
        return `<div class="modal-ext-row">
          <span class="modal-ext-name">${esc(e.name)}</span>
          ${badge}
          ${e.price ? `<span class="modal-ext-price">${fmtPrice(e.price)}</span>` : ''}
          <button class="modal-ext-del" onclick="modalDelExt(${i})">×</button>
        </div>`;
      }).join('')
    : '';
};

const modalAddExt = () => {
  const n  = document.getElementById('mg-ext-name').value.trim();
  const p  = document.getElementById('mg-ext-price').value;
  const st = document.getElementById('mg-ext-status').value;
  if (!n) return;
  modalExts.push({ name: n, price: parseFloat(p) || 0, status: st });
  document.getElementById('mg-ext-name').value  = '';
  document.getElementById('mg-ext-price').value = '';
  renderModalExts();
};

const modalDelExt = (i) => { modalExts.splice(i, 1); renderModalExts(); };

const openGameModal = (id) => {
  if (!isAdmin) return;
  editGameId = id || null;
  const g = id ? games.find((x) => x.id === id) : null;
  document.getElementById('mg-title').textContent = id ? 'Modifier le jeu' : 'Ajouter un jeu';
  document.getElementById('fg-name').value   = g?.name   || '';
  document.getElementById('fg-status').value = g?.status || 'own';
  document.getElementById('fg-price').value  = g?.price  || '';
  document.getElementById('fg-pmin').value   = g?.pmin   || '';
  document.getElementById('fg-pmax').value   = g?.pmax   || '';
  document.getElementById('fg-dur').value    = g?.duration || 'moyen';
  document.getElementById('fg-link').value   = g?.link   || '';
  document.getElementById('fg-notes').value  = g?.notes  || '';
  const imgUrl = g?.image_url || '';
  document.getElementById('fg-image').value  = imgUrl;
  setImagePreview(imgUrl);
  modalExts = g ? JSON.parse(JSON.stringify(g.extensions || [])) : [];
  document.getElementById('mg-ext-name').value  = '';
  document.getElementById('mg-ext-price').value = '';
  renderModalExts();
  openModal('modal-game');
  setTimeout(() => document.getElementById('fg-name').focus(), 50);
};

const saveGame = async () => {
  if (!isAdmin) return;
  const name = document.getElementById('fg-name').value.trim();
  if (!name) { document.getElementById('fg-name').focus(); return; }
  const pmin = parseInt(document.getElementById('fg-pmin').value) || 1;
  const pmax = parseInt(document.getElementById('fg-pmax').value) || pmin;
  const data = {
    name,
    status:    document.getElementById('fg-status').value,
    price:     parseFloat(document.getElementById('fg-price').value) || 0,
    pmin,
    pmax:      Math.max(pmin, pmax),
    duration:  document.getElementById('fg-dur').value,
    link:      document.getElementById('fg-link').value.trim(),
    notes:     document.getElementById('fg-notes').value.trim(),
    extensions: modalExts,
    image_url: document.getElementById('fg-image').value.trim(),
  };
  showLoading('Enregistrement…');
  try {
    if (editGameId) {
      await sb.patch('games', data, { id: editGameId });
      toast('Jeu modifié ✓');
    } else {
      data.ratings = [];
      await sb.post('games', data);
      toast('Jeu ajouté ✓');
    }
    await loadAll();
    closeModal('modal-game');
    renderGames();
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

const delGame = async (id) => {
  if (!isAdmin) return;
  const g = games.find((x) => x.id === id);
  if (!confirm(`Supprimer "${g.name}" ?`)) return;
  showLoading('Suppression…');
  try {
    await sb.del('games', { id });
    await loadAll();
    renderGames();
    toast('Jeu supprimé');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// ─── Extension inline actions ─────────────────────────────────

const toggleExtForm = (gid) => {
  const f = document.getElementById(`ef-${gid}`);
  if (!f) return;
  f.style.display = f.style.display === 'none' ? 'block' : 'none';
  if (f.style.display === 'block') document.getElementById(`en-${gid}`).focus();
};

const addExt = async (gid) => {
  const n  = document.getElementById(`en-${gid}`);
  const p  = document.getElementById(`ep-${gid}`);
  const s  = document.getElementById(`es-${gid}`);
  const name = n.value.trim();
  if (!name) return;
  const g = games.find((x) => x.id === gid);
  if (!g.extensions) g.extensions = [];
  g.extensions.push({ name, price: parseFloat(p.value) || 0, status: s?.value || 'own' });
  try {
    await sb.patch('games', { extensions: g.extensions }, { id: gid });
    n.value = ''; p.value = '';
    renderGrid();
    toast('Extension ajoutée ✓');
  } catch (e) { toastErr(e.message); }
};

const delExt = async (gid, i) => {
  const g = games.find((x) => x.id === gid);
  g.extensions.splice(i, 1);
  try {
    await sb.patch('games', { extensions: g.extensions }, { id: gid });
    renderGrid();
  } catch (e) { toastErr(e.message); }
};

// ─── Image upload ─────────────────────────────────────────────

const setImagePreview = (url) => {
  const prev = document.getElementById('fg-image-preview');
  const img  = document.getElementById('fg-image-img');
  if (!prev || !img) return;
  if (url) { prev.style.display = 'flex'; img.src = url; }
  else     { prev.style.display = 'none'; img.src = ''; }
};

const clearImage = () => {
  document.getElementById('fg-image').value = '';
  const fi = document.getElementById('fg-image-file');
  if (fi) fi.value = '';
  setImagePreview('');
};

document.addEventListener('input', (e) => {
  if (e.target.id === 'fg-image') setImagePreview(e.target.value.trim());
});

const uploadGameImage = async (input) => {
  const file = input.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/'))  { toastErr('Fichier invalide — image uniquement.'); return; }
  if (file.size > 5 * 1024 * 1024)     { toastErr('Image trop lourde (max 5 Mo).'); return; }
  const prog = document.getElementById('fg-upload-progress');
  if (prog) prog.style.display = 'block';
  setImagePreview(URL.createObjectURL(file));
  try {
    const ext      = file.name.split('.').pop().toLowerCase();
    const base     = (document.getElementById('fg-name').value.trim() || 'game')
      .replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const filename = `${base}-${Date.now()}.${ext}`;
    const res = await fetch(`${SB_URL}/storage/v1/object/game-images/${filename}`, {
      method:  'POST',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${authToken || SB_KEY}`,
        'Content-Type': file.type,
        'x-upsert':     'true',
      },
      body: file,
    });
    if (!res.ok) throw new Error(await res.text());
    const publicUrl = `${SB_URL}/storage/v1/object/public/game-images/${filename}`;
    document.getElementById('fg-image').value = publicUrl;
    setImagePreview(publicUrl);
    toast('Image uploadée ✓');
  } catch (e) { toastErr('Erreur upload : ' + e.message); clearImage(); }
  if (prog) prog.style.display = 'none';
};

// ─── Reco modal ───────────────────────────────────────────────

const openRecoModal = () => {
  document.getElementById('reco-box').style.display  = 'none';
  document.getElementById('reco-none').style.display = 'none';
  openModal('modal-reco');
};

const getReco = () => {
  const np  = parseInt(document.getElementById('rp').value) || 0;
  const dur = document.getElementById('rd').value;
  let pool  = games.filter((g) => g.status === 'own');
  if (np > 0)  pool = pool.filter((g) => g.pmin <= np && g.pmax >= np);
  if (dur)     pool = pool.filter((g) => g.duration === dur);
  document.getElementById('reco-box').style.display  = 'none';
  document.getElementById('reco-none').style.display = 'none';
  if (!pool.length) { document.getElementById('reco-none').style.display = 'block'; return; }
  const g  = pool[Math.floor(Math.random() * pool.length)];
  const avg = avgRating(g);
  const tp  = timesPlayed(g.id);
  document.getElementById('reco-name').textContent = g.name;
  document.getElementById('reco-meta').innerHTML =
    `${g.pmin === g.pmax ? g.pmin + ' joueur' + (g.pmin > 1 ? 's' : '') : g.pmin + '–' + g.pmax + ' joueurs'}`
    + ` · ${durLabel(g.duration)}`
    + (avg > 0 ? ` · ★ ${avg.toFixed(1)}/10` : '')
    + (tp > 0  ? ` · joué ${tp}×` : '');
  document.getElementById('reco-box').style.display = 'block';
};

// ═══════════════════════════════════════════════════════════════
// PLAYERS PAGE
// ═══════════════════════════════════════════════════════════════

const renderPlayers = () => {
  const cpBtn = document.getElementById('admin-create-player-btn');
  if (cpBtn) cpBtn.style.display = isAdmin ? 'flex' : 'none';
  renderPlayerStats();
  renderPlayerGrid();
};

const renderPlayerStats = () => {
  const best = players
    .map((p) => { const s = playerStats(p.id); return { ...p, rate: s.played > 0 ? Math.round(s.won / s.played * 100) : 0, played: s.played }; })
    .filter((p) => p.played > 0)
    .sort((a, b) => b.rate - a.rate)[0] || null;

  document.getElementById('pstats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Joueurs</div>
      <div class="stat-value">${players.length}</div>
      <div class="stat-sub">inscrits</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Parties jouées</div>
      <div class="stat-value">${matches.length}</div>
      <div class="stat-sub">au total</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Meilleur joueur</div>
      <div class="stat-value" style="font-size:18px">${best ? esc(best.name) : '—'}</div>
      <div class="stat-sub">${best ? best.rate + '% victoires' : ''}</div>
    </div>
    ${isAdmin ? `
    <div class="stat-card" style="justify-content:center;align-items:center;text-align:center">
      <button id="recalc-elo-btn" class="btn-icon" onclick="recalcAllElo()" style="white-space:nowrap">&#9876;&#65039; Recalculer l'Elo</button>
      <div class="stat-sub" style="margin-top:6px">rejoue tout l'historique</div>
    </div>` : ''}`;
};

// Recalcule TOUTES les notes Elo en rejouant l'historique complet dans l'ordre
// chronologique (admin). Même logique que le script de backfill : tout le monde
// repart de 1000, le facteur K reflète l'expérience au moment de chaque partie.
const recalcAllElo = async () => {
  if (!isAdmin) return;
  const ok = confirm(
    `Recalculer toutes les notes Elo depuis l'historique complet ?\n\n` +
    `Tout le monde repart de 1000, puis les ${matches.length} parties sont ` +
    `rejouées dans l'ordre. Les notes Elo actuelles seront écrasées.`
  );
  if (!ok) return;

  const btn = document.getElementById('recalc-elo-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Calcul en cours…'; }

  try {
    // Ordre chronologique : date, puis id pour départager une même journée.
    const ordered = [...matches].sort((a, b) => {
      const da = String(a.date || ''), db = String(b.date || '');
      if (da !== db) return da < db ? -1 : 1;
      return (a.id || 0) - (b.id || 0);
    });

    const elo  = {};   // id → note courante
    const gp   = {};   // id → parties jouées AVANT la partie en cours
    const seen = new Set();
    const ratingOf = (id) => (id in elo ? elo[id] : ELO_BASE);

    for (const m of ordered) {
      const ids = [...new Set((m.players || []).map((p) => p && p.id).filter(Boolean))];
      if (ids.length < 2) continue;
      const winnerIds = Array.isArray(m.winners) ? m.winners : [];
      const losers    = sortedLosers(ids, winnerIds, m.scores || {});
      const place     = (id) => winnerIds.includes(id) ? 1 : winnerIds.length + 1 + losers.indexOf(id);

      ids.forEach((id) => { if (!(id in elo)) elo[id] = ELO_BASE; seen.add(id); });

      const n = ids.length;
      const delta = {};
      ids.forEach((i) => {
        let expected = 0, actual = 0;
        ids.forEach((j) => {
          if (i === j) return;
          expected += 1 / (1 + Math.pow(10, (ratingOf(j) - ratingOf(i)) / 400));
          actual   += place(i) < place(j) ? 1 : place(i) > place(j) ? 0 : 0.5;
        });
        delta[i] = Math.round(eloK(ratingOf(i), gp[i] || 0) * (actual - expected) / (n - 1));
      });
      ids.forEach((id) => { elo[id] = ratingOf(id) + (delta[id] || 0); gp[id] = (gp[id] || 0) + 1; });
    }

    // Écriture : uniquement les joueurs qui existent encore.
    let written = 0;
    for (const id of seen) {
      if (!players.some((p) => p.id === id)) continue;
      try { await sb.patch('players', { elo: Math.round(elo[id]) }, { id }); written++; }
      catch (e) { console.warn('Elo patch error', id, e); }
    }
    await loadAll();
    toast(`Elo recalculé pour ${written} joueur${written > 1 ? 's' : ''} ⚔️`);
  } catch (e) {
    console.error('recalcAllElo:', e);
    toast('Erreur pendant le recalcul Elo', true);
  } finally {
    const b = document.getElementById('recalc-elo-btn');
    if (b) { b.disabled = false; b.innerHTML = '&#9876;&#65039; Recalculer l\'Elo'; }
  }
};

const buildPlayerCard = (p) => {
  const s    = playerStats(p.id);
  const rate = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;
  const bg   = p.color || '#4ade80';
  const isMe = currentUser && p.user_id === currentUser.id;
  const rk   = getRank(p.points || 0);
  const nextRk = RANKS[Math.min(rk.idx + 1, RANKS.length - 1)];
  const prog = rk.idx < RANKS.length - 1
    ? Math.round(((p.points || 0) - rk.min) / (nextRk.min - rk.min) * 100)
    : 100;
  const adv = bestAdversary(p.id);
  const bg2 = bestGame(p.id);

  // Assets desktop (server-side fallback : desktop)
  const rd = RANK_ASSETS_DESKTOP[rk.baseKey||rk.key] || {};
  const rm = RANK_ASSETS_MOBILE[rk.baseKey||rk.key]  || {};

  const adminFoot = isAdmin
    ? `<div class="p-card-foot">
         <button class="btn-icon" onclick="editPlayerAdmin(${p.id})">${SVG_EDIT} Modifier</button>
         <button class="btn-icon danger" onclick="delPlayer(${p.id})">${SVG_TRASH} Suppr.</button>
       </div>`
    : '';

  const glowStyle = isMe
    ? `box-shadow:0 0 0 2px ${bg},0 0 18px ${bg}55`
    : '';

  return `<div class="player-card pcard-resp" data-rank="${rk.key}"
    style="cursor:pointer;position:relative;overflow:hidden;background:#171a22;
           border-radius:14px;${glowStyle}"
    onclick="openPlayerProfile(${p.id})">

    <!-- ── DESKTOP : bannière ── -->
    <div class="pcard-banner"
         style="height:100px;background-size:cover;background-position:center;
                ${rd.banner ? "background-image:url('"+rd.banner+"')" : 'background:'+bg+'18'}">
    </div>

    <!-- ── DESKTOP avatar wrap 150×150, MOBILE 80×80 ── -->
    <div class="pcard-av-wrap"
         style="position:relative;width:150px;height:150px;margin:-38px auto 0;flex-shrink:0">
      ${(() => {
        const h      = FRAME_HOLES[rk.baseKey||rk.key] || { top:32, left:32, size:86, top_m:18, left_m:18, size_m:44 };
        const avImg  = AVATARS.find(a => a.id === (p.avatar || 1));
        const bgStyle= RANK_AVATAR_BG[rk.baseKey||rk.key]
          ? 'background-image:url(' + RANK_AVATAR_BG[rk.baseKey||rk.key] + ');background-size:cover'
          : 'background:' + bg + '22';
        const inner  = avImg
          ? '<img src="' + avImg.src + '" style="width:100%;height:100%;object-fit:cover;display:block">'
          : '<div style="width:100%;height:100%;' + bgStyle + ';display:flex;align-items:center;justify-content:center;font-size:' + Math.round(h.size*0.35) + 'px;font-weight:700;color:rgba(255,255,255,0.92);text-shadow:0 1px 4px rgba(0,0,0,0.8)">' + ini(p.name) + '</div>';
        // Desktop : positionné via h.top/left/size (CSS override sur mobile via pcard-av-hole-m)
        return '<div class="pcard-av-hole-d" style="position:absolute;top:' + h.top + 'px;left:' + h.left + 'px;width:' + h.size + 'px;height:' + h.size + 'px;border-radius:50%;overflow:hidden;z-index:1">' + inner + '</div>'
             + '<div class="pcard-av-hole-m" style="display:none;position:absolute;top:' + h.top_m + 'px;left:' + h.left_m + 'px;width:' + h.size_m + 'px;height:' + h.size_m + 'px;border-radius:50%;overflow:hidden;z-index:1">' + inner + '</div>';
      })()}
      <!-- Frame desktop -->
      ${rd.player_frame
        ? `<img class="pcard-frame-desktop" src="${rd.player_frame}"
               style="position:absolute;inset:0;width:150px;height:150px;
                      object-fit:contain;pointer-events:none;z-index:2">`
        : ''}
      <!-- Frame mobile (caché par défaut, affiché via CSS ≤700px) -->
      ${rm.player_frame
        ? `<img class="pcard-frame-mobile" src="${rm.player_frame}"
               style="display:none;position:absolute;inset:0;width:80px;height:80px;
                      object-fit:contain;pointer-events:none;z-index:2">`
        : ''}
    </div>

    <!-- ── Contenu principal ── -->
    <div class="pcard-body" style="padding:0 12px 10px">
      <!-- Emblème desktop -->
      ${rd.emblem
        ? `<div class="pcard-emblem-desktop"
               style="position:relative;width:48px;height:48px;margin:6px auto 4px;
                      background:url('${rd.emblem}') center/contain no-repeat">
             ${rk.sub ? `<span style="position:absolute;left:50%;bottom:-3px;transform:translateX(-50%);font-family:'DM Serif Display',serif;font-size:15px;line-height:1;font-weight:700;color:#f7e6b3;text-shadow:0 1px 2px rgba(0,0,0,.9),0 0 5px rgba(0,0,0,.65);pointer-events:none">${rk.sub}</span>` : ''}
           </div>`
        : ''}
      <!-- Emblème mobile -->
      ${rm.emblem
        ? `<div class="pcard-emblem-mobile"
               style="display:none;position:relative;width:28px;height:28px;flex-shrink:0;
                      background:url('${rm.emblem}') center/contain no-repeat">
             ${rk.sub ? `<span style="position:absolute;left:50%;bottom:-2px;transform:translateX(-50%);font-family:'DM Serif Display',serif;font-size:10px;line-height:1;font-weight:700;color:#f7e6b3;text-shadow:0 1px 2px rgba(0,0,0,.95)">${rk.sub}</span>` : ''}
           </div>`
        : ''}

      <div style="text-align:center;font-weight:800;color:#f7e6b3;font-size:15px;margin-bottom:3px">
        ${esc(p.name)}
        ${isMe ? '<span style="font-size:11px;color:var(--accent);font-weight:400"> (moi)</span>' : ''}
      </div>

      <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:8px">
        <span style="font-size:11px;padding:2px 10px;border-radius:12px;
                     background:${rk.color}22;color:${rk.color};border:1px solid ${rk.color}44">
          ${rk.name}
        </span>
        ${(p.points || 0) > 0
          ? `<span class="points-badge">&#11088; ${p.points} pts</span>`
          : ''}
        <span class="points-badge" title="Note de niveau (Elo)">&#9876;&#65039; ${getElo(p)} Elo</span>
        ${(p.streak || 0) >= 3
          ? `<span class="streak-badge">&#128293; ${p.streak}</span>`
          : ''}
      </div>

      <div class="pstats">
        <div class="pst"><div class="pst-val" style="color:var(--accent)">${s.won}</div><div class="pst-lbl">Victoires</div></div>
        <div class="pst"><div class="pst-val" style="color:var(--text-muted)">${s.lost}</div><div class="pst-lbl">Défaites</div></div>
        <div class="pst"><div class="pst-val">${s.played}</div><div class="pst-lbl">Parties</div></div>
      </div>

      <div style="margin-top:8px">
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-faint);margin-bottom:3px">
          <span>Victoires</span><span style="color:var(--accent)">${rate}%</span>
        </div>
        <div class="wr-bar"><div class="wr-fill" style="width:${rate}%"></div></div>
        ${rk.idx < RANKS.length - 1
          ? `<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-faint);margin-top:5px;margin-bottom:2px">
               <span>${rk.name}</span><span>${nextRk.name} (${p.points||0}/${nextRk.min})</span>
             </div>
             <div class="wr-bar"><div style="height:100%;width:${prog}%;background:${rk.color};border-radius:3px"></div></div>`
          : `<div style="font-size:10px;color:${rk.color};margin-top:5px;text-align:center">Rang max !</div>`}
      </div>

      <div class="pdet" style="margin-top:8px">
        ${bg2  ? `<div class="pdet-row"><span>🎯 Favori</span><span>${esc(bg2.name)} (${bg2.rate}%)</span></div>` : ''}
        ${adv?.best  ? `<div class="pdet-row"><span>😊 Facile</span><span>${esc(adv.best.name)} (${adv.best.rate}%)</span></div>` : ''}
        ${adv?.worst ? `<div class="pdet-row"><span>😤 Difficile</span><span>${esc(adv.worst.name)} (${adv.worst.rate}%)</span></div>` : ''}
      </div>

      ${adminFoot}
    </div>
  </div>`;
};

const renderPlayerGrid = () => {
  if (!players.length) {
    document.getElementById('pgrid').innerHTML =
      '<div class="empty" style="grid-column:1/-1"><div class="empty-icon">👥</div><p>Aucun joueur.</p></div>';
    return;
  }
  const ordered = [...players].sort((a, b) =>
    (b.points || 0) - (a.points || 0) || (a.name || '').localeCompare(b.name || ''));
  document.getElementById('pgrid').innerHTML = ordered.map(buildPlayerCard).join('');
};

const editPlayerAdmin = async (id) => {
  if (!isAdmin) return;
  const p = players.find((x) => x.id === id);
  if (!p) return;
  _openProfileModal({
    title:    `Modifier — ${p.name}`,
    name:     p.name,
    color:    p.color || '#4ade80',
    avatar:   p.avatar || 1,
    points:   p.points || 0,
    showPts:  true,
    showEmail:false,
    showPass: false,
    targetId: id,
    isCreate: false,
    saveLabel:'Enregistrer',
  });
};

const openCreatePlayerAdmin = () => {
  if (!isAdmin) return;
  _openProfileModal({
    title:    'Créer un joueur',
    name:     '',
    color:    '#4ade80',
    avatar:   1,
    points:   0,
    showPts:  true,
    showEmail:true,
    showPass: true,
    targetId: null,
    isCreate: true,
    saveLabel:'Créer le joueur',
  });
  // Email facultatif : vide → joueur de test sans compte
  const emailIn = document.getElementById('pe-email');
  if (emailIn) emailIn.placeholder = 'Laisser vide = joueur de test sans compte';
};

const delPlayer = async (id) => {
  if (!isAdmin) return;
  const p = players.find((x) => x.id === id);
  if (!confirm(`Supprimer "${p.name}" ?`)) return;
  showLoading('Suppression…');
  try {
    await sb.del('players', { id });
    await loadAll();
    renderPlayers();
    toast('Joueur supprimé');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// ═══════════════════════════════════════════════════════════════
// PARTIES PAGE
// ═══════════════════════════════════════════════════════════════

const renderHistory = () => {
  renderHistoryStats();
  renderMatchList();
  renderLeaderboard();
};

const renderHistoryStats = () => {
  const gameCounts = {};
  matches.forEach((m) => { gameCounts[m.game_id] = (gameCounts[m.game_id] || 0) + 1; });
  const topGid = Object.keys(gameCounts).sort((a, b) => gameCounts[b] - gameCounts[a])[0];
  const topG   = topGid ? games.find((x) => x.id === parseInt(topGid)) : null;
  const avgPl  = matches.length
    ? Math.round(matches.reduce((s, m) => s + (m.players || []).length, 0) / matches.length * 10) / 10
    : 0;

  document.getElementById('hstats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Parties jouées</div>
      <div class="stat-value">${matches.length}</div>
      <div class="stat-sub">au total</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Moy. joueurs</div>
      <div class="stat-value">${avgPl || '—'}</div>
      <div class="stat-sub">par partie</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Jeu le + sorti</div>
      <div class="stat-value" style="font-size:16px">${topG ? esc(topG.name) : '—'}</div>
      <div class="stat-sub">${topG ? gameCounts[topGid] + ' fois' : ''}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Jeux différents</div>
      <div class="stat-value">${Object.keys(gameCounts).length}</div>
      <div class="stat-sub">joués</div>
    </div>`;
};

const buildMatchCard = (m) => {
  const g    = games.find((x) => x.id === m.game_id);
  const canDel = isAdmin || currentUser;
  const delBtn = canDel
    ? `<button class="hist-del" onclick="delMatch(${m.id})">×</button>`
    : '';

  const playersHtml = (m.players || []).map((pp) => {
    const pl = players.find((x) => x.id === pp.id);
    const iw = m.winners?.includes(pp.id);
    const dot = pl
      ? `<span style="display:inline-block;width:7px;height:7px;border-radius:50%;
                      background:${pl.color || '#4ade80'}"></span>`
      : '';
    return `<span class="pr ${iw ? 'win' : 'lose'}">${iw ? '⭐ ' : ''}${dot} ${pl ? esc(pl.name) : '?'}</span>`;
  }).join('');

  const scoresHtml = m.scores && Object.keys(m.scores).length
    ? `<div class="scores-row">${(m.players || []).map((pp) => {
        const sc = m.scores[pp.id];
        if (sc === undefined) return '';
        const pl = players.find((x) => x.id === pp.id);
        const iw = m.winners?.includes(pp.id);
        return `<span class="sc-chip ${iw ? 'top' : ''}">${pl ? esc(pl.name) : '?'}&nbsp;:&nbsp;${sc}</span>`;
      }).join('')}</div>`
    : '';

  const allIds  = (m.players || []).map((pp) => pp.id);
  const winIds  = m.winners || [];
  const losers  = sortedLosers(allIds, winIds, m.scores);
  const n       = allIds.length;

  const ptsHtml = allIds.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;padding-top:6px;
                   border-top:1px solid var(--border)">
        ${allIds.map((pid) => {
          const pl   = players.find((x) => x.id === pid);
          const isW  = winIds.includes(pid);
          const rank = isW ? 1 : winIds.length + 1 + losers.indexOf(pid);
          const gain = calcPoints(rank, n, m.game_id);
          const loss = calcLoss(pl?.points || 0, rank, n);
          const net  = gain - loss;
          const col  = net >= 0 ? 'var(--accent)' : 'var(--danger)';
          return `<span style="font-size:11px;padding:2px 7px;border-radius:12px;
                              background:var(--bg);border:1px solid var(--border);color:${col}">
            ${pl ? esc(pl.name) : '?'} ${net >= 0 ? '+' : ''}${net} pts
          </span>`;
        }).join('')}
       </div>`
    : '';

  return `<div class="hist-card">
    <div class="hist-hdr">
      <div>
        <div class="hist-game">${g ? esc(g.name) : 'Jeu inconnu'}</div>
        ${m.date ? `<div class="hist-date">${fmtDate(m.date)}</div>` : ''}
        ${m.notes ? `<div style="font-size:12px;color:var(--text-faint);margin-top:2px">${esc(m.notes)}</div>` : ''}
      </div>
      ${delBtn}
    </div>
    <div class="hist-players">${playersHtml}</div>
    ${scoresHtml}
    ${ptsHtml}
  </div>`;
};

const renderMatchList = () => {
  const el = document.getElementById('hlist');
  if (!currentUser) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔒</div><p>Connecte-toi pour voir tes parties.</p></div>';
    return;
  }
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  const mine = myPlayer
    ? matches.filter((m) => (m.players || []).some((pp) => pp.id === myPlayer.id))
    : [];
  if (!mine.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🎮</div><p>Tu n\'as encore aucune partie enregistrée.</p></div>';
    return;
  }
  el.innerHTML = mine.map(buildMatchCard).join('');
};

const renderLeaderboard = () => {
  const el = document.getElementById('lboard');
  if (!players.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text-faint);text-align:center;padding:1rem">Aucun joueur</p>';
    return;
  }
  const ranked = players
    .map((p) => { const s = playerStats(p.id); return { ...p, ...s, rate: s.played > 0 ? Math.round(s.won / s.played * 100) : 0 }; })
    .sort((a, b) => b.rate - a.rate || b.won - a.won);
  const mx = ranked[0]?.rate || 1;

  el.innerHTML = ranked.map((p, i) => {
    const rc  = i === 0 ? 'g' : i === 1 ? 's' : i === 2 ? 'b' : '';
    const md  = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
    const bg  = p.color || '#4ade80';
    const rk  = getRank(p.points || 0);
    return `<div class="lb-row">
      <div class="lb-rank ${rc}">${md}</div>
      <div class="lb-av" style="background:${bg}22;color:${bg}">${ini(p.name)}</div>
      <div class="lb-info">
        <div class="lb-name">
          ${esc(p.name)}
          <span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;color:${rk.color}">
            ${rankImg(rk, 14)} ${rk.name}
          </span>
        </div>
        <div class="lb-sub">
          ${p.won}V · ${p.lost}D · ${p.played}p
          ${(p.points || 0) > 0 ? ` · &#11088;${p.points}pts` : ''}
          · &#9876;&#65039;${getElo(p)}
        </div>
      </div>
      <div class="lb-bar">
        <div class="lb-bar-fill" style="width:${Math.round(p.rate / mx * 100)}%"></div>
      </div>
      <div class="lb-rate">${p.rate}%</div>
    </div>`;
  }).join('');
};

// ─── Match modal ──────────────────────────────────────────────

const openMatchModal = () => {
  if (!currentUser) { showAuthWall(); return; }
  document.getElementById('fm-game-search').value = '';
  document.getElementById('fm-game').value        = '';
  document.getElementById('fm-game-dropdown').style.display = 'none';
  filterGameSearch();
  document.getElementById('fm-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('fm-players').innerHTML = players.length
    ? players.map((p) =>
        `<div class="pcheck-row">
           <label>
             <input type="checkbox" value="${p.id}" class="mcb">
             <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${p.color || '#4ade80'}"></span>
             ${esc(p.name)}
           </label>
           <button class="wstar" data-pid="${p.id}" onclick="togW(this)">⭐</button>
           <input type="number" class="score-inp" data-pid="${p.id}" placeholder="Score" min="0" step="1">
         </div>`
      ).join('')
    : '<p style="font-size:13px;color:var(--text-faint)">Aucun joueur inscrit.</p>';
  document.getElementById('fm-notes').value = '';
  openModal('modal-match');
};

const togW = (btn) => {
  const cb = btn.closest('.pcheck-row').querySelector('input[type=checkbox]');
  if (!cb.checked) cb.checked = true;
  btn.classList.toggle('active');
};

const saveMatch = async () => {
  if (!currentUser) { showAuthWall(); return; }
  const gid  = parseInt(document.getElementById('fm-game').value);
  if (!gid) { document.getElementById('fm-game-search').focus(); return; }
  const cbs  = [...document.querySelectorAll('.mcb:checked')];
  if (!cbs.length) { toast('Sélectionnez au moins un joueur'); return; }
  const pids = cbs.map((c) => parseInt(c.value));
  const wids = [...document.querySelectorAll('.wstar.active')]
    .map((b) => parseInt(b.dataset.pid))
    .filter((id) => pids.includes(id));
  const scores = {};
  document.querySelectorAll('.score-inp').forEach((inp) => {
    const pid = parseInt(inp.dataset.pid);
    const v   = inp.value.trim();
    if (pids.includes(pid) && v !== '') scores[pid] = parseFloat(v);
  });
  const finW = wids.length ? wids : (() => {
    const e = Object.entries(scores).filter(([, v]) => !isNaN(v));
    if (!e.length) return [];
    const mx = Math.max(...e.map(([, v]) => v));
    return e.filter(([, v]) => v === mx).map(([k]) => parseInt(k));
  })();
  const mdata = {
    game_id: gid,
    date:    document.getElementById('fm-date').value,
    players: pids.map((id) => ({ id })),
    winners: finW,
    scores,
    notes:   document.getElementById('fm-notes').value.trim(),
  };
  showLoading('Enregistrement…');
  try {
    const mArr    = await sb.post('matches', mdata);
    const matchId = Array.isArray(mArr) ? mArr[0]?.id : mArr?.id;
    await awardPoints(matchId, finW, pids, false, gid, scores);
    await loadAll();
    closeModal('modal-match');
    renderHistory();
    toast('Partie enregistrée ✓');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

const delMatch = async (id) => {
  if (!isAdmin && !currentUser) return;
  if (!confirm('Supprimer cette partie ?')) return;
  showLoading('Suppression…');
  try {
    await sb.del('matches', { id });
    await loadAll();
    renderHistory();
    toast('Partie supprimée');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// ─── Game search dropdown in match modal ──────────────────────

const filterGameSearch = () => {
  const q  = document.getElementById('fm-game-search')?.value.toLowerCase() || '';
  const dd = document.getElementById('fm-game-dropdown');
  if (!dd) return;
  const list = games
    .filter((g) => g.status === 'own' && (!q || g.name.toLowerCase().includes(q)))
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  if (!list.length) {
    dd.innerHTML = '<div style="padding:10px 12px;font-size:13px;color:var(--text-faint)">Aucun jeu trouvé</div>';
    dd.style.display = 'block';
    return;
  }
  dd.innerHTML = list.map((g) =>
    `<div onclick="selectMatchGame(${g.id},'${esc(g.name)}')"
          style="padding:9px 12px;font-size:14px;color:var(--text);cursor:pointer;
                 border-bottom:1px solid var(--border);transition:background .1s"
          onmouseover="this.style.background='var(--border)'"
          onmouseout="this.style.background=''">
       ${esc(g.name)}
     </div>`
  ).join('');
  dd.style.display = 'block';
};

const showGameDropdown = () => filterGameSearch();

const selectMatchGame = (id, name) => {
  document.getElementById('fm-game').value       = id;
  document.getElementById('fm-game-search').value = name;
  document.getElementById('fm-game-dropdown').style.display = 'none';
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('[id^="fm-game"]')) {
    const dd = document.getElementById('fm-game-dropdown');
    if (dd) dd.style.display = 'none';
  }
});

// ═══════════════════════════════════════════════════════════════
// POINTS SYSTEM
// ═══════════════════════════════════════════════════════════════

const awardPoints = async (matchId, winnerIds, allPlayerIds, isChallengeWin, gameId, scores) => {
  const n       = allPlayerIds.length;
  const losers  = sortedLosers(allPlayerIds, winnerIds, scores || {});
  const place   = (pid) => winnerIds.includes(pid)
    ? 1
    : winnerIds.length + 1 + losers.indexOf(pid);

  // Variations Elo : calculées en une passe sur tous les joueurs de la partie.
  const eloDelta = eloDeltas(allPlayerIds, place);

  for (const pid of allPlayerIds) {
    const p = players.find((x) => x.id === pid);
    if (!p) continue;
    const isW    = winnerIds.includes(pid);
    const curPts = p.points || 0;
    let gain     = calcPoints(place(pid), n, gameId);
    if (isChallengeWin && isW) gain += 5;
    const newStreak = isW ? (p.streak || 0) + 1 : 0;
    if (isW && newStreak > 0 && newStreak % 3 === 0) gain += 3;
    const rankIdx = getRank(curPts).idx;
    const streakPenalty = (!isW && (p.streak || 0) >= 3 && rankIdx >= 3) ? 3 : 0;
    const loss    = calcLoss(curPts, place(pid), n);
    const net     = gain - loss - streakPenalty;
    const newPts  = Math.max(0, curPts + net);
    showPtsGain(net >= 0 ? '+' + net : net);

    const newElo  = getElo(p) + (eloDelta[pid] || 0);
    const body    = { points: newPts, streak: newStreak };
    if (eloDelta[pid] !== undefined) body.elo = newElo;
    try {
      await sb.patch('players', body, { id: pid });
    } catch (e) {
      // Si la colonne `elo` n'existe pas encore, on réessaie sans elo
      // pour ne pas perdre la mise à jour des points.
      console.warn('Patch joueur échoué, nouvel essai sans elo :', e);
      try { await sb.patch('players', { points: newPts, streak: newStreak }, { id: pid }); }
      catch (e2) { console.warn('Points error:', e2); }
    }
  }
  await loadAll();
};

// ═══════════════════════════════════════════════════════════════
// SOCIAL PAGE
// ═══════════════════════════════════════════════════════════════

const setSocialTab = (tab, el) => {
  socialTab = tab;
  document.querySelectorAll('#page-social .tab').forEach((t) => t.classList.remove('active'));
  el.classList.add('active');
  ['suggestions', 'challenges', 'h2h', 'newsletter'].forEach((t) => {
    const div = document.getElementById(`social-${t}`);
    if (div) div.style.display = t === tab ? 'block' : 'none';
  });
  const addBtn = document.getElementById('social-add-btn');
  const addLbl = document.getElementById('social-add-label');
  if (tab === 'suggestions') {
    addBtn.style.display = currentUser ? 'flex' : 'none';
    if (addLbl) addLbl.textContent = 'Suggérer un jeu';
  } else if (tab === 'challenges') {
    addBtn.style.display = currentUser ? 'flex' : 'none';
    if (addLbl) addLbl.textContent = 'Lancer un défi';
  } else {
    addBtn.style.display = 'none';
  }
  renderCurrentSocialTab();
};

const renderCurrentSocialTab = () => {
  if      (socialTab === 'suggestions') renderSuggestions();
  else if (socialTab === 'challenges')  renderChallenges();
  else if (socialTab === 'h2h')         renderH2HSelects();
  else if (socialTab === 'newsletter')  renderNewsletter();
};

const handleSocialAdd = () => {
  if (!currentUser) { showAuthWall(); return; }
  if (socialTab === 'suggestions') openModal('modal-suggestion');
  else if (socialTab === 'challenges') openChallengeModal();
};

// ─── Suggestions ─────────────────────────────────────────────

const renderSuggestions = () => {
  const el = document.getElementById('suggestions-grid');
  if (!suggestions.length) {
    el.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="empty-icon">💡</div><p>Aucune suggestion.</p></div>';
    return;
  }
  const labels = { pending: 'En attente', approved: 'Approuvé', rejected: 'Refusé' };
  const cls    = { pending: 'status-pending', approved: 'status-approved', rejected: 'status-rejected' };
  el.innerHTML = suggestions.map((s) => {
    const adminBtns = isAdmin
      ? `<div class="suggestion-actions">
           ${s.status === 'pending'
             ? `<button class="btn-icon" onclick="updateSuggestion(${s.id},'approved')" style="flex:1;font-size:12px">✓ Approuver</button>
                <button class="btn-icon danger" onclick="updateSuggestion(${s.id},'rejected')" style="flex:1;font-size:12px">✗ Refuser</button>`
             : ''}
           <button class="btn-icon danger" onclick="deleteSuggestion(${s.id})" style="font-size:12px">${SVG_TRASH}</button>
         </div>`
      : '';
    return `<div class="suggestion-card">
      <div class="suggestion-header">
        <div class="suggestion-name">${esc(s.name)}</div>
        <span class="suggestion-status ${cls[s.status] || 'status-pending'}">${labels[s.status] || 'En attente'}</span>
      </div>
      ${s.reason ? `<div class="suggestion-reason">${esc(s.reason)}</div>` : ''}
      <div class="suggestion-by">Suggéré par ${esc(s.player_name || 'Anonyme')}</div>
      ${adminBtns}
    </div>`;
  }).join('');
};

const saveSuggestion = async () => {
  if (!currentUser) { showAuthWall(); return; }
  const name = document.getElementById('sg-name').value.trim();
  if (!name) return;
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  try {
    await sb.post('suggestions', {
      user_id:     currentUser.id,
      player_name: myPlayer?.name || 'Anonyme',
      name,
      reason:      document.getElementById('sg-reason').value.trim(),
    });
    await loadSocial();
    closeModal('modal-suggestion');
    renderSuggestions();
    toast('Suggestion envoyée ✓');
    document.getElementById('sg-name').value   = '';
    document.getElementById('sg-reason').value = '';
  } catch (e) { toastErr(e.message); }
};

const updateSuggestion = async (id, status) => {
  try { await sb.patch('suggestions', { status }, { id }); await loadSocial(); renderSuggestions(); toast('Mise à jour ✓'); }
  catch (e) { toastErr(e.message); }
};

const deleteSuggestion = async (id) => {
  if (!confirm('Supprimer ?')) return;
  try { await sb.del('suggestions', { id }); await loadSocial(); renderSuggestions(); }
  catch (e) { toastErr(e.message); }
};

// ─── Challenges ───────────────────────────────────────────────

const openChallengeModal = () => {
  if (!currentUser) { showAuthWall(); return; }
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  document.getElementById('ch-players-list').innerHTML = players
    .filter((p) => p.id !== myPlayer?.id)
    .map((p) =>
      `<div class="pcheck-row">
         <label>
           <input type="checkbox" class="ch-player-cb" value="${p.id}">
           <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${p.color || '#4ade80'}"></span>
           ${esc(p.name)}
         </label>
       </div>`
    ).join('');
  document.getElementById('ch-game').innerHTML = games
    .filter((g) => g.status === 'own')
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'))
    .map((g) => `<option value="${g.id}">${esc(g.name)}</option>`)
    .join('');
  document.getElementById('ch-msg').value = '';
  openModal('modal-challenge');
};

const getPlayerEmail = async (player) => {
  if (!player?.user_id) return null;
  const pr = await sb.get('profiles', { eq: { id: player.user_id } }).catch(() => []);
  return pr?.length ? pr[0].email : null;
};

const saveChallenge = async () => {
  if (!currentUser) { showAuthWall(); return; }
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  if (!myPlayer) { toastErr('Créez d\u2019abord un profil joueur.'); return; }
  const toIds   = [...document.querySelectorAll('.ch-player-cb:checked')].map((c) => parseInt(c.value));
  const gameId  = parseInt(document.getElementById('ch-game').value);
  const msg     = document.getElementById('ch-msg').value.trim();
  if (!toIds.length || !gameId) { toastErr('Sélectionnez au moins un joueur et un jeu.'); return; }
  try {
    await sb.post('challenges', {
      from_player_id: myPlayer.id,
      to_player_ids:  toIds,
      to_player_id:   toIds[0],
      game_id:        gameId,
      message:        msg,
      status:         'pending',
    });
    await loadSocial();
    closeModal('modal-challenge');
    renderChallenges();
    toast('Défi envoyé !');
    const game = games.find((g) => g.id === gameId);
    for (const toId of toIds) {
      const toPlayer = players.find((p) => p.id === toId);
      const toEmail  = await getPlayerEmail(toPlayer);
      if (toEmail) {
        const subject = `${myPlayer.name} te défie sur Board Game Tom !`;
        const body    = `Salut ${toPlayer?.name || ''} !\n\n${myPlayer.name} te lance un défi sur "${game?.name || '?'}" !\n${toIds.length > 1 ? '(défi de groupe)\n' : ''}${msg ? `Message : "${msg}"\n\n` : ''}Accepte ou décline :\n${SITE_URL}`;
        sendBrevoEmail(toEmail, toPlayer?.name || '', subject, body).catch(() => {});
      }
    }
  } catch (e) { toastErr(e.message); }
};

const renderChallenges = () => {
  const el = document.getElementById('challenges-grid');
  if (!challenges.length) {
    el.innerHTML = '<div class="empty" style="grid-column:1/-1"><div class="empty-icon">⚔️</div><p>Aucun défi en cours.</p></div>';
    return;
  }
  const myPlayer = currentUser ? players.find((p) => p.user_id === currentUser.id) : null;
  const statusLabel = { pending: 'En attente', accepted: 'Accepté', declined: 'Refusé', completed: 'Terminé' };
  const statusCls   = { pending: 'cstatus-pending', accepted: 'cstatus-accepted', declined: 'cstatus-declined', completed: 'cstatus-accepted' };

  el.innerHTML = challenges.map((ch) => {
    const from      = players.find((p) => p.id === ch.from_player_id);
    const toIds     = Array.isArray(ch.to_player_ids) && ch.to_player_ids.length ? ch.to_player_ids : [ch.to_player_id].filter(Boolean);
    const toPlayers = toIds.map((id) => players.find((p) => p.id === id)).filter(Boolean);
    const game      = games.find((g) => g.id === ch.game_id);
    const isTarget  = myPlayer && toIds.includes(myPlayer.id) && ch.status === 'pending';
    const isFrom    = myPlayer && ch.from_player_id === myPlayer.id;
    const canReport = (isFrom || isTarget) && ch.status === 'accepted' && !ch.result_reported;
    const fb        = from?.color || '#4ade80';
    const toHtml    = toPlayers.map((p) => `<span style="color:${p.color || '#60a5fa'};font-weight:500">${esc(p.name)}</span>`).join(', ');

    return `<div class="challenge-card">
      <div class="challenge-header">
        <div>
          <div class="challenge-players">
            <span style="color:${fb};font-weight:500">${from ? esc(from.name) : '?'}</span>
            <span style="color:var(--text-faint)"> défie </span>
            ${toHtml}
          </div>
          <div class="challenge-game">🎲 ${game ? esc(game.name) : 'Jeu inconnu'}</div>
        </div>
        <span class="challenge-status ${statusCls[ch.status] || 'cstatus-pending'}">${statusLabel[ch.status] || '?'}</span>
      </div>
      ${ch.message ? `<div class="challenge-msg">"${esc(ch.message)}"</div>` : ''}
      ${isTarget && ch.status === 'pending'
        ? `<div class="challenge-actions">
             <button class="btn-icon" onclick="respondChallenge(${ch.id},'accepted')"
                     style="flex:1;font-size:12px;color:var(--accent)">✓ Accepter</button>
             <button class="btn-icon danger" onclick="respondChallenge(${ch.id},'declined')"
                     style="flex:1;font-size:12px">✗ Décliner</button>
           </div>`
        : ''}
      ${canReport
        ? `<div class="challenge-actions">
             <button class="btn-icon" onclick="openChallengeResult(${ch.id})"
                     style="flex:1;font-size:12px;color:var(--gold)">🏆 Enregistrer le résultat</button>
           </div>`
        : ''}
      ${ch.result_reported
        ? '<div style="font-size:11px;color:var(--text-faint);margin-top:6px;text-align:center">✅ Résultat enregistré</div>'
        : ''}
      ${isAdmin
        ? `<div class="challenge-actions">
             <button class="btn-icon danger" onclick="deleteChallenge(${ch.id})" style="font-size:12px">${SVG_TRASH} Suppr.</button>
           </div>`
        : ''}
    </div>`;
  }).join('');
};

const respondChallenge = async (id, status) => {
  try {
    await sb.patch('challenges', { status }, { id });
    await loadSocial();
    renderChallenges();
    toast(status === 'accepted' ? 'Défi accepté ! 🎮' : 'Défi décliné');
    updateNotifBadge();
    const ch = challenges.find((c) => c.id === id);
    if (!ch) return;
    const fromPlayer = players.find((p) => p.id === ch.from_player_id);
    const myPlayer   = players.find((p) => p.user_id === currentUser?.id);
    const game       = games.find((g) => g.id === ch.game_id);
    const fromEmail  = await getPlayerEmail(fromPlayer);
    if (fromEmail) {
      const accepted = status === 'accepted';
      const subject  = accepted ? `🎮 ${myPlayer?.name || '?'} a accepté ton défi !` : `😅 ${myPlayer?.name || '?'} a décliné ton défi`;
      const body     = accepted
        ? `Bonne nouvelle ${fromPlayer?.name || ''} !\n\n${myPlayer?.name || '?'} a accepté ton défi sur "${game?.name || '?'}" !\n\nOrganisez une partie :\n${SITE_URL}`
        : `Salut ${fromPlayer?.name || ''} !\n\n${myPlayer?.name || '?'} a décliné ton défi sur "${game?.name || '?'}".\n\n${SITE_URL}`;
      sendBrevoEmail(fromEmail, fromPlayer?.name || '', subject, body).catch(() => {});
    }
  } catch (e) { toastErr(e.message); }
};

const deleteChallenge = async (id) => {
  try { await sb.del('challenges', { id }); await loadSocial(); renderChallenges(); }
  catch (e) { toastErr(e.message); }
};

const openChallengeResult = (chId) => {
  currentChallengeId = chId;
  const ch = challenges.find((c) => c.id === chId);
  if (!ch) return;
  const toIds = Array.isArray(ch.to_player_ids) && ch.to_player_ids.length ? ch.to_player_ids : [ch.to_player_id].filter(Boolean);
  const allIds = [ch.from_player_id, ...toIds];
  document.getElementById('cr-players-list').innerHTML = allIds
    .map((id) => players.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) =>
      `<div class="pcheck-row">
         <label>
           <input type="checkbox" class="cr-winner-cb" value="${p.id}">
           <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${p.color || '#4ade80'}"></span>
           ${esc(p.name)}
         </label>
       </div>`
    ).join('');
  document.getElementById('cr-notes').value = '';
  openModal('modal-challenge-result');
};

const saveChallengeResult = async () => {
  if (!currentChallengeId) return;
  const ch        = challenges.find((c) => c.id === currentChallengeId);
  if (!ch) return;
  const winnerIds = [...document.querySelectorAll('.cr-winner-cb:checked')].map((c) => parseInt(c.value));
  if (!winnerIds.length) { toastErr('Sélectionnez au moins un gagnant.'); return; }
  const toIds  = Array.isArray(ch.to_player_ids) && ch.to_player_ids.length ? ch.to_player_ids : [ch.to_player_id].filter(Boolean);
  const allIds = [ch.from_player_id, ...toIds];
  const notes  = document.getElementById('cr-notes').value.trim();
  showLoading('Enregistrement…');
  try {
    const mdata = {
      game_id: ch.game_id,
      date:    new Date().toISOString().split('T')[0],
      players: allIds.map((id) => ({ id })),
      winners: winnerIds,
      scores:  {},
      notes:   notes ? notes + ' (Défi)' : 'Défi',
    };
    const mArr    = await sb.post('matches', mdata);
    const matchId = Array.isArray(mArr) ? mArr[0]?.id : mArr?.id;
    await sb.patch('challenges', { status: 'completed', result_reported: true, match_id: matchId }, { id: currentChallengeId });
    await awardPoints(matchId, winnerIds, allIds, true, ch.game_id, {});
    await loadSocial();
    closeModal('modal-challenge-result');
    renderChallenges();
    toast('Résultat enregistré ! Points attribués ✨');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// ─── Head-to-head ─────────────────────────────────────────────

const renderH2HSelects = () => {
  ['h2h-p1', 'h2h-p2'].forEach((id) => {
    const sel = document.getElementById(id);
    const cur = sel.value;
    sel.innerHTML = '<option value="">-- Joueur --</option>'
      + players.map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join('');
    sel.value = cur;
  });
  renderH2H();
};

const renderH2H = () => {
  const p1id = parseInt(document.getElementById('h2h-p1').value);
  const p2id = parseInt(document.getElementById('h2h-p2').value);
  const el   = document.getElementById('h2h-result');
  if (!p1id || !p2id || p1id === p2id) {
    el.innerHTML = '<p style="text-align:center;color:var(--text-faint);font-size:14px;padding:2rem">Sélectionnez deux joueurs différents.</p>';
    return;
  }
  const p1 = players.find((p) => p.id === p1id);
  const p2 = players.find((p) => p.id === p2id);
  const shared = matches.filter((m) =>
    m.players?.some((p) => p.id === p1id) &&
    m.players?.some((p) => p.id === p2id)
  );
  if (!shared.length) {
    el.innerHTML = '<div class="h2h-summary"><p style="color:var(--text-faint)">Ces deux joueurs n\'ont jamais joué ensemble.</p></div>';
    return;
  }
  const p1wins = shared.filter((m) => m.winners?.includes(p1id)).length;
  const p2wins = shared.filter((m) => m.winners?.includes(p2id)).length;
  const draws  = shared.length - p1wins - p2wins;
  const b1 = p1.color || '#4ade80';
  const b2 = p2.color || '#60a5fa';
  const byGame = {};
  shared.forEach((m) => {
    const gn = games.find((x) => x.id === m.game_id)?.name || '?';
    if (!byGame[gn]) byGame[gn] = { p1w: 0, p2w: 0, total: 0 };
    byGame[gn].total++;
    if (m.winners?.includes(p1id)) byGame[gn].p1w++;
    if (m.winners?.includes(p2id)) byGame[gn].p2w++;
  });
  el.innerHTML = `
    <div class="h2h-layout">
      <div class="h2h-card">
        <div class="h2h-avatar" style="background:${b1}22;color:${b1}">${ini(p1.name)}</div>
        <div class="h2h-name" style="color:${b1}">${esc(p1.name)}</div>
        <div class="h2h-stat" style="color:${p1wins >= p2wins ? 'var(--accent)' : 'var(--text-muted)'}">${p1wins}</div>
        <div class="h2h-stat-lbl">victoires</div>
      </div>
      <div class="h2h-card">
        <div class="h2h-avatar" style="background:${b2}22;color:${b2}">${ini(p2.name)}</div>
        <div class="h2h-name" style="color:${b2}">${esc(p2.name)}</div>
        <div class="h2h-stat" style="color:${p2wins > p1wins ? 'var(--accent)' : 'var(--text-muted)'}">${p2wins}</div>
        <div class="h2h-stat-lbl">victoires</div>
      </div>
      <div class="h2h-summary">
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:1rem">
          ${shared.length} partie${shared.length > 1 ? 's' : ''} ensemble${draws > 0 ? ` · ${draws} nul${draws > 1 ? 's' : ''}` : ''}.
        </p>
        <div class="h2h-games">
          ${Object.entries(byGame).map(([gn, st]) =>
            `<div class="h2h-game-row">
               <span style="font-weight:500;color:var(--text)">${esc(gn)}</span>
               <span class="h2h-score">
                 <span style="color:${b1}">${st.p1w}</span> – <span style="color:${b2}">${st.p2w}</span>
                 <span style="color:var(--text-faint);font-size:11px">(${st.total}p)</span>
               </span>
             </div>`
          ).join('')}
        </div>
      </div>
    </div>`;
};

// ─── Palmarès ─────────────────────────────────────────────────

const openPalmares = (gid) => {
  const g = games.find((x) => x.id === gid);
  if (!g) return;
  document.getElementById('palmares-title').textContent = '🏆 Palmarès — ' + g.name;
  const gMatches = matches.filter((m) => m.game_id === gid);
  const content  = document.getElementById('palmares-content');
  if (!gMatches.length) {
    content.innerHTML = '<p style="color:var(--text-faint);font-size:13px;text-align:center;padding:1rem">Aucune partie enregistrée.</p>';
    openModal('modal-palmares');
    return;
  }
  const stat = {};
  gMatches.forEach((m) => {
    (m.players || []).forEach((pp) => {
      if (!stat[pp.id]) stat[pp.id] = { pl: 0, w: 0, scores: [] };
      stat[pp.id].pl++;
      if (m.winners?.includes(pp.id)) stat[pp.id].w++;
      if (m.scores?.[pp.id] !== undefined) stat[pp.id].scores.push(Number(m.scores[pp.id]));
    });
  });
  const ranked = Object.entries(stat)
    .map(([pid, s]) => {
      const p   = players.find((x) => x.id === parseInt(pid));
      const best = s.scores.length ? Math.max(...s.scores) : null;
      return { p, rate: s.pl > 0 ? Math.round(s.w / s.pl * 100) : 0, best, ...s };
    })
    .filter((x) => x.p)
    .sort((a, b) => b.rate - a.rate || b.w - a.w);

  const medals = ['🥇', '🥈', '🥉'];
  content.innerHTML = `<div style="margin-bottom:.75rem;font-size:13px;color:var(--text-muted)">
    ${gMatches.length} partie${gMatches.length > 1 ? 's' : ''} enregistrée${gMatches.length > 1 ? 's' : ''}
  </div>` + ranked.map((r, i) => {
    const md = medals[i] || `${i + 1}`;
    const bg = r.p.color || '#4ade80';
    return `<div class="palmares-row">
      <div class="palmares-rank">${md}</div>
      <div class="palmares-av" style="background:${bg}22;color:${bg}">${ini(r.p.name)}</div>
      <div class="palmares-info">
        <div class="palmares-name">${esc(r.p.name)}</div>
        <div class="palmares-sub">
          ${r.w}V · ${r.pl - r.w}D · ${r.pl}p
          ${r.best !== null ? ' · Record : ' + r.best : ''}
        </div>
      </div>
      <div class="palmares-score">${r.rate}%</div>
    </div>`;
  }).join('');
  openModal('modal-palmares');
};

// ─── Comments ─────────────────────────────────────────────────

const openComments = (gid) => {
  const g   = games.find((x) => x.id === gid);
  document.getElementById('comments-modal-title').textContent = '💬 Avis — ' + (g?.name || '');
  const cms = comments[gid] || [];
  const list = document.getElementById('comments-modal-list');
  list.innerHTML = cms.length
    ? cms.map((c) =>
        `<div class="comment-item">
           <div class="comment-header">
             <span class="comment-author">${esc(c.player_name || 'Anonyme')}</span>
             <div style="display:flex;align-items:center;gap:6px">
               <span class="comment-date">${fmtDate(c.created_at?.split('T')[0] || '')}</span>
               ${isAdmin || (currentUser && c.user_id === currentUser.id)
                 ? `<button class="comment-del" onclick="deleteComment(${c.id},${gid})">×</button>`
                 : ''}
             </div>
           </div>
           <div class="comment-text">${esc(c.content)}</div>
         </div>`
      ).join('')
    : '<p style="color:var(--text-faint);font-size:13px;text-align:center;padding:1rem">Aucun avis.</p>';

  const form = document.getElementById('comments-modal-form');
  form.innerHTML = currentUser
    ? `<div class="comment-form">
         <input type="text" class="comment-input" id="cm-input-${gid}"
                placeholder="Votre avis…"
                onkeydown="if(event.key==='Enter')submitComment(${gid})">
         <button class="btn-comment-send" onclick="submitComment(${gid})">Envoyer</button>
       </div>`
    : '<p style="font-size:13px;color:var(--text-faint);text-align:center;cursor:pointer" onclick="showAuthWall()">🔒 Connexion pour commenter</p>';
  openModal('modal-comments');
};

const submitComment = async (gid) => {
  if (!currentUser) { showAuthWall(); return; }
  const input   = document.getElementById(`cm-input-${gid}`);
  const content = input?.value.trim();
  if (!content) return;
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  try {
    await sb.post('comments', { game_id: gid, user_id: currentUser.id, player_name: myPlayer?.name || 'Anonyme', content });
    await loadSocial();
    openComments(gid);
    toast('Avis publié ✓');
  } catch (e) { toastErr(e.message); }
};

const deleteComment = async (id, gid) => {
  try { await sb.del('comments', { id }); await loadSocial(); openComments(gid); toast('Avis supprimé'); }
  catch (e) { toastErr(e.message); }
};

// ─── Newsletter ───────────────────────────────────────────────

const renderNewsletter = async () => {
  try {
    const profiles = await sb.get('profiles', { order: 'created_at.asc' });
    subscribers = profiles || [];
    document.getElementById('sub-count').textContent =
      `(${subscribers.length} abonné${subscribers.length > 1 ? 's' : ''})`;
    document.getElementById('subscribers-grid').innerHTML = subscribers.length
      ? subscribers.map((p) =>
          `<div class="subscriber-row"><span>${esc(p.name)}</span><span>${esc(p.email || '—')}</span></div>`
        ).join('')
      : '<p style="color:var(--text-faint);font-size:13px">Aucun abonné.</p>';
  } catch (e) { console.warn('Subscribers:', e); }
};

const sendNewsletter = async () => {
  if (!isAdmin) return;
  const subject = document.getElementById('nl-subject').value.trim();
  const body    = document.getElementById('nl-body').value.trim();
  if (!subject || !body) { toastErr('Objet et message requis.'); return; }
  const emails  = subscribers.map((s) => s.email).filter(Boolean);
  if (!emails.length) { toastErr('Aucun abonné avec email.'); return; }
  showLoading(`Envoi à ${emails.length} abonné(s)…`);
  let sent = 0, failed = 0, lastErr = '';
  for (const email of emails) {
    try { await sendBrevoEmail(email, '', subject, body); sent++; }
    catch (e) { failed++; lastErr = (e && e.message) || lastErr; }
  }
  hideLoading();
  document.getElementById('nl-result').innerHTML =
    `<span style="color:var(--accent)">✓ ${sent} email${sent > 1 ? 's' : ''} envoyé${sent > 1 ? 's' : ''}</span>`
    + (failed > 0 ? ` · <span style="color:var(--danger)">${failed} échec${failed > 1 ? 's' : ''}</span>` : '')
    + (lastErr ? `<div style="color:var(--text-faint);font-size:11px;margin-top:4px;word-break:break-word">Détail : ${esc(String(lastErr)).slice(0, 300)}</div>` : '');
  toast(`Newsletter envoyée à ${sent} abonné(s) ✓`);
};

const previewNewsletter = () => {
  const subject = document.getElementById('nl-subject').value || '(sans objet)';
  const body    = document.getElementById('nl-body').value    || '(vide)';
  const w       = window.open('', '_blank', 'width=600,height=500');
  w.document.write(
    `<html><head><title>Aperçu</title></head><body style="font-family:sans-serif;max-width:600px;margin:2rem auto;padding:1rem">
     <h2>${subject}</h2><hr><pre style="white-space:pre-wrap;font-family:sans-serif">${body}</pre></body></html>`
  );
};

// ─── Brevo email sender ───────────────────────────────────────

const sendBrevoEmail = async (toEmail, toName, subject, text) => {
  // L'envoi passe par une fonction Netlify : la cle Brevo reste cote serveur.
  const res = await fetch('/.netlify/functions/send-email', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ toEmail, toName, subject, text }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

// ═══════════════════════════════════════════════════════════════
// EVENTS PAGE
// ═══════════════════════════════════════════════════════════════

const renderEvents = () => {
  const el = document.getElementById('events-list');
  document.getElementById('event-add-btn').style.display = isAdmin ? 'flex' : 'none';
  if (!events.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📅</div><p>Aucun événement prévu.</p></div>';
    return;
  }
  const now = new Date();
  const upcoming = events.filter((e) => new Date(e.event_date) >= now);
  const past     = events.filter((e) => new Date(e.event_date) < now);

  const buildEvent = (e, isPast) => {
    const d     = new Date(e.event_date);
    const day   = d.getDate().toString().padStart(2, '0');
    const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
    const month  = months[d.getMonth()];
    const time   = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    return `<div class="event-card" ${isPast ? 'style="opacity:.6"' : ''}>
      <div class="event-date-box">
        <div class="event-day">${day}</div>
        <div class="event-month">${month}</div>
      </div>
      <div class="event-content">
        <div class="event-title">${esc(e.title)}</div>
        ${e.location
          ? `<div class="event-location">
               <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                 <circle cx="12" cy="10" r="3"/>
               </svg>
               ${esc(e.location)}
             </div>`
          : ''}
        <div style="font-size:12px;color:var(--text-faint);margin-bottom:4px">🕐 ${time}</div>
        ${e.description ? `<div class="event-desc">${esc(e.description)}</div>` : ''}
        ${isAdmin && !isPast
          ? `<div class="event-actions">
               <button class="btn-icon danger" onclick="deleteEvent(${e.id})" style="font-size:12px">
                 ${SVG_TRASH} Supprimer
               </button>
             </div>`
          : ''}
      </div>
    </div>`;
  };

  el.innerHTML =
    (upcoming.length
      ? upcoming.map((e) => buildEvent(e, false)).join('')
      : '<p style="color:var(--text-faint);font-size:14px;margin-bottom:1rem">Aucun événement à venir.</p>')
    + (past.length
      ? `<h3 style="font-size:14px;color:var(--text-faint);margin:1.5rem 0 .75rem">Passés</h3>`
        + past.map((e) => buildEvent(e, true)).join('')
      : '');
};

const saveEvent = async () => {
  if (!isAdmin) return;
  const title   = document.getElementById('ev-name').value.trim();
  const dateVal = document.getElementById('ev-date').value;
  if (!title || !dateVal) { toastErr('Titre et date requis.'); return; }
  const notify  = document.getElementById('ev-notify').checked;
  showLoading('Création de l\'événement…');
  try {
    await sb.post('events', {
      title,
      event_date:  new Date(dateVal).toISOString(),
      location:    document.getElementById('ev-location').value.trim(),
      description: document.getElementById('ev-desc').value.trim(),
    });
    await loadSocial();
    closeModal('modal-event');
    renderEvents();
    if (notify) {
      showLoading('Envoi des emails…');
      await sendEventEmails(title, dateVal,
        document.getElementById('ev-location').value.trim(),
        document.getElementById('ev-desc').value.trim()
      );
      toast('Événement créé et emails envoyés ✓');
    } else {
      toast('Événement créé ✓');
    }
  } catch (e) { toastErr(e.message); }
  hideLoading();
  ['ev-name', 'ev-date', 'ev-location', 'ev-desc'].forEach((id) => {
    document.getElementById(id).value = '';
  });
};

const deleteEvent = async (id) => {
  if (!confirm('Supprimer cet événement ?')) return;
  try { await sb.del('events', { id }); await loadSocial(); renderEvents(); toast('Événement supprimé'); }
  catch (e) { toastErr(e.message); }
};

const sendEventEmails = async (title, dateVal, location, desc) => {
  const d       = new Date(dateVal);
  const dateStr = d.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const body    = 'Bonjour,\n\nUne nouvelle soirée jeux est organisée !\n\n📅 '
    + dateStr + ' à ' + timeStr
    + (location ? '\n📍 ' + location : '')
    + '\n\n' + (desc ? desc + '\n\n' : '')
    + 'À très bientôt sur Board Game Tom !\n' + SITE_URL;
  const subject = `🎲 Événement Board Game Tom : ${title}`;
  const all     = subscribers.length
    ? subscribers
    : await sb.get('profiles', {}).catch(() => []);
  for (const p of all) {
    if (p.email) await sendBrevoEmail(p.email, p.name, subject, body).catch(() => {});
  }
};

// ═══════════════════════════════════════════════════════════════
// ACHIEVEMENTS SYSTEM
// ═══════════════════════════════════════════════════════════════

const ACHIEVEMENTS = [
  // Victoires
  { id:'first_win',      icon:'🏆', name:'Première victoire',        desc:'Gagner une partie',                    check: (s) => s.won >= 1 },
  { id:'wins_10',        icon:'🔥', name:'10 victoires',             desc:'Gagner 10 parties',                    check: (s) => s.won >= 10 },
  { id:'wins_50',        icon:'💀', name:'50 victoires',             desc:'Gagner 50 parties',                    check: (s) => s.won >= 50 },
  { id:'wins_100',       icon:'👑', name:'100 victoires',            desc:'Gagner 100 parties',                   check: (s) => s.won >= 100 },
  { id:'wins_500',       icon:'⚡', name:'500 victoires',            desc:'Gagner 500 parties',                   check: (s) => s.won >= 500 },
  // Séries
  { id:'streak_3',       icon:'🌊', name:'Série de 3',               desc:'3 victoires consécutives',             check: (s) => s.bestStreak >= 3 },
  { id:'streak_5',       icon:'🔥', name:'Série de 5',               desc:'5 victoires consécutives',             check: (s) => s.bestStreak >= 5 },
  { id:'streak_10',      icon:'💥', name:'Série de 10',              desc:'10 victoires consécutives',            check: (s) => s.bestStreak >= 10 },
  { id:'streak_20',      icon:'🌪️', name:'Série de 20',              desc:'20 victoires consécutives',            check: (s) => s.bestStreak >= 20 },
  // Rangs
  { id:'rank_or',        icon:'🥇', name:'Rang Or',                  desc:'Atteindre le rang Or',                 check: (s) => s.maxPoints >= 350 },
  { id:'rank_diamant',   icon:'💠', name:'Rang Diamant',             desc:'Atteindre le rang Diamant',            check: (s) => s.maxPoints >= 1200 },
  { id:'rank_challenger',icon:'🏆', name:'Challenger',               desc:'Atteindre le rang Challenger',         check: (s) => s.maxPoints >= 3000 },
  // Parties
  { id:'games_10',       icon:'🎲', name:'10 parties',               desc:'Jouer 10 parties',                     check: (s) => s.played >= 10 },
  { id:'games_50',       icon:'🎮', name:'50 parties',               desc:'Jouer 50 parties',                     check: (s) => s.played >= 50 },
  { id:'games_100',      icon:'🌍', name:'100 parties',              desc:'Jouer 100 parties',                    check: (s) => s.played >= 100 },
  { id:'diff_games_10',  icon:'🃏', name:'Explorateur',              desc:'Jouer à 10 jeux différents',           check: (s) => s.diffGames >= 10 },
  { id:'diff_games_20',  icon:'📚', name:'Bibliothécaire',           desc:'Jouer à 20 jeux différents',           check: (s) => s.diffGames >= 20 },
  // Social
  { id:'sent_challenge', icon:'⚔️', name:'Provocateur',              desc:'Envoyer un défi',                      check: (s) => s.sentChallenges >= 1 },
  { id:'won_challenge',  icon:'🤝', name:'Champion des défis',       desc:'Gagner un défi',                       check: (s) => s.wonChallenges >= 1 },
  { id:'comments_5',     icon:'💬', name:'Critique',                 desc:'Laisser 5 avis',                       check: (s) => s.commentCount >= 5 },
  { id:'suggestion_ok',  icon:'💡', name:'Visionnaire',              desc:'Suggestion approuvée',                 check: (s) => s.approvedSuggestions >= 1 },
  // Régularité
  { id:'days_7',         icon:'📅', name:'7 jours consécutifs',      desc:'Jouer 7 jours de suite',               check: (s) => s.maxConsecDays >= 7 },
  { id:'days_30',        icon:'🗓️', name:'30 jours dans le mois',    desc:'Jouer 30 jours en un mois',            check: (s) => s.maxMonthDays >= 30 },
  { id:'weekly_4',       icon:'🎯', name:'Régulier',                 desc:'1 partie/semaine pendant 4 semaines',  check: (s) => s.weekStreak >= 4 },
  // Spéciaux
  { id:'beat_best',      icon:'🐣', name:'Renversement',             desc:'Battre le meilleur joueur',            check: (s) => s.beatBest },
  { id:'win_5plus',      icon:'🃏', name:'Multijoueur',              desc:'Gagner une partie à 5+ joueurs',       check: (s) => s.wonBig },
  { id:'four_games',     icon:'🌙', name:'Nuit de jeux',             desc:'Jouer à 4 jeux différents en une journée', check: (s) => s.fourGamesDay },
];

const computeAchievementStats = (pid) => {
  const playerMatches = matches.filter((m) => m.players?.some((p) => p.id === pid));
  const won           = playerMatches.filter((m) => m.winners?.includes(pid));

  // Best streak from match history (sequential wins)
  let bestStreak = 0, curStreak = 0;
  const sortedM = [...playerMatches].sort((a, b) => new Date(a.date) - new Date(b.date));
  sortedM.forEach((m) => {
    if (m.winners?.includes(pid)) { curStreak++; bestStreak = Math.max(bestStreak, curStreak); }
    else curStreak = 0;
  });

  // Max points ever reached (approximate from current)
  const p = players.find((x) => x.id === pid);
  const maxPoints = p?.points || 0;

  // Different games
  const diffGames = new Set(playerMatches.map((m) => m.game_id)).size;

  // Challenges
  const sentChallenges = challenges.filter((c) => c.from_player_id === pid).length;
  const wonChallenges  = challenges.filter((c) =>
    c.result_reported && c.match_id &&
    matches.find((m) => m.id === c.match_id && m.winners?.includes(pid))
  ).length;

  // Comments count for this player
  const allComments = Object.values(comments).flat();
  const commentCount = allComments.filter((c) => c.user_id === p?.user_id).length;

  // Approved suggestions
  const approvedSuggestions = suggestions.filter((s) =>
    s.user_id === p?.user_id && s.status === 'approved'
  ).length;

  // Consecutive days
  const days = new Set(playerMatches.map((m) => m.date?.split('T')[0]).filter(Boolean));
  const sortedDays = [...days].sort();
  let maxConsecDays = 0, consecDays = 1;
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(sortedDays[i - 1]);
    const curr = new Date(sortedDays[i]);
    const diff = (curr - prev) / 86400000;
    if (diff === 1) { consecDays++; maxConsecDays = Math.max(maxConsecDays, consecDays); }
    else            { consecDays = 1; }
  }
  if (sortedDays.length === 1) maxConsecDays = 1;

  // Max days in one calendar month
  const monthMap = {};
  days.forEach((d) => {
    const key = d.slice(0, 7);
    monthMap[key] = (monthMap[key] || 0) + 1;
  });
  const maxMonthDays = Math.max(0, ...Object.values(monthMap));

  // Weekly streak (4 consecutive weeks with at least 1 game)
  const weeks = new Set(playerMatches.map((m) => {
    if (!m.date) return null;
    const d = new Date(m.date);
    const y = d.getFullYear();
    const w = Math.floor((d - new Date(y, 0, 1)) / 604800000);
    return `${y}-${w}`;
  }).filter(Boolean));
  const sortedWeeks = [...weeks].sort();
  let weekStreak = 0, wStreak = 1;
  for (let i = 1; i < sortedWeeks.length; i++) {
    const [y1, w1] = sortedWeeks[i - 1].split('-').map(Number);
    const [y2, w2] = sortedWeeks[i].split('-').map(Number);
    const consecutive = (y2 === y1 && w2 === w1 + 1) || (y2 === y1 + 1 && w1 >= 51 && w2 === 0);
    if (consecutive) { wStreak++; weekStreak = Math.max(weekStreak, wStreak); }
    else               wStreak = 1;
  }
  if (sortedWeeks.length >= 1) weekStreak = Math.max(weekStreak, 1);

  // Beat best player (highest points)
  const bestPlayer = [...players].sort((a, b) => (b.points || 0) - (a.points || 0))[0];
  const beatBest   = bestPlayer && bestPlayer.id !== pid &&
    won.some((m) => m.players?.some((pp) => pp.id === bestPlayer.id));

  // Won with 5+ players
  const wonBig = won.some((m) => (m.players || []).length >= 5);

  // 4 different games in one day
  const dayGames = {};
  playerMatches.forEach((m) => {
    if (!m.date) return;
    const d = m.date.split('T')[0];
    if (!dayGames[d]) dayGames[d] = new Set();
    dayGames[d].add(m.game_id);
  });
  const fourGamesDay = Object.values(dayGames).some((s) => s.size >= 4);

  return {
    won: won.length,
    played: playerMatches.length,
    bestStreak,
    maxPoints,
    diffGames,
    sentChallenges,
    wonChallenges,
    commentCount,
    approvedSuggestions,
    maxConsecDays,
    maxMonthDays,
    weekStreak,
    beatBest,
    wonBig,
    fourGamesDay,
  };
};

// ─── Draw progression chart ──────────────────────────────────

const drawProgressionChart = (pid, color) => {
  const canvas = document.getElementById('pp-chart');
  const empty  = document.getElementById('pp-chart-empty');
  if (!canvas) return;

  const playerMatches = matches
    .filter((m) => m.players?.some((p) => p.id === pid) && m.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!playerMatches.length) {
    canvas.style.display = 'none';
    if (empty) { empty.style.display = 'flex'; }
    return;
  }
  canvas.style.display = 'block';
  if (empty) empty.style.display = 'none';

  // Rebuild cumulative points from match history
  let pts = 0;
  const dataPoints = [{ date: '', pts: 0 }];
  playerMatches.forEach((m) => {
    const n       = (m.players || []).length;
    const winIds  = m.winners || [];
    const losers  = sortedLosers((m.players || []).map((p) => p.id), winIds, m.scores);
    const allIds  = (m.players || []).map((p) => p.id);
    const place   = winIds.includes(pid)
      ? 1 : winIds.length + 1 + losers.indexOf(pid);
    const gain    = calcPoints(place, n, m.game_id);
    const loss    = calcLoss(pts, place, n);
    pts = Math.max(0, pts + gain - loss);
    dataPoints.push({ date: m.date.split('T')[0], pts });
  });

  const dpr    = window.devicePixelRatio || 1;
  const W      = canvas.parentElement.clientWidth;
  const H      = 120;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const maxPts = Math.max(...dataPoints.map((d) => d.pts), 1);
  const pad    = { top: 12, right: 16, bottom: 20, left: 36 };
  const cW     = W - pad.left - pad.right;
  const cH     = H - pad.top - pad.bottom;

  const toX = (i) => pad.left + (i / (dataPoints.length - 1)) * cW;
  const toY = (v) => pad.top + cH - (v / maxPts) * cH;

  // Background grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth   = 1;
  [0, 0.25, 0.5, 0.75, 1].forEach((r) => {
    const y = pad.top + cH * (1 - r);
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font      = '9px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxPts * r), pad.left - 4, y + 3);
  });

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
  grad.addColorStop(0,   color + '55');
  grad.addColorStop(1,   color + '00');
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(dataPoints[0].pts));
  dataPoints.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.pts)); });
  ctx.lineTo(toX(dataPoints.length - 1), pad.top + cH);
  ctx.lineTo(toX(0), pad.top + cH);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth   = 2;
  ctx.lineJoin    = 'round';
  ctx.moveTo(toX(0), toY(dataPoints[0].pts));
  dataPoints.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.pts)); });
  ctx.stroke();

  // Last point dot
  const last = dataPoints[dataPoints.length - 1];
  ctx.beginPath();
  ctx.arc(toX(dataPoints.length - 1), toY(last.pts), 4, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#1a1d24';
  ctx.lineWidth   = 2;
  ctx.stroke();

  // X-axis date labels (show first, middle, last)
  ctx.fillStyle   = 'rgba(255,255,255,0.35)';
  ctx.font        = '9px sans-serif';
  ctx.textAlign   = 'center';
  const labelIdxs = [0, Math.floor((dataPoints.length - 1) / 2), dataPoints.length - 1];
  labelIdxs.forEach((i) => {
    const d = dataPoints[i];
    if (!d.date) return;
    ctx.fillText(d.date, toX(i), pad.top + cH + 12);
  });

  // Tooltip on mousemove
  canvas.onmousemove = (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx   = (e.clientX - rect.left) * dpr;
    const closest = dataPoints.reduce((best, d, i) => {
      const dx = Math.abs(toX(i) * dpr - mx);
      return dx < best.dx ? { idx: i, dx } : best;
    }, { idx: 0, dx: Infinity });
    const d   = dataPoints[closest.idx];
    const tip = canvas.nextElementSibling;
    if (tip && tip.dataset.tooltip) {
      tip.textContent = d.date ? `${d.date} — ${d.pts} pts` : `Départ — ${d.pts} pts`;
      tip.style.left  = `${toX(closest.idx) / dpr}px`;
    }
  };

};

// ─── Open player profile modal ────────────────────────────────

const openPlayerProfile = (pid) => {
  const p   = players.find((x) => x.id === pid);
  if (!p) return;
  const rk  = getRank(p.points || 0);
  const s   = playerStats(pid);
  const rate = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;
  const bg  = p.color || '#4ade80';

  document.getElementById('pp-title').textContent = p.name;

  // Summary
  const ra2 = getRankAssets(rk.key) || {};
  const big = window.matchMedia('(min-width:701px)').matches;  // PC = plus grand
  const fb  = big ? 190 : 110;   // taille du cadre
  const av  = big ? 124 : 72;    // diamètre de l'avatar
  const ov  = big ? -92 : -52;   // chevauchement sur la bannière
  const emb = big ? 30  : 22;    // taille de l'emblème
  const nf  = big ? 22  : 17;    // taille du nom
  document.getElementById('pp-summary').innerHTML = `
    <div style="border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);margin-bottom:4px;background:var(--surface)">
      <!-- Bannière affichée en entier (jamais rognée) -->
      ${ra2.banner
        ? `<img src="${ra2.banner}" style="display:block;width:100%;height:auto">`
        : `<div style="width:100%;height:${big ? 180 : 110}px;background:${bg}22"></div>`}
      <!-- Avatar centré qui chevauche le bas de la bannière, infos centrées en dessous -->
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 14px 16px">
        <div style="position:relative;width:${fb}px;height:${fb}px;margin-top:${ov}px">
          ${(() => {
            const pAvImg = AVATARS.find(a => a.id === (p.avatar || 1));
            if (pAvImg) return '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:' + av + 'px;height:' + av + 'px;border-radius:50%;overflow:hidden;z-index:1"><img src="' + pAvImg.src + '" style="width:100%;height:100%;object-fit:cover"></div>';
            const bgS = RANK_AVATAR_BG[rk.baseKey||rk.key] ? 'background-image:url(' + RANK_AVATAR_BG[rk.baseKey||rk.key] + ');background-size:cover' : 'background:' + bg + '22';
            return '<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:' + av + 'px;height:' + av + 'px;border-radius:50%;' + bgS + ';display:flex;align-items:center;justify-content:center;font-size:' + (big ? 34 : 22) + 'px;font-weight:700;color:rgba(255,255,255,0.92);text-shadow:0 1px 4px rgba(0,0,0,0.8);z-index:1">' + ini(p.name) + '</div>';
          })()}
          ${ra2.profile_frame ? `<img src="${ra2.profile_frame}" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:${fb}px;height:${fb}px;object-fit:contain;pointer-events:none;z-index:2">` : ''}
        </div>
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:8px">
          <span style="font-size:${nf}px;font-weight:700;color:var(--text)">${esc(p.name)}</span>
          ${ra2.emblem ? `<img src="${ra2.emblem}" style="width:${emb}px;height:${emb}px;object-fit:contain">` : ''}
          <span style="font-size:13px;color:${rk.color};font-weight:600">${rk.name}</span>
        </div>
        <div style="display:flex;gap:14px;justify-content:center;margin-top:8px;font-size:12px;color:var(--text-muted);flex-wrap:wrap">
          <span style="color:var(--gold)">⭐ ${p.points || 0} pts</span>
          <span>🏆 ${s.won}V</span>
          <span>💔 ${s.lost}D</span>
          <span>🎮 ${s.played}p</span>
          <span>📊 ${rate}%</span>
        </div>
      </div>
    </div>
    <button onclick="openPlayerHistory(${pid})"
            style="width:100%;margin-bottom:4px;padding:11px;border-radius:10px;border:1px solid var(--border);
                   background:var(--bg);color:var(--text);font-family:inherit;font-size:14px;font-weight:600;
                   cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
      🎲 Voir l'historique des parties
    </button>`;

  openModal('modal-player-profile');

  // Draw chart after modal is visible
  setTimeout(() => drawProgressionChart(pid, bg), 50);

  // Achievements
  const achStats  = computeAchievementStats(pid);
  const unlocked  = ACHIEVEMENTS.filter((a) => a.check(achStats));
  const locked    = ACHIEVEMENTS.filter((a) => !a.check(achStats));
  const total     = ACHIEVEMENTS.length;
  document.getElementById('pp-ach-count').textContent =
    `${unlocked.length}/${total} débloqués`;

  const buildAch = (a, isUnlocked) =>
    `<div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
       <div class="ach-icon">${a.icon}</div>
       <div class="ach-info">
         <div class="ach-name">${a.name}</div>
         <div class="ach-desc">${a.desc}</div>
       </div>
     </div>`;

  document.getElementById('pp-achievements').innerHTML =
    unlocked.map((a) => buildAch(a, true)).join('') +
    locked.map((a) => buildAch(a, false)).join('');
};

// Historique des parties d'un joueur donné (ouvert depuis sa fiche profil)
const openPlayerHistory = (pid) => {
  const p = players.find((x) => x.id === pid);
  if (!p) return;
  const list = matches.filter((m) => (m.players || []).some((pp) => pp.id === pid));
  const cards = list.length
    ? list.map(buildMatchCard).join('')
    : '<div class="empty"><div class="empty-icon">🎮</div><p>Aucune partie enregistrée.</p></div>';

  document.getElementById('player-history-overlay')?.remove();
  const ov = document.createElement('div');
  ov.id = 'player-history-overlay';
  ov.style.cssText = 'position:fixed;inset:0;z-index:300;background:rgba(0,0,0,.65);display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:24px 12px';
  ov.onclick = (e) => { if (e.target === ov) ov.remove(); };
  ov.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--radius-lg);max-width:560px;width:100%;margin:auto;padding:18px;box-shadow:0 20px 60px rgba(0,0,0,.5)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <h3 style="margin:0;font-size:17px;color:var(--text)">Parties de ${esc(p.name)}</h3>
        <button onclick="document.getElementById('player-history-overlay').remove()"
                style="background:none;border:none;color:var(--text-muted);font-size:24px;cursor:pointer;line-height:1">×</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">${cards}</div>
    </div>`;
  document.body.appendChild(ov);
};



const startRealtime = () => {
  const wsUrl = SB_URL.replace('https://', 'wss://')
    + `/realtime/v1/websocket?apikey=${SB_KEY}&vsn=1.0.0`;
  const SOCIAL_TABLES = ['comments', 'suggestions', 'challenges', 'events'];
  const DATA_TABLES   = ['games', 'players', 'matches', 'ratings'];
  let reloadTimer = null;

  const scheduleReload = (isSocial) => {
    clearTimeout(reloadTimer);
    reloadTimer = setTimeout(async () => {
      if (isSocial) {
        await loadSocial();
        if      (curPage === 'social') renderCurrentSocialTab();
        else if (curPage === 'events') renderEvents();
        updateNotifBadge();
      } else {
        await loadAll();
        if      (curPage === 'games')   renderGames();
        else if (curPage === 'players') renderPlayers();
        else if (curPage === 'history') renderHistory();
      }
    }, 400);
  };

  const connect = () => {
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      [...DATA_TABLES, ...SOCIAL_TABLES].forEach((table, i) => {
        ws.send(JSON.stringify({
          topic:   `realtime:public:${table}`,
          event:   'phx_join',
          payload: { config: { broadcast: { self: false }, presence: { key: '' } } },
          ref:     String(i + 1),
        }));
      });
    };
    ws.onmessage = (e) => {
      try {
        const msg   = JSON.parse(e.data);
        const table = msg.topic?.split(':')[2];
        if (msg.event === 'heartbeat')
          ws.send(JSON.stringify({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: msg.ref }));
        else if (msg.payload?.type) {
          if (SOCIAL_TABLES.includes(table)) scheduleReload(true);
          else if (DATA_TABLES.includes(table)) scheduleReload(false);
        }
      } catch {}
    };
    ws.onclose  = () => setTimeout(connect, 3000);
    ws.onerror  = () => ws.close();
    setInterval(() => {
      if (ws.readyState === WebSocket.OPEN)
        ws.send(JSON.stringify({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: 'hb' }));
    }, 25_000);
  };
  connect();
};

// ═══════════════════════════════════════════════════════════════
// DECORATIONS
// ═══════════════════════════════════════════════════════════════

const initDecorations = () => {
  if (window.innerWidth < 1200) return;
  const W        = window.innerWidth;
  const CONTENT  = Math.min(1280, W);
  const MARGIN   = (W - CONTENT) / 2;
  const LEFT_MAX  = MARGIN + 120;
  const RIGHT_MIN = W - MARGIN - 120;
  const SIZES    = [115, 145, 130, 165, 120, 155, 140, 125, 150, 135, 160, 120, 145];
  const ANGLES   = [-18, -8, 12, 3, -13, 20, -5, 15, -22, 7, -16, 10, -4, 18, -9, 6, -20, 14];
  const DURATION = 45;

  const pickAngle = (used) => {
    let angle, tries = 0;
    do {
      angle = ANGLES[Math.floor(Math.random() * ANGLES.length)];
      tries++;
    } while (used.some((a) => Math.abs(a - angle) < 8) && tries < 30);
    return angle;
  };

  // Split into left and right groups, alternate by index
  const leftImgs  = DECO_IMGS.filter((_, i) => i % 2 === 0);
  const rightImgs = DECO_IMGS.filter((_, i) => i % 2 === 1);
  const usedAngles = [];

  const placeGroup = (imgs, isLeft) => {
    const n = imgs.length;
    imgs.forEach((src, i) => {
      const w     = SIZES[i % SIZES.length];
      // Evenly spaced vertical delay — same speed, no catching up
      const delay = -((i * DURATION / n) % DURATION);
      const angle = pickAngle(usedAngles);
      usedAngles.push(angle);

      // X position: vary within band
      let x;
      if (isLeft) {
        const positions = [8, Math.max(8, LEFT_MAX - w - 10), Math.max(8, (LEFT_MAX - w) / 2)];
        x = positions[i % positions.length];
      } else {
        const positions = [
          W - w - 8,
          Math.max(RIGHT_MIN, RIGHT_MIN + 10),
          W - w - Math.max(8, (W - RIGHT_MIN) / 2),
        ];
        x = positions[i % positions.length];
      }
      x = Math.max(0, Math.round(x));

      const el    = document.createElement('img');
      el.src      = src;
      const kName = `df${isLeft ? 'l' : 'r'}${i}`;
      const end   = angle + (i % 2 ? 4 : -4);
      const style = document.createElement('style');
      style.textContent = `@keyframes ${kName}{
        0%{bottom:-200px;opacity:0;transform:rotate(${angle}deg)}
        7%{opacity:.65}
        86%{opacity:.65}
        100%{bottom:calc(100vh + 80px);opacity:0;transform:rotate(${end}deg)}
      }`;
      document.head.appendChild(style);
      el.style.cssText = [
        'position:fixed',
        `left:${x}px`,
        'bottom:-200px',
        `width:${w}px`,
        'pointer-events:none',
        'z-index:-1',
        'border-radius:10px',
        'box-shadow:0 8px 32px rgba(0,0,0,0.6)',
        'filter:brightness(0.9) saturate(0.95)',
        `animation:${kName} ${DURATION}s ${delay}s linear infinite`,
      ].join(';');
      document.body.appendChild(el);
    });
  };

  placeGroup(leftImgs,  true);
  placeGroup(rightImgs, false);
};

// ═══════════════════════════════════════════════════════════════
// INITIALISATION
// ═══════════════════════════════════════════════════════════════

const init = async () => {
  handleRecoveryRedirect();   // détecte un retour de lien « mot de passe oublié »
  injectForgotLink();         // ajoute le lien sous le formulaire de connexion
  showLoading('Connexion…');
  const savedToken   = localStorage.getItem('gbs_token');
  const savedRefresh = localStorage.getItem('gbs_refresh');

  if (savedToken) {
    authToken = savedToken;
    try {
      if (isTokenExpired() && savedRefresh) {
        const d = await auth.refresh(savedRefresh);
        if (d?.access_token) {
          authToken = d.access_token;
          saveSession(d.access_token, d.refresh_token || savedRefresh, d.expires_in);
        } else {
          clearSession(); authToken = null;
        }
      }
      if (authToken) {
        const u = await auth.getUser();
        if (u) {
          currentUser    = u;
          const pr       = await sb.get('profiles', { eq: { id: u.id } }).catch(() => []);
          currentProfile = pr?.length ? pr[0] : null;
        } else {
          clearSession(); authToken = null;
        }
      }
    } catch { clearSession(); authToken = null; }
  }

  await Promise.all([loadAll(), loadSocial()]);

  if (games.length === 0) {
    showLoading('Importation de la collection…');
    try {
      for (const g of SEED_GAMES) {
        const { id, ...rest } = g;
        rest.extensions = rest.extensions || [];
        rest.ratings    = [];
        await sb.post('games', rest);
      }
      await loadAll();
    } catch (e) { toastErr('Erreur import : ' + e.message); }
  }

  hideLoading();
  updateUserUI();
  curPage = 'games';
  updateAddBtn();
  renderGames();
  startRealtime();
  initDecorations();
};

init();


