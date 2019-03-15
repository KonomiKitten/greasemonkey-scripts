# Userscripts
A collection of Userscripts to make Browsing better

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

[Can't access variables defined in \<script\> tags on the actual page.](https://github.com/greasemonkey/greasemonkey/issues/2700)

## The Scripts

### Bulbapedia Tweaks
  * Hides the notice banner

### Google Homepage Tweaks
  * Hides "Come here often? Make Google your homepage"

### Reddit Tweaks
  * Hide visit new reddit
  * Restyle color fair back to normal flair

### Twitter Tweaks
  * Hides the "Moments" button
  * Hides "Who to follow"
  * Hides "Advertise with Twitter"
  * Hides "While you were away..."
  * Hides "Live video"

### Twitter Mobile Tweaks
  * Hides "Who to follow"

### Wikia Tweaks
  * Hide Trending Fandom Articles
  * Hide Fan Feed
  * Hide and pause videos

### YouTube Tweaks
  * Hide payed video advertisements

### YouTube Disable Up Next
  * Disable "Up Next" otherwise known as AutoPlay

## Install URLs
[Bulbapedia Tweaks](https://github.com/konomikitten/userscripts/raw/master/bulbapedia-tweaks.user.js)

[Google Homepage Tweaks](https://github.com/konomikitten/userscripts/raw/master/google-homepage-tweaks.user.js)

[Reddit Tweaks](https://github.com/konomikitten/userscripts/raw/master/reddit-tweaks.user.js)

[Twitter Tweaks](https://github.com/konomikitten/userscripts/raw/master/twitter-tweaks.user.js)

[Wikia Tweaks](https://github.com/konomikitten/userscripts/raw/master/wikia-tweaks.user.js)

[YouTube Tweaks](https://github.com/konomikitten/userscripts/raw/master/youtube-tweaks.user.js)

[YouTube Disable Up Next](https://github.com/konomikitten/userscripts/raw/master/youtube-disable-up-next.user.js)
