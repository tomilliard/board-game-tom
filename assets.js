// assets.js — donnees lourdes (cadres, avatars, fonds) en base64
// Charge AVANT app.js. Variables partagees au scope global du script.

const RANK_ASSETS_DESKTOP = {
  'bois_2': { player_frame: 'assets/rank_assets_desktop_bois_2_player_frame.png', profile_frame: 'assets/rank_assets_desktop_bois_2_player_frame.png' },
  'bois_1': { player_frame: 'assets/rank_assets_desktop_bois_1_player_frame.png', profile_frame: 'assets/rank_assets_desktop_bois_1_player_frame.png' },
  'bois': {
    player_frame: 'assets/rank_assets_desktop_bois_player_frame.png',
    banner: 'assets/rank_assets_desktop_bois_banner.png',
    emblem: 'assets/rank_assets_desktop_bois_emblem.png',
    icon: 'assets/rank_assets_desktop_bois_icon.png',
    profile_frame: 'assets/rank_assets_desktop_bois_profile_frame.png',
  },
  'bronze': {
    player_frame: 'assets/rank_assets_desktop_bronze_player_frame.png',
    banner: 'assets/rank_assets_desktop_bronze_banner.png',
    emblem: 'assets/rank_assets_desktop_bronze_emblem.png',
    icon: 'assets/rank_assets_desktop_bronze_icon.png',
    profile_frame: 'assets/rank_assets_desktop_bronze_profile_frame.png',
  },
  'argent': {
    player_frame: 'assets/rank_assets_desktop_argent_player_frame.png',
    banner: 'assets/rank_assets_desktop_argent_banner.png',
    emblem: 'assets/rank_assets_desktop_argent_emblem.png',
    icon: 'assets/rank_assets_desktop_argent_icon.png',
    profile_frame: 'assets/rank_assets_desktop_argent_profile_frame.png',
  },
  'or': {
    player_frame: 'assets/rank_assets_desktop_or_player_frame.png',
    banner: 'assets/rank_assets_desktop_or_banner.png',
    emblem: 'assets/rank_assets_desktop_or_emblem.png',
    icon: 'assets/rank_assets_desktop_or_icon.png',
    profile_frame: 'assets/rank_assets_desktop_or_profile_frame.png',
  },
  'platine': {
    player_frame: 'assets/rank_assets_desktop_platine_player_frame.png',
    banner: 'assets/rank_assets_desktop_platine_banner.png',
    emblem: 'assets/rank_assets_desktop_platine_emblem.png',
    icon: 'assets/rank_assets_desktop_platine_icon.png',
    profile_frame: 'assets/rank_assets_desktop_platine_profile_frame.png',
  },
  'diamant': {
    player_frame: 'assets/rank_assets_desktop_diamant_player_frame.png',
    banner: 'assets/rank_assets_desktop_diamant_banner.png',
    emblem: 'assets/rank_assets_desktop_diamant_emblem.png',
    icon: 'assets/rank_assets_desktop_diamant_icon.png',
    profile_frame: 'assets/rank_assets_desktop_diamant_profile_frame.png',
  },
  'maitre': {
    player_frame: 'assets/rank_assets_desktop_maitre_player_frame.png',
    banner: 'assets/rank_assets_desktop_maitre_banner.png',
    emblem: 'assets/rank_assets_desktop_maitre_emblem.png',
    icon: 'assets/rank_assets_desktop_maitre_icon.png',
    profile_frame: 'assets/rank_assets_desktop_maitre_profile_frame.png',
  },
  'challenger': {
    player_frame: 'assets/rank_assets_desktop_challenger_player_frame.png',
    banner: 'assets/rank_assets_desktop_challenger_banner.png',
    emblem: 'assets/rank_assets_desktop_challenger_emblem.png',
    icon: 'assets/rank_assets_desktop_challenger_icon.png',
    profile_frame: 'assets/rank_assets_desktop_challenger_profile_frame.png',
  },
};

