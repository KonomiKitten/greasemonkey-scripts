// ==UserScript==
// @name        Google Homepage Tweaks
// @author      KonomiKitten
// @namespace   googlehomepagetweaks
// @description Disable "Come here often? Make Google your homepage"
// @include     http://*google.com*
// @include     https://*google.com*
// @version     2
// @updateURL   https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/google-homepage-tweaks.user.js
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle (
  /* Matched from:
  
  <div class="gb_Sc gb_Tc gb_Lc gb_g" aria-label="promo" role="region" data-ved="0EPNDCBU" style="behavior:url(#default#userData)">
    <div class="gb_ha">
  */
  "div[aria-label=promo] > div { display: none !important; }"
);
