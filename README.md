# TagPro-SoundPacks
Use SoundPacks for the increddible game of TagPro

## How to install (for people that are unfamilliar with userscripts)
1. Install the Tampermonkey extension for your browser
   + [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo "Install on Chrome") for Chrome
   + [Tampermonkey](https://www.microsoft.com/store/apps/9NBLGGH5162S "Install on Edge") for Edge
   + [Tampermonkey](https://safari.tampermonkey.net/tampermonkey.safariextz "Install on Safari") for Safari
   + [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/ "Install on Firefox") for Firefox
   + [Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/ "Install on Opera Next") for Opera Next
   + [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.uc "Install on UC Browser") for UC Browser
2. Add the [TagPro SoundPacks](https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js "Add to Tampermonkey") userscript to Tampermonkey
3. Optionally change some options
   You can change the options by changing the values in the script. There is additional information inside the script.  
   You should take a look in the [SoundPacks folder](SoundPacks "SoundPacks") in this repository for some custom SoundPacks

## How to make a custom SoundPack
SoundPacks are .tpsp files, which are written in the JSON format. They consist of URL's pointing to all individual sounds.  
A self-explanatory file can be found [here](SoundPacks/example.tpsp "SoundPacks/example.tpsp").  
To use your SoundPack, upload it somewhere, and change the 'SoundPack_URL' variable in the options of the script to point to your SoundPack.

These are all the sounds of TagPro. You don't have to use all of them, the script will fallback to the default sounds.

    burst           (when boosting)
    alert           (when other team grabs)
    cheering        (at start, when scoring and when won)
    drop            (when other team drops)
    sigh            (when other team scores, or when lost)
    powerup         (when picking a pup)
    pop             (when you or someone near pops)
    click           (when a button gets pressed or released)
    explosion       (bomb or rolling bomb)
    countdown       (3 - 2 - 1)
    friendlydrop    (when your team loses the flag)
    friendlyalert   (when your team grabs)
    alertlong       (unused)
    go              (when joining a game which is already in progress)
    degreeup        (when you get a higher degree)
    teleport        (when a portal gets used)

Ask [me](https://reddit.com/user/wilcooo "/u/wilcooo") on reddit to upload your SoundPack to this repository. This will make it easier to find for users of this script.
