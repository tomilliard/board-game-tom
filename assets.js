// assets.js — chemins des images (rangs, avatars, décorations).
// Charge AVANT app.js. Variables partagées au scope global du script.

// ─── Assets de rang, par palier de base ───
// On ne liste que les paliers déjà illustrés. Les autres tombent
// proprement sur un rendu neutre tant qu'ils n'ont pas leurs images.
// Pour ajouter un palier, copier un bloc et changer le nom + les chemins.
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
};

// Fond derrière l'avatar (aucun pour l'instant → fond teinté par défaut).
const RANK_AVATAR_BG = {};

// Petites icônes de rang (classement, listes, aperçus de points).
const RANK_EMBLEMS = {
  bois:   'assets/bois_icon.png',
  bronze: 'assets/bronze_icon.png',
  argent: 'assets/argent_icon.png',
};

// ─── Avatars de profil ───
const AVATARS = [
  { id: 1, label: 'Le Stratège', src: 'assets/avatars_src.png' },
  { id: 2, label: 'La Guerrière', src: 'assets/avatars_src_2.png' },
  { id: 3, label: 'La Chercheuse', src: 'assets/avatars_src_3.png' },
  { id: 4, label: "L'Architecte", src: 'assets/avatars_src_4.png' },
  { id: 5, label: 'La Joueuse', src: 'assets/avatars_src_5.png' },
  { id: 6, label: 'Le Seigneur des Flammes', src: 'assets/avatars_src_6.png' },
  { id: 7, label: 'La Nécromancienne', src: 'assets/avatars_src_7.png' },
  { id: 8, label: 'Le Corsaire', src: 'assets/avatars_src_8.png' },
  { id: 9, label: 'La Druidesse', src: 'assets/avatars_src_9.png' },
  { id: 10, label: 'Le Marchand', src: 'assets/avatars_src_10.png' }
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
