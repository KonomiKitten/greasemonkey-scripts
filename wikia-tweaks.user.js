// ==UserScript==
// @name        Wikia Tweaks
// @author      KonomiKitten
// @namespace   wikiatweaks
// @description Wikia Tweaks
// @include     http://*wikia.com*
// @include     https://*wikia.com*
// @version     3.0.4
// @updateURL   https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/wikia-tweaks.user.js
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle (
  /* Hide Wikia main banner (Top bar) */
  'div[id="globalNavigation"][class*="wds-global-navigation"] { display: none !important; }'+
  
  /* Hide Notifcation dialogs */
  'ul[id="wikiNotifications"][class*="wikiNotifications"] { display: none !important; }'+
  
  /* Hide Trending Fandom Articles */
  'div[id="WikiRailWrapper"][class*="WikiRail"] { display: none !important; }'+

  /* Hide Explore the Beautiful world of Wikia (Bottom bar)*/
  'div[id="WikiaBarWrapper"][class="WikiaBarWrapper"] { display: none !important; }'
);
