// ==UserScript==
// @name	YouTube Disable Up Next
// @author	KonomiKitten
// @namespace	youtubedisableupnext
// @description	Disable "Up Next" otherwise known as AutoPlay
// @include	http://www.youtube.com*
// @include	https://www.youtube.com*
// @version	1.0.5
// @updateURL   https://gitlab.com/konomikitten/userscripts/raw/master/youtube-disable-up-next.user.js
// @downloadURL https://gitlab.com/konomikitten/userscripts/raw/master/youtube-disable-up-next.user.js
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
        'attributes': true,
        'characterData': true,
        'subtree': true,
        'attributeOldValue': true,
        'characterDataOldValue': true
    });
}

/* New YouTube Theme */
mutationObserver({
    selector: 'div#head.style-scope.ytd-compact-autoplay-renderer',
    done: function(element) {
        element.style.setProperty("display", "none", "important");
    }
});
mutationObserver({
    selector: 'paper-toggle-button[id="improved-toggle"][class="style-scope ytd-compact-autoplay-renderer"][active=""]',
    done: function(element) {
        if (element.checked) {
            element.click();
        }
    }
});
