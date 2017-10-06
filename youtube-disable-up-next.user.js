// ==UserScript==
// @name	YouTube Disable Up Next
// @author	KonomiKitten
// @namespace	youtubedisableupnext
// @description	Disable "Up Next" otherwise known as AutoPlay
// @include	http://www.youtube.com*
// @include	https://www.youtube.com*
// @version	1.0.1
// @updateURL	https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/youtube-disable-up-next.user.js
// @grant	none
// @run-at	document-end
// ==/UserScript==

function f() {
	try {
		var node;
		node = document.querySelector(
			'paper-toggle-button[aria-label="Autoplay"]'
		);
		node.setAttribute('aria-pressed', 'false');
		node.removeAttribute('checked');
		node.removeAttribute('active');
	}
	catch (e) {}
}
f();
document.body.addEventListener('DOMSubtreeModified', f, false);
