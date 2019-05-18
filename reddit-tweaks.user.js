// ==UserScript==
// @name        Reddit Tweaks
// @author      KonomiKitten
// @namespace   reddittweaks
// @description Various tweaks for Reddit
// @include     http://www.reddit.com*
// @include     https://www.reddit.com*
// @version     1.3.0
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/reddit-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/reddit-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

GM_addStyle(`
  /* Hide visit new reddit */
  button.redesign-beta-optin {
    display: none !important;
  }

  /* Remove color on link flairs */
  span.linkflairlabel {
    padding: 0 2px !important;
    color: #555 !important;
    background-color: #f5f5f5 !important;
    border: 1px solid #ddd !important;
    font-size: 10px !important;
    line-height: 13px !important;
    height: 13px !important;
  }

  /* Remove Reddit premium banner */
  form.premium-banner {
    display: none !important;
  }

  /* Remove Redesign advertisements */
  section.redesignbetabar-js {
    display: none !important;
  }
`);