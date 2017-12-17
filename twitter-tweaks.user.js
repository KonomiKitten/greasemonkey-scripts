// ==UserScript==
// @name	Twitter Tweaks
// @author	KonomiKitten
// @namespace	twittetweaks
// @description	Twitter Tweaks
// @include	http://twitter.com*
// @include	https://twitter.com*
// @version	3.0.5
// @updateURL	https://github.com/KonomiKitten/userscripts/raw/master/twitter-tweaks.user.js
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
	'div[class*="LiveVideoHomePageModuleContainer"][class*="roaming-module"] { display: none !important; }'
);
