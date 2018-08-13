# Userscripts
A collection of Userscripts to make Browsing better

## Note
This repo is currently in the process of moving to GitLab, currently the GitLab repo has updates this repo lacks please switch to the GitLab repo. [KonomiKitten / userscripts](https://gitlab.com/konomikitten/userscripts).

## Extensions
### Recommended
I recommend using Tampermonkey over any of the other extensions, it has a good consistent look across Firefox and Chrome and every feature you could want is supported.
### Supported
Greasemonkey 3, Tampermonkey and Violentmonkey are supported.
### Unsupported
Greasemonkey 4 is not supported due to running userscripts in a Firefox 
only sandbox. This sandbox can break scripts that want to access various parts 
of webpages. Quoting a post from a Stackoverflow thread on the issue:

*When you access the window object from a Greasemonkey script today, what you get is a wrapper object that indirectly references the actual window's properties. This wrapper object can be modified safely, but has important limitations. Access to the actual window object is provided by unsafeWindow (shorthand for window.wrappedJSObject). Use of unsafeWindow re-opens all of Greasemonkey's original security problems and isn't available in Chrome. It should be avoided wherever possible.*

[UserScripts & Greasemonkey: calling a website's JavaScript functions](https://stackoverflow.com/a/5006952)

Quoting an issue on Greasemonkey's Issue Tracker:

*I don't know about "not really a Greasemonkey issue" - both Tampermonkey and Violentmonkey handle this very case without problems. Not only that, but this is a breaking change that isn't mentioned in any of the blog posts. In order to work as expected with existing userscripts and to be cross-compatible with other popular userscript managers, shouldn't this be fixed?*

[Can't access variables defined in <script> tags on the actual page.](https://github.com/greasemonkey/greasemonkey/issues/2700)

## The Scripts
### Google Homepage Tweaks
  * Hides "Come here often? Make Google your homepage"
### Bulbapedia Tweaks
  * Hides the notice banner
### Twitter Tweaks
  * Hides the "Moments" button
  * Hides "Who to follow"
  * Hides "Advertise with Twitter"
  * Hides "While you were away..."
  * Hides "Live video"
### Wikia Tweaks (Work in Progress)
  * Hide Wikia main banner (Top bar)
  * Hide Notifcation dialogs
  * Hide Trending Fandom Articles
  * Hide Fan Feed
  * Hide Explore the Beautiful world of Wikia (Bottom bar)
### YouTube Disable Up Next
  * Disable "Up Next" otherwise known as AutoPlay

## Install URLS
[Google Homepage Tweaks](https://github.com/KonomiKitten/userscripts/raw/master/google-homepage-tweaks.user.js)

[Bulbapedia Tweaks](https://github.com/KonomiKitten/userscripts/raw/master/bulbapedia-tweaks.user.js)

[Twitter Tweaks](https://github.com/KonomiKitten/userscripts/raw/master/twitter-tweaks.user.js)

[Wikia Tweaks](https://github.com/KonomiKitten/userscripts/raw/master/wikia-tweaks.user.js)

[YouTube Disable Up Next](https://github.com/KonomiKitten/userscripts/raw/master/youtube-disable-up-next.user.js)
