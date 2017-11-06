// ==UserScript==
// @name          TagPro SoundPacks
// @description   Change the default sounds with packs or individual files
// @author        Ko
// @version       0.5
// @downloadURL   https://github.com/wilcooo/TagPro-SoundPacks/raw/master/tpsp.user.js
// @include       http://tagpro-*.koalabeast.com*
// @include       http://tangent.jukejuice.com*
// @include       http://*.newcompte.fr*
// @require       https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_deleteValue
// @grant         GM_log
// ==/UserScript==



    //-----------------------------------------------------------------------//
    //                                                                       //
    //       INCLUDED SOUNDPACKS:                                            //
    //           (choose one on a TagPro server's homepage)                  //
    //                                                                       //
    //           • minimal by Ko                                             //
    //                                                                       //
    //           • Cam's Sounds by Cam                                       //
    //               - source: https://redd.it/2iw5di                        //
    //                                                                       //
    //           • HarkMomis by RonSpawnsonTP                                //
    //               - source: https://redd.it/3fg1yb                        //
    //                                                                       //
    //           • Community Sounds by RonSpawnsonTP                         //
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
// Options have been moved to all TagPro servers homepages.                           //  //
//   (click on the 'SoundPacks' button)                                               //  //
                                                                                      //  //
////////////////////////////////////////////////////////////////////////////////////////  //
//                                                     ### --- END OF OPTIONS --- ###     //
////////////////////////////////////////////////////////////////////////////////////////////







//////////////////////////////////////
// SCROLL FURTHER AT YOUR OWN RISK! //
//////////////////////////////////////






var short_name = 'soundpacks';          // An alphabetic (no spaces/numbers) distinctive name for the script.
tagpro.ready(function(){ if (!tagpro.scripts) tagpro.scripts = {}; tagpro.scripts[short_name]={version:GM_info.script.version,author:GM_info.script.author};});
console.log('START: ' + GM_info.script.name + ' (v' + GM_info.script.version + ' by ' + GM_info.script.author + ')');




// Ask me (/u/Wilcooo) to add your SoundPack to this list

const INCLUDED_SOUNDPACKS = {minimal:'https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/minimal.tpsp',
                             cam:'https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/cam.tpsp',
                             harkmomis:'https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/harkmomis.tpsp',
                             community:'https://raw.githubusercontent.com/wilcooo/TagPro-SoundPacks/master/SoundPacks/community.tpsp'};

const SOUND_NAMES = ['burst', 'alert', 'cheering', 'drop', 'sigh', 'powerup', 'pop', 'click', 'explosion', 'countdown', 'friendlydrop', 'friendlyalert', 'alertlong', 'go', 'degreeup', 'teleport', 'wind', 'bing'];




var uploaded_sounds = GM_getValue('uploaded_sounds',{});









