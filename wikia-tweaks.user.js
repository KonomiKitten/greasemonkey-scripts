// ==UserScript==
// @name	Wikia Tweaks
// @author	KonomiKitten
// @namespace	wikiatweaks
// @description	Wikia Tweaks
// @include	http://*wikia.com*
// @include	https://*wikia.com*
// @version	3.1.1
// @updateURL	https://gitlab.com/konomikitten/userscripts/raw/master/wikia-tweaks.user.js
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
		/* Hide Wikia main banner (Top bar) */
		'div[id="globalNavigation"][class*="wds-global-navigation"] { display: none !important; }'+

		/* Hide Notifcation dialogs */
		'ul[id="WikiaNotifications"][class*="WikiaNotifications"] { display: none !important; }'+

		/* Hide Trending Fandom Articles */
		'div[id="WikiaRailWrapper"][class*="WikiaRail"] { display: none !important; }'+

		/* Hide Fan Feed */
		'div[id="recirculation-footer-index-container"] { display: none !important; }'+

		/* Hide Explore the Beautiful world of Wikia (Bottom bar)*/
		'div[id="WikiaBarWrapper"][class="WikiaBarWrapper"] { display: none !important; }'

		/* Insert the style into the page */
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		element.appendChild(style);
	}
});
