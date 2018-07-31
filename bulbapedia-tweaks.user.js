// ==UserScript==
// @name	Bulbapedia Tweaks
// @author	KonomiKitten
// @namespace	bulbapediatweaks
// @description	Hides the notice banner
// @include 	http://bulbapedia.bulbagarden.net/*
// @include 	https://bulbapedia.bulbagarden.net/*
// @version	3.0.7
// @updateURL	https://github.com/KonomiKitten/userscripts/raw/master/bulbapedia-tweaks.user.js
// @downloadURL	https://github.com/KonomiKitten/userscripts/raw/master/bulbapedia-tweaks.user.js
// @homepageURL	https://github.com/KonomiKitten/userscripts
// @supportURL	https://github.com/KonomiKitten/userscripts/issues
// @grant	none
// @run-at	document-start
// ==/UserScript==

function mutationObserverByTag(args) {
	new window.MutationObserver(function() {
		var element = document.getElementsByTagName(args.tag)[0];
		if (element) {
			 this.disconnect();
			 args.done(element);
		}
	}).observe(document, {
		'childList': true,
		'subtree': true
	});
}
mutationObserverByTag({
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
