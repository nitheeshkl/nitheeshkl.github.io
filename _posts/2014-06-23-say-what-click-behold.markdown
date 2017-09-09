---
author: nitheeshkl
comments: true
date: 2014-06-23 03:36:52+00:00
layout: post
link: https://klnitheesh.wordpress.com/2014/06/23/say-what-click-behold/
slug: say-what-click-behold
title: say what ?...click & behold !
wordpress_id: 106
categories:
- fun
- Tech
tags:
- android
---

So what was for fun this weekend?...well, I wrote an app to get the list of songs from my phone.
Great...what a bummer!! could it get any worse?
now, now...hold on those thoughts about me. I know it aint in anyway fun for most of you. But then, I ain't like the most of you, right! : P

Frankly, it aint much fun for me too, to sit and simply write lines of code, which is when I end up making it enjoyable for me as much as possible. If these sort of android apps is not your cup of tea, then you could be doing something more worthwhile than continuing further here.

This might be helpful for any of you coellge folks though, if you are working on android apps for a credit or two.

So then, moving on..

**the need:**

What I wanted was just a list of songs from my friends which they had on their phone/device. I could then look at the song titles and if I recognized any good ones, would go and download them to listen. I specifically wanted from my friends cause I knew the kinds of songs they listened to and at some point of time previously had listened to couple of them which I liked but unfortunately couldn't remember their titles. Me being not so good in music didn't even know the genre those songs belonged to or its album for me to search online or to describe to them and get them directly. So what now...should I search them online cluelessly ?...Heck no!...they're my friends. Obviously wouldn't mind sharing their list of songs with me. So I asked one of them for the list and, lo and behold, "how do I do that?" came the reply. I understand their point of view. Its common to share music as an mp3 or share those playlist altogether through some online services, but to send text file with list of names, now that was not so common. For me it was as simple as finding the location where all my songs were and doing this

"ls /mnt/sdcard/music/ >> songs.txt"

[english: list all the songs under music folder in the sdcard and write those names to songs.txt file]

Then mail that songs.txt to anyone.
Had to make it simple for those who couldn't understand what I meant above. So as always, time for another script/app.



**curiosity:**

I can imagine you saying by now, why couldn't I just go find some app in the android market and be done with it. well so did I. After a bit of looking around, I ended up with quite a few apps that provides features of sharing playlist. But they all seemed such big, clumsy apps, few MBs, too much for the functionality I asked for. Besides, its a pain to install such apps from the store, bear with all the ads popping up and then to look for that app to delete it. All this for just a task of a minute or two. Not what I had in mind.

Reinventing the wheel, as it may seem, might not be the brightest of things to do, but re-creating it ain't so bad a thought. Especially when the intention is to learn and have some fun.

Meanwhile, my eclipse was open and it was at the state of selecting a template for a new androidd app. The "Fullscreen Activity" template caught my attention with its blue image. For quite a while now I had been seeing it but had never used it. Well, couldn't find be a better situation to experiment with it... or in my terms have fun with it : )



**the technical part:**  [_don't bother. I understand. Skip this part if you aren't a coder_]

