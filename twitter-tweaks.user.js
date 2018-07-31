// ==UserScript==
// @name	Twitter Tweaks
// @author	KonomiKitten
// @namespace	twittetweaks
// @description	Twitter Tweaks
// @include	http://twitter.com*
// @include	https://twitter.com*
// @version	3.1.0
// @updateURL	https://github.com/KonomiKitten/userscripts/raw/master/twitter-tweaks.user.js
// @downloadURL	https://github.com/KonomiKitten/userscripts/raw/master/twitter-tweaks.user.js
// @homepageURL	https://github.com/konomikitten/userscripts
// @supportURL	https://github.com/konomikitten/userscripts/issues
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
