/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_IMAGES = 'curiosity/global/LOAD_IMAGES';
export const LOAD_IMAGES_SUCCESS = 'curiosity/global/LOAD_IMAGES_SUCCESS';
export const LOAD_IMAGES_ERROR = 'curiosity/global/LOAD_IMAGES_ERROR';
export const LOAD_MANIFEST = 'curiosity/global/LOAD_MANIFEST';
export const LOAD_MANIFEST_SUCCESS = 'curiosity/global/LOAD_MANIFEST_SUCCESS';
export const LOAD_MANIFEST_ERROR = 'curiosity/global/LOAD_MANIFEST_ERROR';
export const SET_TOTAL_PHOTOS = 'curiosity/global/SET_TOTAL_PHOTOS';
export const DEFAULT_LOCALE = 'en';
