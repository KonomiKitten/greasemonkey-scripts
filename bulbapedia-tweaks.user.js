// ==UserScript==
// @name        Bulbapedia Tweaks
// @author      KonomiKitten
// @namespace   bulbapediatweaks
// @description Hides the notice banner
// @include     http://bulbapedia.bulbagarden.net/*
// @include     https://bulbapedia.bulbagarden.net/*
// @version     3.1.6
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/bulbapedia-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/bulbapedia-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://bulbapedia.bulbagarden.net/favicon.ico
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
    var css = /* Cascading Style Sheets */
    /* Disable Notice Banner */
    'div#siteNotice { display: none !important; }';

    /* Insert the style into the page */
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    element.appendChild(style);
  }
});

mutationObserver({
  tag: 'head',
  done: function(element) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
      /* Disable Notice Banner */
      div#siteNotice {
        display: none !important;
      }
    `;
    element.appendChild(style);
  }
});
