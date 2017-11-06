# SoundPacks

The following SoundPacks come with the script, and they are saved in this folder.

* **minimal** by [*Ko*](https://reddit.com/u/Wilcooo)
* **Cam's Sounds** by [*Cam*](https://reddit.com/u/StrayCam) ([source](https://redd.it/2iw5di))
* **HarkMomis** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://redd.it/3fg1yb))
* **Community Sounds** by [*RonSpawnson*](https://reddit.com/u/RonSpawnsonTP) ([source](https://go.twitch.tv/ronspawnson/videos/all))

[*Go back*](/ "TagPro SoundPacks")

## All tags of a .tpsp file

Top-level tags:

* `"name"` [string] The name of your pack
* `"author"` [string] Your name
* `"author-link"` [string] For example, a link to your reddit profile
* `"description"` [string] This is shown when clicking the `load SoundPacks info` button in the options
* `"info-link"` [string] A link to, for example, a reddit post about your SoundPack
* `"sounds"` [array] A list of sounds that you included in your pack (you don't have to include all sound effects, the script will fall back to the default TagPro sounds)
* `"base"` [string] Part of a url that should be added in front of all sources. Don't use this when you use base64 encoded sounds (don't worry, you'll know when you do).

A sound's tags:

* `"source"` [string] A direct URL link to a sound file (`.mp3`,`.wav` or `.ogg`), or a base64 encoded sound.
* `"volume"` [int] The volume at which the sound should be played (between 0 and 1, if that's not enough, use [mp3louder.com](http://mp3louder.com))

All tags, except `sounds` and (for every sound) `source`

### An example .tpsp file
For working examples, see the .tpsp files in [this](.) folder.

    {
      "name"          :   "name-of-pack",
      "author"        :   "author-of-pack",
      "author-link"   :   "https://reddit.com/u/Wilcooo",
      "description"   :   "This is a description",
      "info-link"     :   "https://redd.it/abcdef",
      
      "sounds" : {
        "burst"         : {"source" : "https://example.com/TagProSounds/burst.mp3",
                           "volume" : 0.5 },
        "alert"         : {"source" : "https://example.com/TagProSounds/alert.mp3"},
        "cheering"      : {"source" : "data:audio/ogg;base64,bG9sIHdoeSBhcmUgeW91IGRvaW5nIHRoaXM="}
    }

Make sure to not type too much commas, use a [JSON validator](https://jsonlint.com/) to check for syntax errors.

[*Go back*](/ "TagPro SoundPacks")