const RANK_ASSETS_MOBILE = {
  'bois_2': { player_frame: 'assets/rank_assets_mobile_bois_2_player_frame.png' },
  'bois': {
    player_frame: 'assets/rank_assets_mobile_bois_player_frame.png',
    emblem: 'assets/rank_assets_mobile_bois_emblem.png',
    icon: 'assets/rank_assets_mobile_bois_icon.png',
  },
  'bronze': {
    player_frame: 'assets/rank_assets_mobile_bronze_player_frame.png',
    emblem: 'assets/rank_assets_mobile_bronze_emblem.png',
    icon: 'assets/rank_assets_mobile_bronze_icon.png',
  },
  'argent': {
    player_frame: 'assets/rank_assets_mobile_argent_player_frame.png',
    emblem: 'assets/rank_assets_mobile_argent_emblem.png',
    icon: 'assets/rank_assets_mobile_argent_icon.png',
  },
  'or': {
    player_frame: 'assets/rank_assets_mobile_or_player_frame.png',
    emblem: 'assets/rank_assets_mobile_or_emblem.png',
    icon: 'assets/rank_assets_mobile_or_icon.png',
  },
  'platine': {
    player_frame: 'assets/rank_assets_mobile_platine_player_frame.png',
    emblem: 'assets/rank_assets_mobile_platine_emblem.png',
    icon: 'assets/rank_assets_mobile_platine_icon.png',
  },
  'diamant': {
    player_frame: 'assets/rank_assets_mobile_diamant_player_frame.png',
    emblem: 'assets/rank_assets_mobile_diamant_emblem.png',
    icon: 'assets/rank_assets_mobile_diamant_icon.png',
  },
  'maitre': {
    player_frame: 'assets/rank_assets_mobile_maitre_player_frame.png',
    emblem: 'assets/rank_assets_mobile_maitre_emblem.png',
    icon: 'assets/rank_assets_mobile_maitre_icon.png',
  },
  'challenger': {
    player_frame: 'assets/rank_assets_mobile_challenger_player_frame.png',
    emblem: 'assets/rank_assets_mobile_challenger_emblem.png',
    icon: 'assets/rank_assets_mobile_challenger_icon.png',
  },
};

const RANK_AVATAR_BG = {
  'bois': 'assets/rank_avatar_bg_bois.png',
  'bronze': 'assets/rank_avatar_bg_bronze.png',
  'argent': 'assets/rank_avatar_bg_argent.png',
  'or': 'assets/rank_avatar_bg_or.png',
  'platine': 'assets/rank_avatar_bg_platine.png',
  'diamant': 'assets/rank_avatar_bg_diamant.png',
  'maitre': 'assets/rank_avatar_bg_maitre.png',
  'challenger': 'assets/rank_avatar_bg_challenger.png',
};;;

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


// — images decoratives & emblemes de rang —
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

const RANK_EMBLEMS = {
  'bois': 'assets/rank_emblems_bois.png',
  'bronze': 'assets/rank_emblems_bronze.png',
  'argent': 'assets/rank_emblems_argent.png',
  'or': 'assets/rank_emblems_or.png',
  'platine': 'assets/rank_emblems_platine.png',
  'diamant': 'assets/rank_emblems_diamant.png',
  'maitre': 'assets/rank_emblems_maitre.png',
  'challenger': 'assets/rank_emblems_challenger.png',
};
// ─── Rangs : BOIS (test) ───
RANK_ASSETS_DESKTOP.bois = {
  emblem:        'assets/bois_emblem.png',
  banner:        'assets/bois_banner.png',
  player_frame:  'assets/bois_frame.png',
  profile_frame: 'assets/bois_frame.png',
};
RANK_ASSETS_MOBILE.bois = RANK_ASSETS_DESKTOP.bois;
RANK_EMBLEMS.bois = 'assets/bois_icon.png';