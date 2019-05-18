// ==UserScript==
// @name        Twitter Tweaks
// @author      KonomiKitten
// @namespace   twittetweaks
// @description Twitter Tweaks
// @include     http://twitter.com*
// @include     https://twitter.com*
// @version     3.1.6
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/twitter-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/twitter-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
// @icon        https://abs.twimg.com/favicons/favicon.ico
// @grant       none
// @run-at      document-start
// @inject-into content
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
        'div[class*="LiveVideoHomePageModuleContainer"][class*="roaming-module"] { display: none !important; }';

        /* Insert the style into the page */
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        element.appendChild(style);
    }
});
