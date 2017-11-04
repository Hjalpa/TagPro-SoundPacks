// ==UserScript==
// @name          TagPro SoundPacks
// @description   Change the default sounds with packs or individual files
// @author        Ko
// @version       0.3
// @downloadURL   https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
// @grant         GM_setValue
// @grant         GM_getValue
// ==/UserScript==


    //-----------------------------------------------------------------------//
    //                                                                       //
    //       INCLUDED SOUNDPACKS:  (choose one in the options below)         //
    //                                                                       //
    //           • minimal by Ko                         "minimal"           //
    //                                                                       //
    //           • Cam's Sounds by Cam                   "cam"               //
    //               - source: https://redd.it/2iw5di                        //
    //                                                                       //
    //           • HarkMomis by RonSpawnsonTP            "harkmomis"         //
    //               - source: https://redd.it/3fg1yb                        //
    //                                                                       //
    //           • Community Sounds by RonSpawnsonTP     "community"         //
    //               - source: https://go.twitch.tv/ronspawnson/videos/all   //
    //                                                                       //
    //                                                                       //
    //        Go to: https://github.com/wilcooo/TagPro-SoundPacks            //
    //        for information on how to make your own SoundPack.             //
    //        No coding knowledge required, only creativity!                 //
    //                                                                       //
    //        Than message me (/u/Wilcooo) and I'll add your                 //
    //        SoundPack to this script :)                                    //
    //                                                                       //
    //-----------------------------------------------------------------------//



////////////////////////////////////////////////////////////////////////////////////////////
//     ### --- OPTIONS --- ###                                                            //
////////////////////////////////////////////////////////////////////////////////////////  //
                                                                                      //  //
var REMOVE='THIS'; // IMPORTANT: delete this line, or the options won't work.         //  //
                                                                                      //  //
// What SoundPack do you want to use?                                                 //  //
//   You can type the name of an included SoundPack (listed above, between quotes)    //  //
//   Or you can type a direct URL to a .tpsp file (between quotes)                    //  //
var SoundPack = "minimal";                                                            //  //
                                                                                      //  //
// You can replace individual sounds by pasting direct URLs to .mp3 files.            //  //
// Use the correct names, all sounds are listed below the options.                    //  //
// alertlong is an unused sound, so I use it as an example here :)                    //  //
var Custom_Sounds = {                                                                 //  //
    alertlong       :   "https://example.com/alertlong.mp3",                          //  //
    alertlong       :   "https://example.com/alertlong.mp3",                          //  //
};                                                                                    //  //
                                                                                      //  //
// Show credits every time you join a game:                                           //  //
var Show_Credits = true;                                                              //  //
                                                                                      //  //
// Show warnings when something is wrong.                                             //  //
// With either the settings above or the .tpsp file.                                  //  //
var Show_Warnings = true;                                                             //  //
                                                                                      //  //
////////////////////////////////////////////////////////////////////////////////////////  //
//                                                     ### --- END OF OPTIONS --- ###     //
////////////////////////////////////////////////////////////////////////////////////////////




    /*////// ALL SOUNDS OF TAGPRO FOR YOUR INFORMATION ////////

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
        go              when the game starts
        degreeup        when you get a higher degree
        teleport        when a portal gets used
        wind            when close to a gravity well
        bing            when receiving a tutorial message

    /////////////////////////////////////////////////////////*/


















//////////////////////////////////////
// SCROLL FURTHER AT YOUR OWN RISK! //
//////////////////////////////////////






var short_name = 'soundpacks';          // An alphabetic (no spaces/numbers) distinctive name for the script.
tagpro.ready(function(){ if (!tagpro.scripts) tagpro.scripts = {}; tagpro.scripts[short_name]={version:GM_info.script.version,author:GM_info.script.author};});
console.log('START: ' + GM_info.script.name + ' (v' + GM_info.script.version + ' by ' + GM_info.script.author + ')');













