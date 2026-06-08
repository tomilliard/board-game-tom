// assets.js — chemins des images (rangs, avatars, décorations).
// Charge AVANT app.js. Variables partagées au scope global du script.

// ─── Assets de rang, par palier de base ───
// Collection complète : bois → challenger.
// Pour ajouter/modifier un palier, copier un bloc et changer le nom + les chemins.
const RANK_ASSETS_DESKTOP = {
  bois: {
    emblem:        'assets/bois_emblem.png',
    banner:        'assets/bois_banner.png',
    player_frame:  'assets/bois_frame.png',
    profile_frame: 'assets/bois_frame.png',
  },
  bronze: {
    emblem:        'assets/bronze_emblem.png',
    banner:        'assets/bronze_banner.png',
    player_frame:  'assets/bronze_frame.png',
    profile_frame: 'assets/bronze_frame.png',
  },
  argent: {
    emblem:        'assets/argent_emblem.png',
    banner:        'assets/argent_banner.png',
    player_frame:  'assets/argent_frame.png',
    profile_frame: 'assets/argent_frame.png',
  },
  or: {
    emblem:        'assets/or_emblem.png',
    banner:        'assets/or_banner.png',
    player_frame:  'assets/or_frame.png',
    profile_frame: 'assets/or_frame.png',
  },
  platine: {
    emblem:        'assets/platine_emblem.png',
    banner:        'assets/platine_banner.png',
    player_frame:  'assets/platine_frame.png',
    profile_frame: 'assets/platine_frame.png',
  },
  diamant: {
    emblem:        'assets/diamant_emblem.png',
    banner:        'assets/diamant_banner.png',
    player_frame:  'assets/diamant_frame.png',
    profile_frame: 'assets/diamant_frame.png',
  },
  maitre: {
    emblem:        'assets/maitre_emblem.png',
    banner:        'assets/maitre_banner.png',
    player_frame:  'assets/maitre_frame.png',
    profile_frame: 'assets/maitre_frame.png',
  },
  grandmaitre: {
    emblem:        'assets/grandmaitre_emblem.png',
    banner:        'assets/grandmaitre_banner.png',
    player_frame:  'assets/grandmaitre_frame.png',
    profile_frame: 'assets/grandmaitre_frame.png',
  },
  challenger: {
    emblem:        'assets/challenger_emblem.png',
    banner:        'assets/challenger_banner.png',
    player_frame:  'assets/challenger_frame.png',
    profile_frame: 'assets/challenger_frame.png',
  },
};

const RANK_ASSETS_MOBILE = {
  bois: {
    emblem:        'assets/bois_emblem.png',
    banner:        'assets/bois_banner.png',
    player_frame:  'assets/bois_frame.png',
    profile_frame: 'assets/bois_frame.png',
  },
  bronze: {
    emblem:        'assets/bronze_emblem.png',
    banner:        'assets/bronze_banner.png',
    player_frame:  'assets/bronze_frame.png',
    profile_frame: 'assets/bronze_frame.png',
  },
  argent: {
    emblem:        'assets/argent_emblem.png',
    banner:        'assets/argent_banner.png',
    player_frame:  'assets/argent_frame.png',
    profile_frame: 'assets/argent_frame.png',
  },
  or: {
    emblem:        'assets/or_emblem.png',
    banner:        'assets/or_banner.png',
    player_frame:  'assets/or_frame.png',
    profile_frame: 'assets/or_frame.png',
  },
  platine: {
    emblem:        'assets/platine_emblem.png',
    banner:        'assets/platine_banner.png',
    player_frame:  'assets/platine_frame.png',
    profile_frame: 'assets/platine_frame.png',
  },
  diamant: {
    emblem:        'assets/diamant_emblem.png',
    banner:        'assets/diamant_banner.png',
    player_frame:  'assets/diamant_frame.png',
    profile_frame: 'assets/diamant_frame.png',
  },
  maitre: {
    emblem:        'assets/maitre_emblem.png',
    banner:        'assets/maitre_banner.png',
    player_frame:  'assets/maitre_frame.png',
    profile_frame: 'assets/maitre_frame.png',
  },
  grandmaitre: {
    emblem:        'assets/grandmaitre_emblem.png',
    banner:        'assets/grandmaitre_banner.png',
    player_frame:  'assets/grandmaitre_frame.png',
    profile_frame: 'assets/grandmaitre_frame.png',
  },
  challenger: {
    emblem:        'assets/challenger_emblem.png',
    banner:        'assets/challenger_banner.png',
    player_frame:  'assets/challenger_frame.png',
    profile_frame: 'assets/challenger_frame.png',
  },
};

// Fond derrière l'avatar (aucun pour l'instant → fond teinté par défaut).
const RANK_AVATAR_BG = {};

// Petites icônes de rang (classement, listes, aperçus de points).
const RANK_EMBLEMS = {
  bois:       'assets/bois_icon.png',
  bronze:     'assets/bronze_icon.png',
  argent:     'assets/argent_icon.png',
  or:         'assets/or_icon.png',
  platine:    'assets/platine_icon.png',
  diamant:    'assets/diamant_icon.png',
  maitre:     'assets/maitre_icon.png',
  grandmaitre:'assets/grandmaitre_icon.png',
  challenger: 'assets/challenger_icon.png',
};

