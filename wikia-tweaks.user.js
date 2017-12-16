// ==UserScript==
// @name	Wikia Tweaks
// @author	KonomiKitten
// @namespace	wikiatweaks
// @description	Wikia Tweaks
// @include	http://*wikia.com*
// @include	https://*wikia.com*
// @version	3.0.7
// @updateURL	https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/wikia-tweaks.user.js
// @run-at	document-start
// ==/UserScript==

function add_global_style(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

add_global_style(
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
);
