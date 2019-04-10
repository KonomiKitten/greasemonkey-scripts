// ==UserScript==
// @name        Reddit Tweaks
// @author      KonomiKitten
// @namespace   reddittweaks
// @description Various tweaks for Reddit
// @include     http://www.reddit.com*
// @include     https://www.reddit.com*
// @version     1.2.8
// @updateURL   https://github.com/konomikitten/userscripts/raw/master/reddit-tweaks.user.js
// @downloadURL https://github.com/konomikitten/userscripts/raw/master/reddit-tweaks.user.js
// @homepageURL https://github.com/konomikitten/userscripts
// @supportURL  https://github.com/konomikitten/userscripts/issues
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
        var css = `
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
        }`;

        /* Insert the style into the page */
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        element.appendChild(style);
    }
});
