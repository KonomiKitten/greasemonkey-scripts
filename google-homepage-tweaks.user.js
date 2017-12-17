// ==UserScript==
// @name	Google Homepage Tweaks
// @author	KonomiKitten
// @namespace	googlehomepagetweaks
// @description	Disable "Come here often? Make Google your homepage"
// @include	http://www.google.com*
// @include	https://www.google.com*
// @version	3.0.2
// @updateURL	https://github.com/KonomiKitten/userscripts/raw/master/google-homepage-tweaks.user.js
// @grant	none
// @run-at	document-end
// ==/UserScript==

/* Hides "Come here often? Make Google your homepage"
<div class="gb_fa gb_g" aria-hidden="false">
	<a class="gb_2c gb_od" href="javascript:void(0)" title="No thanks">×</a> */
document.querySelector('a[title="No thanks"]').parentNode.style.setProperty("display", "none", "important");
