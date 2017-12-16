// ==UserScript==
// @name	Bulbapedia Tweaks
// @author	KonomiKitten
// @namespace	bulbapediatweaks
// @description	Hides the notice banner
// @include 	http://bulbapedia.bulbagarden.net/*
// @version	3.0.1
// @updateUR	https://github.com/KonomiKitten/greasemonkey-scripts/raw/master/bulbapedia-tweaks.user.js
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

add_global_style (
  /* Disable Notice Banner */
  "div#siteNotice { display: none !important; }"
);
