// ==UserScript==
// @name	YouTube Disable Up Next
// @author	KonomiKitten
// @namespace	youtubedisableupnext
// @description	Disable "Up Next" otherwise known as AutoPlay
// @include	http://www.youtube.com*
// @include	https://www.youtube.com*
// @version	1.0.2
// @updateURL	https://github.com/KonomiKitten/userscripts/raw/master/youtube-disable-up-next.user.js
// @grant	none
// @run-at	document-end
// ==/UserScript==

function delayedObserver(args) {
	new window.MutationObserver(function() {
		 var element = document.querySelector(args.selector);
		 if (element) {
			 this.disconnect();
			 args.done(element);
		 }
	}).observe(document, {
		'childList': true,
		'subtree': true
	});
}
/* New YouTube Theme */
delayedObserver({
	selector: 'div#head.style-scope.ytd-compact-autoplay-renderer',
	done: function(element) {
		element.style.setProperty("display", "none", "important");
	}
});
delayedObserver({
	selector: 'paper-toggle-button#toggle'
		+'.style-scope.ytd-compact-autoplay-renderer',
	done: function(element) {
		if (element.checked) {
			element.click();
		}
	}
});
/* Old YouTube Theme */
delayedObserver({
	selector: 'input#autoplay-checkbox',
	done: function(element) {
		if (element.checked) {
			element.click();
		}
	}
});