if(location.port) {        // When in a game (there is a port number after the URL)

    var SoundPack = JSON.parse(GM_getValue('SoundPacks', '{"builtin":"' + Object.keys(INCLUDED_SOUNDPACKS)[0] + '"}')).builtin;
    var CustomPack = JSON.parse(GM_getValue('SoundPacks', '{}')).url;
    var Show_Credits = true; //JSON.parse(GM_getValue('SoundPacks')).Show_Credits;
    var Show_Warnings = true; // JSON.parse(GM_getValue('SoundPacks')).Show_Warnings;


    tagpro.ready(function () {

        var tpsp = {};


        // Modify the tagpro.playSound() function to adjust the volume per sound effect

        var tp_playSound = tagpro.playSound;

        tagpro.playSound = function(snd,vol=1) {

            if (tpsp.sounds && tpsp.sounds[snd] && 'volume' in tpsp.sounds[snd])
                if (0 <= vol && vol <= 1) {
                    vol *= tpsp.sounds[snd].volume;
                } else {
                    console.warn( "TP-SoundPacks: The volume for '"+snd+"' cannot be higher than 1. Please update your .tpsp file. Tip: mp3louder.com" );
                    if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "The volume for '"+snd+"' cannot be higher than 1. Please update your .tpsp file. Tip: mp3louder.com", c: "#d1a140" });
                }

            tp_playSound(snd,vol);
        };





        var validURL = new RegExp('^(https?:\\/\\/)?'+ // protocol
                                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
                                  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                                  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                                  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator


        if (SoundPack in INCLUDED_SOUNDPACKS)
            SoundPack_URL = INCLUDED_SOUNDPACKS[SoundPack];

        else if (validURL.test(SoundPack))
            SoundPack_URL = SoundPack;

        else if (SoundPack) {
            console.warn('TP-SoundPacks: no valid URL or name of an included soundpack');
            if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'No valid URL or SoundPack provided, please check the options of this script.', c: "#d1a140" });
            return;
        }










        if (SoundPack)        process_builtin(); // change_sounds() gets called by this function

        else if (CustomPack)  process_custom();  // change_sounds() gets called by this function

        else                { process_uploaded();   change_sounds(); }










        function process_builtin() {
            $.getJSON(SoundPack_URL)
                .done( function(data){

                tpsp = data;


                if (!tpsp.hasOwnProperty('sounds')) {
                    console.error( "TP-SoundPacks: The builtin SoundPack you selected has no 'sounds' tag! Blame Ko for implementing it :)" );
                    if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "The selected builtin SoundPack has no 'sounds' tag! Blame Ko for implementing it :)", c: "#d1a140" });
                    return;
                }



                // add base to every URL, if the pack comes with one
                if ('base' in tpsp) {
                    Object.keys(tpsp.sounds).forEach( function(snd) {
                        tpsp.sounds[snd].source = tpsp.base + tpsp.sounds[snd].source;
                    });
                }


                tagpro.socket.emit('soundpacks',{tpsp : data});
                if (Show_Credits) update_credits();

                if (CustomPack)  process_custom();  // change_sounds() gets called by this function

                else           { process_uploaded();   change_sounds(); }

            })
                .fail( function( jqxhr, textStatus, error ) {

                var err_msg = textStatus + ", " + error;
                console.warn( "TP-SoundPacks: Requesting the selected built-in SoundPack failed. Are you sure that the URL in the script is a direct link to a valid (correct JSON!) .tpsp file?\n\n" + err_msg );
                if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'The selected built-in SoundPack yields an error. Blame Ko for implementing it.', c: "#d1a140" });
            });
        }










        function process_custom() {
            $.getJSON(CustomPack)
                .done( function(data){


                var sounds = tpsp.sounds || {}; // Current sounds (from the selected built-in pack, or the default TagPro sounds)

                tpsp = Object.assign({}, data);
                tpsp.sounds = sounds;

                for (var sound in data.sounds) {
                    tpsp.sounds[sound] = data.sounds[sound];
                }

                // add base to every URL, if the pack comes with one
                if ('base' in tpsp) {
                    Object.keys(tpsp.sounds).forEach( function(snd) {
                        tpsp.sounds[snd].source = tpsp.base + tpsp.sounds[snd].source;
                    });
                }

                tagpro.socket.emit('soundpacks',{tpsp : tpsp});
                if (Show_Credits) update_credits();


                process_uploaded(); change_sounds();

            })
                .fail( function( jqxhr, textStatus, error ) {

                var err_msg = textStatus + ", " + error;
                console.warn( "TP-SoundPacks: Requesting SoundPack failed. Are you sure that the URL in the script is a direct link to a valid (correct JSON!) .tpsp file?\n\n" + err_msg );
                if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: 'The provided URL did not work, you made a typo, or the .tpsp file is not valid JSON. Please look at the options of this script', c: "#d1a140" });
            });
        }



        function process_uploaded() {

            Object.keys(uploaded_sounds).forEach( function(snd) {
                if (SOUND_NAMES.indexOf(snd) > -1)
                    tpsp.sounds[snd] = { source : uploaded_sounds[snd] };
                else {
                    console.warn( "TP-SoundPacks: Something went horribly wrong. Please inform Ko and remember error-code 'penguin'" );
                    if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "'"+snd+"' is not a valid soundname. How da fuck did you upload it? This message should never be visible. Please inform Ko, because something went terribly wrong.", c: "#d1a140" });
                }
            });


        }








        function change_sounds() {

            // This function is copied from https://pastebin.com/raw/21NYcZ58.
            // Thanks to whoever of these made it; RonSpawnson, Cyanide, Seconskin, Cam and Acid Rap

            for (var snd in tpsp.sounds) {
                if (tpsp.sounds.hasOwnProperty(snd)) {
                    if (SOUND_NAMES.indexOf(snd) > -1) {

                        // Remove all audio sources for sound except the first
                        $('audio#' + snd).find('source:gt(0)').remove();

                        // Replace the first audio source with the new sound
                        $('audio#' + snd).find('source').attr('src', tpsp.sounds[snd].source);

                        // Reload the sound with the new source
                        $('audio#' + snd)[0].load();
                    } else {
                        console.warn( "TP-SoundPacks: '"+snd+"' is not a valid soundname. Please update your .tpsp file" );
                        if (Show_Warnings) tagpro.socket.emit("local:chat", { to: "all", from: "TP-SoundPacks", message: "'"+snd+"' is not a valid soundname. Please update your .tpsp file", c: "#d1a140" });
                    }
                }
            }

        }





        function update_credits () {

            var msg;
            if ('name' in tpsp) {
                msg = "SoundPack: " + tpsp.name;
                if ('author' in tpsp) msg += " by " + tpsp.author;
            } else if ('author' in tpsp) {
                msg = "SoundPack by " + tpsp.author; }
            else msg = "SoundPack unnamed";

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







    });


} else if (location.pathname == "/") {          // When on the homepage

    // Add a button to the homepage

    var button = document.createElement('a');
    button.classList.add('btn','button');
    button.style.cursor = 'pointer';
    button.id = 'SoundPacks_btn';
    button.innerHTML = 'SoundPacks<span class="sub-text">Customize the Sounds</span>';

    button.onclick = function(){GM_config.open();};      // A click opens the options

    var btn_location = $("#userscript-home")[0] || $("#play")[0] || function(){
        console.error('TP-SoundPacks: Could not place the SoundPacks button to the homepage. Did the layout change?');
        tagpro.helpers.displayError('TP-SoundPacks: Could not place the SoundPacks button to the homepage. Did the layout change?');
    };

    if (!btn_location) return;

    if ($("#userscript-home")[0]) $("#userscript-home")[0].classList.remove('hidden');

    btn_location.appendChild(button);





    // Using GM_config to make an options window

    GM_config.init( {
        'id': 'SoundPacks', // The id used for this instance of GM_config
        'title': 'SoundPacks options', // Panel Title
        'fields': {
            'builtin': {
                'section': ['Choose SoundPacks',
                            'First, choose a built-in SoundPack, or leave blank for the default TagPro sounds.'], // Appears above the field
                'label': 'Built-in SoundPack', // Appears next to field
                'labelPos': 'left',
                'type': 'select', // Makes this setting a dropdown
                'options': [''].concat(Object.keys(INCLUDED_SOUNDPACKS)), // Possible choices
                'default': Object.keys(INCLUDED_SOUNDPACKS)[0], // Default value if user doesn't change it
                'title': 'Choose one of the built-in SoundPacks', // Add a tooltip (hover over text)
            },
            'packs_info': {
                'label': 'Load info on the built-in SoundPacks', // Appears next to field
                'type': 'button', // Makes this setting a dropdown
                'title': 'Name, author and description of every SoundPack', // Add a tooltip (hover over text)
                'click': function() {
                    var this_btn = GM_config.fields.packs_info.node;

                    var packs_info = document.createElement('p');

                    this_btn.parentNode.replaceChild(packs_info, this_btn);

                    tagpro.scripts.soundpacks.included = INCLUDED_SOUNDPACKS;
                    tagpro.scripts.soundpacks.packs_info = packs_info;

                    for (var pack in INCLUDED_SOUNDPACKS) {

                        $.getJSON( INCLUDED_SOUNDPACKS[pack] )
                            .done( new Function('tpsp','(' + (function(pack){


                            var msg = '<a href=' + tagpro.scripts.soundpacks.included[pack] + ' target="_blank">' + pack + '</a>: ';


                            if ('name' in tpsp) {
                                msg += '<strong>' + tpsp.name + '</strong>';
                                if ('author' in tpsp) msg += " by " + tpsp.author;
                            } else if ('author' in tpsp) {
                                msg += 'a SoundPack by ' + tpsp.author; }
                            else msg += '???';

                            if ('description' in tpsp)
                                msg += '<br><em>' + tpsp.description + '</em>';

                            msg += '<br><br>';

                            tagpro.scripts.soundpacks.packs_info.innerHTML += msg;


                        }).toString() + ')("'+pack+'");'))

                            .fail( new Function('jqxhr', 'textStatus', 'error', '(' + (function(pack) {

                            tagpro.scripts.soundpacks.packs_info.innerHTML += '<a href=' + tagpro.scripts.soundpacks.included[pack] + ' target="_blank">' + pack + '</a>: This .tpsp file doesn\'t contain valid JSON. The SoundPack is unusable<br><br>' ;
                            var err_msg = textStatus + ", " + error;
                            console.error( "TP-SoundPacks: Requesting SoundPack failed. Are you sure that the URL in the script is a direct link to a valid .tpsp file?\n\n" + err_msg );
                        }).toString() + ')("'+pack+'");'));

                    }
                },
            },
            'url': {
                'section': ['',
                            'Next, you can link to a .tpsp (TagPro SoundPack) file to overwrite some or all of the sounds from the SoundPack above. Click \'help\' to learn how to make your own pack that you can share with everyone.'], // Appears above the field
                'label': 'Direct link to a .tpsp (TagPro SoundPack) file.', // Appears next to field
                'labelPos': 'left',
                'type': 'text', // Makes this setting a dropdown
                'size': 50,
                'title': 'Type a valid URL here', // Add a tooltip (hover over text)
            },
            'upload': {
                'section': ['',
                            'And lastly, you can upload correctly named audio files (mp3, wav, ogg). Example: \'explosion.mp3\'. For a list of names you can use, click Help.'], // Appears above the field
                'label': 'Upload custom sound files', // Appears next to field
                'type': 'button', // Makes this setting a dropdown
                'title': 'Upload audio files (Multiple at a time)', // Add a tooltip (hover over text)
                'click': function() { // Function to call when button is clicked
                    var this_btn = GM_config.fields.upload.node;
                    this_btn.type = 'file';
                    this_btn.multiple = true;


                    this_btn.onchange = function(event) {
                        this_btn.hidden = true;
                        var progress = document.createElement('progress');
                        this_btn.parentNode.insertBefore(progress, this_btn);

                        progress.max = 1;

                        for(var i = 0; i < this.files.length; i++) {
                            var name = this.files[i].name.toLowerCase();
                            var file_type = name.split('.').pop();
                            var sound = name.split('.')[0];
                            if (['wav','mp3','ogg'].indexOf(file_type) < 0) {
                                alert(name+' is not a .wav, .mp3 or .ogg file!');
                                continue;
                            }
                            if (SOUND_NAMES.indexOf(sound) < 0) {
                                alert(sound+' is not one of the TagPro sound names. For a list, click Help.');
                                continue;
                            }
                            ++progress.max;
                            var reader = new FileReader();
                            reader.onloadend = function(n, r) {
                                uploaded_sounds[n] = r.result;
                                if(++progress.value == progress.max-1) {
                                    tagpro.scripts.soundpacks.update_uploaded_list();
                                    GM_setValue('uploaded_sounds', uploaded_sounds);
                                    this_btn.parentNode.removeChild(progress);
                                    this_btn.type = 'button';
                                    this_btn.hidden = false;
                                }
                            }.bind(null, sound, reader);
                            reader.readAsDataURL(this.files[i]);
                        }

                        if (progress.max == 1) {
                            this_btn.parentNode.removeChild(progress);
                            this_btn.type = 'button';
                            this_btn.hidden = false;
                        }


                    };


                },
            },
            'delete': {
                'label': 'Delete all uploaded sounds.', // Appears next to field
                'type': 'button', // Makes this setting a dropdown
                'title': 'Click to delete all uploaded soundfiles, to use the sounds from the packs above.', // Add a tooltip (hover over text)
                'click': function() { // Function to call when button is clicked
                    uploaded_sounds = {};
                    GM_deleteValue('uploaded_sounds');
                    tagpro.scripts.soundpacks.update_uploaded_list();
                },
            },
            'help': {
                'section': ['Info',
                            'Author: Ko (/u/Wilcooo). For help, click the button below.'], // Appears above the field
                'label': 'Help & Info & Everything', // Appears next to field
                'type': 'button', // Makes this setting a button
                'title': 'Click me!', // Add a tooltip (hover over text)
                'click': function() { // Function to call when button is clicked
                    window.open('https://github.com/wilcooo/TagPro-SoundPacks');
                },
            },
        },
        'events': {
            'open': function(doc){

                var uploaded_list = document.createElement('table');
                uploaded_list.border = 1;
                uploaded_list.rules = 'all';

                var delete_btn = GM_config.fields.delete.node;
                delete_btn.parentNode.insertBefore(uploaded_list, delete_btn);

                tagpro.scripts.soundpacks.del_sound = function(sound){
                    delete uploaded_sounds[sound];
                    GM_setValue('uploaded_sounds',uploaded_sounds);
                    update_uploaded_list();
                };

                tagpro.scripts.soundpacks.update_uploaded_list = update_uploaded_list = function() {
                    uploaded_list.innerHTML = '';
                    for (var snd in SOUND_NAMES) {
                        var sound = SOUND_NAMES[snd];
                        if (sound in uploaded_sounds) {
                            var row = document.createElement('tr');
                            row.innerHTML = "<td>"+sound+"</td><td><input type=button value='delete'></td>";

                            row.children[1].children[0].addEventListener('click', new Function('('+(function(sound){
                                tagpro.scripts.soundpacks.del_sound(sound);
                            }).toString()+')("'+sound+'")'));

                            uploaded_list.appendChild(row);

                            delete_btn.disabled=false;
                        }
                    }

                    if (uploaded_list.children.length === 0) {
                        uploaded_list.innerText = 'No sound files are uploaded';
                        delete_btn.disabled=true;
                    }
                };
                update_uploaded_list();
            },
        },
    });

}
