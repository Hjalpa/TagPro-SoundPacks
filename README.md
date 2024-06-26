*Note: This script (like my other scripts) has been moved to [GreasyFork](https://greasyfork.org/scripts/34785-tagpro-soundpacks). This repo is now only used for this documentation and for hosting the sound files.*

# TagPro-SoundPacks
Use SoundPacks for the increddible game of TagPro

The following SoundPacks come with the script, but you can add your own individual sounds or SoundPacks!

* **minimal** by [*Ko*](https://reddit.com/u/Wilcooo)
* **Cam's Sounds** by [*Cam*](https://reddit.com/u/StrayCam) ([source](https://redd.it/2iw5di))
* **HarkMomis** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://redd.it/3fg1yb))
* **Community Sounds** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://go.twitch.tv/ronspawnson/videos/all))
* **A man's voice** by [*Ko*](https://reddit.com/u/Wilcooo)
* **Animals** by [*Ko*](https://reddit.com/u/Wilcooo)

## How to install (for people that are unfamilliar with userscripts)
1. Install the Tampermonkey extension for your browser if you haven't already
   + [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo "Install on Chrome") for Chrome
   + [Tampermonkey](https://www.microsoft.com/store/apps/9NBLGGH5162S "Install on Edge") for Edge
   + [Tampermonkey](https://safari.tampermonkey.net/tampermonkey.safariextz "Install on Safari") for Safari
   + [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/ "Install on Firefox") for Firefox
   + [Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/ "Install on Opera Next") for Opera Next
   + [Tampermonkey](https://play.google.com/store/apps/details?id=net.tampermonkey.uc "Install on UC Browser") for UC Browser
2. Get the [TagPro SoundPacks](https://greasyfork.org/en/scripts/34785-tagpro-soundpacks "Add to Tampermonkey") script from GreasyFork
3. You can change the options on the homepage of your TagPro server or on the scoreboard in-game (click the speaker icon)

## How to replace sounds with your own sound files
1. Make or find `.mp3`/`.wav`/`.ogg` sound(s) and download them to your computer. You don't have to find sounds for every effect, because by default the sounds of the selected built-in SoundPack will be used.
2. Rename them with one of the names below ( keep the extension, for example: `alertlong.mp3`)
3. In the options of the script (on the homepage of the TagPro server) you can upload your sounds.

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

From version **0.6.0** the following extra sounds will also be able to be added to a soundpack (or uploaded via the options)

        allchat         receiving or sending a chat message
        teamchat        for teamchats
                           if not present, 'allchat' is used instead
        groupchat       messages from members of your group
                           if not present, 'allchat' is used instead
        system          system messages like 'Thanks for switching...' or 'Since there aren't many players...'
                           if not present, 'allchat' is used instead
        mod             messages sent by a mod
                           if not present, 'system' is used instead
        playerleft      when a player leaves
                           if not present, 'system' is used instead
        playerjoined    when a player joins
                           if not present, 'system' is used instead
        playerswitched  when a player switches
                           if not present, 'system' is used instead
        afk             when you are seconds away from getting kicked
        honk            replaces the sound used in the 'TagPro Honk' userscript
                           note: 'TagPro honk' version 0.5 is required!

## How to make a custom SoundPack (that you can easily share with others)
1. Make or find `.mp3`/`.wav`/`.ogg` sounds and upload them somewhere on the internet (for example on [this site](https://vocaroo.com/?upload), or in a GitHub repo). *Alternatively: if you know how to, you can encode the sounds to base64*
2. Write a .tpsp file, which is a SoundPack written in the JSON format. Not all sounds have to be included, as the userscript will fall back to the default sounds. Examples of .tpsp files can be found [here](SoundPacks "SoundPacks").
3. Upload the .tpsp file somewhere, or copypaste it to [Myjson](http://myjson.com). Now you (or anybally else) can use your SoundPack by typing its direct URI in the options of the userscript.
4. [Ask me on reddit](https://reddit.com/user/hjalpa "/u/hjalpa") to upload your SoundPack to this repository and to embed it in the script! Thanks for contributing :)
