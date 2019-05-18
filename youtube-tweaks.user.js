// ==UserScript==
// @name        YouTube Tweaks
// @author      KonomiKitten
// @namespace   youtubetweaks
// @description YouTube Tweaks
// @include     http://www.youtube.com*
// @include     https://www.youtube.com*
// @version     1.0.5
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/youtube-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/youtube-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle(`
  /* Hide payed video advertisements */
  div#offer-module {
    display: none !important;
  }
`);