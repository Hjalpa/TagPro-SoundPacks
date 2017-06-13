// ==UserScript==
// @name          TagPro SoundPacks
// @description   Change the default sounds with packs or individual files
// @version       0.1
// @downloadURL   --Unknown--
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
// @author        Ko
// ==/UserScript==
    
(function() {
    
    // #-#-# OPTIONS #-#-# //
    
            // Fill in a URL to a Soundpack. Leave blank ""; for default sounds
        Soundpack_URL = "minimal.tpsp";

            // If you want to change some sounds individually, you can do so here.
            // For sound names, see the reference list below
        Custom_Sounds {
            sound_name      :   "http://www.example.com/sound.mp3",
            another_sound   :   "http://www.example.com/another.mp3",
        }
        
        Show_Credits = true; // whether to show 'SoundPack: name by author' at the start of a game
    
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
    
    
    // Changing the sounds
    if ( burst          in Soundpack ) $("audio#burst").get(0).src=          burst;
    if ( alert          in Soundpack ) $("audio#alert").get(0).src=          alert;
    if ( cheering       in Soundpack ) $("audio#cheering").get(0).src=       cheering;
    if ( drop           in Soundpack ) $("audio#drop").get(0).src=           drop;
    if ( sigh           in Soundpack ) $("audio#sigh").get(0).src=           sigh;
    if ( powerup        in Soundpack ) $("audio#powerup").get(0).src=        powerup;
    if ( pop            in Soundpack ) $("audio#pop").get(0).src=            pop;
    if ( click          in Soundpack ) $("audio#click").get(0).src=          click;
    if ( explosion      in Soundpack ) $("audio#explosion").get(0).src=      explosion;
    if ( countdown      in Soundpack ) $("audio#countdown").get(0).src=      countdown;
    if ( friendlydrop   in Soundpack ) $("audio#friendlydrop").get(0).src=   friendlydrop;
    if ( friendlyalert  in Soundpack ) $("audio#friendlyalert").get(0).src=  friendlyalert;
    if ( alertlong      in Soundpack ) $("audio#alertlong").get(0).src=      alertlong;
    if ( go             in Soundpack ) $("audio#go").get(0).src=             go;
    if ( degreeup       in Soundpack ) $("audio#degreeup").get(0).src=       degreeup;
    if ( teleport       in Soundpack ) $("audio#teleport").get(0).src=       teleport;


})();