// ─── Avatars de profil ───
const AVATARS = [
  { id: 1, label: 'Le Gardien Céleste', src: 'assets/avatar1.webp' },
  { id: 2, label: 'La Reine Pirate', src: 'assets/avatar2.webp' },
  { id: 3, label: 'Le Paladin', src: 'assets/avatar3.webp' },
  { id: 4, label: 'La Steampunk', src: 'assets/avatar4.webp' },
  { id: 5, label: 'Le Mage', src: 'assets/avatar5.webp' },
  { id: 6, label: 'Le Capitaine de Guilde', src: 'assets/avatar6.webp' },
  { id: 7, label: 'Le Samouraï', src: 'assets/avatar7.webp' },
  { id: 8, label: 'Le Viking Berserker', src: 'assets/avatar8.webp' },
  { id: 9, label: 'La Reine des Neiges', src: 'assets/avatar9.webp' },
  { id: 10, label: 'L\'Assassin des Ombres', src: 'assets/avatar10.webp' },
  { id: 11, label: 'La Maîtresse du Jeu', src: 'assets/avatar11.webp' },
  { id: 12, label: 'Le Roi Dragon', src: 'assets/avatar12.webp' },
  { id: 13, label: 'L\'Alchimiste', src: 'assets/avatar13.webp' },
  { id: 14, label: 'L\'Architecte', src: 'assets/avatar14.webp' },
  { id: 15, label: 'La Nécromancienne', src: 'assets/avatar15.webp' },
  { id: 16, label: 'Le Pirate', src: 'assets/avatar16.webp' },
  { id: 17, label: 'La Druidesse', src: 'assets/avatar17.webp' },
  { id: 18, label: 'Le Marchand', src: 'assets/avatar18.webp' },
  { id: 19, label: 'La Guerrière', src: 'assets/avatar19.webp' },
  { id: 20, label: 'Le Grand Stratège', src: 'assets/avatar20.webp' },
  { id: 21, label: 'Le Roi-Foudre', src: 'assets/avatar21.webp', reqAch: 'rank_diamant_1' },
  { id: 22, label: 'Le Gardien sylvestre', src: 'assets/avatar22.webp', reqAch: 'bois_30j' },
  { id: 23, label: 'Sandworm King', src: 'assets/avatar23.webp', reqAch: 'dune_win_10' },
  { id: 24, label: 'The Spice Sovereign', src: 'assets/avatar24.webp', reqAch: 'dune_win_20' },
  { id: 25, label: 'Le Roi des Abysses', src: 'assets/avatar25.webp', reqAch: 'skullking_win_50' }
];

// ─── Cadres cosmétiques déblocables par succès ───
// Chaque cadre a son trou (FRAME_HOLES inline) et un succès requis (reqAch).
// frame = null/0 sur le joueur → cadre du rang par défaut.
const FRAMES = [
  { id: 2, label: 'Le Roi des Abysses', src: 'assets/skullking_frame.png',
    hole: { top: 26, left: 31, size: 88, top_m: 14, left_m: 17, size_m: 47 },
    reqAch: 'skullking_win_50' },
  { id: 3, label: 'Les Sept Merveilles', src: 'assets/7wonders_frame.png',
    hole: { top: 40, left: 38, size: 74, top_m: 21, left_m: 20, size_m: 39 },
    reqAch: '7w_win_25' }
];

// ─── Fonds de carte déblocables par succès ───
// cardbg = null/0 sur le joueur → fond uni par défaut.
const BACKGROUNDS = [
  { id: 1, label: 'Shai-Hulud', src: 'assets/bg_dune.webp', reqAch: 'dune_win_20' },
  { id: 2, label: 'Cité des Merveilles', src: 'assets/bg_7wonders.webp', reqAch: '7w_play_15' },
  { id: 3, label: 'L\'Arbre-Monde', src: 'assets/bg_foret.webp', reqAch: 'foret_play_15' }
];

// ─── Images décoratives ───
const DECO_IMGS = [
  'assets/deco_imgs.png',
  'assets/deco_imgs_2.png',
  'assets/deco_imgs_3.png',
  'assets/deco_imgs_4.png',
  'assets/deco_imgs_5.png',
  'assets/deco_imgs_6.png',
  'assets/deco_imgs_7.png',
  'assets/deco_imgs_8.png',
  'assets/deco_imgs_9.png',
  'assets/deco_imgs_10.png',
  'assets/deco_imgs_11.png',
  'assets/deco_imgs_12.png',
  'assets/deco_imgs_13.png',
  'assets/deco_imgs_14.png',
  'assets/deco_imgs_15.png',
  'assets/deco_imgs_16.png',
  'assets/deco_imgs_17.png',
  'assets/deco_imgs_18.png',
  'assets/deco_imgs_19.png',
  'assets/deco_imgs_20.png',
  'assets/deco_imgs_21.png',
  'assets/deco_imgs_22.png',
  'assets/deco_imgs_23.png',
  'assets/deco_imgs_24.png',
  'assets/deco_imgs_25.png',
  'assets/deco_imgs_26.png',
  'assets/deco_imgs_27.png',
  'assets/deco_imgs_28.png',
  'assets/deco_imgs_29.png',
  'assets/deco_imgs_30.png',
  'assets/deco_imgs_31.png',
  'assets/deco_imgs_32.png',
];
