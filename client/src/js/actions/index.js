'use strict';

export const STRINGS_LOADED = 'STRINGS_LOADED';

export const stringsLoaded = (strings) => ({
  type: STRINGS_LOADED,
  strings: strings
});