tagpro.ready(function () {






    var saved = GM_getValue('options');   // Get the options that are saved on your computer

    // WARNING: do not actually remove the next line!!! Ignore what it says :)
    if (typeof(REMOVE) == 'string' && REMOVE == 'THIS'  &&  saved ) {   // If the options above are NOT changed, and there are options already saved on your computer

        // Use the options found on your computer
        SoundPack = saved.SoundPack;
        Custom_Sounds = saved.Custom_Sounds;
        Show_Credits = saved.Show_Credits;
        Show_Warnings = saved.Show_Warnings;

    } else {    // If the options above are changed, or there are no options on your computer

        // Save the options above to your computer, in case the script gets updated
        GM_setValue('options', { SoundPack:SoundPack, Custom_Sounds:Custom_Sounds, Show_Credits:Show_Credits, Show_Warnings:Show_Warnings });

    }







    function ValidURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                                 '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
                                 '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                                 '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                                 '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                                 '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(str);
    }


    // Ask me (/u/Wilcooo) to add your SoundPack to this list
    switch (SoundPack) {
        case "minimal":
            SoundPack_URL = "https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/minimal.tpsp";
            break;
        case "cam":
            SoundPack_URL = "https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/cam.tpsp";
            break;
        case "harkmomis":
            SoundPack_URL = "https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/harkmomis.tpsp";
            break;
        case "community":
            SoundPack_URL = "https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/community.tpsp";
            break;
        default:
            if (ValidURL(SoundPack)) SoundPack_URL = SoundPack;
            else {
                console.warn('TP-SoundPacks: no valid URL or name of an included soundpack');
                if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'No valid URL or SoundPack provided, please check the options of this script.', c: "#d1a140" });
                return;
            }
            break;
    }







    function change_sounds(tpsp=tagpro.scripts.soundpacks.tpsp) {


        if (!tpsp.hasOwnProperty('sounds')) {
            console.error( "TP-SoundPacks: Your soundpack has no 'sounds' tag! Please update your .tpsp file." );
            if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "TP-SoundPacks: Your soundpack has no 'sounds' tag! Please update your .tpsp file.", c: "#d1a140" });
            return;
        }



        // add base to every URL, if the pack comes with one
        if ('base' in tpsp) {
            Object.keys(tpsp.sounds).forEach( function(snd) {
                tpsp.sounds[snd].URL = tpsp.base + tpsp.sounds[snd].URL;
            });
        }


        const SOUND_NAMES = ['burst', 'alert', 'cheering', 'drop', 'sigh', 'powerup', 'pop', 'click', 'explosion', 'countdown', 'friendlydrop', 'friendlyalert', 'alertlong', 'go', 'degreeup', 'teleport', 'wind', 'bing'];

        // Overwrite the sounds with the Custom_Sounds (in the options)
        Object.keys(Custom_Sounds).forEach( function(snd) {
            if (SOUND_NAMES.indexOf(snd) > -1)
                tpsp.sounds[snd] = { URL : Custom_Sounds[snd] };
            else {
                console.warn( "TP-SoundPacks: You added a custom sound for '"+snd+"', but that is not a valid soundname." );
                if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "'"+snd+"' is not a valid soundname. Please check the 'Custom_Sounds' option in the scripts.", c: "#d1a140" });
            }
        });



        // The next bit is copied from https://pastebin.com/raw/21NYcZ58.
        // Thanks to whoever of these made it; RonSpawnson, Cyanide, Seconskin, Cam and Acid Rap

        for (var snd in tpsp.sounds) {
            if (tpsp.sounds.hasOwnProperty(snd)) {
                if (SOUND_NAMES.indexOf(snd) > -1) {

                    // Remove all audio sources for sound except the first
                    $('audio#' + snd).find('source:gt(0)').remove();

                    // Replace the first audio source with the new sound
                    $('audio#' + snd).find('source').attr('src', tpsp.sounds[snd].URL);

                    // Reload the sound with the new source
                    $('audio#' + snd)[0].load();
                } else if (!Custom_Sounds.hasOwnProperty(snd)) {
                    console.warn( "TP-SoundPacks: '"+snd+"' is not a valid soundname. Please update your .tpsp file" );
                    if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "'"+snd+"' is not a valid soundname. Please update your .tpsp file", c: "#d1a140" });
                }
            }
        }


        // Modify the tagpro.playSound() function to adjust the volume per sound effect

        var tp_playSound = tagpro.playSound;

        tagpro.playSound = function(snd,vol=1) {

            if (tpsp.sounds[snd] && 'volume' in tpsp.sounds[snd])
                if (0 <= vol && vol <= 1) {
                    vol *= tpsp.sounds[snd].volume;
                } else {
                    console.warn( "TP-SoundPacks: The volume for '"+snd+"' cannot be higher than 1. Please update your .tpsp file. Tip: mp3louder.com" );
                    if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "The volume for '"+snd+"' cannot be higher than 1. Please update your .tpsp file. Tip: mp3louder.com", c: "#d1a140" });
                }

            tp_playSound(snd,vol);
        };

    }





    function show_credits (tpsp=tagpro.scripts.soundpacks.tpsp) {


        var msg;
        if ('name' in tpsp) {
            msg = "SoundPack: " + tpsp.name;
            if ('author' in tpsp) msg += " by " + tpsp.author;
        } else if ('author' in tpsp) {
            msg = "SoundPack by " + tpsp.author; }
        else msg = "SoundPack unnamed";

        /* This shows the credits in chat
        tagpro.socket.emit("local:chat", {
            to: "all",
            from: "TP-SoundPacks",
            message: msg,
            c: "#d1a140",
        });
        */

        // And this shows the credits beneath the timer.
        var credit = new PIXI.Text(msg, { fontFamily:"Arial", fontSize:"8pt", fontStyle:"bold", fill:"#999999", dropShadow:true, dropShadowDistance:1 });


        credit.anchor.x = 0.5;
        credit.x = ($("#viewport").width() / 2);
        credit.y = $("#viewport").height() - 54;
        credit.alpha = 0.9;

        tagpro.ui.sprites.SoundPackCredit = new PIXI.Container();

        tagpro.renderer.layers.ui.addChild(tagpro.ui.sprites.SoundPackCredit);
        tagpro.ui.sprites.SoundPackCredit.addChild(credit);


        var org_resize = tagpro.renderer.resizeAndCenterView;

        tagpro.renderer.resizeAndCenterView = function() {
            credit.x = ($("#viewport").width() / 2);
            credit.y = $("#viewport").height() - 54;
            org_resize();
        };

    }





    // Requesting the soundpack, and call both of the above functions.
    $.getJSON(SoundPack_URL)
        .done( function(data){

            tagpro.scripts.soundpacks.tpsp = data;
            tagpro.socket.emit('soundpacks',{tpsp : data});change_sounds(data);

            change_sounds();
            if (Show_Credits) show_credits();

        })
        .fail( function( jqxhr, textStatus, error ) {

            var err_msg = textStatus + ", " + error;
            console.warn( "TP-SoundPacks: Requesting SoundPack failed. Are you sure that the URL in the script is a direct link to a valid .tpsp file?\n\n" + err_msg );
            if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'The provided URL did not work, or you made a typo. Please look at the options of this script', c: "#d1a140" });
        });

});
