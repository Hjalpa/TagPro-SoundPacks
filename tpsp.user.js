// ==UserScript==
// @name          TagPro SoundPacks
// @description   Change the default sounds with packs or individual files
// @version       0.1
// @downloadURL   https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
// @author        Ko
// ==/UserScript== 

(function() {
    
    // #-#-# OPTIONS #-#-# //
    
            // Either fill in a URL, or the name of a SoundPack.
            // For a list of SoundPacks, visit https://github.com/wilcooo/TagPro-SoundPacks/tree/master/SoundPacks
        SoundPack = "Minimal";

            // If you want to change some sounds individually, you can do so here.
            // For sound names, see the reference list below
        Custom_Base = "http://www.example.com/"
        Custom_Sounds = {
            sound_name      :   "sound.mp3",
            another_sound   :   "another.mp3",
        };
        
        Show_Credits = true; // Whether to show 'SoundPack: name by author' at the start of a game
        
    
    // #-#-# SNOITPO #-#-# //
    
    
    /* #-#-# ALL SOUNDS OF TAGPRO FOR YOUR INFORMATION #-#-# //
    
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
    
    // #-#-# NOITAMROFNI RUOY ROF ORPGAT FO SDNUOS LLA #-#-# */
    
    
    
    //--------------------------------------------------//
    //       SCROLL FURTHER DOWN ON YOUR OWN RISK       //
    //--------------------------------------------------//
    
    
    // Ask me (/u/Wilcooo) to add your SoundPack to this list
    switch (SoundPack) {
        case "Minimal":
            SoundPack = "https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/minimal.tpsp";
            break;
        default:
            SoundPack_URL = SoundPack;
    
    SoundPack = { sounds: {} };
    
    // Write .tpsp to SoundPack variable
    $.getJSON(SoundPack_URL, function(data) {
        SoundPack = JSON.parse(data);
    });


    // add base to every URL
    if ('base' in SoundPack)
        for (var snd in SoundPack.sounds)
            SoundPack.sounds.snd = SoundPack.base + SoundPack.sounds.snd;

    
    // Write Custom_Sounds to SoundPack variable (TODO)
    for (var snd in Custom_Sounds) {
        SoundPack.sounds[snd] = { URL : Custom_Base + Custom_Sounds[snd] };
    }
    
    // Changing the sounds
    if ( 'burst'            in SoundPack.sounds ) $("audio#burst").get(0).src=          SoundPack.sounds.burst.URL;
    if ( 'alert'            in SoundPack.sounds ) $("audio#alert").get(0).src=          SoundPack.sounds.alert.URL;
    if ( 'cheering'         in SoundPack.sounds ) $("audio#cheering").get(0).src=       SoundPack.sounds.cheering.URL;
    if ( 'drop'             in SoundPack.sounds ) $("audio#drop").get(0).src=           SoundPack.sounds.drop.URL;
    if ( 'sigh'             in SoundPack.sounds ) $("audio#sigh").get(0).src=           SoundPack.sounds.sigh.URL;
    if ( 'powerup'          in SoundPack.sounds ) $("audio#powerup").get(0).src=        SoundPack.sounds.powerup.URL;
    if ( 'pop'              in SoundPack.sounds ) $("audio#pop").get(0).src=            SoundPack.sounds.pop.URL;
    if ( 'click'            in SoundPack.sounds ) $("audio#click").get(0).src=          SoundPack.sounds.click.URL;
    if ( 'explosion'        in SoundPack.sounds ) $("audio#explosion").get(0).src=      SoundPack.sounds.explosion.URL;
    if ( 'countdown'        in SoundPack.sounds ) $("audio#countdown").get(0).src=      SoundPack.sounds.countdown.URL;
    if ( 'friendlydrop'     in SoundPack.sounds ) $("audio#friendlydrop").get(0).src=   SoundPack.sounds.friendlydrop.URL;
    if ( 'friendlyalert'    in SoundPack.sounds ) $("audio#friendlyalert").get(0).src=  SoundPack.sounds.friendlyalert.URL;
    if ( 'alertlong'        in SoundPack.sounds ) $("audio#alertlong").get(0).src=      SoundPack.sounds.alertlong.URL;
    if ( 'go'               in SoundPack.sounds ) $("audio#go").get(0).src=             SoundPack.sounds.go.URL;
    if ( 'degreeup'         in SoundPack.sounds ) $("audio#degreeup").get(0).src=       SoundPack.sounds.degreeup.URL;
    if ( 'teleport'         in SoundPack.sounds ) $("audio#teleport").get(0).src=       SoundPack.sounds.teleport.URL;
    
    
    if Show_Credits {
        // wait for TagPro to load
        while (typeof io == "undefined" || io.__loopback || typeof tagpro == "undefined") {}
        
        if ('name' in SoundPack) {
            msg = "SoundPack: " + SoundPack.name;
            if ('author' in SoundPack) msg += " by " + SoundPack.author;
        } else if ('author' in SoundPack) msg = "SoundPack by " SoundPack.author;
        else msg = "SoundPack unnamed";

        tagpro.socket.emit("local:chat", {
          from: null,
          message: msg,
        });
    }


})();
