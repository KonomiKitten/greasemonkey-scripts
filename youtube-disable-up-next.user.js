// ==UserScript==
// @name        YouTube Disable Up Next
// @author      KonomiKitten
// @namespace   youtubedisableupnext
// @description Disable "Up Next" otherwise known as AutoPlay
// @include     http://www.youtube.com*
// @include     https://www.youtube.com*
// @version     1.3.1
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/youtube-disable-up-next.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/youtube-disable-up-next.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png
// @grant       none
// @run-at      document-end
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
      button.ytp-button:nth-child(5) {
        display: none !important;
      }
    `;
    element.appendChild(style);
  }
});

mutationObserver({
  selector: 'button.ytp-button[data-tooltip-target-id="ytp-autonav-toggle-button"]',
  done: function(element) {
    function pollValue() {
      if (element.getAttribute("aria-label") == "Autoplay is on") {
        element.click();
        setTimeout(pollValue, 500);
      }
    }
    pollValue();
  }
});
