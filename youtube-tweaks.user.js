// ==UserScript==
// @name        YouTube Tweaks
// @author      KonomiKitten
// @namespace   youtubetweaks
// @description YouTube Tweaks
// @include     http://www.youtube.com*
// @include     https://www.youtube.com*
// @version     1.1.0
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/youtube-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/youtube-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png
// @grant       none
// @run-at      document-start
// @noframes
// ==/UserScript==

function mutationObserver(args) {
  new window.MutationObserver(function() {
    var node;
    if (args.tag) {
      node = document.getElementsByTagName(args.tag)[0];
    }
    if (args.selector) {
      node = document.querySelector(args.selector);
    }
    if (node) {
      this.disconnect();
      args.done(node);
    }
  }).observe(document, {
    'childList': true,
    'subtree': true
  });
}

mutationObserver({
  tag: 'head',
  done: function(element) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      /* Hide payed video advertisements */
      div#offer-module {
        display: none !important;
      }
      /* Hide "More videos", shown when you pause a video */
      div.ytp-pause-overlay {
        display: none !important;
      }
    `;
    element.appendChild(style);
  }
});
