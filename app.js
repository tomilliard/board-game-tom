// app.js — logique applicative (UI, rangs, Supabase, evenements...)


// ── DATA BLOBS ─────────────────────────────────────────────────
const SEED_GAMES = [{"id": 1, "name": "Catan", "status": "own", "price": 39.9, "pmin": 3, "pmax": 4, "duration": "moyen", "notes": "", "extensions": [], "link": "", "ratings": []}, {"id": 4, "name": "7 Wonders", "status": "own", "price": 42.95, "pmin": 2, "pmax": 7, "duration": "moyen", "notes": "", "extensions": [{"name": "Cities", "price": 24.95}, {"name": "Armada", "price": 29.95}, {"name": "Leaders", "price": 29.95}, {"name": "Edifice", "price": 24.95}], "link": "", "ratings": []}, {"id": 6, "name": "Mythologies", "status": "own", "price": 31.5, "pmin": 1, "pmax": 1, "duration": "moyen", "notes": "", "extensions": [], "link": "", "ratings": []}, {"id": 7, "name": "Dune Imperium Insurrection", "status": "own", "price": 62.9, "pmin": 1, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Dune : Imperium", "price": 64.95}, {"name": "Immortalite", "price": 31.5}, {"name": "Lignees", "price": 39.95}, {"name": "Avenement d'Ix", "price": 39.95}], "ratings": [5]}, {"id": 8, "name": "Res Arcana", "status": "own", "price": 34.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Perlea Imperii", "price": 17.95}, {"name": "Lux et Tenebrae", "price": 17.95}], "ratings": []}, {"id": 9, "name": "Nidavellir", "status": "own", "price": 33.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Thingvellir", "price": 13.5}, {"name": "Idavoll", "price": 13.5}], "ratings": []}, {"id": 10, "name": "Citadelle", "status": "own", "price": 14.95, "pmin": 2, "pmax": 7, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 11, "name": "Terraforming Mars", "status": "own", "price": 59.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "prelude 2", "price": 19.95}, {"name": "prelude", "price": 19.95}, {"name": "Turmoil", "price": 24.46}], "ratings": []}, {"id": 12, "name": "Château Combo", "status": "own", "price": 17.95, "pmin": 2, "pmax": 5, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "cachot", "price": 5.9}], "ratings": []}, {"id": 13, "name": "The Witcher L'ancien Monde", "status": "own", "price": 81.9, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Mages", "price": 59}, {"name": "Legendary Hunt", "price": 54.9}, {"name": "Skellige", "price": 49}], "ratings": []}, {"id": 14, "name": "Iki", "status": "own", "price": 55.9, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Akebono", "price": 29.9}], "ratings": []}, {"id": 15, "name": "Altered TCG", "status": "own", "price": 358, "pmin": 1, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 16, "name": "Cyberpunk TCG", "status": "own", "price": 179.95, "pmin": 1, "pmax": 2, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 17, "name": "Brass Birmingham", "status": "own", "price": 62.95, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 18, "name": "Courtisans", "status": "own", "price": 17.95, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "courtisans", "price": 17.95}], "ratings": []}, {"id": 19, "name": "Moon colony Bloodbath", "status": "own", "price": 39.5, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 20, "name": "Recall", "status": "own", "price": 70.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 21, "name": "World Order", "status": "own", "price": 61.9, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Dans la tourmante", "price": 20.9}, {"name": "Diplomatie et Domination", "price": 20.9}], "ratings": []}, {"id": 22, "name": "Duel pour Cardia", "status": "own", "price": 13.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Protecteur de la nature", "price": 4.5}], "ratings": []}, {"id": 23, "name": "Dorfromantik - Sakura", "status": "own", "price": 39.9, "pmin": 1, "pmax": 6, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 24, "name": "Legion : Abyss Universe", "status": "own", "price": 22.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 25, "name": "Riftbound TCG", "status": "own", "price": 294.85, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 26, "name": "Kronologic Babylon", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 27, "name": "Kronologic Cuzco", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 28, "name": "Kronologic Paris", "status": "own", "price": 22.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "L'invite Mystere", "price": 7.5}, {"name": "Panique a L'opera", "price": 7.5}], "ratings": []}, {"id": 29, "name": "Dead Cells", "status": "own", "price": 76.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 30, "name": "Carcassone", "status": "own", "price": 64.9, "pmin": 2, "pmax": 6, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Extension 3", "price": 15.9}, {"name": "Extension 5", "price": 15.9}, {"name": "Extension 6", "price": 15.9}, {"name": "Extensions 7", "price": 15.9}, {"name": "Extension 8", "price": 15.9}, {"name": "Extension 9", "price": 15.9}], "ratings": []}, {"id": 31, "name": "Arcs", "status": "own", "price": 58.5, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Heros et Savoir", "price": 10.9}, {"name": "Les confins devastes", "price": 99.9}], "ratings": []}, {"id": 32, "name": "SETI", "status": "own", "price": 62.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Recherche d'intelligence", "price": 28.95}], "ratings": []}, {"id": 33, "name": "Root", "status": "own", "price": 81.95, "pmin": 1, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Monde Souterrain", "price": 59.95}], "ratings": []}, {"id": 34, "name": "The Vale of Eternity", "status": "own", "price": 26.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Artifacts", "price": 16.5}, {"name": "Curse", "price": 16.5}], "ratings": []}, {"id": 35, "name": "Skull King", "status": "own", "price": 14.9, "pmin": 2, "pmax": 8, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Extensions", "price": 9.5}], "ratings": []}, {"id": 36, "name": "Duel pour la terre du milieu", "status": "own", "price": 27.95, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 37, "name": "Dewan", "status": "own", "price": 33.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 38, "name": "L'ombre du Kraken", "status": "own", "price": 35.95, "pmin": 3, "pmax": 15, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 39, "name": "Divinus", "status": "own", "price": 149.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Divinus", "price": 58.9}], "ratings": []}, {"id": 40, "name": "foret mixte", "status": "own", "price": 25.95, "pmin": 2, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Alpes", "price": 9.5}, {"name": "Lisiere de la foret", "price": 9.5}, {"name": "Exploration", "price": 9.5}], "ratings": []}, {"id": 41, "name": "Rivals", "status": "own", "price": 53.9, "pmin": 2, "pmax": 6, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 42, "name": "Kutna Hora", "status": "own", "price": 54.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 43, "name": "It's a wonderful World", "status": "own", "price": 39.95, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Guerre ou paix", "price": 19.95}, {"name": "Loisirs et Decadence", "price": 33.95}, {"name": "Corruption et Ascension", "price": 30}], "ratings": []}, {"id": 44, "name": "Sankore", "status": "own", "price": 71.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 45, "name": "Cyberpunk : Gangs of night city", "status": "own", "price": 99.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Families et Parias", "price": 45.95}], "ratings": []}, {"id": 46, "name": "Monumental", "status": "own", "price": 59.9, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Lost Kingdoms", "price": 40.9}, {"name": "Africain Empire", "price": 40.9}], "ratings": []}, {"id": 47, "name": "Black Forest", "status": "own", "price": 67.5, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 48, "name": "Akropolis", "status": "own", "price": 26.9, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Athena", "price": 11.9}, {"name": "Pantheon", "price": 11.9}], "ratings": []}, {"id": 49, "name": "Naishi", "status": "own", "price": 16.9, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 50, "name": "Far Away", "status": "own", "price": 17.9, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Le Peuple du dessous", "price": 5.9}, {"name": "Sous un ciel d'etoiles", "price": 5.9}], "ratings": []}, {"id": 51, "name": "Harmonies", "status": "own", "price": 32.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 52, "name": "Chateau Blanc", "status": "own", "price": 31.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [{"name": "Mathca", "price": 17.9}], "ratings": []}, {"id": 53, "name": "Eternitium", "status": "own", "price": 21.95, "pmin": 1, "pmax": 5, "duration": "court", "link": "", "notes": "", "extensions": [{"name": "Next Gen", "price": 5.95}], "ratings": []}, {"id": 54, "name": "Darwin's Journey", "status": "own", "price": 44.9, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 55, "name": "Flowers", "status": "own", "price": 13.5, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 56, "name": "Senjutsu", "status": "own", "price": 58.95, "pmin": 1, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 57, "name": "La Famiglia", "status": "own", "price": 76.95, "pmin": 2, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 58, "name": "Now!", "status": "own", "price": 13.5, "pmin": 3, "pmax": 8, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 59, "name": "Living Forest", "status": "own", "price": 34.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 60, "name": "Dilemme du Roi", "status": "own", "price": 78.95, "pmin": 1, "pmax": 5, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 61, "name": "Rauha", "status": "own", "price": 35.5, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Syntyma", "price": 13.9}], "ratings": []}, {"id": 62, "name": "Tower Up", "status": "own", "price": 35.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 63, "name": "Cites Royales", "status": "own", "price": 19.9, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 64, "name": "Take Time", "status": "own", "price": 22.5, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 65, "name": "Abyss", "status": "own", "price": 41.95, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [{"name": "Kraken", "price": 18.95}, {"name": "Leviathan", "price": 18.95}, {"name": "De Profundis", "price": 5.5}], "ratings": []}, {"id": 66, "name": "Civolution", "status": "own", "price": 80.95, "pmin": 1, "pmax": 4, "duration": "long", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 67, "name": "For a Crown", "status": "own", "price": 31.5, "pmin": 1, "pmax": 5, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 68, "name": "Skyrise", "status": "own", "price": 84, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 69, "name": "Gwent", "status": "own", "price": 34.95, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 70, "name": "Rebirth", "status": "own", "price": 36.95, "pmin": 1, "pmax": 4, "duration": "moyen", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 71, "name": "Zenith", "status": "own", "price": 29.95, "pmin": 2, "pmax": 4, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 72, "name": "Odin", "status": "own", "price": 12, "pmin": 2, "pmax": 6, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}, {"id": 73, "name": "Toy battle", "status": "own", "price": 22.5, "pmin": 2, "pmax": 2, "duration": "court", "link": "", "notes": "", "extensions": [], "ratings": []}];




// Insets exacts de l'avatar dans chaque cadre (mesurés sur les PNGs 150x150)
const FRAME_HOLES = {
  bois:       { top: 31, left: 25, size: 100, top_m: 17, left_m: 14, size_m: 53 },
  // Bois : un cadre par division (V→I). bois_4 = arbre-monde (trou ovale).
  bois_1:     { top: 21, left: 21, size: 108, top_m: 11, left_m: 11, size_m: 58 },  // Wood V
  bois_2:     { top: 21, left: 21, size: 108, top_m: 11, left_m: 11, size_m: 58 },  // Wood IV
  bois_3:     { top: 21, left: 21, size: 108, top_m: 11, left_m: 11, size_m: 58 },  // Wood III
  bois_4:     { top: 31, left: 25, size: 100, top_m: 17, left_m: 14, size_m: 53 },  // Wood II (arbre-monde)
  bois_5:     { top: 21, left: 21, size: 108, top_m: 11, left_m: 11, size_m: 58 },  // Wood I
  bronze:     { top: 19, left: 19, size: 112, top_m: 10, left_m: 10, size_m: 60 },
  // Bronze : un cadre par division (V→I).
  bronze_1:   { top: 21, left: 19, size: 112, top_m: 11, left_m: 10, size_m: 60 },  // Bronze V
  bronze_2:   { top: 26, left: 25, size: 100, top_m: 15, left_m: 14, size_m: 53 },  // Bronze IV
  bronze_3:   { top: 17, left: 17, size: 116, top_m: 9,  left_m: 9,  size_m: 62 },  // Bronze III
  bronze_4:   { top: 20, left: 20, size: 110, top_m: 11, left_m: 11, size_m: 59 },  // Bronze II
  bronze_5:   { top: 20, left: 20, size: 110, top_m: 11, left_m: 11, size_m: 59 },  // Bronze I
  argent:     { top: 21, left: 20, size: 110, top_m: 11, left_m: 11, size_m: 59 },
  // Argent : un cadre par division (V→I).
  argent_1:   { top: 24, left: 23, size: 105, top_m: 13, left_m: 12, size_m: 56 },  // Argent V
  argent_2:   { top: 20, left: 20, size: 110, top_m: 11, left_m: 11, size_m: 59 },  // Argent IV
  argent_3:   { top: 20, left: 20, size: 111, top_m: 11, left_m: 11, size_m: 59 },  // Argent III
  argent_4:   { top: 18, left: 18, size: 115, top_m: 10, left_m: 10, size_m: 61 },  // Argent II
  argent_5:   { top: 15, left: 15, size: 120, top_m: 8,  left_m: 8,  size_m: 64 },  // Argent I
  or:         { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  // Or : un cadre par division (V→I).
  or_1:       { top: 19, left: 18, size: 113, top_m: 10, left_m: 10, size_m: 60 },  // Or V
  or_2:       { top: 22, left: 22, size: 107, top_m: 12, left_m: 12, size_m: 57 },  // Or IV
  or_3:       { top: 21, left: 22, size: 107, top_m: 11, left_m: 12, size_m: 57 },  // Or III
  or_4:       { top: 22, left: 22, size: 107, top_m: 12, left_m: 12, size_m: 57 },  // Or II
  or_5:       { top: 30, left: 29, size: 92,  top_m: 16, left_m: 15, size_m: 49 },  // Or I
  platine:    { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  // Platine : un cadre par division (V→I).
  platine_1:  { top: 23, left: 23, size: 104, top_m: 12, left_m: 12, size_m: 56 },  // Platine V
  platine_2:  { top: 19, left: 18, size: 113, top_m: 10, left_m: 10, size_m: 60 },  // Platine IV
  platine_3:  { top: 20, left: 21, size: 108, top_m: 11, left_m: 11, size_m: 58 },  // Platine III
  platine_4:  { top: 21, left: 21, size: 107, top_m: 11, left_m: 11, size_m: 57 },  // Platine II
  platine_5:  { top: 27, left: 23, size: 104, top_m: 15, left_m: 12, size_m: 55 },  // Platine I
  diamant:    { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  // Diamant : un cadre par division (V→I).
  diamant_1:  { top: 30, left: 30, size: 88, top_m: 16, left_m: 16, size_m: 47 },  // Diamant V
  diamant_2:  { top: 36, left: 34, size: 81, top_m: 19, left_m: 18, size_m: 43 },  // Diamant IV
  diamant_3:  { top: 34, left: 34, size: 81, top_m: 18, left_m: 18, size_m: 43 },  // Diamant III
  diamant_4:  { top: 35, left: 34, size: 81, top_m: 19, left_m: 18, size_m: 43 },  // Diamant II
  diamant_5:  { top: 39, left: 36, size: 78, top_m: 21, left_m: 19, size_m: 42 },  // Diamant I
  maitre:     { top: 30, left: 30, size: 90, top_m: 16, left_m: 16, size_m: 48 },
  grandmaitre:{ top: 22, left: 23, size: 104, top_m: 12, left_m: 12, size_m: 55 },
  challenger: { top: 14, left: 16, size: 118, top_m: 8, left_m: 9, size_m: 63 },
};

// Cadre cosmétique choisi par un joueur (si présent dans FRAMES), sinon null → cadre du rang.
const cosmeticFrame = (p) => (p && p.frame ? (FRAMES.find((f) => f.id === p.frame) || null) : null);
// Fond de carte cosmétique choisi (si présent dans BACKGROUNDS), sinon null → fond uni.
const cosmeticBg = (p) => (p && p.cardbg ? (BACKGROUNDS.find((b) => b.id === p.cardbg) || null) : null);

// Fond d'ambiance associé à un JEU (affiché au survol en Collection et en fond des cartes Parties).
const GAME_BG_DEFS = [
  { src: 'assets/bg_azul.webp',      names: ['Azul les Vitraux de Sintra', 'Azul Vitraux de Sintra', 'Azul: Les Vitraux de Sintra', 'Azul Sintra', 'Azul', 'vitraux de sintra'] },
  { src: 'assets/bg_arknova.webp',   names: ['Ark Nova', 'ark nova'] },
  { src: 'assets/bg_arcs.webp',      names: ['Arcs', 'arcs'] },
  { src: 'assets/bg_akropolis.webp', names: ['Akropolis', 'Acropolis', 'akropolis'] },
  { src: 'assets/bg_abyss.webp',     names: ['Abyss', 'abyss'] },
  { src: 'assets/bg_citesroyales.webp', names: ['Cités Royales', 'Cites Royales', 'cités royales', 'cites royales'] },
  { src: 'assets/bg_citadelles.webp',   names: ['Citadelles', 'Citadelle', 'Citadels', 'citadelle'] },
  { src: 'assets/bg_chateaucombo.webp', names: ['Château Combo', 'Chateau Combo', 'chateau combo'] },
  { src: 'assets/bg_chateaublanc.webp', names: ['Le Château Blanc', 'Château Blanc', 'Chateau Blanc', 'The White Castle', 'White Castle', 'chateau blanc'] },
  { src: 'assets/bg_carcassonne.webp',  names: ['Carcassonne', 'Carcassone', 'carcassonne'] },
  { src: 'assets/bg_brass.webp',        names: ['Brass Birmingham', 'Brass: Birmingham', 'Brass', 'brass'] },
  { src: 'assets/bg_blackforest.webp',  names: ['Black Forest', 'BlackForest', 'black forest'] },
  { src: 'assets/bg_barrage.webp',      names: ['Barrage', 'barrage'] },
  { src: 'assets/bg_dewan.webp',      names: ['Dewan', 'dewan'] },
  { src: 'assets/bg_deadcells.webp',  names: ['Dead Cells', 'DeadCells', 'dead cells'] },
  { src: 'assets/bg_darwins.webp',    names: ["Darwin's Journey", 'Darwins Journey', 'Darwin Journey', "darwin's journey"] },
  { src: 'assets/bg_cybertcg.webp',   names: ['Cyberpunk TCG', 'Cyberpunk 2077 TCG', 'cyberpunk tcg'] },
  { src: 'assets/bg_courtisans.webp', names: ['Courtisans', 'Courtisan', 'courtisans'] },
  { src: 'assets/bg_civolution.webp', names: ['Civolution', 'civolution'] },
  { src: 'assets/bg_dune.webp',      names: ['Dune Imperium Insurrection', 'Dune Imperium', 'Dune', 'dune'] },
  { src: 'assets/bg_7wonders.webp',  names: ['7 Wonders', '7wonders', 'seven wonders'] },
  { src: 'assets/bg_foret.webp',     names: ['foret mixte', 'forêt mixte', 'foret'] },
  { src: 'assets/bg_iaww.webp',      names: ["It's a Wonderful World", 'It\u2019s a Wonderful World', 'Its a Wonderful World', 'wonderful world'] },
  { src: 'assets/bg_catan.webp',     names: ['Catan', 'Catane', 'Les Colons de Catane', 'Colons de Catane'] },
  { src: 'assets/bg_cyberpunk.webp', names: ['Cyberpunk Gangs of Night City', 'Gangs of Night City', 'night city'] },
  { src: 'assets/bg_harmonies.webp', names: ['Harmonies', 'harmonies'] },
  { src: 'assets/bg_zenith.webp',    names: ['Zenith', 'zenith'] },
  { src: 'assets/bg_toybattle.webp', names: ['Toy Battle', 'ToyBattle', 'toy battle'] },
  { src: 'assets/bg_vale.webp',      names: ['The Vale of Eternity', 'Vale of Eternity', "Vallée de l'Éternité", 'vale of eternity'] },
  { src: 'assets/bg_eternaldecks.webp',  names: ['Eternal Decks', 'EternalDecks', 'eternal decks'] },
  { src: 'assets/bg_endeavor.webp',      names: ['Endeavor Eaux Profondes', 'Endeavor : Eaux Profondes', 'Endeavor: Deep Sea', 'Endeavor Deep Sea', 'Endeavor', 'eaux profondes'] },
  { src: 'assets/bg_terredumilieu.webp', names: ['Duel pour la Terre du Milieu', 'Terre du Milieu', 'Duel for Middle-earth', 'middle earth'] },
  { src: 'assets/bg_cardia.webp',        names: ['Duel de Cardia', 'Duel pour Cardia', 'Cardia', 'cardia'] },
  { src: 'assets/bg_dorfromantik.webp',  names: ['Dorfromantik Sakura', 'Dorfromantik : Sakura', 'Dorfromantik', 'sakura'] },
  { src: 'assets/bg_divinus.webp',       names: ['Divinus', 'divinus'] },
  { src: 'assets/bg_dilemmeduroi.webp',  names: ['Le Dilemme du Roi', 'Dilemme du Roi', 'Dillemme du roi', "The King's Dilemma", "king's dilemma", 'dilemme du roi'] },
  { src: 'assets/bg_diceforge.webp',     names: ['Dice Forge', 'DiceForge', 'dice forge'] },
  { src: 'assets/bg_faraway.webp',       names: ['Far Away', 'FarAway', 'far away'] },
  { src: 'assets/bg_everdell.webp',      names: ['Everdell', 'everdell'] },
  { src: 'assets/bg_evenfall.webp',      names: ['Evenfall', 'evenfall'] },
  { src: 'assets/bg_eternitium.webp',    names: ['Eternitium', 'Eternitum', 'eternitium'] },
  { src: 'assets/bg_flowers.webp',       names: ['Flowers', 'flowers'] },
  { src: 'assets/bg_iki.webp',           names: ['Iki', 'IKI'] },
  { src: 'assets/bg_hybris.webp',        names: ['Hybris', 'Hybris Disordered Cosmos', 'Hybris : Disordered Cosmos', 'hybris'] },
  { src: 'assets/bg_gwent.webp',         names: ['Gwent', 'Gwynt', 'gwent'] },
  { src: 'assets/bg_gloomhaven.webp',    names: ['Gloomhaven', 'Gloomhaven Les Mâchoires du Lion', 'Gloomhaven: Jaws of the Lion', 'gloomhaven'] },
  { src: 'assets/bg_galacticcruise.webp', names: ['Galactic Cruise', 'GalacticCruise', 'galactic cruise'] },
  { src: 'assets/bg_foracrown.webp',      names: ['For a Crown', 'For A Crown', 'for a crown'] },
  { src: 'assets/bg_livingforest.webp',      names: ['Living Forest', 'LivingForest', 'living forest'] },
  { src: 'assets/bg_lafamiglia.webp',        names: ['La Famiglia', 'Famiglia', 'la famiglia'] },
  { src: 'assets/bg_dominion.webp',          names: ['Dominion', 'dominion'] },
  { src: 'assets/bg_hoth.webp',              names: ['La Bataille de Hoth', 'Bataille de Hoth', 'Star Wars La Bataille de Hoth', 'Star Wars : La Bataille de Hoth', 'Battle of Hoth', 'hoth'] },
  { src: 'assets/bg_kraken.webp',            names: ["L'Ombre du Kraken", 'Ombre du Kraken', 'Shadow of the Kraken', 'kraken'] },
  { src: 'assets/bg_kronologiccuzco.webp',   names: ['Kronologic Cuzco', 'Kronologic : Cuzco', 'Cuzco', 'cuzco'] },
  { src: 'assets/bg_kronologicbabylon.webp', names: ['Kronologic Babylone', 'Kronologic Babylon', 'Kronologic : Babylone', 'Babylone', 'Babylon', 'babylone'] },
  { src: 'assets/bg_kronologicparis.webp',   names: ['Kronologic Paris 1920', 'Kronologic : Paris 1920', 'Kronologic Paris', 'Kronologic', 'kronologic'] },
  { src: 'assets/bg_ironwood.webp',          names: ['Ironwood', 'IronWood', 'Iron Wood', 'ironwood'] },
  { src: 'assets/bg_now.webp',         names: ['Now !', 'Now!', 'Now'] },
  { src: 'assets/bg_nidavellir.webp',  names: ['Nidavellir', 'nidavellir'] },
  { src: 'assets/bg_nemesis.webp',     names: ['Nemesis', 'nemesis'] },
  { src: 'assets/bg_narak.webp',       names: ['Les Ruines Perdues de Narak', 'Ruines Perdues de Narak', 'Narak', 'Lost Ruins of Arnak', 'Arnak', 'narak'] },
  { src: 'assets/bg_naishi.webp',      names: ['Naishi', 'naishi'] },
  { src: 'assets/bg_mytho.webp',       names: ['Mythologies', 'Mythology', 'mythologies'] },
  { src: 'assets/bg_mooncolony.webp',  names: ['Moon Colony Bloodbath', 'Moon Colony', 'moon colony'] },
  { src: 'assets/bg_monumental.webp',  names: ['Monumental', 'monumental'] },
  { src: 'assets/bg_maracaibo.webp',   names: ['Maracaibo', 'Maracaïbo', 'maracaibo'] },
  { src: 'assets/bg_root.webp',       names: ['Root', 'root'] },
  { src: 'assets/bg_rivals.webp',     names: ['Rivals', 'rivals'] },
  { src: 'assets/bg_risingsun.webp',  names: ['Rising Sun', 'RisingSun', 'rising sun'] },
  { src: 'assets/bg_riftbound.webp',  names: ['Riftbound', 'Riftbound TCG', 'Riftbound League of Legends', 'riftbound'] },
  { src: 'assets/bg_resarcana.webp',  names: ['Res Arcana', 'ResArcana', 'res arcana'] },
  { src: 'assets/bg_recall.webp',     names: ['Recall', 'recall'] },
  { src: 'assets/bg_rebirth.webp',    names: ['Rebirth', 'rebirth'] },
  { src: 'assets/bg_rauha.webp',      names: ['Rauha', 'rauha'] },
  { src: 'assets/bg_odin.webp',       names: ['Odin', 'odin'] },
  { src: 'assets/bg_taketime.webp',     names: ['Take Time', 'TakeTime', 'take time'] },
  { src: 'assets/bg_smallworld.webp',   names: ['Small World', 'SmallWorld', 'small world'] },
  { src: 'assets/bg_slaythespire.webp', names: ['Slay the Spire', 'Slay The Spire', 'slay the spire'] },
  { src: 'assets/bg_skyrise.webp',      names: ['Skyrise', 'skyrise'] },
  { src: 'assets/bg_skullking.webp',    names: ['Skull King', 'SkullKing', 'skull king'] },
  { src: 'assets/bg_seti.webp',         names: ['SETI', 'Seti', 'seti'] },
  { src: 'assets/bg_senjutsu.webp',     names: ['Senjutsu', 'senjutsu'] },
  { src: 'assets/bg_scythe.webp',       names: ['Scythe', 'scythe'] },
  { src: 'assets/bg_sankore.webp',      names: ['Sankoré', 'Sankore', 'sankore'] },
  { src: 'assets/bg_worldwonders.webp',   names: ['World Wonders', 'WorldWonders', 'world wonders'] },
  { src: 'assets/bg_worldorder.webp',     names: ['World Order', 'WorldOrder', 'world order'] },
  { src: 'assets/bg_wonderlandswar.webp', names: ["Wonderland's War", 'Wonderlands War', 'Wonderland War', 'wonderland'] },
  { src: 'assets/bg_virtu.webp',          names: ['Virtù', 'Virtu', 'virtù', 'virtu'] },
  { src: 'assets/bg_towerup.webp',        names: ['Tower Up', 'TowerUp', 'tower up'] },
  { src: 'assets/bg_throughtheages.webp', names: ['Through the Ages', 'Through The Ages', 'through the ages'] },
  { src: 'assets/bg_witcher.webp',        names: ['The Witcher', 'The Witcher Le Vieux Monde', 'The Witcher: Old World', 'Witcher', 'witcher'] },
  { src: 'assets/bg_terraforming.webp',   names: ['Terraforming Mars', 'TerraformingMars', 'terraforming mars', 'terraforming'] },
  { src: 'assets/bg_kutnahora.webp',      names: ['Kutná Hora', 'Kutna Hora', 'Kunta Hora', 'kutna hora', 'kunta hora'] },
];
const gameBgSrc = (g) => {
  if (!g || !g.name) return null;
  const nm = g.name.toLowerCase().trim();
  for (const d of GAME_BG_DEFS) if (d.names.some((n) => n.toLowerCase() === nm)) return d.src;
  for (const d of GAME_BG_DEFS) if (d.names.some((n) => nm.includes(n.toLowerCase()))) return d.src;
  return null;
};

// Cadres spécifiques par division (priorité sur le cadre du rang de base).
// Clé = clé de rang exacte (ex. bois_1 = Bois V).
const FRAME_BY_DIV = {
  bois_1: 'assets/bois_1_frame.png',  // Wood V
  bois_2: 'assets/bois_2_frame.png',  // Wood IV
  bois_3: 'assets/bois_3_frame.png',  // Wood III
  bois_4: 'assets/bois_frame.png',    // Wood II (arbre-monde, fichier déjà présent)
  bois_5: 'assets/bois_5_frame.png',  // Wood I
  bronze_1: 'assets/bronze_1_frame.png',  // Bronze V
  bronze_2: 'assets/bronze_2_frame.png',  // Bronze IV
  bronze_3: 'assets/bronze_3_frame.png',  // Bronze III
  bronze_4: 'assets/bronze_4_frame.png',  // Bronze II
  bronze_5: 'assets/bronze_5_frame.png',  // Bronze I
  argent_1: 'assets/argent_1_frame.png',  // Argent V
  argent_2: 'assets/argent_2_frame.png',  // Argent IV
  argent_3: 'assets/argent_3_frame.png',  // Argent III
  argent_4: 'assets/argent_4_frame.png',  // Argent II
  argent_5: 'assets/argent_5_frame.png',  // Argent I
  or_1: 'assets/or_1_frame.png',  // Or V
  or_2: 'assets/or_2_frame.png',  // Or IV
  or_3: 'assets/or_3_frame.png',  // Or III
  or_4: 'assets/or_4_frame.png',  // Or II
  or_5: 'assets/or_5_frame.png',  // Or I
  platine_1: 'assets/platine_1_frame.png',  // Platine V
  platine_2: 'assets/platine_2_frame.png',  // Platine IV
  platine_3: 'assets/platine_3_frame.png',  // Platine III
  platine_4: 'assets/platine_4_frame.png',  // Platine II
  platine_5: 'assets/platine_5_frame.png',  // Platine I
  diamant_1: 'assets/diamant_1_frame.png',  // Diamant V
  diamant_2: 'assets/diamant_2_frame.png',  // Diamant IV
  diamant_3: 'assets/diamant_3_frame.png',  // Diamant III
  diamant_4: 'assets/diamant_4_frame.png',  // Diamant II
  diamant_5: 'assets/diamant_5_frame.png',  // Diamant I
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
let pendingMatches = [];   // parties enregistrées en attente de validation
let ratingsCache = {};   // { gameId: { sum, count, myScore } }
let comments     = {};   // { gameId: Comment[] }
let suggestions  = [];
let challenges   = [];
let events       = [];
let chatMessages = [];      // chat global (chronologique)
let chatLoaded   = false;   // chargé seulement quand l'onglet Chat est ouvert
let chatError    = false;
let subscribers  = [];

let authToken     = null;
let currentUser   = null;
let currentProfile = null;

let isAdmin      = false;
let isOwner      = false;   // vrai uniquement si le compte connecté a profiles.is_admin = true
let curPage      = 'classement';
let curTab       = 'all';
let socialTab    = 'suggestions';

let editGameId       = null;
let modalExts        = [];
let selColor         = '#4ade80';
let selAvatar        = null;  // id de l'avatar sélectionné
let selFrame         = null;  // id du cadre cosmétique sélectionné (null/0 = cadre du rang)
let selBg            = null;  // id du fond de carte cosmétique (null/0 = fond uni)
let selTitle         = null;  // id du titre équipé (null/0 = aucun)
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

// ─── Ajustement « niveau » des gains de victoire (indexé sur l'Elo) ───
// • Bonus d'exploit : battre des joueurs MIEUX notés rapporte des points.
// • Malus de farm   : battre des joueurs BIEN PLUS FAIBLES en rapporte un peu
//   moins — MAIS jamais contre un débutant (exempté), jamais sous un plancher,
//   et toujours plafonné.
const UPSET_DIV    = 40;     // 40 pts d'Elo AU-DESSUS de toi = +1 pt (bonus)
const UPSET_CAP    = 10;     // bonus max par partie
const MALUS_DIV    = 50;     // 50 pts d'Elo EN DESSOUS de toi = -1 pt (malus)
const MALUS_CAP    = 4;      // malus max par partie
const WIN_FLOOR    = 0.6;    // une victoire garde toujours ≥ 60 % de ses points de base
const NEWBIE_GAMES = 10;     // adversaire avec < 10 parties = débutant (exempté du malus)

// beaten = [{ elo, newbie }] — adversaires réellement battus (hors co-vainqueurs).
const skillAdjust = (myElo, beaten) => {
  let up = 0, down = 0;
  beaten.forEach(({ elo, newbie }) => {
    const gap = elo - myElo;
    if (gap > 0) up += gap;
    else if (!newbie) down += -gap;
  });
  return {
    bonus: Math.min(UPSET_CAP, Math.round(up / UPSET_DIV)),
    malus: Math.min(MALUS_CAP, Math.round(down / MALUS_DIV)),
  };
};

// ─── Note Elo (niveau relatif) ───────────────────────────────
// Contrairement aux points (cumulés, récompensent le volume), l'Elo mesure
// le NIVEAU : battre plus fort que soi rapporte beaucoup, perdre contre plus
// faible coûte cher. La somme des variations d'une partie est ~nulle.
const ELO_BASE = 1000;

const getElo = (p) => Math.round((p && p.elo != null) ? p.elo : ELO_BASE);

// Expérience du joueur (sert au facteur K) — comptée sur la SAISON en cours.
const eloGamesPlayed = (pid) =>
  seasonMatches().filter((m) => m.players?.some((pp) => pp.id === pid)).length;

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

// ─── Saisons & rang d'affichage ──────────────────────────────
// Le rang AFFICHÉ n'est plus un simple seuil de points. Sommet de l'échelle :
//   • Challenger    : place UNIQUE = le n°1 aux points de la saison (trône).
//   • Grand Maître  : club ouvert = tout joueur dont l'Elo dépasse un seuil.
//   • Maître → Bois : aux points (inchangé), plafonné à Maître pour les autres.
// Ordre de priorité d'affichage : Challenger > Grand Maître > Maître > …

// ⚠️ SEUIL GRAND MAÎTRE — à CALER après le 1ᵉʳ backfill, une fois qu'on connaît
// l'étalement réel des Elo (vise le top ~10 %, ex. 1500). Tant que les assets
// "grandmaitre" ne sont pas en place, on le laisse DÉSACTIVÉ (valeur très haute).
const GM_ELO_THRESHOLD = 100000;   // ← mettre p.ex. 1500 quand prêt

const MAITRE_MIN     = 2000;                 // points : entrée dans Maître
const CHALLENGER_IDX = RANKS.length - 1;     // index du palier Challenger
const MAITRE_TOP_IDX = CHALLENGER_IDX - 1;   // index de Maître I (plafond)
const CHALLENGER_RANK = RANKS[CHALLENGER_IDX];
const GM_RANK = { name: 'Grand Maître', key: 'grandmaitre', baseKey: 'grandmaitre',
                  color: '#22d3ee', min: 0, max: Infinity, sub: null };

// État de la saison courante (rempli par loadAll depuis la table `seasons`).
let currentSeason = null;          // { id, number, started_at }
let allSeasons    = [];            // toutes les saisons (pour le palmarès)
let throneId      = null;          // id du Challenger courant (n°1 qualifié)

// Date de début de saison (pour filtrer matchs/Elo). '0000' = depuis toujours.
const seasonStartDate = () =>
  (currentSeason && currentSeason.started_at) ? String(currentSeason.started_at).slice(0, 10) : '0000-00-00';

// Matchs de la saison en cours uniquement (Elo & classement saisonniers).
const seasonMatches = () => {
  const start = seasonStartDate();
  return matches.filter((m) => String(m.date || '') >= start);
};

// Recalcule qui occupe le trône : le joueur aux plus hauts points, à condition
// d'avoir atteint le palier Maître. Trône vide tant que personne n'y est.
const recomputeThrone = () => {
  let best = null;
  players.forEach((p) => {
    if ((p.points || 0) < MAITRE_MIN) return;
    if (!best
        || (p.points || 0) > (best.points || 0)
        || ((p.points || 0) === (best.points || 0) && String(p.id) < String(best.id))) {
      best = p;
    }
  });
  throneId = best ? best.id : null;
};

// Rang AFFICHÉ d'un joueur (Challenger / Grand Maître / rang aux points plafonné).
const displayRank = (p) => {
  if (p && throneId != null && p.id === throneId)
    return { ...CHALLENGER_RANK, idx: CHALLENGER_IDX };
  if (getElo(p) >= GM_ELO_THRESHOLD)
    return { ...GM_RANK, idx: CHALLENGER_IDX };
  const rk = getRank(p ? (p.points || 0) : 0);
  if (rk.idx >= CHALLENGER_IDX)               // points ≥ 3000 mais pas n°1 → plafond Maître
    return { ...RANKS[MAITRE_TOP_IDX], idx: MAITRE_TOP_IDX };
  return rk;
};

// ─── Titre équipé (cosmétique affiché sous le pseudo) ───
const titleOf = (p) => (p && p.title) ? TITLES.find((t) => t.id === p.title) : null;
const titleHtml = (p, cls) => {
  const t = titleOf(p);
  return t ? `<div class="${cls}">${t.icon ? t.icon + ' ' : ''}${t.label}</div>` : '';
};

// Poids comparatif d'un rang (pour suivre le pic de saison). Challenger > GM > reste.
const rankWeight = (rk) =>
  rk.key === 'challenger'  ? 1000 :
  rk.key === 'grandmaitre' ? 900  : (rk.idx != null ? rk.idx : 0);

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

// Place d'un perdant, avec gestion des ÉGALITÉS de score (classement « dense »
// type compétition : 1, 2, 2, 4). `losers` doit être trié par score décroissant
// (sortie de sortedLosers). Deux perdants à score STRICTEMENT égal obtiennent la
// MÊME place ; sans scores saisis, on retombe sur l'ordre du tableau (indexOf).
// `base` = nombre de gagnants (les perdants commencent à base+1).
const loserPlace = (losers, id, scores, base) => {
  const idx = losers.indexOf(id);
  if (idx < 0) return base + 1;
  if (!scores || !Object.keys(scores).length) return base + 1 + idx;  // pas de score → ordre brut
  const sc = (x) => Number(scores[x]) || 0;
  // Combien de perdants ont un score STRICTEMENT supérieur → détermine la place.
  let ahead = 0;
  for (const o of losers) { if (o !== id && sc(o) > sc(id)) ahead++; }
  return base + 1 + ahead;
};

const placements = (allIds, winnerIds, scores) => {
  const losers = sortedLosers(allIds, winnerIds, scores);
  const map = {};
  allIds.forEach((id) => {
    map[id] = winnerIds.includes(id)
      ? 1
      : loserPlace(losers, id, scores, winnerIds.length);
  });
  return map;
};

// ─── Player stat helpers ─────────────────────────────────────

// Score de Wilson (borne basse de l'intervalle de confiance à 95%) : un winrate
// « honnête » qui pénalise les petits échantillons. 100% sur 1 partie vaut moins
// qu'un 98% sur 100 parties. Sert à classer les joueurs « au mérite » sur un jeu.
const wilsonScore = (wins, n) => {
  if (!n) return 0;
  const z = 1.96, p = wins / n;
  return (p + z * z / (2 * n) - z * Math.sqrt((p * (1 - p) + z * z / (4 * n)) / n)) / (1 + z * z / n);
};

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
    .sort((a, b) => wilsonScore(b[1].w, b[1].pl) - wilsonScore(a[1].w, a[1].pl));
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
  entries.sort((a, b) => wilsonScore(b[1].w, b[1].pl) - wilsonScore(a[1].w, a[1].pl));
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
    if (opts.limit)  url.searchParams.set('limit',  opts.limit);
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
  const [g, p, m, r, seasons] = await Promise.all([
    safeGet('games',   { order: 'name.asc' }),
    safeGet('players', { order: 'name.asc' }),
    safeGet('matches', { order: 'date.desc' }),
    safeGet('ratings', { select: 'game_id,score,user_id' }),
    safeGet('seasons', { order: 'number.desc' }).catch(() => []),
  ]);
  games   = g;
  players = p;
  // Les parties "pending" attendent validation : elles ne comptent NI dans les
  // stats, NI dans l'Elo, NI dans le classement tant qu'elles ne sont pas
  // confirmées. On les isole dans pendingMatches.
  matches        = (m || []).filter((x) => x.status !== 'pending');
  pendingMatches = (m || []).filter((x) => x.status === 'pending');
  // Saison active = la plus récente non clôturée (sinon la plus récente).
  allSeasons = seasons || [];
  const active = (seasons || []).find((s) => s.status === 'active');
  currentSeason = active || (seasons && seasons[0]) || null;
  recomputeThrone();
  ratingsCache = {};
  r.forEach((row) => {
    if (!ratingsCache[row.game_id])
      ratingsCache[row.game_id] = { sum: 0, count: 0, myScore: null };
    ratingsCache[row.game_id].sum   += Number(row.score);
    ratingsCache[row.game_id].count += 1;
    if (uid && row.user_id === uid)
      ratingsCache[row.game_id].myScore = Number(row.score);
  });
  syncAchievementUnlocks(false);   // notifie les nouveaux succès (si baseline déjà posée)
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
  syncAchievementUnlocks(false);   // succès sociaux (défis, avis, suggestions)
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
    'modal-seasons', 'modal-records', 'modal-feed',
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
    syncAchievementUnlocks(true);   // pose la baseline (sans notifier)
    updateUserUI();
    renderCurrentPage();
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
    syncAchievementUnlocks(true);   // pose la baseline (sans notifier)
    updateUserUI();
    renderCurrentPage();
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
  renderCurrentPage();
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
  selFrame  = cfg.frame || 0;
  selBg     = cfg.cardbg || 0;
  selTitle  = cfg.playerTitle || 0;

  buildProfileColorPicker(selColor);

  // Calcule les assets de rang pour la preview du cadre
  const _previewPts = (cfg.points != null) ? cfg.points : (currentProfile ? (currentProfile.points || 0) : 0);
  const _previewRank = RANKS.slice().reverse().find(r => _previewPts >= r.min) || RANKS[0];
  const _previewRA   = isMobile() ? RANK_ASSETS_MOBILE[_previewRank.key] : RANK_ASSETS_DESKTOP[_previewRank.key];
  peRankAssets = _previewRA || null;

  buildAvatarPicker();
  buildFramePicker();
  buildBgPicker();
  buildTitlePicker();

  // Points
  const ptsRow   = document.getElementById('pe-points-row');
  const ptsInput = document.getElementById('pe-points');
  const eloRow   = document.getElementById('pe-elo-row');
  const eloInput = document.getElementById('pe-elo');
  ptsRow.style.display = cfg.showPts ? 'block' : 'none';

  const updatePrev = () => {
    const pts  = parseInt(ptsInput.value) || 0;
    const eloV = parseInt(eloInput && eloInput.value) || 0;
    const rk   = (cfg.showElo && eloV >= GM_ELO_THRESHOLD)
      ? { ...GM_RANK, idx: CHALLENGER_IDX }
      : getRank(pts);
    document.getElementById('pe-rank-preview').innerHTML =
      `Rang : <span style="color:${rk.color};font-weight:500">${rankImg(rk,14)} ${rk.name}</span>`;
  };

  if (cfg.showPts) {
    ptsInput.value = cfg.points ?? 0;
    ptsInput.oninput = updatePrev;
  }

  // Elo (admin uniquement)
  if (eloRow) {
    eloRow.style.display = cfg.showElo ? 'block' : 'none';
    if (cfg.showElo && eloInput) {
      eloInput.value = cfg.elo ?? 1000;
      eloInput.oninput = updatePrev;
    }
  }
  if (cfg.showPts) updatePrev();

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
    frame:     currentProfile.frame || 0,
    cardbg:    currentProfile.cardbg || 0,
    playerTitle: currentProfile.title || 0,
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
  const _myPlayer = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
  const achS = _myPlayer ? computeAchievementStats(_myPlayer.id) : null;
  const avatarLock = (a) => {
    if (isAdmin) return null;                          // admin : tout débloqué
    if (!a.reqAch) return null;                        // avatar libre
    const ach = ACHIEVEMENTS.find((x) => x.id === a.reqAch);
    if (ach && achS && ach.check(achS)) return null;   // succès validé → débloqué
    return ach ? `🔒 ${ach.name} — ${ach.desc}` : '🔒 Verrouillé';
  };
  grid.innerHTML = AVATARS.map(a => {
    const sel  = selAvatar === a.id;
    const lock = avatarLock(a);
    return `<div ${lock ? '' : `onclick="selectAvatar(${a.id})"`}
               style="position:relative;cursor:${lock ? 'not-allowed' : 'pointer'};border-radius:50%;overflow:hidden;aspect-ratio:1;
                      border:3px solid ${sel ? 'var(--accent)' : 'transparent'};
                      box-shadow:${sel ? '0 0 0 2px var(--accent)' : 'none'};
                      transition:border-color .15s,box-shadow .15s;flex-shrink:0"
               data-avid="${a.id}" title="${lock || a.label}">
             <img src="${a.src}" style="width:100%;height:100%;object-fit:cover;display:block${lock ? ';filter:grayscale(1) brightness(.45)' : ''}">
             ${lock ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;pointer-events:none">🔒</div>' : ''}
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
  // Preview du cadre (cosmétique choisi sinon cadre du rang)
  _updateFramePreview();
};

// ─── Sélecteur de cadre cosmétique ───
const _updateFramePreview = () => {
  const frameDiv = document.getElementById('pe-frame-preview');
  const frameImg = document.getElementById('pe-frame-img');
  if (!frameDiv || !frameImg) return;
  const cf = selFrame ? FRAMES.find((f) => f.id === selFrame) : null;
  const src = cf ? cf.src : (peRankAssets && peRankAssets.profile_frame ? peRankAssets.profile_frame : null);
  if (src) { frameImg.src = src; frameDiv.style.display = 'block'; }
  else frameDiv.style.display = 'none';
};

const buildFramePicker = () => {
  const grid = document.getElementById('pe-frame-grid');
  if (!grid) return;
  const _myPlayer = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
  const achS = _myPlayer ? computeAchievementStats(_myPlayer.id) : null;
  const frameLock = (f) => {
    if (isAdmin) return null;                          // admin : tout débloqué
    if (!f.reqAch) return null;
    const ach = ACHIEVEMENTS.find((x) => x.id === f.reqAch);
    if (ach && achS && ach.check(achS)) return null;
    return ach ? `🔒 ${ach.name} — ${ach.desc}` : '🔒 Verrouillé';
  };
  // Vignette "Défaut (rang)" + cadres cosmétiques
  const defSel = !selFrame;
  let html = `<div onclick="selectFrame(0)" data-frid="0" title="Cadre du rang (défaut)"
       style="cursor:pointer;border-radius:50%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;
              border:3px solid ${defSel ? 'var(--accent)' : 'var(--border)'};
              box-shadow:${defSel ? '0 0 0 2px var(--accent)' : 'none'};font-size:11px;color:var(--text-muted);text-align:center;line-height:1.1">Défaut<br>(rang)</div>`;
  html += FRAMES.map((f) => {
    const sel  = selFrame === f.id;
    const lock = frameLock(f);
    return `<div ${lock ? '' : `onclick="selectFrame(${f.id})"`}
               style="position:relative;cursor:${lock ? 'not-allowed' : 'pointer'};border-radius:50%;overflow:hidden;aspect-ratio:1;
                      border:3px solid ${sel ? 'var(--accent)' : 'transparent'};
                      box-shadow:${sel ? '0 0 0 2px var(--accent)' : 'none'}"
               data-frid="${f.id}" title="${lock || f.label}">
             <img src="${f.src}" style="width:100%;height:100%;object-fit:contain;display:block${lock ? ';filter:grayscale(1) brightness(.45)' : ''}">
             ${lock ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;pointer-events:none">🔒</div>' : ''}
           </div>`;
  }).join('');
  grid.innerHTML = html;
  _updateFramePreview();
};

const selectFrame = (id) => {
  if (id && !isAdmin) {
    const f = FRAMES.find((x) => x.id === id);
    if (f && f.reqAch) {
      const ach = ACHIEVEMENTS.find((x) => x.id === f.reqAch);
      const mp = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
      const s = mp ? computeAchievementStats(mp.id) : null;
      if (!(ach && s && ach.check(s))) return;   // verrouillé → on ignore
    }
  }
  selFrame = id || 0;
  const grid = document.getElementById('pe-frame-grid');
  if (grid) {
    grid.querySelectorAll('[data-frid]').forEach((el) => {
      const elId = parseInt(el.dataset.frid);
      const sel  = elId === selFrame;
      el.style.borderColor = sel ? 'var(--accent)' : (elId === 0 ? 'var(--border)' : 'transparent');
      el.style.boxShadow   = sel ? '0 0 0 2px var(--accent)' : 'none';
    });
  }
  _updateFramePreview();
};

// ─── Sélecteur de fond de carte ───
const buildBgPicker = () => {
  const grid = document.getElementById('pe-bg-grid');
  if (!grid) return;
  const _myPlayer = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
  const achS = _myPlayer ? computeAchievementStats(_myPlayer.id) : null;
  const bgLock = (b) => {
    if (isAdmin) return null;
    if (!b.reqAch) return null;
    const ach = ACHIEVEMENTS.find((x) => x.id === b.reqAch);
    if (ach && achS && ach.check(achS)) return null;
    return ach ? `🔒 ${ach.name} — ${ach.desc}` : '🔒 Verrouillé';
  };
  const defSel = !selBg;
  let html = `<div onclick="selectBg(0)" data-bgid="0" title="Fond uni (défaut)"
       style="cursor:pointer;border-radius:10px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;
              border:3px solid ${defSel ? 'var(--accent)' : 'var(--border)'};
              box-shadow:${defSel ? '0 0 0 2px var(--accent)' : 'none'};font-size:11px;color:var(--text-muted);text-align:center;line-height:1.1">Défaut<br>(uni)</div>`;
  html += BACKGROUNDS.map((b) => {
    const sel  = selBg === b.id;
    const lock = bgLock(b);
    return `<div ${lock ? '' : `onclick="selectBg(${b.id})"`}
               style="position:relative;cursor:${lock ? 'not-allowed' : 'pointer'};border-radius:10px;overflow:hidden;aspect-ratio:1;
                      border:3px solid ${sel ? 'var(--accent)' : 'transparent'};
                      box-shadow:${sel ? '0 0 0 2px var(--accent)' : 'none'}"
               data-bgid="${b.id}" title="${lock || b.label}">
             <img src="${b.src}" style="width:100%;height:100%;object-fit:cover;display:block${lock ? ';filter:grayscale(1) brightness(.45)' : ''}">
             ${lock ? '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;pointer-events:none">🔒</div>' : ''}
           </div>`;
  }).join('');
  grid.innerHTML = html;
};

const selectBg = (id) => {
  if (id && !isAdmin) {
    const b = BACKGROUNDS.find((x) => x.id === id);
    if (b && b.reqAch) {
      const ach = ACHIEVEMENTS.find((x) => x.id === b.reqAch);
      const mp = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
      const s = mp ? computeAchievementStats(mp.id) : null;
      if (!(ach && s && ach.check(s))) return;
    }
  }
  selBg = id || 0;
  const grid = document.getElementById('pe-bg-grid');
  if (grid) {
    grid.querySelectorAll('[data-bgid]').forEach((el) => {
      const elId = parseInt(el.dataset.bgid);
      const sel  = elId === selBg;
      el.style.borderColor = sel ? 'var(--accent)' : (elId === 0 ? 'var(--border)' : 'transparent');
      el.style.boxShadow   = sel ? '0 0 0 2px var(--accent)' : 'none';
    });
  }
};

// ─── Sélecteur de titre ───
const buildTitlePicker = () => {
  const grid = document.getElementById('pe-title-grid');
  if (!grid) return;
  const _myPlayer = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
  const achS = _myPlayer ? computeAchievementStats(_myPlayer.id) : null;
  const titleLock = (t) => {
    if (isAdmin) return null;                          // admin : tout débloqué
    if (!t.reqAch) return null;
    const ach = ACHIEVEMENTS.find((x) => x.id === t.reqAch);
    if (ach && achS && ach.check(achS)) return null;
    return ach ? `🔒 ${ach.name} — ${ach.desc}` : '🔒 Verrouillé';
  };
  let html = `<div class="pe-title-chip${!selTitle ? ' sel' : ''}" onclick="selectTitle(0)" data-ttid="0" title="Aucun titre">Aucun</div>`;
  html += TITLES.map((t) => {
    const sel  = selTitle === t.id;
    const lock = titleLock(t);
    return `<div class="pe-title-chip${sel ? ' sel' : ''}${lock ? ' locked' : ''}"
                ${lock ? '' : `onclick="selectTitle(${t.id})"`}
                data-ttid="${t.id}" title="${lock || t.label}">${t.icon ? t.icon + ' ' : ''}${t.label}${lock ? ' 🔒' : ''}</div>`;
  }).join('');
  grid.innerHTML = html;
};

const selectTitle = (id) => {
  if (id && !isAdmin) {
    const t = TITLES.find((x) => x.id === id);
    if (t && t.reqAch) {
      const ach = ACHIEVEMENTS.find((x) => x.id === t.reqAch);
      const mp = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
      const s = mp ? computeAchievementStats(mp.id) : null;
      if (!(ach && s && ach.check(s))) return;   // verrouillé → on ignore
    }
  }
  selTitle = id || 0;
  const grid = document.getElementById('pe-title-grid');
  if (grid) {
    grid.querySelectorAll('[data-ttid]').forEach((el) => {
      el.classList.toggle('sel', parseInt(el.dataset.ttid) === selTitle);
    });
  }
};

const selectAvatar = (id) => {
  const _a = AVATARS.find((x) => x.id === id);
  if (_a && _a.reqAch && !isAdmin) {
    const _ach = ACHIEVEMENTS.find((x) => x.id === _a.reqAch);
    const _mp = currentUser ? players.find((pp) => pp.user_id === currentUser.id) : null;
    const _s = _mp ? computeAchievementStats(_mp.id) : null;
    if (!(_ach && _s && _ach.check(_s))) return;   // verrouillé → on ignore
  }
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

  // Elo (présent uniquement dans les formulaires admin)
  const eloRow = document.getElementById('pe-elo-row');
  const hasElo = eloRow && eloRow.style.display !== 'none';
  const eloVal = hasElo ? (parseInt(document.getElementById('pe-elo').value) || 1000) : null;
  const eloPart = hasElo ? { elo: eloVal } : {};

  showLoading(isCreate ? 'Création du compte…' : 'Enregistrement…');
  try {
    if (isCreate && isAdmin) {
      // ── Créer un joueur (admin) ──
      const email = document.getElementById('pe-email').value.trim();
      const pass  = document.getElementById('pe-pass').value.trim();
      const pts   = parseInt(document.getElementById('pe-points').value) || 0;

      if (!email) {
        // Email vide → joueur de test SANS compte (ne peut pas se connecter)
        await sb.post('players', { name, color: selColor, points: pts, avatar: selAvatar, ...eloPart });
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
          await sb.post('players',  { name, color: selColor, user_id: uid, points: pts, avatar: selAvatar, ...eloPart });
        } finally {
          authToken = adminToken;                   // restaure la session admin
        }
        toast(`Compte créé pour ${name} ✓`);
      }

    } else if (targetId && isAdmin) {
      // ── Modifier un joueur existant (admin) ──
      const pts = parseInt(document.getElementById('pe-points').value) || 0;
      await sb.patch('players', { name, color: selColor, points: pts, avatar: selAvatar, frame: selFrame || null, cardbg: selBg || null, title: selTitle || null, ...eloPart }, { id: parseInt(targetId) });
      const pl = players.find((x) => x.id === parseInt(targetId));
      if (pl?.user_id) await sb.patch('profiles', { name, color: selColor, avatar: selAvatar, frame: selFrame || null, cardbg: selBg || null, title: selTitle || null }, { id: pl.user_id });
      toast(`${name} mis à jour — ${getRank(pts).name}`);

    } else if (currentUser) {
      // ── Modifier son propre profil ──
      await sb.patch('profiles', { name, color: selColor, avatar: selAvatar, frame: selFrame || null, cardbg: selBg || null, title: selTitle || null }, { id: currentUser.id });
      const myPlayer = players.find((p) => p.user_id === currentUser.id);
      if (myPlayer) await sb.patch('players', { name, color: selColor, avatar: selAvatar, frame: selFrame || null, cardbg: selBg || null, title: selTitle || null }, { id: myPlayer.id });
      currentProfile = { ...currentProfile, name, color: selColor, avatar: selAvatar, frame: selFrame || null, cardbg: selBg || null, title: selTitle || null };
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
  const rcBtn = document.getElementById('recompress-btn');
  if (rcBtn) rcBtn.style.display = isAdmin ? '' : 'none';
  if      (curPage === 'classement') renderHome();
  else if (curPage === 'games')   renderGames();
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
  if      (page === 'classement') renderHome();
  else if (page === 'games')   renderGames();
  else if (page === 'players') renderPlayers();
  else if (page === 'history') renderHistory();
  else if (page === 'social')  loadSocial().then(() => { renderCurrentSocialTab(); loadChat(); });
  else if (page === 'events')  loadSocial().then(renderEvents);
};

const renderCurrentPage = () => {
  if      (curPage === 'classement') renderHome();
  else if (curPage === 'games')   renderGames();
  else if (curPage === 'players') renderPlayers();
  else if (curPage === 'history') renderHistory();
  else if (curPage === 'social')  renderCurrentSocialTab();
  else if (curPage === 'events')  renderEvents();
};

const syncMobileNav = (page) => {
  ['classement', 'games', 'players', 'history', 'social', 'events'].forEach((p) => {
    document.getElementById(`mnav-${p}`)?.classList.toggle('active', p === page);
  });
};

const updateAddBtn = () => {
  const btn = document.getElementById('main-add-btn');
  if (!btn) return;
  if (curPage === 'social' || curPage === 'events' || curPage === 'players' || curPage === 'classement') {
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
  if (curPage === 'social' || curPage === 'events' || curPage === 'players' || curPage === 'classement') {
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

// Échelle de notation (style BGG) — libellé + description par note entière.
const RATING_LABELS = {
  10: ['Exceptionnel',  "J'y jouerai toujours avec plaisir"],
  9:  ['Excellent',     "J'y prends beaucoup de plaisir"],
  8:  ['Très bon',      'Je m\'amuse et je le recommande'],
  7:  ['Bon',           'Je joue généralement avec plaisir'],
  6:  ['Correct',       "J'y jouerai si l'envie m'en prend"],
  5:  ['Moyen',         'À prendre ou à laisser'],
  4:  ['Pas terrible',  'Mais je pourrais y rejouer'],
  3:  ['Mauvais',       "Je n'y rejouerai probablement pas"],
  2:  ['Très mauvais',  "Je n'y rejouerai plus jamais"],
  1:  ['Horrible',      'Ne correspond pas à la description du jeu'],
};
const ratingTipHTML = (v) => {
  const k = Math.max(1, Math.min(10, Math.round(v)));
  const [lab, desc] = RATING_LABELS[k];
  return `<b>${v}/10 · ${lab}</b><span>${esc(desc)}</span>`;
};

// Infobulle de notation : survol (souris) + toucher/glissé (mobile).
const initRatingTooltip = () => {
  if (document.getElementById('rating-tip')) return;
  const tip = document.createElement('div');
  tip.id = 'rating-tip';
  tip.className = 'rating-tip';
  document.body.appendChild(tip);
  let hideTimer = null;
  const show = (el, x, y) => {
    const v = parseFloat(el.dataset.rv);
    if (isNaN(v)) return;
    clearTimeout(hideTimer);
    tip.innerHTML = ratingTipHTML(v);
    tip.style.display = 'block';
    const r = tip.getBoundingClientRect();
    let left = Math.max(8, Math.min(x - r.width / 2, window.innerWidth - r.width - 8));
    let top  = y - r.height - 14;
    if (top < 8) top = y + 20;
    tip.style.left = left + 'px';
    tip.style.top  = top + 'px';
  };
  const hide = (delay = 0) => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => { tip.style.display = 'none'; }, delay);
  };
  const starAt = (t) => (t && t.closest) ? t.closest('[data-rv]') : null;
  document.addEventListener('pointermove', (e) => {
    const el = starAt(e.target);
    if (el) show(el, e.clientX, e.clientY);
    else if (e.pointerType === 'mouse' && tip.style.display === 'block') hide();
  });
  document.addEventListener('pointerdown', (e) => {
    const el = starAt(e.target);
    if (el) show(el, e.clientX, e.clientY);
  });
  document.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') hide(1500); });
  document.addEventListener('pointercancel', () => hide(0));
  document.addEventListener('scroll', () => hide(0), true);
};

const buildStars = (gid, myR) =>
  [1,2,3,4,5,6,7,8,9,10].map((i) => {
    const full = myR >= i;
    const stroke = full ? '#fbbf24' : 'var(--text-faint)';
    return `<span class="half-star-wrap" data-rv="${i}" onclick="rateGame(${gid},${i})">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
          12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          stroke="${stroke}" stroke-width="1.5" fill="${full ? '#fbbf24' : 'none'}"/>
      </svg>
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
        const rk = displayRank(p);
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
    .sort((a, b) => wilsonScore(b.w, b.pl) - wilsonScore(a.w, a.pl))
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
  const avg   = avgRating(g);
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

  const gbg = gameBgSrc(g);
  return `<div class="game-card${gbg ? ' has-gbg' : ''}" id="gc-${g.id}">
    ${gbg ? `<div class="gc-art" data-bg="${gbg}"></div>` : ''}
    <div class="gc-cover">
      <div class="game-card-bg"></div>
      <span class="badge ${g.status === 'own' ? 'badge-own' : 'badge-wish'}">${g.status === 'own' ? 'Possédé' : 'Souhait'}</span>
      ${avg > 0 ? `<span class="gc-rate">★ ${avg.toFixed(1)}</span>` : ''}
    </div>
    <div class="game-card-content">
      <div class="game-name">${esc(g.name)}</div>
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

// ─── Colonne latérale Collection : Top 10 + joués récemment ──
const renderCollectionSide = () => {
  const topEl = document.getElementById('top-rated-list');
  const recEl = document.getElementById('recent-played-list');
  if (!topEl && !recEl) return;

  // Top 10 — meilleurs jeux par note moyenne (au moins 1 note).
  if (topEl) {
    const rated = games
      .filter((g) => ratingCount(g) > 0)
      .sort((a, b) => avgRating(b) - avgRating(a) || ratingCount(b) - ratingCount(a))
      .slice(0, 10);
    topEl.innerHTML = rated.length
      ? rated.map((g, i) =>
          `<div class="side-row" onclick="scrollToGame(${g.id})">
             <span class="side-rank ${i < 3 ? 'top' : ''}">${i + 1}</span>
             <span class="side-name">${esc(g.name)}</span>
             <span class="side-val">★ ${avgRating(g).toFixed(1)}</span>
           </div>`).join('')
      : '<div class="side-empty">Aucun jeu noté pour l\'instant.</div>';
  }

  // 5 jeux joués le plus récemment (parties récentes, jeux distincts).
  if (recEl) {
    const seen = new Set(); const recent = [];
    [...matches]
      .sort((a, b) =>
        String(b.date || '').localeCompare(String(a.date || '')) || (b.id || 0) - (a.id || 0))
      .forEach((m) => {
        if (recent.length >= 5 || seen.has(m.game_id)) return;
        const g = games.find((x) => x.id === m.game_id);
        if (!g) return;
        seen.add(m.game_id);
        recent.push({ g, date: m.date });
      });
    recEl.innerHTML = recent.length
      ? recent.map(({ g, date }) =>
          `<div class="side-row" onclick="scrollToGame(${g.id})">
             <span class="side-name">${esc(g.name)}</span>
             <span class="side-val">${date ? fmtDate(date) : ''}</span>
           </div>`).join('')
      : '<div class="side-empty">Aucune partie récente.</div>';
  }
};

// Fait défiler jusqu'à la carte d'un jeu (réinitialise filtres/onglet si masqué).
const scrollToGame = (id) => {
  let card = document.getElementById(`gc-${id}`);
  if (!card) {
    const s = document.getElementById('search'); if (s) s.value = '';
    curTab = 'all';
    const tabs = document.querySelectorAll('#page-games .tabs .tab');
    tabs.forEach((t, i) => t.classList.toggle('active', i === 0));
    renderGrid();
    card = document.getElementById(`gc-${id}`);
  }
  if (!card) return;
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  card.style.transition = 'box-shadow .3s';
  card.style.boxShadow  = '0 0 0 2px var(--gold)';
  setTimeout(() => { card.style.boxShadow = ''; }, 1600);
};

const renderGrid = () => {
  renderCollectionSide();
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

  // Ne charge les couvertures QUE lorsqu'elles approchent de l'écran (lazy-load).
  setTimeout(() => lazyApplyGameImages(list), 100);
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

// Charge les images de couverture à la demande : seules les cartes proches de
// l'écran déclenchent le téléchargement → réduit fortement l'egress (cached).
let _gameImgObserver = null;
const lazyApplyGameImages = (list) => {
  if (_gameImgObserver) _gameImgObserver.disconnect();
  const byId = {};
  list.forEach((g) => { byId[g.id] = g; });
  if (!('IntersectionObserver' in window)) {   // repli navigateurs anciens
    list.forEach((g) => { const c = document.getElementById(`gc-${g.id}`); if (c) applyGameImage(c, g); });
    return;
  }
  _gameImgObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const g = byId[e.target.dataset.gid];
      if (g) applyGameImage(e.target, g);
      obs.unobserve(e.target);
    });
  }, { rootMargin: '300px' });   // précharge 300px avant l'entrée à l'écran
  list.forEach((g) => {
    const card = document.getElementById(`gc-${g.id}`);
    if (card) { card.dataset.gid = g.id; _gameImgObserver.observe(card); }
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

// Compresse/redimensionne une image côté client avant upload (réduit fortement
// le poids → moins de stockage ET moins d'egress à chaque affichage).
const compressImage = (file, maxDim = 800, quality = 0.82) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      let w = img.naturalWidth, h = img.naturalHeight;
      if (Math.max(w, h) > maxDim) {
        const s = maxDim / Math.max(w, h);
        w = Math.round(w * s); h = Math.round(h * s);
      }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      c.toBlob((b) => b ? resolve(b) : reject(new Error('compression échouée')), 'image/webp', quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('image illisible')); };
    img.src = url;
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
    // Compression webp (repli sur l'original si le navigateur échoue).
    const blob     = await compressImage(file).catch(() => file);
    const isWebp   = blob.type === 'image/webp';
    const ext      = isWebp ? 'webp' : (file.name.split('.').pop().toLowerCase() || 'jpg');
    const base     = (document.getElementById('fg-name').value.trim() || 'game')
      .replace(/[^a-z0-9]/gi, '-').toLowerCase();
    const filename = `${base}-${Date.now()}.${ext}`;
    const res = await fetch(`${SB_URL}/storage/v1/object/game-images/${filename}`, {
      method:  'POST',
      headers: {
        apikey:         SB_KEY,
        Authorization:  `Bearer ${authToken || SB_KEY}`,
        'Content-Type': blob.type || file.type,
        'cache-control':'max-age=31536000',   // cache 1 an → bien moins de re-téléchargements (egress)
        'x-upsert':     'true',
      },
      body: blob,
    });
    if (!res.ok) throw new Error(await res.text());
    const publicUrl = `${SB_URL}/storage/v1/object/public/game-images/${filename}`;
    document.getElementById('fg-image').value = publicUrl;
    setImagePreview(publicUrl);
    toast('Image uploadée ✓');
  } catch (e) { toastErr('Erreur upload : ' + e.message); clearImage(); }
  if (prog) prog.style.display = 'none';
};

// Recompresse en un passage toutes les couvertures stockées sur Supabase :
// télécharge → compresse (webp) → ré-upload (cache 1 an) → met à jour le jeu →
// supprime l'ancien fichier. Réduit fortement le cached egress et le stockage.
const recompressCovers = async () => {
  if (!isAdmin) return;
  const MARK = '/storage/v1/object/public/game-images/';
  const targets = games.filter((g) => g.image_url && g.image_url.includes(MARK));
  if (!targets.length) { toast('Aucune couverture Supabase à recompresser.'); return; }
  if (!confirm(`Recompresser ${targets.length} couverture(s) ? Opération unique, peut prendre un moment.`)) return;

  const btn = document.getElementById('recompress-btn');
  const label = btn ? btn.textContent : '';
  if (btn) btn.disabled = true;
  let done = 0, fail = 0, skip = 0, saved = 0;
  const progress = () => { if (btn) btn.textContent = `Recompression… ${done + fail + skip}/${targets.length}`; };

  for (const g of targets) {
    try {
      const oldUrl = g.image_url;
      const resp = await fetch(oldUrl, { cache: 'no-store' });
      if (!resp.ok) throw new Error('download');
      const orig = await resp.blob();
      const blob = await compressImage(orig).catch(() => null);
      if (!blob) throw new Error('compress');
      if (blob.size >= orig.size) { skip++; progress(); continue; }  // déjà optimale

      const base = (g.name || 'game').replace(/[^a-z0-9]/gi, '-').toLowerCase();
      const filename = `${base}-${g.id}-${Date.now()}.webp`;
      const up = await fetch(`${SB_URL}/storage/v1/object/game-images/${filename}`, {
        method:  'POST',
        headers: {
          apikey:         SB_KEY,
          Authorization:  `Bearer ${authToken || SB_KEY}`,
          'Content-Type': 'image/webp',
          'cache-control':'max-age=31536000',
          'x-upsert':     'true',
        },
        body: blob,
      });
      if (!up.ok) throw new Error('upload');
      const newUrl = `${SB_URL}${MARK}${filename}`;
      await sb.patch('games', { image_url: newUrl }, { id: g.id });
      g.image_url = newUrl;
      // suppression best-effort de l'ancien fichier (libère du stockage)
      try {
        const oldPath = oldUrl.split(MARK)[1];
        if (oldPath) await fetch(`${SB_URL}/storage/v1/object/game-images/${oldPath}`, {
          method:  'DELETE',
          headers: { apikey: SB_KEY, Authorization: `Bearer ${authToken || SB_KEY}` },
        });
      } catch {}
      saved += (orig.size - blob.size);
      done++;
    } catch { fail++; }
    progress();
  }

  if (btn) { btn.disabled = false; btn.textContent = label || '🗜️ Recompresser les couvertures'; }
  const savedMB = (saved / 1048576).toFixed(1);
  toast(`Terminé : ${done} recompressée(s)${skip ? `, ${skip} déjà optimale(s)` : ''}${fail ? `, ${fail} échec(s)` : ''} — ~${savedMB} Mo économisés.`);
  if (curPage === 'games') renderGrid();
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
  renderComparison();
  renderPlayerGrid();
};

// Charge le fond d'ambiance d'une carte de jeu uniquement au premier survol
// (économise l'egress : l'image n'est téléchargée que si on la révèle).
document.addEventListener('mouseover', (e) => {
  const card = e.target.closest?.('.game-card.has-gbg');
  if (!card) return;
  const art = card.querySelector('.gc-art');
  if (art && art.dataset.bg && !art.style.backgroundImage) {
    art.style.backgroundImage = `url('${art.dataset.bg}')`;
  }
});

const renderPlayerStats = () => {
  const best = players
    .map((p) => {
      const s = playerStats(p.id);
      return { ...p, rate: s.played > 0 ? Math.round(s.won / s.played * 100) : 0,
               played: s.played, score: wilsonScore(s.won, s.played) };
    })
    .filter((p) => p.played > 0)
    .sort((a, b) => b.score - a.score)[0] || null;

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
      <div class="stat-sub">${best ? best.rate + '% · ' + best.played + ' partie' + (best.played > 1 ? 's' : '') : ''}</div>
    </div>
    ${isAdmin ? `
    <div class="stat-card" style="justify-content:center;align-items:center;text-align:center;gap:8px">
      <div class="stat-sub">Saison ${currentSeason ? currentSeason.number : 1} — admin</div>
      <button id="recalc-season-btn" class="btn-icon" onclick="recomputeSeason()" style="white-space:nowrap">♻️ Recalculer la saison</button>
      <button id="close-season-btn" class="btn-icon danger" onclick="closeSeason()" style="white-space:nowrap">&#127942; Clôturer la saison</button>
    </div>` : ''}`;
};

// Clôture la saison en cours (admin) : couronne le Challenger, archive le podium,
// fige le titre d'honneur de chacun (pic de la saison), puis RESET TOTAL
// (points, elo, streak, pics) et ouvre la saison suivante.
const seasonHonorTitle = (p) => {
  if (p.was_challenger) return 'Challenger';
  if ((p.peak_elo || ELO_BASE) >= GM_ELO_THRESHOLD) return 'Grand Maître';
  const rk = getRank(p.peak_points || 0);
  return (rk.idx >= CHALLENGER_IDX ? RANKS[MAITRE_TOP_IDX] : rk).name;
};

const closeSeason = async () => {
  if (!isAdmin) return;
  if (!currentSeason) { toast('Aucune saison active à clôturer', true); return; }

  const champ = throneId != null ? players.find((x) => x.id === throneId) : null;
  const champMsg = champ
    ? `Champion couronné : ${champ.name} (Challenger).`
    : `Aucun Challenger ce saison (personne n'a atteint Maître) — pas de champion.`;
  const ok = confirm(
    `Clôturer la SAISON ${currentSeason.number} ?\n\n${champMsg}\n\n` +
    `⚠️ Action irréversible : tout le monde repart de zéro (points, Elo, série). ` +
    `Le pic de chacun est figé comme titre d'honneur pour la saison suivante.`
  );
  if (!ok) return;

  const btn = document.getElementById('close-season-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Clôture…'; }

  try {
    // 1) Podium (top 3 aux points) pour les archives.
    const sorted = [...players].sort((a, b) =>
      (b.points || 0) - (a.points || 0) || (String(a.id) < String(b.id) ? -1 : 1));
    const podium = sorted.slice(0, 3).map((p, i) => ({
      place: i + 1, name: p.name, points: p.points || 0,
      elo: getElo(p), title: seasonHonorTitle(p),
    }));

    // 2) Figer le titre d'honneur + RESET de chaque joueur.
    for (const p of players) {
      const isChampion = champ && p.id === champ.id;
      const champSeasons = Array.isArray(p.champion_seasons) ? p.champion_seasons.slice() : [];
      if (isChampion && !champSeasons.includes(currentSeason.number)) champSeasons.push(currentSeason.number);
      const body = {
        honor_title:  seasonHonorTitle(p),
        honor_elo:    Math.round(p.peak_elo != null ? p.peak_elo : getElo(p)),
        honor_season: currentSeason.number,
        champion_seasons: champSeasons,   // permanent (ne se réinitialise pas)
        points: 0, elo: ELO_BASE, streak: 0,
        peak_points: 0, peak_elo: ELO_BASE, was_challenger: false,
      };
      try { await sb.patch('players', body, { id: p.id }); }
      catch (e) { console.warn('Reset joueur échoué', p.id, e); }
    }

    // 3) Archiver la saison close + ouvrir la suivante.
    await sb.patch('seasons', {
      status: 'closed',
      ended_at: new Date().toISOString(),
      champion_name: champ ? champ.name : null,
      podium,
    }, { id: currentSeason.id });
    await sb.post('seasons', {
      number: currentSeason.number + 1,
      started_at: new Date().toISOString(),
      ends_at: (() => { const d = new Date(); d.setMonth(d.getMonth() + 6); return d.toISOString(); })(),
      status: 'active',
    });

    await loadAll();
    renderPlayers();
    toast(`Saison ${currentSeason ? currentSeason.number : ''} ouverte — bonne chance ! 🏆`);
  } catch (e) {
    console.error('closeSeason:', e);
    toast('Erreur pendant la clôture de saison', true);
  } finally {
    const b = document.getElementById('close-season-btn');
    if (b) { b.disabled = false; b.innerHTML = '&#127942; Clôturer la saison'; }
  }
};

// Palmarès des saisons passées : lit la table `seasons` (clôturées) et affiche
// champion + podium de chacune.
const openSeasonsHistory = () => {
  const el = document.getElementById('seasons-content');
  const parsePodium = (p) => {
    if (Array.isArray(p)) return p;
    if (typeof p === 'string') { try { return JSON.parse(p); } catch { return []; } }
    return [];
  };
  const closed = (allSeasons || [])
    .filter((s) => s.status === 'closed')
    .sort((a, b) => (b.number || 0) - (a.number || 0));

  if (!closed.length) {
    el.innerHTML = `<p style="font-size:13px;color:var(--text-faint);text-align:center;padding:1.5rem">
      Aucune saison clôturée pour l'instant.<br>Le palmarès se remplira à la fin de ta première saison. 🏆</p>`;
    openModal('modal-seasons');
    return;
  }

  el.innerHTML = closed.map((s) => {
    const pod = parsePodium(s.podium);
    const dateEnd = s.ended_at ? new Date(s.ended_at).toLocaleDateString('fr-FR') : '';
    const rows = pod.map((r) => {
      const md = r.place === 1 ? '🥇' : r.place === 2 ? '🥈' : r.place === 3 ? '🥉' : (r.place || '');
      return `<div class="palmares-row">
        <div class="palmares-rank">${md}</div>
        <div class="palmares-info">
          <div class="palmares-name">${esc(r.name || '?')}</div>
          <div class="palmares-sub">${r.points != null ? r.points + ' pts' : ''}${r.title ? ' · ' + esc(r.title) : ''}</div>
        </div>
      </div>`;
    }).join('');
    return `<div style="margin-bottom:20px">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:6px">
        <span style="font-weight:700;font-size:15px;color:var(--text)">Saison ${s.number}</span>
        <span style="font-size:11px;color:var(--text-faint)">${dateEnd}</span>
      </div>
      ${s.champion_name
        ? `<div style="font-size:13px;color:var(--gold);margin-bottom:8px">👑 Champion : <strong>${esc(s.champion_name)}</strong></div>`
        : `<div style="font-size:12px;color:var(--text-faint);margin-bottom:8px">Aucun Challenger couronné</div>`}
      ${rows}
    </div>`;
  }).join('');
  openModal('modal-seasons');
};

// ─── Records du club ─────────────────────────────────────────
const clubRecords = () => {
  const chrono = [...matches].sort((a, b) => {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? -1 : 1;
    return (a.id || 0) - (b.id || 0);
  });
  const cur = {}, best = {};
  chrono.forEach((m) => {
    (m.players || []).forEach((pp) => {
      const id = pp.id;
      if ((m.winners || []).includes(id)) { cur[id] = (cur[id] || 0) + 1; if (cur[id] > (best[id] || 0)) best[id] = cur[id]; }
      else cur[id] = 0;
    });
  });
  let streak = { val: 0, pid: null };
  Object.entries(best).forEach(([id, v]) => { if (v > streak.val) streak = { val: v, pid: parseInt(id) }; });

  let gap = { val: null, m: null };
  matches.forEach((m) => {
    const sc = m.scores ? Object.values(m.scores).map(Number).filter((v) => !isNaN(v)) : [];
    if (sc.length >= 2) { const d = Math.max(...sc) - Math.min(...sc); if (gap.val == null || d > gap.val) gap = { val: d, m }; }
  });

  const byDate = {};
  matches.forEach((m) => { if (m.date) byDate[m.date] = (byDate[m.date] || 0) + 1; });
  let night = { date: null, n: 0 };
  Object.entries(byDate).forEach(([d, n]) => { if (n > night.n) night = { date: d, n }; });

  let active = { pid: null, n: 0 };
  players.forEach((p) => { const n = matches.filter((m) => (m.players || []).some((pp) => pp.id === p.id)).length; if (n > active.n) active = { pid: p.id, n }; });

  return { streak, gap, night, active };
};

const openClubRecords = () => {
  const el = document.getElementById('records-content');
  const nameOf = (id) => { const p = players.find((x) => x.id === id); return p ? esc(p.name) : '?'; };
  const gOf    = (id) => { const g = games.find((x) => x.id === id); return g ? esc(g.name) : '?'; };
  if (!matches.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text-faint);text-align:center;padding:1.5rem">Pas encore de parties enregistrées.</p>';
    openModal('modal-records'); return;
  }
  const r = clubRecords();
  const row = (icon, label, val) =>
    `<div class="palmares-row"><div class="palmares-rank">${icon}</div>
       <div class="palmares-info"><div class="palmares-name">${label}</div>
       <div class="palmares-sub">${val}</div></div></div>`;
  el.innerHTML =
    row('🔥', 'Plus longue série',          r.streak.pid ? `${nameOf(r.streak.pid)} — ${r.streak.val} victoires d'affilée` : '—') +
    row('💥', 'Plus gros écart de score',   r.gap.m      ? `${r.gap.val} pts · ${gOf(r.gap.m.game_id)}` : '—') +
    row('🌙', 'Soirée la plus prolifique',  r.night.date ? `${fmtDate(r.night.date)} — ${r.night.n} parties` : '—') +
    row('🎮', 'Joueur le plus actif',       r.active.pid ? `${nameOf(r.active.pid)} — ${r.active.n} parties` : '—');
  openModal('modal-records');
};

// ─── Fil d'actu du club ──────────────────────────────────────
const openActivityFeed = () => {
  const el = document.getElementById('feed-content');
  const recent = [...matches].sort((a, b) => {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? 1 : -1;
    return (b.id || 0) - (a.id || 0);
  }).slice(0, 30);
  if (!recent.length) {
    el.innerHTML = '<p style="font-size:13px;color:var(--text-faint);text-align:center;padding:1.5rem">Aucune activité récente.</p>';
    openModal('modal-feed'); return;
  }
  const nameOf = (id) => { const p = players.find((x) => x.id === id); return p ? esc(p.name) : '?'; };
  el.innerHTML = recent.map((m) => {
    const g = games.find((x) => x.id === m.game_id);
    const winners = (m.winners || []).map(nameOf);
    const others  = (m.players || []).map((pp) => pp.id).filter((id) => !(m.winners || []).includes(id)).map(nameOf);
    const txt = winners.length
      ? `<strong>${winners.join(', ')}</strong> ${winners.length > 1 ? 'gagnent' : 'gagne'} à ${g ? esc(g.name) : '?'}${others.length ? ` contre ${others.join(', ')}` : ''}`
      : `Partie de ${g ? esc(g.name) : '?'} entre ${(m.players || []).map((pp) => nameOf(pp.id)).join(', ')}`;
    return `<div class="palmares-row"><div class="palmares-rank">🎮</div>
       <div class="palmares-info"><div class="palmares-name" style="font-weight:500">${txt}</div>
       <div class="palmares-sub">${m.date ? fmtDate(m.date) : ''}</div></div></div>`;
  }).join('');
  openModal('modal-feed');
};

const buildPlayerCard = (p) => {
  const s    = playerStats(p.id);
  const rate = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;
  const isMe = currentUser && p.user_id === currentUser.id;
  const rk   = displayRank(p);
  const tc   = tierColor(rk);
  const nextRk = RANKS[Math.min(rk.idx + 1, RANKS.length - 1)];
  const prog = rk.idx < RANKS.length - 1
    ? Math.max(0, Math.min(100, Math.round(((p.points || 0) - rk.min) / (nextRk.min - rk.min) * 100)))
    : 100;
  const adv  = bestAdversary(p.id);
  const fav  = bestGame(p.id);
  const _cf  = cosmeticFrame(p);
  const _cbg = cosmeticBg(p);
  const rd   = RANK_ASSETS_DESKTOP[rk.baseKey || rk.key] || {};

  const bgImg = (_cbg && _cbg.src) || rd.banner || RANK_AVATAR_BG[rk.baseKey || rk.key] || null;
  const bgStyle = bgImg
    ? `background:linear-gradient(180deg,rgba(8,11,20,.42),rgba(8,11,20,.86) 56%,rgba(8,11,20,.96)),url('${bgImg}') center/cover;`
    : `background:linear-gradient(160deg,${(p.color || '#4ade80')}22,var(--surface-2));`;

  const avImg   = AVATARS.find((a) => a.id === (p.avatar || 1));
  const avInner = avImg
    ? `<img src="${avImg.src}" style="width:100%;height:100%;object-fit:cover;display:block">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff">${ini(p.name)}</div>`;
  const frameSrc = _cf ? _cf.src : (FRAME_BY_DIV[rk.key] || rd.player_frame);
  let avatarBlock;
  if (frameSrc) {
    const S = 128, k = S / 150;
    const h = _cf ? _cf.hole : (FRAME_HOLES[rk.key] || FRAME_HOLES[rk.baseKey || rk.key] || { top: 32, left: 32, size: 86 });
    const aL = h.left * k, aT = h.top * k, aS = h.size * k;
    avatarBlock = `<div style="position:relative;width:${S}px;height:${S}px;margin:0 auto">
        <div style="position:absolute;left:${aL}px;top:${aT}px;width:${aS}px;height:${aS}px;border-radius:50%;overflow:hidden;z-index:1">${avInner}</div>
        <img src="${frameSrc}" style="position:absolute;inset:0;width:${S}px;height:${S}px;object-fit:contain;pointer-events:none;z-index:2">
      </div>`;
  } else {
    avatarBlock = `<div style="width:84px;height:84px;border-radius:50%;overflow:hidden;margin:14px auto 0;border:3px solid ${tc};box-shadow:0 0 0 3px rgba(0,0,0,.4)">${avInner}</div>`;
  }

  const badges = [];
  if ((p.streak || 0) >= 3) badges.push(`<span class="pl-badge">🔥 ${p.streak}</span>`);
  if (Array.isArray(p.champion_seasons) && p.champion_seasons.length)
    badges.push(`<span class="pl-badge" style="color:var(--gold)">🏆 ${p.champion_seasons.length}×</span>`);
  if (isAdmin) badges.push(`<span class="pl-badge">⚔️ ${getElo(p)}</span>`);

  const adminFoot = isAdmin
    ? `<div class="pl-foot">
         <button class="btn-icon" onclick="event.stopPropagation();editPlayerAdmin(${p.id})">${SVG_EDIT} Modifier</button>
         <button class="btn-icon danger" onclick="event.stopPropagation();delPlayer(${p.id})">${SVG_TRASH} Suppr.</button>
       </div>`
    : '';

  return `<div class="pl-card${isMe ? ' me' : ''}" onclick="openPlayerProfile(${p.id})" style="${bgStyle}">
    <div class="pl-in">
      ${avatarBlock}
      <div class="pl-name">${esc(p.name)}${isMe ? '<span class="pl-me"> (moi)</span>' : ''}</div>
      ${titleHtml(p, 'pl-title')}
      <div class="pl-tier" style="color:${tc};border-color:${tc}55;background:${tc}1f">${rankImg(rk, 15)} ${rk.name}</div>
      <div class="pl-pts">${p.points || 0}<small> pts</small></div>
      ${rk.idx < RANKS.length - 1
        ? `<div class="pl-prog"><i style="width:${prog}%;background:${tc}"></i></div>
           <div class="pl-prog-lbl">&rarr; ${nextRk.name} &middot; ${Math.max(0, (nextRk.min - (p.points || 0)))} pts</div>`
        : `<div class="pl-prog-lbl" style="color:${tc}">Rang max !</div>`}
      <div class="pl-stats">
        <div><b style="color:var(--accent)">${s.won}</b>V</div>
        <div><b>${s.lost}</b>D</div>
        <div><b>${rate}%</b>WR</div>
      </div>
      ${badges.length ? `<div class="pl-badges">${badges.join('')}</div>` : ''}
      ${(fav || (adv && adv.worst)) ? `<div class="pl-tags">
        ${fav ? `<span class="pl-tag">🎯 ${esc(fav.name)}</span>` : ''}
        ${adv && adv.worst ? `<span class="pl-tag">😈 ${esc(adv.worst.name)}</span>` : ''}
      </div>` : ''}
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
    frame:    p.frame || 0,
    cardbg:   p.cardbg || 0,
    playerTitle: p.title || 0,
    points:   p.points || 0,
    showPts:  true,
    elo:      p.elo ?? 1000,
    showElo:  true,
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
    elo:      1000,
    showElo:  true,
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
          const rank = isW ? 1 : loserPlace(losers, pid, m.scores, winIds.length);
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

  const gbg = g ? gameBgSrc(g) : null;
  if (gbg) {
    return `<div class="hist-card has-gbg" style="background:linear-gradient(180deg,rgba(10,15,24,.74),rgba(10,15,24,.9)),url('${gbg}') center/cover">
      <div class="hist-hdr">
        <div class="hist-hdr-main">
          <div class="hist-game">${g ? esc(g.name) : 'Jeu inconnu'}</div>
          ${m.date ? `<div class="hist-date">${fmtDate(m.date)}</div>` : ''}
          ${m.notes ? `<div class="hist-notes">${esc(m.notes)}</div>` : ''}
        </div>
        ${delBtn}
      </div>
      <div class="hist-players">${playersHtml}</div>
      ${scoresHtml}
      ${ptsHtml}
    </div>`;
  }

  const cover = g && g.image_url
    ? `<div class="hist-cover" style="background-image:url('${g.image_url}')"></div>`
    : `<div class="hist-cover hist-cover-empty">🎲</div>`;

  return `<div class="hist-card">
    <div class="hist-hdr">
      ${cover}
      <div class="hist-hdr-main">
        <div class="hist-game">${g ? esc(g.name) : 'Jeu inconnu'}</div>
        ${m.date ? `<div class="hist-date">${fmtDate(m.date)}</div>` : ''}
        ${m.notes ? `<div class="hist-notes">${esc(m.notes)}</div>` : ''}
      </div>
      ${delBtn}
    </div>
    <div class="hist-players">${playersHtml}</div>
    ${scoresHtml}
    ${ptsHtml}
  </div>`;
};

const buildPendingCard = (m) => {
  const g        = games.find((x) => x.id === m.game_id);
  const me       = players.find((p) => p.user_id === currentUser?.id);
  const myPid    = me ? me.id : null;
  const recorder = players.find((p) => p.id === m.recorded_by);
  const iRecorded   = m.recorded_by === myPid;
  const canValidate = isAdmin || ((m.players || []).some((pp) => pp.id === myPid) && !iRecorded);

  const playersHtml = (m.players || []).map((pp) => {
    const pl = players.find((x) => x.id === pp.id);
    const iw = m.winners?.includes(pp.id);
    return `<span class="pr ${iw ? 'win' : 'lose'}">${iw ? '⭐ ' : ''}${pl ? esc(pl.name) : '?'}</span>`;
  }).join('');

  const actions = canValidate
    ? `<div style="display:flex;gap:8px;margin-top:10px">
         <button onclick="confirmMatch(${m.id})" style="flex:1;padding:9px;border-radius:8px;border:none;background:var(--accent);color:#0b0d12;font-weight:700;font-family:inherit;cursor:pointer">✅ Valider</button>
         <button onclick="rejectMatch(${m.id})" style="flex:1;padding:9px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text);font-family:inherit;cursor:pointer">✗ Contester</button>
       </div>`
    : `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px">
         <span style="font-size:12px;color:var(--text-faint)">⏳ En attente de validation</span>
         ${iRecorded ? `<button onclick="rejectMatch(${m.id})" style="padding:6px 11px;border-radius:8px;border:1px solid var(--border);background:var(--bg);color:var(--text-muted);font-family:inherit;font-size:12px;cursor:pointer">Annuler</button>` : ''}
       </div>`;

  return `<div class="hist-card" id="pending-${m.id}" style="border:1px solid var(--gold)">
    <div class="hist-hdr"><div>
      <div class="hist-game">${g ? esc(g.name) : 'Jeu inconnu'}</div>
      <div class="hist-date">${m.date ? fmtDate(m.date) : ''} · par ${recorder ? esc(recorder.name) : '?'}</div>
    </div></div>
    <div class="hist-players">${playersHtml}</div>
    ${actions}
  </div>`;
};

const renderMatchList = () => {
  const el = document.getElementById('hlist');
  if (!currentUser) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">🔒</div><p>Connecte-toi pour voir tes parties.</p></div>';
    return;
  }
  const myPlayer = players.find((p) => p.user_id === currentUser.id);
  const myPid    = myPlayer ? myPlayer.id : null;

  // Parties en attente qui me concernent (participant, déclarant, ou admin).
  const relPending = pendingMatches.filter((m) =>
    isAdmin || (m.players || []).some((pp) => pp.id === myPid) || m.recorded_by === myPid);
  const pendingHtml = relPending.length
    ? `<div style="margin-bottom:16px">
         <div style="font-size:13px;font-weight:700;color:var(--gold);margin-bottom:8px">⏳ Parties à valider (${relPending.length})</div>
         ${relPending.map(buildPendingCard).join('')}
       </div>`
    : '';

  const mine = myPlayer
    ? matches.filter((m) => (m.players || []).some((pp) => pp.id === myPlayer.id))
    : [];
  const confirmedHtml = mine.length
    ? mine.map(buildMatchCard).join('')
    : (pendingHtml ? '' : '<div class="empty"><div class="empty-icon">🎮</div><p>Tu n\'as encore aucune partie enregistrée.</p></div>');

  el.innerHTML = pendingHtml + confirmedHtml;
};

// ── Page d'accueil « Classement » : hero + podium + leaderboard ──
const renderHome = () => { renderHomeHero(); renderPodium(); renderLeaderboard(); };

const renderHomeHero = () => {
  const snum = document.getElementById('home-season-num');
  if (snum) snum.textContent = currentSeason ? currentSeason.number : 1;
  const sub = document.getElementById('home-hero-sub');
  if (sub) sub.textContent =
    `${players.length} membre${players.length > 1 ? 's' : ''} · termine n°1 pour décrocher le titre de Challenger`;
  const meta = document.getElementById('home-hero-meta');
  if (!meta) return;
  const leader = [...players].sort((a, b) => (b.points || 0) - (a.points || 0))[0];
  let daysHtml = '';
  if (currentSeason) {
    let end;
    if (currentSeason.ends_at) end = new Date(currentSeason.ends_at);
    else { end = new Date(currentSeason.started_at); end.setMonth(end.getMonth() + 6); }
    const days = Math.max(0, Math.ceil((end - new Date()) / 86400000));
    daysHtml = `<div><b>${days} j.</b>avant clôture</div>`;
  }
  meta.innerHTML =
    `<div><b>${seasonMatches().length}</b>parties cette saison</div>` +
    `<div><b>${leader ? esc(leader.name) : '—'}</b>en tête</div>` +
    daysHtml;
};

// Fiche podium ÉPURÉE (fond cosmétique + avatar cadré + nom + tier + points + V/D/WR + jeux).
const buildPodiumCard = (p) => {
  const s    = playerStats(p.id);
  const rate = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;
  const rk   = displayRank(p);
  const tc   = tierColor(rk);
  const _cf  = cosmeticFrame(p);
  const _cbg = cosmeticBg(p);
  const rd   = RANK_ASSETS_DESKTOP[rk.baseKey || rk.key] || {};

  const bgImg = (_cbg && _cbg.src) || rd.banner || RANK_AVATAR_BG[rk.baseKey || rk.key] || null;
  const bgStyle = bgImg
    ? `background:linear-gradient(180deg,rgba(8,11,20,.35),rgba(8,11,20,.84) 60%,rgba(8,11,20,.95)),url('${bgImg}') center/cover;`
    : `background:linear-gradient(160deg,${(p.color || '#4ade80')}22,var(--surface-2));`;

  const avImg   = AVATARS.find((a) => a.id === (p.avatar || 1));
  const avInner = avImg
    ? `<img src="${avImg.src}" style="width:100%;height:100%;object-fit:cover;display:block">`
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff">${ini(p.name)}</div>`;
  const frameSrc = _cf ? _cf.src : (FRAME_BY_DIV[rk.key] || rd.player_frame);

  let avatarBlock;
  if (frameSrc) {
    const S = 132, k = S / 150;
    const h = _cf ? _cf.hole : (FRAME_HOLES[rk.key] || FRAME_HOLES[rk.baseKey || rk.key] || { top: 32, left: 32, size: 86 });
    const aL = h.left * k, aT = h.top * k, aS = h.size * k;
    avatarBlock = `<div style="position:relative;width:${S}px;height:${S}px;margin:0 auto">
        <div style="position:absolute;left:${aL}px;top:${aT}px;width:${aS}px;height:${aS}px;border-radius:50%;overflow:hidden;z-index:1">${avInner}</div>
        <img src="${frameSrc}" style="position:absolute;inset:0;width:${S}px;height:${S}px;object-fit:contain;pointer-events:none;z-index:2">
      </div>`;
  } else {
    avatarBlock = `<div style="width:88px;height:88px;border-radius:50%;overflow:hidden;margin:14px auto 0;border:3px solid ${tc};box-shadow:0 0 0 3px rgba(0,0,0,.4)">${avInner}</div>`;
  }

  return `<div class="pod-card" onclick="openPlayerProfile(${p.id})" style="${bgStyle}">
    <div class="pod-in">
      ${avatarBlock}
      <div class="pod-name">${esc(p.name)}</div>
      ${titleHtml(p, 'pl-title')}
      <div class="pod-tier" style="color:${tc};border-color:${tc}55;background:${tc}1f">${rankImg(rk, 15)} ${rk.name}</div>
      <div class="pod-pts">${p.points || 0}<small> pts</small></div>
      <div class="pod-wl"><span><b>${s.won}</b>V</span><span><b>${s.lost}</b>D</span><span><b>${rate}%</b>WR</span></div>
    </div>
  </div>`;
};

const renderPodium = () => {
  const el = document.getElementById('home-podium');
  if (!el) return;
  if (!players.length) { el.innerHTML = ''; return; }
  const top = players
    .map((p) => ({ ...p, ...playerStats(p.id) }))
    .sort((a, b) => (b.points || 0) - (a.points || 0) || b.won - a.won)
    .slice(0, 3);
  const medals = ['🥇', '🥈', '🥉'];
  el.innerHTML = top.map((p, i) =>
    `<div class="podium-slot pos-${i + 1}"><div class="podium-medal">${medals[i]}</div>${buildPodiumCard(p)}</div>`
  ).join('');
};

const TIER_COLOR = {
  bois:'var(--t-bois)', bronze:'var(--t-bronze)', argent:'var(--t-argent)', or:'var(--t-or)',
  platine:'var(--t-platine)', diamant:'var(--t-diamant)', maitre:'var(--t-maitre)', challenger:'var(--t-chall)',
};
const tierColor = (rk) => TIER_COLOR[(rk && (rk.baseKey || rk.key))] || 'var(--text-muted)';
const renderLeaderboard = () => {
  const els = document.querySelectorAll('.lboard');
  if (!els.length) return;
  if (!players.length) {
    els.forEach((el) => { el.innerHTML = '<p style="font-size:13px;color:var(--text-faint);text-align:center;padding:1rem">Aucun joueur</p>'; });
    return;
  }
  const ranked = players
    .map((p) => { const s = playerStats(p.id); return { ...p, ...s, rate: s.played > 0 ? Math.round(s.won / s.played * 100) : 0 }; })
    .sort((a, b) => (b.points || 0) - (a.points || 0) || b.won - a.won || b.rate - a.rate);

  const head = `<div class="lb-head">
      <div class="ctr">#</div><div>Joueur</div><div>Rang</div>
      <div class="ctr">Parties</div><div class="ctr">V/D</div><div class="ctr">Winrate</div><div class="ctr">Forme</div>
    </div>`;

  const html = head + ranked.map((p, i) => {
    const md = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;
    const mc = i === 0 ? 'm1' : i === 1 ? 'm2' : i === 2 ? 'm3' : '';
    const bg = p.color || '#4ade80';
    const rk = displayRank(p);
    const tc = tierColor(rk);
    const av = AVATARS.find((a) => a.id === (p.avatar || 1));
    const avHtml = av ? `<img src="${av.src}" alt="">` : `<span style="color:${bg}">${ini(p.name)}</span>`;
    const fav = bestGame(p.id);
    const ttl = titleOf(p);
    const sub = ttl ? `${ttl.icon ? ttl.icon + ' ' : ''}${ttl.label}` : (fav ? `🎯 ${esc(fav.name)}` : `${p.played} parties`);
    const last5 = [...matches]
      .filter((m) => m.players?.some((pp) => pp.id === p.id))
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || (b.id || 0) - (a.id || 0))
      .slice(0, 5)
      .map((m) => m.winners?.includes(p.id))
      .reverse();   // gauche = la plus ancienne des 5, droite = la plus récente
    const streak = last5.length
      ? `<span class="lb-frm" title="${last5.map((w) => w ? 'V' : 'D').join(' ')}${(p.streak || 0) >= 3 ? ' · série de ' + p.streak : ''}">${last5.map((w) => `<i class="${w ? 'w' : 'l'}"></i>`).join('')}</span>`
      : `<span class="lb-streak flat">—</span>`;
    const gbg = fav ? gameBgSrc({ name: fav.name }) : null;
    const rowStyle = gbg
      ? ` style="background:linear-gradient(90deg,rgba(12,17,26,.93) 0%,rgba(12,17,26,.8) 38%,rgba(12,17,26,.58) 72%,rgba(12,17,26,.5) 100%),url('${gbg}') center/cover"`
      : '';
    return `<div class="lb-row${gbg ? ' has-bg' : ''}"${rowStyle} onclick="openPlayerProfile(${p.id})">
      <div class="lb-rank ${mc}">${md}</div>
      <div class="lb-pl">
        <div class="lb-av">${avHtml}</div>
        <div class="lb-nm"><b>${esc(p.name)}</b><span>${sub}</span></div>
      </div>
      <div class="lb-tier" title="${esc(rk.name)}${isAdmin ? ' · Elo ' + getElo(p) : ''}">
        <span class="lb-emblem">${rankImg(rk, 26)}</span>
        <div class="lb-tinfo"><b style="color:${tc}">${p.points || 0}</b> pts</div>
      </div>
      <div class="lb-col ctr">${p.played}</div>
      <div class="lb-col ctr"><span class="win">${p.won}</span>/<span class="lose">${p.lost}</span></div>
      <div class="lb-wr"><b>${p.rate}%</b><div class="lb-bar"><i style="width:${p.rate}%"></i></div></div>
      <div class="lb-strk ctr">${streak}</div>
    </div>`;
  }).join('');
  els.forEach((el) => { el.innerHTML = html; });
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
  const me     = players.find((p) => p.user_id === currentUser.id);
  const myPid  = me ? me.id : null;
  const others = pids.filter((id) => id !== myPid);
  const token  = (window.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : (Date.now().toString(36) + Math.random().toString(36).slice(2));
  const mdata = {
    game_id: gid,
    date:    document.getElementById('fm-date').value,
    players: pids.map((id) => ({ id })),
    winners: finW,
    scores,
    notes:   document.getElementById('fm-notes').value.trim(),
    recorded_by:      myPid,
    validation_token: token,
    // Partie solo (aucun autre joueur) : personne pour valider → confirmée direct.
    status:  others.length ? 'pending' : 'confirmed',
  };
  showLoading('Enregistrement…');
  try {
    const mArr    = await sb.post('matches', mdata);
    const matchId = Array.isArray(mArr) ? mArr[0]?.id : mArr?.id;

    if (!others.length) {
      // Aucun validateur possible → on confirme et on attribue tout de suite.
      await sb.patch('matches', { confirmed_at: new Date().toISOString() }, { id: matchId });
      await awardPoints(matchId, finW, pids, false, gid, scores);
      await loadAll();
      closeModal('modal-match');
      renderHistory();
      toast('Partie enregistrée ✓');
    } else {
      // En attente : pas de points tant qu'un autre joueur n'a pas validé.
      await loadAll();
      closeModal('modal-match');
      renderHistory();
      toast('Partie enregistrée — en attente de validation par un autre joueur ⏳');
      notifyValidators(others, matchId, token, gid).catch(() => {});
    }
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// Envoie un email de demande de validation aux autres joueurs (lien 1 clic).
const notifyValidators = async (otherPids, matchId, token, gid) => {
  const game     = games.find((g) => g.id === gid);
  const recorder = players.find((p) => p.user_id === currentUser?.id);
  const link     = `${SITE_URL}/?validate=${matchId}&token=${encodeURIComponent(token)}`;
  for (const pid of otherPids) {
    const pl    = players.find((p) => p.id === pid);
    const email = await getPlayerEmail(pl).catch(() => null);
    if (!email) continue;
    const subject = `Valide la partie enregistrée par ${recorder?.name || 'Board Game Tom'}`;
    const body    =
      `Salut ${pl?.name || ''} !\n\n` +
      `${recorder?.name || 'Un joueur'} vient d'enregistrer une partie de "${game?.name || '?'}" ` +
      `à laquelle tu as participé.\nPour que les points et l'Elo soient comptés, elle doit être ` +
      `validée par un autre joueur de la partie.\n\n` +
      `✅ Valide-la ici :\n${link}\n\n` +
      `Ou connecte-toi sur le site : la partie t'attend dans « À valider ».\n${SITE_URL}`;
    sendBrevoEmail(email, pl?.name || '', subject, body).catch(() => {});
  }
};

// Valide une partie en attente (par un autre joueur de la partie, ou un admin).
const confirmMatch = async (id) => {
  const m = pendingMatches.find((x) => x.id === id);
  if (!m) { toast('Partie introuvable ou déjà validée'); return; }
  const me    = players.find((p) => p.user_id === currentUser?.id);
  const myPid = me ? me.id : null;
  const isParticipant = (m.players || []).some((pp) => pp.id === myPid);
  if (!(isAdmin || (isParticipant && m.recorded_by !== myPid))) {
    toast('Seul un autre joueur de la partie peut la valider'); return;
  }
  showLoading('Validation…');
  try {
    await sb.patch('matches', { status: 'confirmed', confirmed_at: new Date().toISOString() }, { id });
    const pids = (m.players || []).map((pp) => pp.id);
    await awardPoints(id, m.winners || [], pids, !!m.is_challenge, m.game_id, m.scores || {});
    await loadAll();
    renderHistory();
    toast('Partie validée — points attribués ✨');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// Conteste / supprime une partie en attente (validateur, déclarant, ou admin).
const rejectMatch = async (id) => {
  const m = pendingMatches.find((x) => x.id === id);
  if (!m) return;
  const me    = players.find((p) => p.user_id === currentUser?.id);
  const myPid = me ? me.id : null;
  const isParticipant = (m.players || []).some((pp) => pp.id === myPid);
  if (!(isAdmin || isParticipant || m.recorded_by === myPid)) { toast('Action non autorisée'); return; }
  if (!confirm('Refuser / supprimer cette partie en attente ?')) return;
  showLoading('Suppression…');
  try {
    await sb.del('matches', { id });
    await loadAll();
    renderHistory();
    toast('Partie en attente supprimée');
  } catch (e) { toastErr(e.message); }
  hideLoading();
};

// Lien email (?validate=<id>&token=<tok>) : on amène le joueur à la partie
// en attente pour qu'il la valide LUI-MÊME — aucune validation automatique.
const handleValidationLink = async () => {
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('validate'));
  const token  = params.get('token');
  if (!id || !token) return;
  history.replaceState({}, '', window.location.pathname);   // évite de rejouer au refresh
  if (!currentUser) {
    toast('Connecte-toi : la partie t\'attend dans « À valider ».');
    return;
  }
  focusPendingMatch(id);
};

// Va sur la page Parties et met en avant la partie en attente (sans la valider).
const focusPendingMatch = (id) => {
  const m = pendingMatches.find((x) => x.id === id);
  if (!m) { toast('Cette partie est déjà validée ou introuvable.'); return; }
  showPage('history');
  setTimeout(() => {
    const card = document.getElementById(`pending-${id}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.transition = 'box-shadow .3s';
      card.style.boxShadow  = '0 0 0 3px var(--gold)';
      setTimeout(() => { card.style.boxShadow = ''; }, 2500);
    }
    toast('Vérifie la partie puis clique sur « Valider » ✅');
  }, 200);
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

// Cœur de calcul d'une partie — PUR (aucune lecture/écriture d'état global).
// pre = { [id]: { pts, elo, streak, games } } : état AVANT la partie.
// Renvoie { [id]: { net, newPts, newStreak, newElo } }.
const computeMatch = (ids, winnerIds, scores, isChallenge, gameId, pre) => {
  const n = ids.length;
  const losers = ids.filter((id) => !winnerIds.includes(id));
  if (scores && Object.keys(scores).length)
    losers.sort((a, b) => (Number(scores[b]) || 0) - (Number(scores[a]) || 0));
  const place = (id) => winnerIds.includes(id) ? 1 : loserPlace(losers, id, scores, winnerIds.length);

  // Variations Elo (comparaisons par paires), à partir de l'Elo d'AVANT.
  const R = {}; ids.forEach((id) => { R[id] = Math.round(pre[id].elo); });
  const eloDelta = {};
  if (n >= 2) ids.forEach((i) => {
    let expected = 0, actual = 0;
    ids.forEach((j) => {
      if (i === j) return;
      expected += 1 / (1 + Math.pow(10, (R[j] - R[i]) / 400));
      const pi = place(i), pj = place(j);
      actual  += pi < pj ? 1 : pi > pj ? 0 : 0.5;
    });
    eloDelta[i] = Math.round(eloK(R[i], pre[i].games) * (actual - expected) / (n - 1));
  });

  const out = {};
  ids.forEach((id) => {
    const isW    = winnerIds.includes(id);
    const curPts = pre[id].pts;
    const basePts = calcPoints(place(id), n, gameId);
    let gain = basePts;
    if (isChallenge && isW) gain += 5;
    const newStreak = isW ? pre[id].streak + 1 : 0;
    if (isW && newStreak > 0 && newStreak % 3 === 0) gain += 3;
    if (isW) {
      const beaten = ids
        .filter((o) => o !== id && !winnerIds.includes(o))
        .map((o) => ({ elo: R[o], newbie: pre[o].games < NEWBIE_GAMES }));
      const { bonus, malus } = skillAdjust(R[id], beaten);
      gain += bonus - malus;
      const floor = Math.ceil(basePts * WIN_FLOOR);   // plancher : victoire toujours payante
      if (gain < floor) gain = floor;
    }
    const streakPenalty = (!isW && pre[id].streak >= 3 && getRank(curPts).idx >= 3) ? 3 : 0;
    const loss = calcLoss(curPts, place(id), n);
    const net  = gain - loss - streakPenalty;
    out[id] = {
      net,
      newPts:    Math.max(0, curPts + net),
      newStreak,
      newElo:    Math.round(pre[id].elo + (eloDelta[id] || 0)),
    };
  });
  return out;
};

const awardPoints = async (matchId, winnerIds, allPlayerIds, isChallengeWin, gameId, scores) => {
  const ids = allPlayerIds.filter((id) => players.some((x) => x.id === id));
  if (!ids.length) { await loadAll(); return; }

  // État AVANT la partie (live).
  const pre = {};
  ids.forEach((id) => {
    const p = players.find((x) => x.id === id);
    pre[id] = { pts: p.points || 0, elo: getElo(p), streak: p.streak || 0, games: eloGamesPlayed(id) };
  });
  const res = computeMatch(ids, winnerIds, scores || {}, isChallengeWin, gameId, pre);

  // Trône projeté après la partie (n°1 aux points, ≥ palier Maître).
  const projPts = {};
  players.forEach((p) => { projPts[p.id] = p.points || 0; });
  ids.forEach((id) => { projPts[id] = res[id].newPts; });
  let thrId = null, thrPts = -1;
  players.forEach((p) => {
    const pts = projPts[p.id];
    if (pts < MAITRE_MIN) return;
    if (pts > thrPts || (pts === thrPts && (thrId == null || String(p.id) < String(thrId)))) {
      thrPts = pts; thrId = p.id;
    }
  });

  // Écriture (points, streak, elo + pics de saison).
  for (const id of ids) {
    const p = players.find((x) => x.id === id);
    const r = res[id];
    showPtsGain(r.net >= 0 ? '+' + r.net : '' + r.net);
    const body = { points: r.newPts, streak: r.newStreak, elo: r.newElo };
    body.peak_points = Math.max(p.peak_points != null ? p.peak_points : (p.points || 0), r.newPts);
    body.peak_elo    = Math.max(p.peak_elo    != null ? p.peak_elo    : getElo(p),       r.newElo);
    if (thrId != null && id === thrId) body.was_challenger = true;
    try {
      await sb.patch('players', body, { id });
    } catch (e) {
      console.warn('Patch joueur échoué, essai minimal :', e);
      try { await sb.patch('players', { points: r.newPts, streak: r.newStreak }, { id }); }
      catch (e2) { console.warn('Points error:', e2); }
    }
  }
  await loadAll();
};

// Rejoue TOUTE la saison depuis zéro avec la formule actuelle et réécrit
// points / Elo / série / pics. Ordre chronologique (date, puis id).
const recomputeSeason = async () => {
  if (!isAdmin) return;
  const list = [...seasonMatches()].sort((a, b) => {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? -1 : 1;
    return (a.id || 0) - (b.id || 0);
  });
  if (!confirm(
    `Recalculer la SAISON en cours ?\n\n` +
    `Les ${list.length} parties confirmées seront rejouées depuis zéro avec la ` +
    `formule actuelle (bonus d'exploit, malus de farm, plancher, etc.).\n` +
    `Points, Elo, séries et pics seront réécrits proprement.`
  )) return;

  const btn = document.getElementById('recalc-season-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Recalcul…'; }
  showLoading('Recalcul de la saison…');
  try {
    const sim = {};
    players.forEach((p) => { sim[p.id] = { pts: 0, elo: ELO_BASE, streak: 0, games: 0, peakPts: 0, peakElo: ELO_BASE }; });

    for (const m of list) {
      const ids = [...new Set((m.players || []).map((pp) => pp && pp.id).filter((id) => id && sim[id]))];
      if (!ids.length) continue;
      const winnerIds = (Array.isArray(m.winners) ? m.winners : []).filter((id) => ids.includes(id));
      const pre = {};
      ids.forEach((id) => { pre[id] = { pts: sim[id].pts, elo: sim[id].elo, streak: sim[id].streak, games: sim[id].games }; });
      const res = computeMatch(ids, winnerIds, m.scores || {}, !!m.is_challenge, m.game_id, pre);
      ids.forEach((id) => {
        sim[id].pts     = res[id].newPts;
        sim[id].elo     = res[id].newElo;
        sim[id].streak  = res[id].newStreak;
        sim[id].games  += 1;
        sim[id].peakPts = Math.max(sim[id].peakPts, sim[id].pts);
        sim[id].peakElo = Math.max(sim[id].peakElo, sim[id].elo);
      });
    }

    let written = 0;
    for (const p of players) {
      const s = sim[p.id];
      const body = {
        points: s.pts, elo: Math.round(s.elo), streak: s.streak,
        peak_points: s.peakPts, peak_elo: Math.round(s.peakElo),
      };
      try { await sb.patch('players', body, { id: p.id }); written++; }
      catch (e) {
        try { await sb.patch('players', { points: s.pts, streak: s.streak }, { id: p.id }); written++; }
        catch (e2) { console.warn('recompute patch error', p.id, e2); }
      }
    }
    await loadAll();
    renderPlayers();
    toast(`Saison recalculée — ${written} joueur${written > 1 ? 's' : ''} mis à jour ✨`);
  } catch (e) {
    console.error('recomputeSeason:', e);
    toast('Erreur pendant le recalcul', true);
  } finally {
    const b = document.getElementById('recalc-season-btn');
    if (b) { b.disabled = false; b.textContent = '♻️ Recalculer la saison'; }
    hideLoading();
  }
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

// ═══════════════════════════════════════════════════════════════
// CHAT (chat global, temps réel léger : append-only)
// ═══════════════════════════════════════════════════════════════
const _myPlayerId = () => (currentUser ? (players.find((p) => p.user_id === currentUser.id)?.id ?? null) : null);

const loadChat = async () => {
  try {
    const rows = await sb.get('chat_messages', { select: '*', order: 'created_at.desc', limit: 80 });
    chatMessages = (rows || []).slice().reverse();   // ordre chronologique
    chatLoaded = true; chatError = false;
  } catch (e) {
    chatError = true;
    console.error('Chat indisponible :', e.message);
  }
  if (curPage === 'social') renderChat(true);
};

const renderChat = (toBottom) => {
  const box = document.getElementById('chat-messages');
  if (!box) return;
  if (chatError) {
    box.innerHTML = '<div class="chat-empty">Chat indisponible pour le moment.</div>';
    return;
  }
  const myPid = _myPlayerId();
  box.innerHTML = chatMessages.map((m) => {
    const p    = players.find((pp) => pp.id === m.player_id);
    const name = p?.name || m.author_name || 'Anonyme';
    const av   = AVATARS.find((a) => a.id === (p?.avatar || 1));
    const avHtml = av ? `<img src="${av.src}" alt="">` : `<span>${ini(name)}</span>`;
    const mine = myPid != null && m.player_id === myPid;
    const t = new Date(m.created_at).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    return `<div class="chat-msg${mine ? ' mine' : ''}">
        <div class="chat-av">${avHtml}</div>
        <div class="chat-bubble">
          <div class="chat-meta"><span class="chat-name">${esc(name)}</span><span class="chat-time">${t}</span></div>
          <div class="chat-text">${esc(m.content)}</div>
        </div>
      </div>`;
  }).join('') || '<div class="chat-empty">Aucun message. Lance la conversation !</div>';

  const row = document.getElementById('chat-input-row');
  if (row) row.style.display = currentUser ? 'flex' : 'none';
  const lock = document.getElementById('chat-locked');
  if (lock) lock.style.display = currentUser ? 'none' : 'block';

  if (toBottom) box.scrollTop = box.scrollHeight;
};

const sendChatMessage = async () => {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const content = input.value.trim();
  if (!content) return;
  if (!currentUser) { toastErr('Connecte-toi pour écrire.'); return; }
  if (content.length > 1000) { toastErr('Message trop long (max 1000 caractères).'); return; }
  input.value = '';
  try {
    const res = await sb.post('chat_messages', {
      player_id:   _myPlayerId(),
      author_name: currentProfile?.name || 'Anonyme',
      content,
    });
    const msg = Array.isArray(res) ? res[0] : res;
    if (msg) {                       // self:false → on ajoute soi-même
      chatMessages.push(msg);
      if (chatMessages.length > 120) chatMessages = chatMessages.slice(-120);
      renderChat(true);
    }
  } catch (e) { input.value = content; toastErr('Envoi échoué : ' + e.message); }
};

// Append d'un message reçu en temps réel (sans refetch).
const appendChatMessage = (rec) => {
  if (!chatLoaded || !rec || !rec.content) return;
  if (chatMessages.some((x) => x.id === rec.id)) return;
  chatMessages.push(rec);
  if (chatMessages.length > 120) chatMessages = chatMessages.slice(-120);
  if (curPage === 'social') renderChat(true);
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
  const me     = players.find((p) => p.user_id === currentUser?.id);
  const myPid  = me ? me.id : null;
  const others = allIds.filter((id) => id !== myPid);
  const token  = (window.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : (Date.now().toString(36) + Math.random().toString(36).slice(2));
  showLoading('Enregistrement…');
  try {
    const mdata = {
      game_id: ch.game_id,
      date:    new Date().toISOString().split('T')[0],
      players: allIds.map((id) => ({ id })),
      winners: winnerIds,
      scores:  {},
      notes:   notes ? notes + ' (Défi)' : 'Défi',
      recorded_by:      myPid,
      validation_token: token,
      is_challenge:     true,
      status:  others.length ? 'pending' : 'confirmed',
    };
    const mArr    = await sb.post('matches', mdata);
    const matchId = Array.isArray(mArr) ? mArr[0]?.id : mArr?.id;
    await sb.patch('challenges', { status: 'completed', result_reported: true, match_id: matchId }, { id: currentChallengeId });

    if (!others.length) {
      await sb.patch('matches', { confirmed_at: new Date().toISOString() }, { id: matchId });
      await awardPoints(matchId, winnerIds, allIds, true, ch.game_id, {});
      await loadSocial();
      closeModal('modal-challenge-result');
      renderChallenges();
      toast('Résultat enregistré ! Points attribués ✨');
    } else {
      await loadSocial();
      closeModal('modal-challenge-result');
      renderChallenges();
      toast('Résultat enregistré — en attente de validation par l\'adversaire ⏳');
      notifyValidators(others, matchId, token, ch.game_id).catch(() => {});
    }
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

  // ─── Duel direct : qui finit devant l'autre, même si un tiers gagne ───
  // On compare les PLACES (denses, gèrent les égalités) de p1 et p2 dans
  // chaque partie partagée. Place plus petite = mieux classé = « bat l'autre ».
  let p1ahead = 0, p2ahead = 0, ties = 0;
  shared.forEach((m) => {
    const ids = (m.players || []).map((pp) => pp.id);
    const winnerIds = (Array.isArray(m.winners) ? m.winners : []).filter((id) => ids.includes(id));
    const pl = placements(ids, winnerIds, m.scores || {});
    const a = pl[p1id], b = pl[p2id];
    if (a == null || b == null) return;
    if (a < b) p1ahead++; else if (b < a) p2ahead++; else ties++;
  });

  const b1 = p1.color || '#4ade80';
  const b2 = p2.color || '#60a5fa';
  const byGame = {};
  shared.forEach((m) => {
    const gn = games.find((x) => x.id === m.game_id)?.name || '?';
    if (!byGame[gn]) byGame[gn] = { p1w: 0, p2w: 0, total: 0, p1ahead: 0, p2ahead: 0 };
    byGame[gn].total++;
    if (m.winners?.includes(p1id)) byGame[gn].p1w++;
    if (m.winners?.includes(p2id)) byGame[gn].p2w++;
    const ids = (m.players || []).map((pp) => pp.id);
    const winnerIds = (Array.isArray(m.winners) ? m.winners : []).filter((id) => ids.includes(id));
    const pl = placements(ids, winnerIds, m.scores || {});
    const a = pl[p1id], b = pl[p2id];
    if (a != null && b != null) { if (a < b) byGame[gn].p1ahead++; else if (b < a) byGame[gn].p2ahead++; }
  });
  el.innerHTML = `
    <div class="h2h-layout">
      <div class="h2h-card">
        <div class="h2h-avatar" style="background:${b1}22;color:${b1}">${ini(p1.name)}</div>
        <div class="h2h-name" style="color:${b1}">${esc(p1.name)}</div>
        <div class="h2h-stat" style="color:${p1wins >= p2wins ? 'var(--accent)' : 'var(--text-muted)'}">${p1wins}</div>
        <div class="h2h-stat-lbl">parties gagnées</div>
      </div>
      <div class="h2h-card">
        <div class="h2h-avatar" style="background:${b2}22;color:${b2}">${ini(p2.name)}</div>
        <div class="h2h-name" style="color:${b2}">${esc(p2.name)}</div>
        <div class="h2h-stat" style="color:${p2wins > p1wins ? 'var(--accent)' : 'var(--text-muted)'}">${p2wins}</div>
        <div class="h2h-stat-lbl">parties gagnées</div>
      </div>
      <div class="h2h-summary">
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:.75rem">
          ${shared.length} partie${shared.length > 1 ? 's' : ''} ensemble${draws > 0 ? ` · ${draws} sans vainqueur de partie` : ''}.
        </p>
        <div class="h2h-duel">
          <div class="h2h-duel-lbl">Duel direct <span title="Qui a fini devant l'autre, même quand quelqu'un d'autre gagne la partie">⚔️</span></div>
          <div class="h2h-duel-bar">
            <span class="h2h-duel-n" style="color:${b1}">${p1ahead}</span>
            <div class="h2h-duel-track">
              <div class="h2h-duel-fill" style="width:${p1ahead + p2ahead ? Math.round(p1ahead / (p1ahead + p2ahead) * 100) : 50}%;background:${b1}"></div>
            </div>
            <span class="h2h-duel-n" style="color:${b2}">${p2ahead}</span>
          </div>
          <div class="h2h-duel-sub">fois devant l'autre${ties > 0 ? ` · ${ties} ex æquo` : ''}</div>
        </div>
        <div class="h2h-games">
          ${Object.entries(byGame).map(([gn, st]) =>
            `<div class="h2h-game-row">
               <span style="font-weight:500;color:var(--text)">${esc(gn)}</span>
               <span class="h2h-score">
                 <span style="color:${b1}">${st.p1ahead}</span> – <span style="color:${b2}">${st.p2ahead}</span>
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
  { id:'rank_diamant_1', icon:'⚡', name:'Diamant I',                desc:'Atteindre le Diamant I',               check: (s) => Math.max(s.peakPoints || 0, s.maxPoints || 0) >= 1836 },
  { id:'bois_30j',       icon:'🌳', name:'Le Gardien sylvestre',     desc:'Rester 30 jours sans quitter le Bois', check: (s) => (s.peakPoints || 0) < 50 && (s.daysSinceStart || 0) >= 30 },
  { id:'dune_win_10',    icon:'🪱', name:'Lisan al-Gaib',             desc:'Gagner 10 parties de Dune Imperium Insurrection', check: (s) => (s.duneWins || 0) >= 10 },
  { id:'dune_win_20',    icon:'🏜️', name:'Usul',                      desc:'Gagner 20 parties de Dune Imperium Insurrection', check: (s) => (s.duneWins || 0) >= 20 },
  { id:'skullking_win_50', icon:'🏴‍☠️', name:'Le Roi des Abysses',     desc:'Gagner 50 parties de Skull King', check: (s) => (s.skullKingWins || 0) >= 50 },
  { id:'7w_play_15',     icon:'🏗️', name:'Architecte',               desc:'Jouer 15 parties de 7 Wonders',  check: (s) => (s.sevenWondersPlayed || 0) >= 15 },
  { id:'7w_win_25',      icon:'🏛️', name:'Les Sept Merveilles',      desc:'Gagner 25 parties de 7 Wonders', check: (s) => (s.sevenWondersWins || 0) >= 25 },
  { id:'foret_play_15',  icon:'🌲', name:'L\'Arbre-Monde',           desc:'Jouer 15 parties de Foret mixte', check: (s) => (s.foretMixtePlayed || 0) >= 15 },
  { id:'iaww_win_15',    icon:'🪐', name:'Bâtisseur de mondes',      desc:'Gagner 15 parties d\'It\'s a Wonderful World', check: (s) => (s.iawwWins || 0) >= 15 },
  { id:'akropolis_win_15',icon:'🏺', name:'Maître bâtisseur',        desc:'Gagner 15 parties d\'Akropolis',         check: (s) => (s.akropolisWins || 0) >= 15 },
  { id:'brass_play_10',  icon:'⚙️', name:'Industriel',               desc:'Jouer 10 parties de Brass Birmingham',   check: (s) => (s.brassPlayed || 0) >= 10 },
  { id:'brass_win_15',   icon:'🏭', name:'Magnat de l\'acier',       desc:'Gagner 15 parties de Brass Birmingham',  check: (s) => (s.brassWins || 0) >= 15 },
  { id:'catan_play_15',  icon:'🏝️', name:'Colon de Catane',          desc:'Jouer 15 parties de Catan',              check: (s) => (s.catanPlayed || 0) >= 15 },
  { id:'cyberpunk_play_10',icon:'🌃', name:'Légende de Night City',   desc:'Jouer 10 parties de Gangs of Night City',check: (s) => (s.cyberpunkPlayed || 0) >= 10 },
  { id:'divinus_win_10', icon:'🦉', name:'Élu des dieux',            desc:'Remporter 10 scénarios de Divinus',      check: (s) => (s.divinusWins || 0) >= 10 },
  { id:'cardia_win_25',  icon:'🛡️', name:'Seigneur de Cardia',       desc:'Gagner 25 duels de Cardia',              check: (s) => (s.cardiaWins || 0) >= 25 },
  { id:'cardia_win_50',  icon:'🐉', name:'Daimyo de Cardia',         desc:'Gagner 50 duels de Cardia',              check: (s) => (s.cardiaWins || 0) >= 50 },
  { id:'cardia_win_75',  icon:'👑', name:'Roi de Cardia',            desc:'Gagner 75 duels de Cardia',              check: (s) => (s.cardiaWins || 0) >= 75 },
  { id:'harmonies_play_15',icon:'🌿', name:'Jardinier d\'Harmonies',  desc:'Jouer 15 parties d\'Harmonies',          check: (s) => (s.harmoniesPlayed || 0) >= 15 },
  { id:'harmonies_win_15',icon:'🦌', name:'Esprit des saisons',      desc:'Gagner 15 parties d\'Harmonies',         check: (s) => (s.harmoniesWins || 0) >= 15 },
  { id:'harmonies_win_30',icon:'🕊️', name:'Grue Légendaire',         desc:'Gagner 30 parties d\'Harmonies',         check: (s) => (s.harmoniesWins || 0) >= 30 },
  { id:'mytho_play_10',  icon:'🐲', name:'Initié des mythes',        desc:'Jouer 10 parties de Mythologies',        check: (s) => (s.mythologiesPlayed || 0) >= 10 },
  { id:'mytho_play_20',  icon:'🪷', name:'Gardien des panthéons',    desc:'Jouer 20 parties de Mythologies',        check: (s) => (s.mythologiesPlayed || 0) >= 20 },
  { id:'mytho_play_30',  icon:'☥', name:'Maître des mythologies',    desc:'Jouer 30 parties de Mythologies',        check: (s) => (s.mythologiesPlayed || 0) >= 30 },
  { id:'zenith_play_10', icon:'🚀', name:'Cadet de Zenith',           desc:'Jouer 10 parties de Zenith',             check: (s) => (s.zenithPlayed || 0) >= 10 },
  { id:'zenith_win_10',  icon:'🌍', name:'Pionnier de Terra',         desc:'Gagner 10 parties de Zenith',            check: (s) => (s.zenithWins || 0) >= 10 },
  { id:'zenith_play_20', icon:'🤖', name:'Ingénieur de Zenith',       desc:'Jouer 20 parties de Zenith',             check: (s) => (s.zenithPlayed || 0) >= 20 },
  { id:'zenith_win_20',  icon:'⚙️', name:'Androïde Prime',            desc:'Gagner 20 parties de Zenith',            check: (s) => (s.zenithWins || 0) >= 20 },
  { id:'zenith_play_30', icon:'🦊', name:'Explorateur de Zenith',     desc:'Jouer 30 parties de Zenith',             check: (s) => (s.zenithPlayed || 0) >= 30 },
  { id:'zenith_win_30',  icon:'🌌', name:'Légende de Zenith',         desc:'Gagner 30 parties de Zenith',            check: (s) => (s.zenithWins || 0) >= 30 },
  { id:'zenith_play_50', icon:'🪐', name:'Citoyen de Zenith',         desc:'Jouer 50 parties de Zenith',             check: (s) => (s.zenithPlayed || 0) >= 50 },
  { id:'toybattle_play_15',icon:'🦆', name:'Recrue de Toy Battle',    desc:'Jouer 15 parties de Toy Battle',         check: (s) => (s.toyBattlePlayed || 0) >= 15 },
  { id:'toybattle_win_15',icon:'👑', name:'Canard Royal',             desc:'Gagner 15 parties de Toy Battle',        check: (s) => (s.toyBattleWins || 0) >= 15 },
  { id:'toybattle_play_30',icon:'🏰', name:'Bâtisseur de citadelle',  desc:'Jouer 30 parties de Toy Battle',         check: (s) => (s.toyBattlePlayed || 0) >= 30 },
  { id:'toybattle_win_50',icon:'⚔️', name:'Champion de Toy Battle',   desc:'Gagner 50 parties de Toy Battle',        check: (s) => (s.toyBattleWins || 0) >= 50 },
  { id:'vale_play_25',   icon:'🐉', name:'Gardien de la Vallée',      desc:'Jouer 25 parties de The Vale of Eternity', check: (s) => (s.valePlayed || 0) >= 25 },
  { id:'azul_play_15',    icon:'🪟', name:'Maître Verrier',           desc:'Jouer 15 parties d\'Azul',    check: (s) => (s.azulPlayed || 0) >= 15 },
  { id:'arknova_play_15', icon:'🦓', name:'Architecte zoologique',    desc:'Jouer 15 parties d\'Ark Nova', check: (s) => (s.arkNovaPlayed || 0) >= 15 },
  { id:'arcs_play_15',    icon:'🌌', name:'Seigneur stellaire',       desc:'Jouer 15 parties d\'Arcs',    check: (s) => (s.arcsPlayed || 0) >= 15 },
  { id:'akropolis_play_15',icon:'🏛️', name:'Urbaniste d\'Akropolis',  desc:'Jouer 15 parties d\'Akropolis',check: (s) => (s.akropolisPlayed || 0) >= 15 },
  { id:'abyss_play_15',   icon:'🔱', name:'Souverain des Abysses',    desc:'Jouer 15 parties d\'Abyss',   check: (s) => (s.abyssPlayed || 0) >= 15 },
  { id:'citesroyales_play_15', icon:'👑', name:'Bâtisseur royal',     desc:'Jouer 15 parties de Cités Royales',   check: (s) => (s.citesRoyalesPlayed || 0) >= 15 },
  { id:'citadelles_play_15',   icon:'🏰', name:'Maître des intrigues', desc:'Jouer 15 parties de Citadelles',     check: (s) => (s.citadellesPlayed || 0) >= 15 },
  { id:'chateaucombo_play_15', icon:'🃏', name:'Châtelain combo',      desc:'Jouer 15 parties de Château Combo',  check: (s) => (s.chateauComboPlayed || 0) >= 15 },
  { id:'chateaublanc_play_15', icon:'🏯', name:'Daimyo du Château Blanc', desc:'Jouer 15 parties du Château Blanc', check: (s) => (s.chateauBlancPlayed || 0) >= 15 },
  { id:'carcassonne_play_15',  icon:'🧱', name:'Meeple d\'or',         desc:'Jouer 15 parties de Carcassonne',    check: (s) => (s.carcassonnePlayed || 0) >= 15 },
  { id:'brass_play_15',        icon:'🚂', name:'Baron du charbon',     desc:'Jouer 15 parties de Brass Birmingham', check: (s) => (s.brassPlayed || 0) >= 15 },
  { id:'blackforest_play_15',  icon:'🌑', name:'Alchimiste de la Forêt-Noire', desc:'Jouer 15 parties de Black Forest', check: (s) => (s.blackForestPlayed || 0) >= 15 },
  { id:'barrage_play_15',      icon:'💧', name:'Ingénieur hydraulique', desc:'Jouer 15 parties de Barrage',       check: (s) => (s.barragePlayed || 0) >= 15 },
  { id:'dewan_play_15',      icon:'🗿', name:'Esprit de Dewan',          desc:'Jouer 15 parties de Dewan',            check: (s) => (s.dewanPlayed || 0) >= 15 },
  { id:'deadcells_play_15',  icon:'💀', name:'Prisonnier immortel',      desc:'Jouer 15 parties de Dead Cells',       check: (s) => (s.deadCellsPlayed || 0) >= 15 },
  { id:'darwins_play_15',    icon:'🐢', name:'Naturaliste du Beagle',    desc:"Jouer 15 parties de Darwin's Journey", check: (s) => (s.darwinsPlayed || 0) >= 15 },
  { id:'cybertcg_play_15',   icon:'🎴', name:'Duelliste de Night City',  desc:'Jouer 15 parties de Cyberpunk TCG',    check: (s) => (s.cyberTcgPlayed || 0) >= 15 },
  { id:'courtisans_play_15', icon:'🎭', name:'Intrigant de la cour',     desc:'Jouer 15 parties de Courtisans',       check: (s) => (s.courtisansPlayed || 0) >= 15 },
  { id:'civolution_play_15', icon:'🧬', name:'Architecte des civilisations', desc:'Jouer 15 parties de Civolution',   check: (s) => (s.civolutionPlayed || 0) >= 15 },
  { id:'eternaldecks_play_15',  icon:'🎴', name:'Gardien des Decks Éternels', desc:'Jouer 15 parties d\'Eternal Decks',              check: (s) => (s.eternalDecksPlayed || 0) >= 15 },
  { id:'endeavor_play_15',      icon:'🌊', name:'Explorateur des profondeurs', desc:'Jouer 15 parties d\'Endeavor : Eaux Profondes',  check: (s) => (s.endeavorPlayed || 0) >= 15 },
  { id:'terredumilieu_play_15', icon:'💍', name:'Porteur de l\'Anneau',        desc:'Jouer 15 parties de Duel pour la Terre du Milieu', check: (s) => (s.terreDuMilieuPlayed || 0) >= 15 },
  { id:'dorfromantik_play_15',  icon:'🌸', name:'Peintre des cerisiers',       desc:'Jouer 15 parties de Dorfromantik Sakura',        check: (s) => (s.dorfromantikPlayed || 0) >= 15 },
  { id:'dilemmeduroi_play_15',  icon:'👑', name:'Conseiller du Roi',           desc:'Jouer 15 parties du Dilemme du Roi',             check: (s) => (s.dilemmeDuRoiPlayed || 0) >= 15 },
  { id:'diceforge_play_15',     icon:'⚒️', name:'Forgeron divin',              desc:'Jouer 15 parties de Dice Forge',                 check: (s) => (s.diceForgePlayed || 0) >= 15 },
  { id:'faraway_play_15',    icon:'🪐', name:'Explorateur de l\'Inconnu', desc:'Jouer 15 parties de Far Away',    check: (s) => (s.farAwayPlayed || 0) >= 15 },
  { id:'everdell_play_15',   icon:'🦊', name:'Citoyen d\'Everdell',       desc:'Jouer 15 parties d\'Everdell',    check: (s) => (s.everdellPlayed || 0) >= 15 },
  { id:'evenfall_play_15',   icon:'🍂', name:'Mystique du Crépuscule',    desc:'Jouer 15 parties d\'Evenfall',    check: (s) => (s.evenfallPlayed || 0) >= 15 },
  { id:'eternitium_play_15', icon:'💠', name:'Gardien de l\'Éternité',    desc:'Jouer 15 parties d\'Eternitium',  check: (s) => (s.eternitiumPlayed || 0) >= 15 },
  { id:'flowers_play_15',    icon:'🦋', name:'Botaniste émérite',         desc:'Jouer 15 parties de Flowers',     check: (s) => (s.flowersPlayed || 0) >= 15 },
  { id:'iki_play_15',        icon:'🏮', name:'Artisan d\'Edo',            desc:'Jouer 15 parties d\'Iki',         check: (s) => (s.ikiPlayed || 0) >= 15 },
  { id:'hybris_play_15',     icon:'🏛️', name:'Défi aux Dieux',            desc:'Jouer 15 parties d\'Hybris',      check: (s) => (s.hybrisPlayed || 0) >= 15 },
  { id:'gwent_play_15',      icon:'🐺', name:'Maître du Gwent',           desc:'Jouer 15 parties de Gwent',       check: (s) => (s.gwentPlayed || 0) >= 15 },
  { id:'gloomhaven_play_15', icon:'🗡️', name:'Mercenaire de Gloomhaven',  desc:'Jouer 15 parties de Gloomhaven',  check: (s) => (s.gloomhavenPlayed || 0) >= 15 },
  { id:'galacticcruise_play_15', icon:'🚀', name:'Croisiériste des étoiles', desc:'Jouer 15 parties de Galactic Cruise', check: (s) => (s.galacticCruisePlayed || 0) >= 15 },
  { id:'foracrown_play_15',      icon:'👑', name:'Prétendant au Trône',      desc:'Jouer 15 parties de For a Crown',     check: (s) => (s.forACrownPlayed || 0) >= 15 },
  { id:'livingforest_play_15', icon:'🌳', name:'Esprit de la Forêt',     desc:'Jouer 15 parties de Living Forest',        check: (s) => (s.livingForestPlayed || 0) >= 15 },
  { id:'lafamiglia_play_15',   icon:'🍷', name:'Parrain de la Famiglia', desc:'Jouer 15 parties de La Famiglia',          check: (s) => (s.laFamigliaPlayed || 0) >= 15 },
  { id:'dominion_play_15',     icon:'🏰', name:'Seigneur du Dominion',   desc:'Jouer 15 parties de Dominion',             check: (s) => (s.dominionPlayed || 0) >= 15 },
  { id:'hoth_play_15',         icon:'❄️', name:'Vétéran de Hoth',        desc:'Jouer 15 parties de La Bataille de Hoth',  check: (s) => (s.hothPlayed || 0) >= 15 },
  { id:'kraken_play_15',       icon:'🐙', name:'Dompteur du Kraken',     desc:'Jouer 15 parties de L\'Ombre du Kraken',   check: (s) => (s.krakenPlayed || 0) >= 15 },
  { id:'kronologic_play_5',    icon:'🕰️', name:'Apprenti détective',     desc:'Jouer 5 parties de Kronologic',            check: (s) => (s.kronologicPlayed || 0) >= 5 },
  { id:'kronologic_play_10',   icon:'🕵️', name:'Enquêteur temporel',     desc:'Jouer 10 parties de Kronologic',           check: (s) => (s.kronologicPlayed || 0) >= 10 },
  { id:'kronologic_play_15',   icon:'⏳', name:'Maître du Temps',        desc:'Jouer 15 parties de Kronologic',           check: (s) => (s.kronologicPlayed || 0) >= 15 },
  { id:'ironwood_play_15',     icon:'⚙️', name:'Forgeron d\'Ironwood',   desc:'Jouer 15 parties d\'Ironwood',             check: (s) => (s.ironwoodPlayed || 0) >= 15 },
  { id:'now_play_15',        icon:'⚡', name:'Réflexes d\'acier',        desc:'Jouer 15 parties de Now !',                  check: (s) => (s.nowPlayed || 0) >= 15 },
  { id:'nidavellir_play_15', icon:'🪓', name:'Recruteur de Nidavellir',  desc:'Jouer 15 parties de Nidavellir',             check: (s) => (s.nidavellirPlayed || 0) >= 15 },
  { id:'nemesis_play_15',    icon:'👾', name:'Survivant du Nemesis',     desc:'Jouer 15 parties de Nemesis',                check: (s) => (s.nemesisPlayed || 0) >= 15 },
  { id:'narak_play_15',      icon:'🐍', name:'Explorateur de Narak',     desc:'Jouer 15 parties des Ruines Perdues de Narak', check: (s) => (s.narakPlayed || 0) >= 15 },
  { id:'naishi_play_15',     icon:'⛩️', name:'Conseiller du Naishi',     desc:'Jouer 15 parties de Naishi',                 check: (s) => (s.naishiPlayed || 0) >= 15 },
  { id:'mooncolony_play_15', icon:'🌕', name:'Colon lunaire',            desc:'Jouer 15 parties de Moon Colony Bloodbath',  check: (s) => (s.moonColonyPlayed || 0) >= 15 },
  { id:'monumental_play_15', icon:'🗿', name:'Bâtisseur Monumental',     desc:'Jouer 15 parties de Monumental',             check: (s) => (s.monumentalPlayed || 0) >= 15 },
  { id:'maracaibo_play_15',  icon:'⛵', name:'Corsaire de Maracaïbo',    desc:'Jouer 15 parties de Maracaibo',              check: (s) => (s.maracaiboPlayed || 0) >= 15 },
  { id:'root_play_15',      icon:'🐾', name:'Seigneur des Sous-Bois',   desc:'Jouer 15 parties de Root',           check: (s) => (s.rootPlayed || 0) >= 15 },
  { id:'rivals_play_15',    icon:'💥', name:'Champion de l\'Arène',     desc:'Jouer 15 parties de Rivals',         check: (s) => (s.rivalsPlayed || 0) >= 15 },
  { id:'risingsun_play_15', icon:'🌅', name:'Daimyo du Soleil Levant',  desc:'Jouer 15 parties de Rising Sun',     check: (s) => (s.risingSunPlayed || 0) >= 15 },
  { id:'riftbound_play_15', icon:'🌀', name:'Invocateur de la Faille',  desc:'Jouer 15 parties de Riftbound',      check: (s) => (s.riftboundPlayed || 0) >= 15 },
  { id:'resarcana_play_15', icon:'🔮', name:'Mage des Arcanes',         desc:'Jouer 15 parties de Res Arcana',     check: (s) => (s.resArcanaPlayed || 0) >= 15 },
  { id:'recall_play_15',    icon:'👁️', name:'Mémoire parfaite',         desc:'Jouer 15 parties de Recall',         check: (s) => (s.recallPlayed || 0) >= 15 },
  { id:'rebirth_play_15',   icon:'🌱', name:'Artisan de la Renaissance',desc:'Jouer 15 parties de Rebirth',        check: (s) => (s.rebirthPlayed || 0) >= 15 },
  { id:'rauha_play_15',     icon:'🍄', name:'Chaman de Rauha',          desc:'Jouer 15 parties de Rauha',          check: (s) => (s.rauhaPlayed || 0) >= 15 },
  { id:'odin_play_15',      icon:'📯', name:'Héritier d\'Odin',         desc:'Jouer 15 parties d\'Odin',           check: (s) => (s.odinPlayed || 0) >= 15 },
  { id:'taketime_play_15',     icon:'⏱️', name:'Maître de l\'instant',      desc:'Jouer 15 parties de Take Time',       check: (s) => (s.takeTimePlayed || 0) >= 15 },
  { id:'smallworld_play_15',   icon:'🗺️', name:'Conquérant du Petit Monde', desc:'Jouer 15 parties de Small World',     check: (s) => (s.smallWorldPlayed || 0) >= 15 },
  { id:'slaythespire_play_15', icon:'🗼', name:'Pourfendeur de la Flèche',  desc:'Jouer 15 parties de Slay the Spire',  check: (s) => (s.slayTheSpirePlayed || 0) >= 15 },
  { id:'skyrise_play_15',      icon:'🎈', name:'Architecte de Skyrise',     desc:'Jouer 15 parties de Skyrise',         check: (s) => (s.skyrisePlayed || 0) >= 15 },
  { id:'skullking_play_15',    icon:'🏴‍☠️', name:'Pirate du Roi des Crânes',  desc:'Jouer 15 parties de Skull King',      check: (s) => (s.skullKingPlayed || 0) >= 15 },
  { id:'seti_play_15',         icon:'📡', name:'Chercheur de signaux',      desc:'Jouer 15 parties de SETI',            check: (s) => (s.setiPlayed || 0) >= 15 },
  { id:'senjutsu_play_15',     icon:'🥷', name:'Duelliste Senjutsu',        desc:'Jouer 15 parties de Senjutsu',        check: (s) => (s.senjutsuPlayed || 0) >= 15 },
  { id:'scythe_play_15',       icon:'🌾', name:'Faucheur de Scythe',        desc:'Jouer 15 parties de Scythe',          check: (s) => (s.scythePlayed || 0) >= 15 },
  { id:'sankore_play_15',      icon:'📚', name:'Érudit de Sankoré',         desc:'Jouer 15 parties de Sankoré',         check: (s) => (s.sankorePlayed || 0) >= 15 },
  { id:'worldwonders_play_15',   icon:'🗽', name:'Bâtisseur de Merveilles',  desc:'Jouer 15 parties de World Wonders',     check: (s) => (s.worldWondersPlayed || 0) >= 15 },
  { id:'worldorder_play_15',     icon:'🌐', name:'Grand Diplomate',          desc:'Jouer 15 parties de World Order',       check: (s) => (s.worldOrderPlayed || 0) >= 15 },
  { id:'wonderlandswar_play_15', icon:'🫖', name:'Le Chapelier Fou',         desc:'Jouer 15 parties de Wonderland\'s War', check: (s) => (s.wonderlandsWarPlayed || 0) >= 15 },
  { id:'virtu_play_15',          icon:'📜', name:'Prince de la Renaissance', desc:'Jouer 15 parties de Virtù',             check: (s) => (s.virtuPlayed || 0) >= 15 },
  { id:'towerup_play_15',        icon:'🏗️', name:'Grutier en chef',          desc:'Jouer 15 parties de Tower Up',          check: (s) => (s.towerUpPlayed || 0) >= 15 },
  { id:'throughtheages_play_15', icon:'🏺', name:'Voyageur des Âges',        desc:'Jouer 15 parties de Through the Ages',  check: (s) => (s.throughTheAgesPlayed || 0) >= 15 },
  { id:'witcher_play_15',        icon:'🧙', name:'Sorceleur du Continent',   desc:'Jouer 15 parties de The Witcher',       check: (s) => (s.witcherPlayed || 0) >= 15 },
  { id:'terraforming_play_15',   icon:'🌡️', name:'Terraformeur de Mars',     desc:'Jouer 15 parties de Terraforming Mars', check: (s) => (s.terraformingPlayed || 0) >= 15 },
  { id:'kutnahora_play_15',      icon:'⛏️', name:'Maître des Mines d\'Argent', desc:'Jouer 15 parties de Kutná Hora',       check: (s) => (s.kutnaHoraPlayed || 0) >= 15 },
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

  // Parties de Dune Imperium Insurrection (résolu par nom, repli id 7)
  const _duneGame = games.find((g) => g.name === 'Dune Imperium Insurrection');
  const _duneId   = _duneGame ? _duneGame.id : 7;
  const duneWins   = won.filter((m) => m.game_id === _duneId).length;
  const dunePlayed = playerMatches.filter((m) => m.game_id === _duneId).length;

  // Parties de Skull King (résolu par nom, repli id 35)
  const _skGame = games.find((g) => g.name === 'Skull King');
  const _skId   = _skGame ? _skGame.id : 35;
  const skullKingWins = won.filter((m) => m.game_id === _skId).length;
  const skullKingPlayed = playerMatches.filter((m) => m.game_id === _skId).length;

  // Parties de 7 Wonders (résolu par nom, repli id 4)
  const _7wGame = games.find((g) => g.name === '7 Wonders');
  const _7wId   = _7wGame ? _7wGame.id : 4;
  const sevenWondersWins   = won.filter((m) => m.game_id === _7wId).length;
  const sevenWondersPlayed = playerMatches.filter((m) => m.game_id === _7wId).length;

  // Parties de Foret mixte (résolu par nom, repli id 40)
  const _fmGame = games.find((g) => g.name === 'foret mixte');
  const _fmId   = _fmGame ? _fmGame.id : 40;
  const foretMixtePlayed = playerMatches.filter((m) => m.game_id === _fmId).length;

  // Résolution souple d'un jeu par nom (exact, sinon insensible casse/partiel).
  // ⚠️ Ajuste les libellés ci-dessous s'ils diffèrent de ta table `games`.
  const _resolveGame = (cands) => {
    for (const n of cands) { const g = games.find((x) => x.name === n); if (g) return g.id; }
    const low = cands.map((n) => n.toLowerCase());
    const g2 = games.find((x) => x.name && low.some((n) => x.name.toLowerCase().includes(n)));
    return g2 ? g2.id : null;
  };
  const _byGame = (id, list) => id == null ? 0 : list.filter((m) => m.game_id === id).length;

  const _iawwId      = _resolveGame(["It's a Wonderful World", "It\u2019s a Wonderful World", "Its a Wonderful World", "wonderful world"]);
  const _akropolisId = _resolveGame(["Akropolis", "Acropolis", "akropolis"]);
  const _brassId     = _resolveGame(["Brass Birmingham", "Brass: Birmingham", "Brass"]);
  const _catanId     = _resolveGame(["Catan", "Catane", "Les Colons de Catane", "Colons de Catane"]);
  const _cyberpunkId = _resolveGame(["Cyberpunk Gangs of Night City", "Cyberpunk: Gangs of Night City", "Gangs of Night City", "night city"]);
  const _divinusId   = _resolveGame(["Divinus", "divinus"]);
  const _cardiaId    = _resolveGame(["Duel de Cardia", "Cardia", "Cardia Duel", "cardia"]);
  const _harmoniesId = _resolveGame(["Harmonies", "harmonies"]);
  const _mythoId     = _resolveGame(["Mythologies", "Mythology", "mythologies"]);
  const _zenithId    = _resolveGame(["Zenith", "zenith"]);
  const _toyBattleId = _resolveGame(["Toy Battle", "ToyBattle", "toy battle"]);
  const _valeId      = _resolveGame(["The Vale of Eternity", "Vale of Eternity", "Vallée de l'Éternité", "Vallee de l'Eternite", "vale of eternity"]);
  const _azulId    = _resolveGame(["Azul les Vitraux de Sintra", "Azul Vitraux de Sintra", "Azul: Les Vitraux de Sintra", "Azul Sintra", "Azul", "vitraux de sintra"]);
  const _arkNovaId = _resolveGame(["Ark Nova", "ark nova"]);
  const _arcsId    = _resolveGame(["Arcs", "arcs"]);
  const _abyssId   = _resolveGame(["Abyss", "abyss"]);
  const _citesRoyId = _resolveGame(["Cités Royales", "Cites Royales", "cités royales"]);
  const _citadellesId = _resolveGame(["Citadelles", "Citadelle", "Citadels"]);
  const _chatComboId = _resolveGame(["Château Combo", "Chateau Combo"]);
  const _chatBlancId = _resolveGame(["Le Château Blanc", "Château Blanc", "Chateau Blanc", "The White Castle", "White Castle"]);
  const _carcaId     = _resolveGame(["Carcassonne", "Carcassone"]);
  const _blackForestId = _resolveGame(["Black Forest", "BlackForest"]);
  const _barrageId   = _resolveGame(["Barrage", "barrage"]);
  const _dewanId      = _resolveGame(["Dewan", "dewan"]);
  const _deadCellsId  = _resolveGame(["Dead Cells", "DeadCells"]);
  const _darwinsId    = _resolveGame(["Darwin's Journey", "Darwins Journey", "Darwin Journey"]);
  const _cyberTcgId   = _resolveGame(["Cyberpunk TCG", "Cyberpunk 2077 TCG"]);
  const _courtisansId = _resolveGame(["Courtisans", "Courtisan"]);
  const _civolutionId = _resolveGame(["Civolution", "civolution"]);
  const _eternalDecksId  = _resolveGame(["Eternal Decks", "EternalDecks", "eternal decks"]);
  const _endeavorId      = _resolveGame(["Endeavor Eaux Profondes", "Endeavor : Eaux Profondes", "Endeavor: Deep Sea", "Endeavor Deep Sea", "Endeavor", "eaux profondes"]);
  const _terreDuMilieuId = _resolveGame(["Duel pour la Terre du Milieu", "Duel pour la terre du milieu", "Terre du Milieu", "Duel for Middle-earth", "Middle Earth"]);
  const _dorfromantikId  = _resolveGame(["Dorfromantik Sakura", "Dorfromantik : Sakura", "Dorfromantik", "Sakura"]);
  const _dilemmeDuRoiId  = _resolveGame(["Le Dilemme du Roi", "Dilemme du Roi", "Dilemme du roi", "Dillemme du roi", "The King's Dilemma", "King's Dilemma"]);
  const _diceForgeId     = _resolveGame(["Dice Forge", "DiceForge", "dice forge"]);
  const _farAwayId    = _resolveGame(["Far Away", "FarAway", "far away"]);
  const _everdellId   = _resolveGame(["Everdell", "everdell"]);
  const _evenfallId   = _resolveGame(["Evenfall", "evenfall"]);
  const _eternitiumId = _resolveGame(["Eternitium", "Eternitum", "eternitium"]);
  const _flowersId    = _resolveGame(["Flowers", "flowers"]);
  const _ikiId        = _resolveGame(["Iki", "IKI", "iki"]);
  const _hybrisId     = _resolveGame(["Hybris", "Hybris Disordered Cosmos", "Hybris : Disordered Cosmos", "hybris"]);
  const _gwentId      = _resolveGame(["Gwent", "Gwynt", "gwent"]);
  const _gloomhavenId = _resolveGame(["Gloomhaven", "Gloomhaven Les Mâchoires du Lion", "Gloomhaven: Jaws of the Lion", "gloomhaven"]);
  const _galacticCruiseId = _resolveGame(["Galactic Cruise", "GalacticCruise", "galactic cruise"]);
  const _forACrownId      = _resolveGame(["For a Crown", "For A Crown", "ForACrown", "for a crown"]);
  const _livingForestId = _resolveGame(["Living Forest", "LivingForest", "living forest"]);
  const _laFamigliaId   = _resolveGame(["La Famiglia", "Famiglia", "la famiglia"]);
  const _dominionId     = _resolveGame(["Dominion", "dominion"]);
  const _hothId         = _resolveGame(["La Bataille de Hoth", "Bataille de Hoth", "Star Wars La Bataille de Hoth", "Star Wars : La Bataille de Hoth", "Battle of Hoth", "hoth"]);
  const _krakenId       = _resolveGame(["L'Ombre du Kraken", "Ombre du Kraken", "L\u2019Ombre du Kraken", "Shadow of the Kraken", "kraken"]);
  const _kronologicId   = _resolveGame(["Kronologic", "Kronologic Paris 1920", "Kronologic : Paris 1920", "kronologic"]);
  const _ironwoodId     = _resolveGame(["Ironwood", "IronWood", "Iron Wood", "ironwood"]);
  const _nowId        = _resolveGame(["Now !", "Now!", "Now"]);
  const _nidavellirId = _resolveGame(["Nidavellir", "nidavellir"]);
  const _nemesisId    = _resolveGame(["Nemesis", "nemesis"]);
  const _narakId      = _resolveGame(["Les Ruines Perdues de Narak", "Ruines Perdues de Narak", "Narak", "Lost Ruins of Arnak", "Arnak", "narak"]);
  const _naishiId     = _resolveGame(["Naishi", "naishi"]);
  const _moonColonyId = _resolveGame(["Moon Colony Bloodbath", "Moon Colony", "moon colony"]);
  const _monumentalId = _resolveGame(["Monumental", "monumental"]);
  const _maracaiboId  = _resolveGame(["Maracaibo", "Maracaïbo", "maracaibo"]);
  const _rootId      = _resolveGame(["Root", "root"]);
  const _rivalsId    = _resolveGame(["Rivals", "rivals"]);
  const _risingSunId = _resolveGame(["Rising Sun", "RisingSun", "rising sun"]);
  const _riftboundId = _resolveGame(["Riftbound", "Riftbound TCG", "Riftbound League of Legends", "riftbound"]);
  const _resArcanaId = _resolveGame(["Res Arcana", "ResArcana", "res arcana"]);
  const _recallId    = _resolveGame(["Recall", "recall"]);
  const _rebirthId   = _resolveGame(["Rebirth", "rebirth"]);
  const _rauhaId     = _resolveGame(["Rauha", "rauha"]);
  const _odinId      = _resolveGame(["Odin", "odin"]);
  const _takeTimeId     = _resolveGame(["Take Time", "TakeTime", "take time"]);
  const _smallWorldId   = _resolveGame(["Small World", "SmallWorld", "small world"]);
  const _slayTheSpireId = _resolveGame(["Slay the Spire", "Slay The Spire", "slay the spire"]);
  const _skyriseId      = _resolveGame(["Skyrise", "skyrise"]);
  const _setiId         = _resolveGame(["SETI", "Seti", "seti"]);
  const _senjutsuId     = _resolveGame(["Senjutsu", "senjutsu"]);
  const _scytheId       = _resolveGame(["Scythe", "scythe"]);
  const _sankoreId      = _resolveGame(["Sankoré", "Sankore", "sankoré", "sankore"]);
  const _worldWondersId   = _resolveGame(["World Wonders", "WorldWonders", "world wonders"]);
  const _worldOrderId     = _resolveGame(["World Order", "WorldOrder", "world order"]);
  const _wonderlandsWarId = _resolveGame(["Wonderland's War", "Wonderlands War", "Wonderland War", "wonderland"]);
  const _virtuId          = _resolveGame(["Virtù", "Virtu", "virtù", "virtu"]);
  const _towerUpId        = _resolveGame(["Tower Up", "TowerUp", "tower up"]);
  const _throughTheAgesId = _resolveGame(["Through the Ages", "Through The Ages", "through the ages"]);
  const _witcherId        = _resolveGame(["The Witcher", "The Witcher Le Vieux Monde", "The Witcher: Old World", "Witcher", "witcher"]);
  const _terraformingId   = _resolveGame(["Terraforming Mars", "TerraformingMars", "terraforming mars", "terraforming"]);
  const _kutnaHoraId      = _resolveGame(["Kutná Hora", "Kutna Hora", "Kunta Hora", "kutná hora", "kutna hora", "kunta hora"]);

  const iawwWins        = _byGame(_iawwId, won);
  const akropolisWins   = _byGame(_akropolisId, won);
  const brassWins       = _byGame(_brassId, won);
  const brassPlayed     = _byGame(_brassId, playerMatches);
  const catanPlayed     = _byGame(_catanId, playerMatches);
  const cyberpunkPlayed = _byGame(_cyberpunkId, playerMatches);
  const divinusWins     = _byGame(_divinusId, won);
  const cardiaWins      = _byGame(_cardiaId, won);
  const harmoniesPlayed = _byGame(_harmoniesId, playerMatches);
  const harmoniesWins   = _byGame(_harmoniesId, won);
  const mythologiesPlayed = _byGame(_mythoId, playerMatches);
  const zenithPlayed    = _byGame(_zenithId, playerMatches);
  const zenithWins      = _byGame(_zenithId, won);
  const toyBattlePlayed = _byGame(_toyBattleId, playerMatches);
  const toyBattleWins   = _byGame(_toyBattleId, won);
  const valePlayed      = _byGame(_valeId, playerMatches);
  const akropolisPlayed = _byGame(_akropolisId, playerMatches);
  const azulPlayed      = _byGame(_azulId, playerMatches);
  const arkNovaPlayed   = _byGame(_arkNovaId, playerMatches);
  const arcsPlayed      = _byGame(_arcsId, playerMatches);
  const abyssPlayed     = _byGame(_abyssId, playerMatches);
  const citesRoyalesPlayed = _byGame(_citesRoyId, playerMatches);
  const citadellesPlayed   = _byGame(_citadellesId, playerMatches);
  const chateauComboPlayed = _byGame(_chatComboId, playerMatches);
  const chateauBlancPlayed = _byGame(_chatBlancId, playerMatches);
  const carcassonnePlayed  = _byGame(_carcaId, playerMatches);
  const blackForestPlayed  = _byGame(_blackForestId, playerMatches);
  const barragePlayed      = _byGame(_barrageId, playerMatches);
  const dewanPlayed        = _byGame(_dewanId, playerMatches);
  const deadCellsPlayed    = _byGame(_deadCellsId, playerMatches);
  const darwinsPlayed      = _byGame(_darwinsId, playerMatches);
  const cyberTcgPlayed     = _byGame(_cyberTcgId, playerMatches);
  const courtisansPlayed   = _byGame(_courtisansId, playerMatches);
  const civolutionPlayed   = _byGame(_civolutionId, playerMatches);
  const eternalDecksPlayed  = _byGame(_eternalDecksId, playerMatches);
  const endeavorPlayed      = _byGame(_endeavorId, playerMatches);
  const terreDuMilieuPlayed = _byGame(_terreDuMilieuId, playerMatches);
  const dorfromantikPlayed  = _byGame(_dorfromantikId, playerMatches);
  const dilemmeDuRoiPlayed  = _byGame(_dilemmeDuRoiId, playerMatches);
  const diceForgePlayed     = _byGame(_diceForgeId, playerMatches);
  const farAwayPlayed    = _byGame(_farAwayId, playerMatches);
  const everdellPlayed   = _byGame(_everdellId, playerMatches);
  const evenfallPlayed   = _byGame(_evenfallId, playerMatches);
  const eternitiumPlayed = _byGame(_eternitiumId, playerMatches);
  const flowersPlayed    = _byGame(_flowersId, playerMatches);
  const ikiPlayed        = _byGame(_ikiId, playerMatches);
  const hybrisPlayed     = _byGame(_hybrisId, playerMatches);
  const gwentPlayed      = _byGame(_gwentId, playerMatches);
  const gloomhavenPlayed = _byGame(_gloomhavenId, playerMatches);
  const galacticCruisePlayed = _byGame(_galacticCruiseId, playerMatches);
  const forACrownPlayed      = _byGame(_forACrownId, playerMatches);
  const livingForestPlayed = _byGame(_livingForestId, playerMatches);
  const laFamigliaPlayed   = _byGame(_laFamigliaId, playerMatches);
  const dominionPlayed     = _byGame(_dominionId, playerMatches);
  const hothPlayed         = _byGame(_hothId, playerMatches);
  const krakenPlayed       = _byGame(_krakenId, playerMatches);
  const kronologicPlayed   = _byGame(_kronologicId, playerMatches);
  const ironwoodPlayed     = _byGame(_ironwoodId, playerMatches);
  const nowPlayed        = _byGame(_nowId, playerMatches);
  const nidavellirPlayed = _byGame(_nidavellirId, playerMatches);
  const nemesisPlayed    = _byGame(_nemesisId, playerMatches);
  const narakPlayed      = _byGame(_narakId, playerMatches);
  const naishiPlayed     = _byGame(_naishiId, playerMatches);
  const moonColonyPlayed = _byGame(_moonColonyId, playerMatches);
  const monumentalPlayed = _byGame(_monumentalId, playerMatches);
  const maracaiboPlayed  = _byGame(_maracaiboId, playerMatches);
  const rootPlayed      = _byGame(_rootId, playerMatches);
  const rivalsPlayed    = _byGame(_rivalsId, playerMatches);
  const risingSunPlayed = _byGame(_risingSunId, playerMatches);
  const riftboundPlayed = _byGame(_riftboundId, playerMatches);
  const resArcanaPlayed = _byGame(_resArcanaId, playerMatches);
  const recallPlayed    = _byGame(_recallId, playerMatches);
  const rebirthPlayed   = _byGame(_rebirthId, playerMatches);
  const rauhaPlayed     = _byGame(_rauhaId, playerMatches);
  const odinPlayed      = _byGame(_odinId, playerMatches);
  const takeTimePlayed     = _byGame(_takeTimeId, playerMatches);
  const smallWorldPlayed   = _byGame(_smallWorldId, playerMatches);
  const slayTheSpirePlayed = _byGame(_slayTheSpireId, playerMatches);
  const skyrisePlayed      = _byGame(_skyriseId, playerMatches);
  const setiPlayed         = _byGame(_setiId, playerMatches);
  const senjutsuPlayed     = _byGame(_senjutsuId, playerMatches);
  const scythePlayed       = _byGame(_scytheId, playerMatches);
  const sankorePlayed      = _byGame(_sankoreId, playerMatches);
  const worldWondersPlayed   = _byGame(_worldWondersId, playerMatches);
  const worldOrderPlayed     = _byGame(_worldOrderId, playerMatches);
  const wonderlandsWarPlayed = _byGame(_wonderlandsWarId, playerMatches);
  const virtuPlayed          = _byGame(_virtuId, playerMatches);
  const towerUpPlayed        = _byGame(_towerUpId, playerMatches);
  const throughTheAgesPlayed = _byGame(_throughTheAgesId, playerMatches);
  const witcherPlayed        = _byGame(_witcherId, playerMatches);
  const terraformingPlayed   = _byGame(_terraformingId, playerMatches);
  const kutnaHoraPlayed      = _byGame(_kutnaHoraId, playerMatches);

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
  const peakPoints = (p?.peak_points != null ? p.peak_points : (p?.points || 0));
  // Jours depuis l'arrivée du joueur (création du compte, sinon 1re partie connue)
  const _startStr = p?.created_at || playerMatches.map((m) => m.date).filter(Boolean).sort()[0] || null;
  const daysSinceStart = _startStr ? Math.floor((Date.now() - new Date(_startStr).getTime()) / 86400000) : 0;

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
    peakPoints,
    daysSinceStart,
    duneWins,
    dunePlayed,
    skullKingWins,
    skullKingPlayed,
    sevenWondersWins,
    sevenWondersPlayed,
    foretMixtePlayed,
    iawwWins,
    akropolisWins,
    brassWins,
    brassPlayed,
    catanPlayed,
    cyberpunkPlayed,
    divinusWins,
    cardiaWins,
    harmoniesPlayed,
    harmoniesWins,
    mythologiesPlayed,
    zenithPlayed,
    zenithWins,
    toyBattlePlayed,
    toyBattleWins,
    valePlayed,
    akropolisPlayed,
    azulPlayed,
    arkNovaPlayed,
    arcsPlayed,
    abyssPlayed,
    citesRoyalesPlayed,
    citadellesPlayed,
    chateauComboPlayed,
    chateauBlancPlayed,
    carcassonnePlayed,
    blackForestPlayed,
    barragePlayed,
    dewanPlayed,
    deadCellsPlayed,
    darwinsPlayed,
    cyberTcgPlayed,
    courtisansPlayed,
    civolutionPlayed,
    eternalDecksPlayed,
    endeavorPlayed,
    terreDuMilieuPlayed,
    dorfromantikPlayed,
    dilemmeDuRoiPlayed,
    diceForgePlayed,
    farAwayPlayed,
    everdellPlayed,
    evenfallPlayed,
    eternitiumPlayed,
    flowersPlayed,
    ikiPlayed,
    hybrisPlayed,
    gwentPlayed,
    gloomhavenPlayed,
    galacticCruisePlayed,
    forACrownPlayed,
    livingForestPlayed,
    laFamigliaPlayed,
    dominionPlayed,
    hothPlayed,
    krakenPlayed,
    kronologicPlayed,
    ironwoodPlayed,
    nowPlayed,
    nidavellirPlayed,
    nemesisPlayed,
    narakPlayed,
    naishiPlayed,
    moonColonyPlayed,
    monumentalPlayed,
    maracaiboPlayed,
    rootPlayed,
    rivalsPlayed,
    risingSunPlayed,
    riftboundPlayed,
    resArcanaPlayed,
    recallPlayed,
    rebirthPlayed,
    rauhaPlayed,
    odinPlayed,
    takeTimePlayed,
    smallWorldPlayed,
    slayTheSpirePlayed,
    skyrisePlayed,
    setiPlayed,
    senjutsuPlayed,
    scythePlayed,
    sankorePlayed,
    worldWondersPlayed,
    worldOrderPlayed,
    wonderlandsWarPlayed,
    virtuPlayed,
    towerUpPlayed,
    throughTheAgesPlayed,
    witcherPlayed,
    terraformingPlayed,
    kutnaHoraPlayed,
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

// ═══════════════════════════════════════════════════════════════
// SUCCÈS — notifications de déblocage + progression
// ═══════════════════════════════════════════════════════════════

// Progression des succès chiffrés : [fonction(stats) → valeur courante, cible].
// Les succès booléens (battre le meilleur, 5+ joueurs, 4 jeux/jour) n'ont pas de barre.
const ACH_PROGRESS = {
  azul_play_15:         [(s) => s.azulPlayed, 15],
  arknova_play_15:      [(s) => s.arkNovaPlayed, 15],
  arcs_play_15:         [(s) => s.arcsPlayed, 15],
  akropolis_play_15:    [(s) => s.akropolisPlayed, 15],
  abyss_play_15:        [(s) => s.abyssPlayed, 15],
  citesroyales_play_15: [(s) => s.citesRoyalesPlayed, 15],
  citadelles_play_15:   [(s) => s.citadellesPlayed, 15],
  chateaucombo_play_15: [(s) => s.chateauComboPlayed, 15],
  chateaublanc_play_15: [(s) => s.chateauBlancPlayed, 15],
  carcassonne_play_15:  [(s) => s.carcassonnePlayed, 15],
  brass_play_15:        [(s) => s.brassPlayed, 15],
  blackforest_play_15:  [(s) => s.blackForestPlayed, 15],
  barrage_play_15:      [(s) => s.barragePlayed, 15],
  dewan_play_15:        [(s) => s.dewanPlayed, 15],
  deadcells_play_15:    [(s) => s.deadCellsPlayed, 15],
  darwins_play_15:      [(s) => s.darwinsPlayed, 15],
  cybertcg_play_15:     [(s) => s.cyberTcgPlayed, 15],
  courtisans_play_15:   [(s) => s.courtisansPlayed, 15],
  civolution_play_15:   [(s) => s.civolutionPlayed, 15],
  eternaldecks_play_15:  [(s) => s.eternalDecksPlayed, 15],
  endeavor_play_15:      [(s) => s.endeavorPlayed, 15],
  terredumilieu_play_15: [(s) => s.terreDuMilieuPlayed, 15],
  dorfromantik_play_15:  [(s) => s.dorfromantikPlayed, 15],
  dilemmeduroi_play_15:  [(s) => s.dilemmeDuRoiPlayed, 15],
  diceforge_play_15:     [(s) => s.diceForgePlayed, 15],
  faraway_play_15:    [(s) => s.farAwayPlayed, 15],
  everdell_play_15:   [(s) => s.everdellPlayed, 15],
  evenfall_play_15:   [(s) => s.evenfallPlayed, 15],
  eternitium_play_15: [(s) => s.eternitiumPlayed, 15],
  flowers_play_15:    [(s) => s.flowersPlayed, 15],
  iki_play_15:        [(s) => s.ikiPlayed, 15],
  hybris_play_15:     [(s) => s.hybrisPlayed, 15],
  gwent_play_15:      [(s) => s.gwentPlayed, 15],
  gloomhaven_play_15: [(s) => s.gloomhavenPlayed, 15],
  galacticcruise_play_15: [(s) => s.galacticCruisePlayed, 15],
  foracrown_play_15:      [(s) => s.forACrownPlayed, 15],
  livingforest_play_15: [(s) => s.livingForestPlayed, 15],
  lafamiglia_play_15:   [(s) => s.laFamigliaPlayed, 15],
  dominion_play_15:     [(s) => s.dominionPlayed, 15],
  hoth_play_15:         [(s) => s.hothPlayed, 15],
  kraken_play_15:       [(s) => s.krakenPlayed, 15],
  kronologic_play_5:    [(s) => s.kronologicPlayed, 5],
  kronologic_play_10:   [(s) => s.kronologicPlayed, 10],
  kronologic_play_15:   [(s) => s.kronologicPlayed, 15],
  ironwood_play_15:     [(s) => s.ironwoodPlayed, 15],
  now_play_15:        [(s) => s.nowPlayed, 15],
  nidavellir_play_15: [(s) => s.nidavellirPlayed, 15],
  nemesis_play_15:    [(s) => s.nemesisPlayed, 15],
  narak_play_15:      [(s) => s.narakPlayed, 15],
  naishi_play_15:     [(s) => s.naishiPlayed, 15],
  mooncolony_play_15: [(s) => s.moonColonyPlayed, 15],
  monumental_play_15: [(s) => s.monumentalPlayed, 15],
  maracaibo_play_15:  [(s) => s.maracaiboPlayed, 15],
  root_play_15:      [(s) => s.rootPlayed, 15],
  rivals_play_15:    [(s) => s.rivalsPlayed, 15],
  risingsun_play_15: [(s) => s.risingSunPlayed, 15],
  riftbound_play_15: [(s) => s.riftboundPlayed, 15],
  resarcana_play_15: [(s) => s.resArcanaPlayed, 15],
  recall_play_15:    [(s) => s.recallPlayed, 15],
  rebirth_play_15:   [(s) => s.rebirthPlayed, 15],
  rauha_play_15:     [(s) => s.rauhaPlayed, 15],
  odin_play_15:      [(s) => s.odinPlayed, 15],
  taketime_play_15:     [(s) => s.takeTimePlayed, 15],
  smallworld_play_15:   [(s) => s.smallWorldPlayed, 15],
  slaythespire_play_15: [(s) => s.slayTheSpirePlayed, 15],
  skyrise_play_15:      [(s) => s.skyrisePlayed, 15],
  skullking_play_15:    [(s) => s.skullKingPlayed, 15],
  seti_play_15:         [(s) => s.setiPlayed, 15],
  senjutsu_play_15:     [(s) => s.senjutsuPlayed, 15],
  scythe_play_15:       [(s) => s.scythePlayed, 15],
  sankore_play_15:      [(s) => s.sankorePlayed, 15],
  worldwonders_play_15:   [(s) => s.worldWondersPlayed, 15],
  worldorder_play_15:     [(s) => s.worldOrderPlayed, 15],
  wonderlandswar_play_15: [(s) => s.wonderlandsWarPlayed, 15],
  virtu_play_15:          [(s) => s.virtuPlayed, 15],
  towerup_play_15:        [(s) => s.towerUpPlayed, 15],
  throughtheages_play_15: [(s) => s.throughTheAgesPlayed, 15],
  witcher_play_15:        [(s) => s.witcherPlayed, 15],
  terraforming_play_15:   [(s) => s.terraformingPlayed, 15],
  kutnahora_play_15:      [(s) => s.kutnaHoraPlayed, 15],
  first_win:        [(s) => s.won, 1],
  wins_10:          [(s) => s.won, 10],
  wins_50:          [(s) => s.won, 50],
  wins_100:         [(s) => s.won, 100],
  wins_500:         [(s) => s.won, 500],
  streak_3:         [(s) => s.bestStreak, 3],
  streak_5:         [(s) => s.bestStreak, 5],
  streak_10:        [(s) => s.bestStreak, 10],
  streak_20:        [(s) => s.bestStreak, 20],
  rank_or:          [(s) => s.maxPoints, 350],
  rank_diamant:     [(s) => s.maxPoints, 1200],
  rank_diamant_1:   [(s) => Math.max(s.peakPoints || 0, s.maxPoints || 0), 1836],
  bois_30j:         [(s) => s.daysSinceStart, 30],
  dune_win_10:      [(s) => s.duneWins, 10],
  dune_win_20:      [(s) => s.duneWins, 20],
  skullking_win_50: [(s) => s.skullKingWins, 50],
  '7w_play_15':     [(s) => s.sevenWondersPlayed, 15],
  '7w_win_25':      [(s) => s.sevenWondersWins, 25],
  foret_play_15:    [(s) => s.foretMixtePlayed, 15],
  iaww_win_15:      [(s) => s.iawwWins, 15],
  akropolis_win_15: [(s) => s.akropolisWins, 15],
  brass_play_10:    [(s) => s.brassPlayed, 10],
  brass_win_15:     [(s) => s.brassWins, 15],
  catan_play_15:    [(s) => s.catanPlayed, 15],
  cyberpunk_play_10:[(s) => s.cyberpunkPlayed, 10],
  divinus_win_10:   [(s) => s.divinusWins, 10],
  cardia_win_25:    [(s) => s.cardiaWins, 25],
  cardia_win_50:    [(s) => s.cardiaWins, 50],
  cardia_win_75:    [(s) => s.cardiaWins, 75],
  harmonies_play_15:[(s) => s.harmoniesPlayed, 15],
  harmonies_win_15: [(s) => s.harmoniesWins, 15],
  harmonies_win_30: [(s) => s.harmoniesWins, 30],
  mytho_play_10:    [(s) => s.mythologiesPlayed, 10],
  mytho_play_20:    [(s) => s.mythologiesPlayed, 20],
  mytho_play_30:    [(s) => s.mythologiesPlayed, 30],
  zenith_play_10:   [(s) => s.zenithPlayed, 10],
  zenith_win_10:    [(s) => s.zenithWins, 10],
  zenith_play_20:   [(s) => s.zenithPlayed, 20],
  zenith_win_20:    [(s) => s.zenithWins, 20],
  zenith_play_30:   [(s) => s.zenithPlayed, 30],
  zenith_win_30:    [(s) => s.zenithWins, 30],
  zenith_play_50:   [(s) => s.zenithPlayed, 50],
  toybattle_play_15:[(s) => s.toyBattlePlayed, 15],
  toybattle_win_15: [(s) => s.toyBattleWins, 15],
  toybattle_play_30:[(s) => s.toyBattlePlayed, 30],
  toybattle_win_50: [(s) => s.toyBattleWins, 50],
  vale_play_25:     [(s) => s.valePlayed, 25],
  rank_challenger:  [(s) => s.maxPoints, 3000],
  games_10:         [(s) => s.played, 10],
  games_50:         [(s) => s.played, 50],
  games_100:        [(s) => s.played, 100],
  diff_games_10:    [(s) => s.diffGames, 10],
  diff_games_20:    [(s) => s.diffGames, 20],
  comments_5:       [(s) => s.commentCount, 5],
  days_7:           [(s) => s.maxConsecDays, 7],
  days_30:          [(s) => s.maxMonthDays, 30],
  weekly_4:         [(s) => s.weekStreak, 4],
};

// Cosmétique éventuellement lié à un succès (pour enrichir la notif).
const _cosmeticForAch = (achId) => {
  if (typeof AVATARS     !== 'undefined' && AVATARS.some((a) => a.reqAch === achId))     return 'avatar';
  if (typeof FRAMES      !== 'undefined' && FRAMES.some((f) => f.reqAch === achId))      return 'cadre';
  if (typeof BACKGROUNDS !== 'undefined' && BACKGROUNDS.some((b) => b.reqAch === achId)) return 'fond de carte';
  return null;
};

// Toast enrichi de déblocage d'un succès (empilable, auto-disparition).
const announceAchievement = (a) => {
  let wrap = document.getElementById('ach-toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'ach-toast-wrap';
    document.body.appendChild(wrap);
  }
  const cos = _cosmeticForAch(a.id);
  const cosLine = cos === 'fond de carte'
    ? `<div class="at-cosmetic">🖼️ Nouveau fond disponible dans ton profil !</div>`
    : (cos ? `<div class="at-cosmetic">🎁 Nouveau ${cos} à équiper</div>` : '');
  const el  = document.createElement('div');
  el.className = 'ach-toast';
  el.innerHTML =
    `<div class="at-icon">${a.icon}</div>
     <div class="at-body">
       <div class="at-label">Succès débloqué</div>
       <div class="at-name">${esc(a.name)}</div>
       ${cosLine}
     </div>`;
  wrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 350); }, 4200);
};

// Baseline locale des succès déjà vus, par joueur.
const _achSeenKey = (pid) => `bgt_ach_seen_${pid}`;

// Détecte les succès nouvellement débloqués et les notifie.
//   allowSeed=true  → si aucune baseline, on enregistre l'état SANS notifier
//                     (évite de spammer les succès déjà acquis). À appeler APRÈS
//                     chargement complet (loadAll + loadSocial terminés).
//   allowSeed=false → ne notifie que si une baseline existe déjà (hooks de chargement).
const syncAchievementUnlocks = (allowSeed = false) => {
  try {
    if (!currentUser) return;
    const mp = players.find((p) => p.user_id === currentUser.id);
    if (!mp) return;
    const stats    = computeAchievementStats(mp.id);
    const unlocked = ACHIEVEMENTS.filter((a) => a.check(stats)).map((a) => a.id);
    const key      = _achSeenKey(mp.id);

    let seen = null;
    try { seen = JSON.parse(localStorage.getItem(key) || 'null'); } catch { seen = null; }

    if (!Array.isArray(seen)) {
      if (allowSeed) { try { localStorage.setItem(key, JSON.stringify(unlocked)); } catch {} }
      return; // pas de baseline fiable → on ne notifie pas
    }

    const fresh = unlocked.filter((id) => !seen.includes(id));
    fresh.forEach((id, i) => {
      const a = ACHIEVEMENTS.find((x) => x.id === id);
      if (a) setTimeout(() => announceAchievement(a), i * 700);
    });
    // Baseline = union : un succès vu reste vu (même si la condition repasse sous le seuil).
    const merged = Array.from(new Set([...seen, ...unlocked]));
    try { localStorage.setItem(key, JSON.stringify(merged)); } catch {}
  } catch { /* ne jamais casser le chargement */ }
};

// ─── Draw progression chart ──────────────────────────────────

// ─── Historique d'Elo (rejoué depuis les parties de la saison) ───
// Pas de table dédiée : on rejoue chronologiquement les parties confirmées
// avec la formule actuelle (même logique que recomputeSeason) et on note
// l'Elo de chaque joueur après chacune de ses parties. Résultat mis en cache
// tant que la liste des parties ne change pas.
let _eloHistCache = null;
let _eloHistKey   = '';
const eloHistories = () => {
  const list = [...seasonMatches()].sort((a, b) => {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? -1 : 1;
    return (a.id || 0) - (b.id || 0);
  });
  const key = list.length + ':' + (list.length ? list[list.length - 1].id : 0) + ':' + players.length;
  if (_eloHistCache && _eloHistKey === key) return _eloHistCache;

  const sim  = {};
  const hist = {};
  players.forEach((p) => {
    sim[p.id]  = { pts: 0, elo: ELO_BASE, streak: 0, games: 0 };
    hist[p.id] = [];
  });
  for (const m of list) {
    const ids = [...new Set((m.players || []).map((pp) => pp && pp.id).filter((id) => id && sim[id]))];
    if (!ids.length) continue;
    const winnerIds = (Array.isArray(m.winners) ? m.winners : []).filter((id) => ids.includes(id));
    const pre = {};
    ids.forEach((id) => { pre[id] = { pts: sim[id].pts, elo: sim[id].elo, streak: sim[id].streak, games: sim[id].games }; });
    const res = computeMatch(ids, winnerIds, m.scores || {}, !!m.is_challenge, m.game_id, pre);
    ids.forEach((id) => {
      sim[id].pts    = res[id].newPts;
      sim[id].elo    = res[id].newElo;
      sim[id].streak = res[id].newStreak;
      sim[id].games += 1;
      hist[id].push({ date: String(m.date || '').split('T')[0], elo: res[id].newElo });
    });
  }
  _eloHistCache = hist;
  _eloHistKey   = key;
  return hist;
};

// ─── Progression comparée de TOUS les joueurs (graphe multi-courbes) ───
// Rejoue la saison une seule fois et note, après CHAQUE partie de la saison,
// l'Elo ET les points cumulés de chaque participant. Chaque point porte son
// index de partie globale (gi) pour aligner toutes les courbes sur un axe X
// commun (1 = 1ʳᵉ partie de la saison). Mise en cache comme eloHistories.
let _allProgCache = null;
let _allProgKey   = '';
const allPlayersProgression = () => {
  const list = [...seasonMatches()].sort((a, b) => {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? -1 : 1;
    return (a.id || 0) - (b.id || 0);
  });
  const key = 'prog:' + list.length + ':' + (list.length ? list[list.length - 1].id : 0) + ':' + players.length;
  if (_allProgCache && _allProgKey === key) return _allProgCache;

  const sim  = {};
  const hist = {};   // hist[id] = [{ gi, date, elo, pts }]
  players.forEach((p) => {
    sim[p.id]  = { pts: 0, elo: ELO_BASE, streak: 0, games: 0 };
    hist[p.id] = [];
  });
  let gi = 0;
  for (const m of list) {
    const ids = [...new Set((m.players || []).map((pp) => pp && pp.id).filter((id) => id && sim[id]))];
    if (!ids.length) continue;
    gi += 1;
    const winnerIds = (Array.isArray(m.winners) ? m.winners : []).filter((id) => ids.includes(id));
    const pre = {};
    ids.forEach((id) => { pre[id] = { pts: sim[id].pts, elo: sim[id].elo, streak: sim[id].streak, games: sim[id].games }; });
    const res = computeMatch(ids, winnerIds, m.scores || {}, !!m.is_challenge, m.game_id, pre);
    const d = String(m.date || '').split('T')[0];
    ids.forEach((id) => {
      sim[id].pts    = res[id].newPts;
      sim[id].elo    = res[id].newElo;
      sim[id].streak = res[id].newStreak;
      sim[id].games += 1;
      hist[id].push({ gi, date: d, elo: res[id].newElo, pts: res[id].newPts });
    });
  }
  const result = { hist, totalGames: gi };
  _allProgCache = result;
  _allProgKey   = key;
  return result;
};

// État du graphe comparatif (joueurs cochés + mode).
let _cmpMode     = 'pts';
let _cmpSelected = null;   // Set d'ids ; null = pas encore initialisé
let _cmpGeo      = null;   // géométrie du dernier dessin (pour le tooltip)
let _cmpHoverX   = null;   // index de partie survolé (null = aucun)

const setCmpMode = (mode) => {
  _cmpMode = mode;
  const bp = document.getElementById('cmp-mode-pts');
  const be = document.getElementById('cmp-mode-elo');
  if (bp) bp.classList.toggle('on', mode === 'pts');
  if (be) be.classList.toggle('on', mode === 'elo');
  drawComparison();
};

const toggleCmpPlayer = (pid) => {
  if (!_cmpSelected) _cmpSelected = new Set();
  if (_cmpSelected.has(pid)) _cmpSelected.delete(pid);
  else _cmpSelected.add(pid);
  const chip = document.querySelector(`.cmp-chip[data-pid="${pid}"]`);
  if (chip) chip.classList.toggle('on', _cmpSelected.has(pid));
  drawComparison();
};

const cmpSelectAll = (on) => {
  const { hist } = allPlayersProgression();
  _cmpSelected = new Set(on ? players.filter((p) => (hist[p.id] || []).length).map((p) => p.id) : []);
  document.querySelectorAll('.cmp-chip').forEach((c) => {
    c.classList.toggle('on', _cmpSelected.has(parseInt(c.dataset.pid)));
  });
  drawComparison();
};

// Rendu du bloc comparatif (chips + SVG) dans #cmp-wrap.
const renderComparison = () => {
  const wrap = document.getElementById('cmp-wrap');
  if (!wrap) return;
  const { hist } = allPlayersProgression();
  const active = players
    .filter((p) => (hist[p.id] || []).length)
    .sort((a, b) => (b.points || 0) - (a.points || 0));

  if (active.length < 2) { wrap.innerHTML = ''; return; }

  // Init : on coche par défaut le top 3 (ou tous si moins de 3).
  if (!_cmpSelected) _cmpSelected = new Set(active.slice(0, Math.min(3, active.length)).map((p) => p.id));

  const chips = active.map((p) => {
    const c = p.color || '#4ade80';
    const on = _cmpSelected.has(p.id);
    return `<button class="cmp-chip${on ? ' on' : ''}" data-pid="${p.id}"
              style="--cc:${c}" onclick="toggleCmpPlayer(${p.id})">
        <span class="cmp-dot"></span>${esc(p.name)}
      </button>`;
  }).join('');

  wrap.innerHTML = `
    <div class="cmp-head">
      <div class="cmp-title">📊 Comparer la progression</div>
      <div class="pp-mode-tabs">
        <button class="pp-mode-btn on" id="cmp-mode-pts" onclick="setCmpMode('pts')">Points</button>
        <button class="pp-mode-btn" id="cmp-mode-elo" onclick="setCmpMode('elo')">Elo</button>
      </div>
    </div>
    <div class="cmp-actions">
      <button class="cmp-mini" onclick="cmpSelectAll(true)">Tout cocher</button>
      <button class="cmp-mini" onclick="cmpSelectAll(false)">Tout décocher</button>
    </div>
    <div class="cmp-chips">${chips}</div>
    <div class="cmp-canvas-wrap"><canvas id="cmp-canvas"></canvas>
      <div class="cmp-tip" id="cmp-tip" data-tooltip></div>
    </div>`;
  drawComparison();

  const canvas = document.getElementById('cmp-canvas');
  if (canvas) {
    canvas.addEventListener('mousemove', _cmpOnMove);
    canvas.addEventListener('mouseleave', _cmpOnLeave);
    canvas.addEventListener('touchstart', _cmpOnMove, { passive: true });
    canvas.addEventListener('touchmove',  _cmpOnMove, { passive: true });
    canvas.addEventListener('touchend',   _cmpOnLeave);
  }
};

const drawComparison = () => {
  const canvas = document.getElementById('cmp-canvas');
  if (!canvas) return;
  const { hist, totalGames } = allPlayersProgression();
  const sel = [...(_cmpSelected || [])].filter((id) => (hist[id] || []).length);

  const dpr = window.devicePixelRatio || 1;
  const W   = canvas.parentElement.clientWidth;
  const H   = 260;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);

  const pad = { top: 14, right: 14, bottom: 24, left: 40 };
  const cW  = W - pad.left - pad.right;
  const cH  = H - pad.top - pad.bottom;

  if (!sel.length) {
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = '13px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('Coche au moins un joueur', W / 2, H / 2);
    return;
  }

  // Séries selon le mode, alignées sur l'axe X = index de partie (gi).
  const elo = _cmpMode === 'elo';
  const series = sel.map((id) => {
    const pts = (hist[id] || []).map((d) => ({ x: d.gi, y: elo ? d.elo : d.pts }));
    if (elo) pts.unshift({ x: 0, y: ELO_BASE }); else pts.unshift({ x: 0, y: 0 });
    const p = players.find((x) => x.id === id);
    return { id, color: (p && p.color) || '#4ade80', name: p ? p.name : '?', pts };
  });

  const allY = series.flatMap((s) => s.pts.map((p) => p.y));
  let minY = elo ? Math.min(...allY) : 0;
  let maxY = Math.max(...allY, elo ? ELO_BASE + 20 : 1);
  if (elo) { const m = Math.max(20, Math.round((maxY - minY) * 0.1)); minY -= m; maxY += m; }
  const spanY = Math.max(1, maxY - minY);
  const maxX  = Math.max(1, totalGames);

  const toX = (x) => pad.left + (x / maxX) * cW;
  const toY = (y) => pad.top + cH - ((y - minY) / spanY) * cH;

  // Grille + libellés Y
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
  ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '9px sans-serif'; ctx.textAlign = 'right';
  [0, 0.25, 0.5, 0.75, 1].forEach((r) => {
    const y = pad.top + cH * (1 - r);
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
    ctx.fillText(Math.round(minY + spanY * r), pad.left - 4, y + 3);
  });
  // Ligne de base Elo (1000)
  if (elo && ELO_BASE > minY && ELO_BASE < maxY) {
    ctx.strokeStyle = 'rgba(255,255,255,0.13)'; ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(pad.left, toY(ELO_BASE)); ctx.lineTo(pad.left + cW, toY(ELO_BASE)); ctx.stroke();
    ctx.setLineDash([]);
  }

  // Courbes
  series.forEach((s) => {
    ctx.beginPath(); ctx.strokeStyle = s.color; ctx.lineWidth = 2; ctx.lineJoin = 'round';
    s.pts.forEach((p, i) => { const X = toX(p.x), Y = toY(p.y); i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); });
    ctx.stroke();
    const last = s.pts[s.pts.length - 1];
    ctx.beginPath(); ctx.arc(toX(last.x), toY(last.y), 3, 0, Math.PI * 2);
    ctx.fillStyle = s.color; ctx.fill();
  });

  // Mémorise la géométrie pour le tooltip au survol.
  _cmpGeo = { series, toX, toY, maxX, pad, cW, cH, W, H, elo };
  // Trait + points de survol si une partie est ciblée.
  if (_cmpHoverX != null) {
    const gx = _cmpHoverX;
    const px = toX(gx);
    ctx.strokeStyle = 'rgba(127,119,221,0.5)'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(px, pad.top); ctx.lineTo(px, pad.top + cH); ctx.stroke(); ctx.setLineDash([]);
    series.forEach((s) => {
      // valeur du joueur à cet index = dernier point dont x <= gx (escalier)
      let pt = null;
      for (const p of s.pts) { if (p.x <= gx) pt = p; else break; }
      if (pt) { ctx.beginPath(); ctx.arc(px, toY(pt.y), 4, 0, Math.PI * 2);
        ctx.fillStyle = s.color; ctx.fill();
        ctx.strokeStyle = 'var(--surface)'; ctx.lineWidth = 1.5; ctx.stroke(); }
    });
  }
};

// Survol : trouve la partie la plus proche en X et affiche l'infobulle.
const _cmpOnMove = (ev) => {
  if (!_cmpGeo) return;
  const canvas = document.getElementById('cmp-canvas');
  const tip = document.getElementById('cmp-tip');
  if (!canvas || !tip) return;
  const rect = canvas.getBoundingClientRect();
  const clientX = ev.touches ? ev.touches[0].clientX : ev.clientX;
  const clientY = ev.touches ? ev.touches[0].clientY : ev.clientY;
  const mx = clientX - rect.left;
  const { toX, maxX, pad, cW, series, elo } = _cmpGeo;
  // Index de partie le plus proche (1..maxX)
  let gi = Math.round(((mx - pad.left) / cW) * maxX);
  gi = Math.max(1, Math.min(maxX, gi));
  _cmpHoverX = gi;
  drawComparison();

  // Valeur de chaque joueur sélectionné à cette partie.
  const rows = series.map((s) => {
    let pt = null;
    for (const p of s.pts) { if (p.x <= gi) pt = p; else break; }
    const pl = players.find((x) => x.id === s.id);
    return { color: s.color, name: pl ? pl.name : '?', val: pt ? pt.y : null };
  }).filter((r) => r.val != null).sort((a, b) => b.val - a.val);

  if (!rows.length) { tip.style.display = 'none'; return; }
  tip.innerHTML = `<div class="cmp-tip-h">Partie ${gi}</div>` + rows.map((r) =>
    `<div class="cmp-tip-row"><span class="cmp-tip-dot" style="background:${r.color}"></span>
      <span class="cmp-tip-n">${esc(r.name)}</span>
      <span class="cmp-tip-v">${Math.round(r.val)}${elo ? '' : ' pts'}</span></div>`).join('');
  tip.style.display = 'block';
  // Positionnement : suit la souris, bascule à gauche si trop à droite.
  const tipW = 150;
  let left = toX(gi) + 10;
  if (left + tipW > _cmpGeo.W) left = toX(gi) - tipW - 10;
  tip.style.left = Math.max(0, left) + 'px';
  tip.style.top  = Math.max(0, clientY - rect.top - 10) + 'px';
};

const _cmpOnLeave = () => {
  _cmpHoverX = null;
  const tip = document.getElementById('cmp-tip');
  if (tip) tip.style.display = 'none';
  drawComparison();
};

let ppChartMode  = 'pts';
let _ppChartPid  = null;
let _ppChartColor = '#4ade80';

const setPpChartMode = (mode) => {
  ppChartMode = mode;
  const bp = document.getElementById('pp-mode-pts');
  const be = document.getElementById('pp-mode-elo');
  if (bp) bp.classList.toggle('on', mode === 'pts');
  if (be) be.classList.toggle('on', mode === 'elo');
  if (_ppChartPid != null) drawProgressionChart(_ppChartPid, _ppChartColor);
};

const drawProgressionChart = (pid, color) => {
  const canvas = document.getElementById('pp-chart');
  const empty  = document.getElementById('pp-chart-empty');
  if (!canvas) return;

  // Construit les points de données selon le mode (points cumulés ou Elo).
  let dataPoints;
  let unit;
  if (ppChartMode === 'elo') {
    unit = 'Elo';
    const h = eloHistories()[pid] || [];
    dataPoints = h.length
      ? [{ date: '', v: ELO_BASE }, ...h.map((d) => ({ date: d.date, v: d.elo }))]
      : [];
  } else {
    unit = 'pts';
    const playerMatches = matches
      .filter((m) => m.players?.some((p) => p.id === pid) && m.date)
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    let pts = 0;
    dataPoints = playerMatches.length ? [{ date: '', v: 0 }] : [];
    playerMatches.forEach((m) => {
      const n       = (m.players || []).length;
      const winIds  = m.winners || [];
      const losers  = sortedLosers((m.players || []).map((p) => p.id), winIds, m.scores);
      const place   = winIds.includes(pid)
        ? 1 : loserPlace(losers, pid, m.scores, winIds.length);
      const gain    = calcPoints(place, n, m.game_id);
      const loss    = calcLoss(pts, place, n);
      pts = Math.max(0, pts + gain - loss);
      dataPoints.push({ date: m.date.split('T')[0], v: pts });
    });
  }

  if (!dataPoints.length) {
    canvas.style.display = 'none';
    if (empty) { empty.style.display = 'flex'; }
    return;
  }
  canvas.style.display = 'block';
  if (empty) empty.style.display = 'none';

  const dpr    = window.devicePixelRatio || 1;
  const W      = canvas.parentElement.clientWidth;
  const H      = 120;
  canvas.width  = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  // Échelle : points = 0 → max ; Elo = min → max avec marge (sinon courbe écrasée).
  const vals = dataPoints.map((d) => d.v);
  let minV = 0;
  let maxV = Math.max(...vals, 1);
  if (ppChartMode === 'elo') {
    minV = Math.min(...vals);
    maxV = Math.max(...vals);
    const m = Math.max(20, Math.round((maxV - minV) * 0.12));
    minV -= m; maxV += m;
  }
  const span = Math.max(1, maxV - minV);
  const pad  = { top: 12, right: 16, bottom: 20, left: 36 };
  const cW   = W - pad.left - pad.right;
  const cH   = H - pad.top - pad.bottom;

  const toX = (i) => pad.left + (i / Math.max(1, dataPoints.length - 1)) * cW;
  const toY = (v) => pad.top + cH - ((v - minV) / span) * cH;

  // Background grid
  ctx.strokeStyle = 'rgba(255,255,255,0.05)';
  ctx.lineWidth   = 1;
  [0, 0.25, 0.5, 0.75, 1].forEach((r) => {
    const y = pad.top + cH * (1 - r);
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font      = '9px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(minV + span * r), pad.left - 4, y + 3);
  });

  // Ligne de base Elo (1000) si visible
  if (ppChartMode === 'elo' && ELO_BASE > minV && ELO_BASE < maxV) {
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(pad.left, toY(ELO_BASE));
    ctx.lineTo(pad.left + cW, toY(ELO_BASE));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
  grad.addColorStop(0,   color + '55');
  grad.addColorStop(1,   color + '00');
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(dataPoints[0].v));
  dataPoints.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.v)); });
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
  ctx.moveTo(toX(0), toY(dataPoints[0].v));
  dataPoints.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.v)); });
  ctx.stroke();

  // Last point dot
  const last = dataPoints[dataPoints.length - 1];
  ctx.beginPath();
  ctx.arc(toX(dataPoints.length - 1), toY(last.v), 4, 0, Math.PI * 2);
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
      tip.textContent = d.date ? `${d.date} — ${d.v} ${unit}` : `Départ — ${d.v} ${unit}`;
      tip.style.left  = `${toX(closest.idx) / dpr}px`;
    }
  };

};

// ─── Open player profile modal ────────────────────────────────

const openPlayerProfile = (pid) => {
  const p   = players.find((x) => x.id === pid);
  if (!p) return;
  const rk  = displayRank(p);
  const _cf = cosmeticFrame(p);   // cadre cosmétique choisi (sinon cadre du rang)
  const _cbg = cosmeticBg(p);     // fond de carte cosmétique (sinon fond uni)
  const s   = playerStats(pid);
  const rate = s.played > 0 ? Math.round(s.won / s.played * 100) : 0;
  const bg  = p.color || '#4ade80';

  document.getElementById('pp-title').textContent = p.name;

  // Summary
  const ra2 = getRankAssets(rk.key) || {};
  const big = window.matchMedia('(min-width:701px)').matches;  // PC = plus grand
  const _bk = rk.baseKey || rk.key;
  // Le Challenger (cadre doré) est agrandi, mais l'avatar garde sa taille normale.
  const fbBase = big ? 190 : 110;
  const fScale = _bk === 'challenger' ? 1.6 : 1;
  const fb  = Math.round(fbBase * fScale);   // taille du cadre (agrandie)
  // L'avatar se cale sur le trou réel du cadre (FRAME_HOLES : position ET taille)
  // pour les rangs aux cadres refaits ; les autres gardent la taille historique.
  const _h  = _cf ? _cf.hole : (FRAME_HOLES[rk.key] || (['bois', 'bronze', 'argent', 'grandmaitre', 'challenger'].includes(_bk) ? FRAME_HOLES[_bk] : null));
  const avShrink = _bk === 'challenger' ? 0.92 : 1;   // avatar Challenger réduit d'un poil
  const av  = _h ? Math.round(fbBase * (_h.size / 150) * avShrink) : (big ? 124 : 72);  // diamètre (taille NORMALE, non agrandie)
  const avX = _h ? Math.round(fb * ((_h.left + _h.size / 2) / 150)) : Math.round(fb / 2);
  const avY = _h ? Math.round(fb * ((_h.top  + _h.size / 2) / 150)) : Math.round(fb / 2);
  const ov  = _cbg ? (big ? 18 : 12) : Math.round((big ? -92 : -52) * fScale);   // chevauchement bannière (ou marge simple si fond cosmétique)
  const emb = big ? 30  : 22;    // taille de l'emblème
  const nf  = big ? 22  : 17;    // taille du nom
  document.getElementById('pp-summary').innerHTML = `
    <div style="border-radius:var(--radius);overflow:hidden;border:1px solid var(--border);margin-bottom:4px;${_cbg ? `background:linear-gradient(180deg,rgba(8,10,16,.5),rgba(8,10,16,.82)),url('${_cbg.src}') center/cover` : 'background:var(--surface)'}">
      <!-- Bannière affichée en entier (jamais rognée) — masquée si fond cosmétique -->
      ${_cbg ? '' : (ra2.banner
        ? `<img src="${ra2.banner}" style="display:block;width:100%;height:auto">`
        : `<div style="width:100%;height:${big ? 180 : 110}px;background:${bg}22"></div>`)}
      <!-- Avatar centré qui chevauche le bas de la bannière, infos centrées en dessous -->
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 14px 16px">
        <div style="position:relative;width:${fb}px;height:${fb}px;margin-top:${ov}px">
          ${(() => {
            const pAvImg = AVATARS.find(a => a.id === (p.avatar || 1));
            if (pAvImg) return '<div style="position:absolute;top:' + avY + 'px;left:' + avX + 'px;transform:translate(-50%,-50%);width:' + av + 'px;height:' + av + 'px;border-radius:50%;overflow:hidden;z-index:1"><img src="' + pAvImg.src + '" style="width:100%;height:100%;object-fit:cover"></div>';
            const bgS = RANK_AVATAR_BG[rk.baseKey||rk.key] ? 'background-image:url(' + RANK_AVATAR_BG[rk.baseKey||rk.key] + ');background-size:cover' : 'background:' + bg + '22';
            return '<div style="position:absolute;top:' + avY + 'px;left:' + avX + 'px;transform:translate(-50%,-50%);width:' + av + 'px;height:' + av + 'px;border-radius:50%;' + bgS + ';display:flex;align-items:center;justify-content:center;font-size:' + (big ? 34 : 22) + 'px;font-weight:700;color:rgba(255,255,255,0.92);text-shadow:0 1px 4px rgba(0,0,0,0.8);z-index:1">' + ini(p.name) + '</div>';
          })()}
          ${(_cf ? _cf.src : (FRAME_BY_DIV[rk.key] || ra2.profile_frame)) ? `<img src="${_cf ? _cf.src : (FRAME_BY_DIV[rk.key] || ra2.profile_frame)}" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:${fb}px;height:${fb}px;object-fit:contain;pointer-events:none;z-index:2">` : ''}
        </div>
        <div class="pp-name-row">
          <span class="pp-name">${esc(p.name)}</span>
          <span class="pp-tier" style="color:${rk.color};border-color:${rk.color}55;background:${rk.color}1f">${rankImg(rk, 15)} ${rk.name}</span>
        </div>
        ${titleHtml(p, 'pp-title')}
        <div class="pp-tiles">
          <div class="pp-tile"><b style="color:var(--gold)">${p.points || 0}</b><span>Points</span></div>
          <div class="pp-tile"><b style="color:var(--accent)">${s.won}</b><span>Victoires</span></div>
          <div class="pp-tile"><b>${s.lost}</b><span>Défaites</span></div>
          <div class="pp-tile"><b>${rate}%</b><span>Winrate</span></div>
        </div>
      </div>
    </div>
    <button class="pp-history-btn" onclick="openPlayerHistory(${pid})">
      🎲 Voir l'historique des parties
    </button>`;

  openModal('modal-player-profile');

  // Draw chart after modal is visible (mode Points par défaut)
  _ppChartPid   = pid;
  _ppChartColor = bg;
  setTimeout(() => setPpChartMode('pts'), 50);

  // Achievements
  const achStats  = computeAchievementStats(pid);
  const unlocked  = ACHIEVEMENTS.filter((a) => a.check(achStats));
  const locked    = ACHIEVEMENTS.filter((a) => !a.check(achStats));
  const total     = ACHIEVEMENTS.length;
  document.getElementById('pp-ach-count').textContent =
    `${unlocked.length}/${total} débloqués`;

  const buildAch = (a, isUnlocked) => {
    let bar = '';
    const pdef = ACH_PROGRESS[a.id];
    if (!isUnlocked && pdef) {
      const [fn, target] = pdef;
      if (target > 1) {
        const cur = Math.max(0, Math.min(Math.round(fn(achStats)), target));
        const pct = Math.round((cur / target) * 100);
        bar = `<div class="ach-prog">
                 <div class="ach-prog-bar"><span style="width:${pct}%"></span></div>
                 <div class="ach-prog-txt">${cur}/${target}</div>
               </div>`;
      }
    }
    return `<div class="ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
       <div class="ach-icon">${a.icon}</div>
       <div class="ach-info">
         <div class="ach-name">${a.name}</div>
         <div class="ach-desc">${a.desc}</div>
         ${bar}
       </div>
     </div>`;
  };

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
  const CHAT_TABLE    = 'chat_messages';
  let reloadTimer = null;
  let chatTimer   = null;

  const scheduleChatReload = () => {   // repli si le record n'est pas dans le payload
    clearTimeout(chatTimer);
    chatTimer = setTimeout(() => { if (chatLoaded) loadChat(); }, 400);
  };

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
        renderCurrentPage();
      }
    }, 400);
  };

  const connect = () => {
    const ws = new WebSocket(wsUrl);
    ws.onopen = () => {
      [...DATA_TABLES, ...SOCIAL_TABLES, CHAT_TABLE].forEach((table, i) => {
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
          if (table === CHAT_TABLE) {
            const rec = msg.payload.record;
            if (msg.payload.type === 'INSERT' && rec && rec.content) appendChatMessage(rec);
            else scheduleChatReload();
          }
          else if (SOCIAL_TABLES.includes(table)) scheduleReload(true);
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
  syncAchievementUnlocks(true);   // pose la baseline au démarrage (sans notifier)

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
  curPage = 'classement';
  updateAddBtn();
  renderCurrentPage();
  startRealtime();
  initDecorations();
  initRatingTooltip();
  handleValidationLink();     // validation via lien email (?validate=…&token=…)
};

init();


