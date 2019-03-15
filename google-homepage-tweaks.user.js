// ==UserScript==
// @name	Google Homepage Tweaks
// @author	KonomiKitten
// @namespace	googlehomepagetweaks
// @description	Disable "Come here often? Make Google your homepage"
// @include	http://www.google.com*
// @include	https://www.google.com*
// @version	3.0.5
// @updateURL   https://gitlab.com/konomikitten/userscripts/raw/master/google-homepage-tweaks.user.js
// @downloadURL https://gitlab.com/konomikitten/userscripts/raw/master/google-homepage-tweaks.user.js
// @homepageURL https://gitlab.com/konomikitten/userscripts
// @supportURL  https://gitlab.com/konomikitten/userscripts/issues
// @grant	none
// @run-at	document-end
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

/* Hides "Come here often? Make Google your homepage" */
mutationObserver({
    selector: 'a[title="No thanks"]',
    done: function(node) {
        node.parentNode.style.setProperty("display", "none", "important");
    }
});

