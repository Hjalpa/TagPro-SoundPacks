# TagPro-SoundPacks
Use SoundPacks for the increddible game of TagPro

The following SoundPacks come with the script, but you can add your own individual sounds or SoundPacks!

* **minimal** by [*Ko*](https://reddit.com/u/Wilcooo)
* **Cam's Sounds** by [*Cam*](https://reddit.com/u/StrayCam) ([source](https://redd.it/2iw5di))
* **HarkMomis** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://redd.it/3fg1yb))
* **Community Sounds** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://go.twitch.tv/ronspawnson/videos/all))

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

## How to replace sounds with your own .mp3 files
1. Make or find .mp3 sounds and upload them somewhere on the internet if they aren't already (for example on [Vocaroo](https://vocaroo.com/?upload)).  Make sure that they are on a website that provides a direct link URL (often ending in .mp3) to your sounds. You may find that URL just by right-clicking the download button and `Open audio on a new tab` or `Copy download URL` or similar.
2. In the userscript, add all those URLs to the Custom_Sounds option. Make sure to type the right names in front of them (listed below).

These are all the sounds of TagPro. You don't have to use all of them, the script will fallback to the default sounds.

        burst           when boosting
        alert           when other team grabs
        cheering        at start, when scoring and when won
        drop            when other team drops
        sigh            when other team scores, or when lost
        powerup         when picking a pup
        pop             when you or someone near pops
        click           when a button gets pressed or released
        explosion       bomb or rolling bomb
        countdown       3 - 2 - 1  (It's important to get the timing right with this one)
        friendlydrop    when your team loses the flag
        friendlyalert   when your team grabs
        alertlong       unused (as far as I know)
        go              when joining a game which is already in progress
        degreeup        when you get a higher degree
        teleport        when a portal gets used
        wind            when close to a gravity well
        bing            when receiving a tutorial message

## How to make a custom SoundPack (that you can easily share with others)
1. Make or find .mp3 sounds and upload them somewhere on the internet (for example in a GitHub repo).
2. Write a .tpsp file, which is a SoundPack written in the JSON format. It should contain direct links to all of your mp3 files. Not all sounds have to be included, as the userscript will fall back to the default sounds. An example of a .tpsp file can be found [here](SoundPacks/minimal.tpsp "SoundPacks/minimal.tpsp"). It should be self-explanatory.
3. Upload the .tpsp file somewhere too. Now everyone can use your SoundPack by typing its link in the options of the userscript.
4. Ask [me](https://reddit.com/user/wilcooo "/u/wilcooo") on reddit to upload your SoundPack to this repository and to embed it in the script.