Android had introduced "Immersive Full-screen" mode in their API level 19 (Android 4.4). This was the blue image that caught my attention earlier. This is basically about using a new flag called "SYSTEM_UI_FLAG_IMMERSIVE" which, as described in [android docs](https://developer.android.com/training/system-ui/immersive.html), when used with "setSystemUiVisibility()" lets the app go truely "full screen". What it means is that earlier when apps went full screen, they weren't actually full screen cause the navigation bar would still be present on the screen and taking some space, but would just be in a lights-out mode. With the new immersive mode, even the navigation bar would be hidden along with status and action bars.

Using the default template adds a lot of compatibility code and makes it look a lot complex than what it actually is. Adds a systemUI helper/utility classes, compatibility across previous android versions..etc. It sure is a good thing to have for doing a highly immersive app, but mine was just as simple as it could get. So after going through the code, I stripped it all out and implemented a simple way of entering and exiting immersive mode. Below are the steps

1. Impletement a hide() and show() methods to enter and exit immersive mode using the flags as described [here](https://developer.android.com/training/system-ui/immersive.html).

2. setup a "SystemUiVisibilityChangeListener" for the decorView of the app. the onSystemUiVisibilityChange() method will be called when there is a change in immersive mode (visible/not). Use this to identify if the app has entered immersive mode or not.

3. use timers and timertask to setup any kind of dealyed tasks/animation to provide enhanced UX

This should pretty much give you the immersive functionality. Add in any other features or event handler to do any other needed tasks. In my case, few lines of java to grab a list of songs in the device using "MediaStore" api.

You can look at my [repo ](https://github.com/nitheeshkl/GetPlaylist)for more details.



**having fun:**

It seems simple now after listing out those three simple steps to get the immersive functionality working. But it took me few hours to figure that out and that's where all the fun lies.

For me coding is like being a creator. I get to create new worlds and things in it. Each program I write is like teaching a person to do some work. So I always end up having a sort of conversation while coding. It starts out something like this.


<blockquote>_Me: Hi, I'm your creator and this is your new world. Say hello to everyone here._
_Program: As you say master. "hello world"_
_Me: That's good. Let's check how you respond._</blockquote>


For an app, I check the basics. If the touch is working, orientation changes...etc


<blockquote>_Me: Looks good. Now lets get to work shall we ?_
_prg: sure. what are we going to do first ?_
_Me: well i'd want you to go and come out of immersive mode properly._
_prg: that's easy. Here, look. Is this what you wanted ?_
_Me: Yes perfect. Also, I dont want your title bar showing up._
_prg: But master, how'll the user know who I am?_
_Me: Oh dont worry about that. We'll put the name on the screen itself. We want the fullscreen mode you see._
_prg: Thats fine by me._
_Me: Now, lets give it another try shall we ?_
_prg: I'm ready. Lets go._
_Me: Ah..thats more like it. You look much better now._
_prg: Thank you master. So whats next ?_
_Me: Your name is showing up always on the main screen. I want the user to see it only when the user touches the screen. It makes more sense that way. _
_prg: What do you want me to do when i'm not showing the title on the screen ?_
_me: yes, yes...we're coming to that. I want you to go and fetch the list of songs and show that list on the screen._
_prg: Hiding the title is fine, but i dont know how to get the list. Teach me._
_me: sure..._</blockquote>


and so on...you get the point.

Its even more fun when implementing some animations and multiple threads. Its like the program truly comes alive!

But just an empty simple program isn't much fun. so ended up making some animations, gave good colors and made it a bit interactive. Had thoughts of having combinations of whites and give a ghostly appearance. When started, the app goes into fullscreen immersive mode. The user has to click and hold the screen to fetch the songs. If released and not touching the screen, it'll not fetch. Named it as "Click & behold" : D. While the songs are fetched, its shows as a list auto scrolling in the background while the message "fetching playlist" will be blinking smoothly in the foreground.

So after about an hour or so and quite a bit of conversation, I was done with it. It finally looked something like this.

1. Install the app & launch it.
2. It'll go full screen in immersive mode. If tapped on the screen will show "click&behold".
3. Click and hold to fetch the playlist. Will be shown in the background as described above.
4. E-mail the list to anyone you'd want to.
5. Will ask to uninstall. Click yes and be done with it.
[![device-2014-06-23-212952](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-212952.png?w=84)   ](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-212952.png)[![device-2014-06-23-213025](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213025.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-212952.png) [![device-2014-06-23-213050](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213050.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213050.png) [![device-2014-06-23-213119](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213119.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213119.png) [![device-2014-06-23-213100](http://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213100.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213100.png) [![device-2014-06-23-213210](http://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213210.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213210.png) [![device-2014-06-23-213242](http://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213242.png?w=84)](https://klnitheesh.files.wordpress.com/2014/06/device-2014-06-23-213242.png)












Some end up asking me, didn't I have any thing better to do instead of this?. Sure, loads in fact. Could have gone out and played, watched a movie, taken a walk outside or slept...but then, writing programs is as much fun too. Sort of like, readers with new books...I code to enjoy & have fun : )







