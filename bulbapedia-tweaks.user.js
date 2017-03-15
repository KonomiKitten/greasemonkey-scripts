// ==UserScript==
// @name        Bulbapedia Tweaks
// @author      KonomiKitten
// @namespace   bulbapediatweaks
// @description Hides the notice banner
// @include     http://bulbapedia.bulbagarden.net/*
// @version     3
// @updateURL   https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/bulbapedia-tweaks.user.js
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle (
  /* Matched from:
  
  <div id="siteNotice">
  
  */
  "div#siteNotice { display: none !important; }"
);
