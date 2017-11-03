// ==UserScript==
// @name          TagPro SoundPacks
// @description   Change the default sounds with packs or individual files
// @author        Ko
// @version       0.2
// @downloadURL   https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
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
// What SoundPack do you want to use?                                                 //  //
//   You can type the name of an included SoundPack (listed above, between quotes)    //  //
//   Or you can type a direct URL to a .tpsp file (between quotes)                    //  //
var SoundPack = "minimal";                                                            //  //
                                                                                      //  //
// You can replace individual sounds by pasting direct URLs to .mp3 files.            //  //
// Use the correct names, all sounds are listed below the options.                    //  //
var Custom_Sounds = {                                                                 //  //
    alertlong       :   "https://example.com/alertlong.mp3",                          //  //
};                                                                                    //  //
                                                                                      //  //
// Show credits every time you join a game:                                           //  //
var Show_Credits = true;                                                              //  //
                                                                                      //  //
////////////////////////////////////////////////////////////////////////////////////////  //
//                                                     ### --- END OF OPTIONS --- ###     //
////////////////////////////////////////////////////////////////////////////////////////////




    /*////// ALL SOUNDS OF TAGPRO FOR YOUR INFORMATION ////////

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

    /////////////////////////////////////////////////////////*/













//////////////////////////////////////
// SCROLL FURTHER AT YOUR OWN RISK! //
//////////////////////////////////////











tagpro.ready(function () {

    console.log('START: ' + GM_info.script.name + ' (v' + GM_info.script.version + ' by ' + GM_info.script.author + ')');



    function ValidURL(str) {
        var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
                                 '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
                                 '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
                                 '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
                                 '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
                                 '(\#[-a-z\d_]*)?$','i'); // fragment locater
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
        default:
            if (ValidURL(SoundPack)) SoundPack_URL = SoundPack;
            else {
                console.warn('TP-SoundPacks: no valid URL or name of an included soundpack');
                tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'No valid soundpack provided', c: "#d1a140" });
            }
            return;
    }







    function change_sounds(tpsp) {


        // add base to every URL, if the pack comes with one
        if ('base' in tpsp) {
            Object.keys(tpsp.sounds).forEach( function(snd) {
                tpsp.sounds[snd].URL = tpsp.base + tpsp.sounds[snd].URL;
            });
        }

        // Overwrite the sounds with the Custom_Sounds (in the options)
        Object.keys(Custom_Sounds).forEach( function(snd) {
            tpsp.sounds[snd] = { URL : Custom_Sounds[snd] };
        });



        // The next bit is copied from https://pastebin.com/raw/21NYcZ58.
        // Thank you; RonSpawnson, Cyanide, Seconskin, Cam and Acid Rap

        for (var snd in tpsp.sounds) {
            if (tpsp.sounds.hasOwnProperty(snd)) {
                console.log('changing sound:',snd);
                // Remove all audio sources for sound except the first
                $('audio#' + snd).find('source:gt(0)').remove();

                // Replace the first audio source with the new sound
                $('audio#' + snd).find('source').attr('src', tpsp.sounds[snd].URL);

                // Reload the sound with the new source
                $('audio#' + snd)[0].load();
                console.log('done sound:',snd);
            }
        }
    }





    function show_credits (tpsp) {


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
            change_sounds(data);
            if (Show_Credits) show_credits(data);
        })
        .fail( function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.warn( "Requesting SoundPack failed. Are you sure that the URL in the script is a direct link to a valid .tpsp file?\n\n" + err );
        });


});
