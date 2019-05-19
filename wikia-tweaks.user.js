// ==UserScript==
// @name        Wikia Tweaks
// @author      KonomiKitten
// @namespace   wikiatweaks
// @description Wikia Tweaks
// @include     http://*wikia.com*
// @include     https://*wikia.com*
// @include     http://*fandom.com*
// @include     https://*fandom.com*
// @version     3.2.7
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/wikia-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/wikia-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://static.wikia.nocookie.net/qube-assets/f2/3691/favicons/favicon-32x32.png
// @grant       none
// @run-at      document-start
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
      /* Hide Trending Fandom Articles */
      section#recirculation-rail {
        display: none !important;
      }

      /* Hide Fan Feed */
      div[id="mixed-content-footer"] {
        display: none !important;
      }

      /* Hide Wikia bar */
      div[id="WikiaBar"] {
        display: none !important;
      }

      /* Hide Video */
      div[itemprop="video"] {
        display: none !important;
      }
    `;
    element.appendChild(style);
  }
});


mutationObserver({
  selector: 'div#featured-video__player > div > video',
  done: function(node) {
    node.pause();
  }
});
