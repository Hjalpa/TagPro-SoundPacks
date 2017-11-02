# TagPro-SoundPacks
Use SoundPacks for the increddible game of TagPro

## How to install (for people that are unfamilliar with userscripts)
1. Install the Tampermonkey extension for your browser if you haven't already
   + [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo "Install on Chrome") for Chrome
   + [Tampermonkey](https://www.microsoft.com/store/apps/9NBLGGH5162S "Install on Edge") for Edge
   + [Tampermonkey](https://safari.tampermonkey.net/tampermonkey.safariextz "Install on Safari") for Safari
   + [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/ "Install on Firefox") for Firefox
   + [Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/ "Install on Opera Next") for Opera Next
   + [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.uc "Install on UC Browser") for UC Browser
2. Add the [TagPro SoundPacks](https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js "Add to Tampermonkey") userscript to Tampermonkey
3. Optionally change some options
   You can change the options by changing the values in the script. There is additional information inside the script.
   For example, you can choose what soundpack you want to use.

## How to make a custom SoundPack
SoundPacks are .tpsp files, which are written in the JSON format. They consist of URL's pointing to all individual sounds.  
An example can be found[here](SoundPacks/Minimal.tpsp "SoundPacks/Minimal.tpsp"). It should be self-explanatory. 
To use your SoundPack, upload it somewhere, and change the 'SoundPack' option in the script to a direct URL to the .tpsp file.

These are all the sounds of TagPro. You don't have to use all of them, the script will fallback to the default sounds.

    burst           (when boosting)
    alert           (when other team grabs)
    cheering        (at start, when scoring and when your team wins)
    cheering        (at start, when scoring and when your team wins)
    drop            (when other team drops)
    sigh            (when other team scores, or when lost)
    powerup         (when picking a pup)
    pop             (when you or someone near pops)
    click           (when a button gets pressed or released)
    explosion       (bomb or rolling bomb)
    countdown       (3 - 2 - 1, it's important to get the timing right with this one)
    friendlydrop    (when your team loses the flag)
    friendlyalert   (when your team grabs)
    alertlong       (unused, as far as I know)
    go              (when joining a game which is already in progress)
    degreeup        (when you get a higher degree)
    teleport        (when a portal gets used)

Ask [me](https://reddit.com/user/wilcooo "/u/wilcooo") on reddit to upload your SoundPack to this repository and to embed it in the script.
