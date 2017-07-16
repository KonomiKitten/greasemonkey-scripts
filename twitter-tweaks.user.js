// ==UserScript==
// @name        Twitter Tweaks
// @author      KonomiKitten
// @namespace   twittetweaks
// @description Twitter Tweaks
// @include     http://twitter.com*
// @include     https://twitter.com*
// @version     3.0.3
// @updateURL   https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/twitter-tweaks.user.js
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle (
  /* Hide Moments button */
  'li[class*="moments js-moments-tab"] { display: none !important; }'+
  
  /* Hide Who to follow */
  'div[class*="wtf-module js-wtf-module"], div[class*="WhoToFollow"], '+
  'li[data-component-context*="suggest_who_to_follow"] { display: none !important; }'+
  
  /* Hide Advertise with Twitter */
  'div[class*="flex-module Footer-adsModule"] { display: none !important; }'+
  
  /* Hide While you were away... */
  'li[class*="js-stream-item"][class*="has-recap"] { display: none !important; }'+
  
  /* Hide Live video */
  'div[class*="VideoGuide"][class*="roaming-module"] { display: none !important; }'+
  'div[class*="LiveVideoHomePageModuleContainer"][class*="roaming-module"] { display: none !important; }'
);
