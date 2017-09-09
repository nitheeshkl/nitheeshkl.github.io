---
author: nitheeshkl
comments: true
date: 2014-06-14 00:10:38+00:00
layout: post
link: https://klnitheesh.wordpress.com/2014/06/14/rock-paper-scissors-gtalk/
slug: rock-paper-scissors-gtalk
title: rock, paper, scissors, gtalk
wordpress_id: 14
categories:
- fun
- Tech
tags:
- gtalk
- linux
- mcabber
---

This is something I did last year and had completely forgotten about it till today. Was bored and sitting in front of my laptop wondering what to do when I remembered this.

On a similar incidence last year, I ended up writing a simple script to play rock paper scissor on gtalk. Yes I know this sounds completely hilarious, but given the circumstance and the boredom, it was a fun thing to do as a programmer.

It was a not-so-interesting day at office and was chatting with my friend, talking about our usual non-sense  until we came to the fact "...what if one of us wasn't there to talk to when the other got bored ?"...well, I said, let's write a script that replies back to the other as us. since we know each others pattern very well, it should be possible... But wait, what if, both of us setup our chat bots and one of us initiates it. what if, I initiate the first chat msg, then your bot will reply as you, then my bot will receive it and reply as me, and then your bot and then mine....and so on...a non-ending loop!, we asked each other.

As crazy as it seemed, I was bored and this thought invoked the curious geek in me. I wanted to do it and check it out, if not for anything, atleast for the fun of it. So, off to it then.




I use linux with [awesome wm](http://awesome.naquadah.org/)  and [mcabber](http://mcabber.com/) as the chat client. Both awesome and mcabber provides a scripting interface to control them and one could do some amazing things with it. Those who've seen &amp; been with me already know my gtalk and other notification integrations [1] with awesome. So all I had to do now was to write up another script for this. But then, a script that mimics me!!...what was I thinking of...I'd be competing in the turing's test then. Soon, with my senses back to normal, it was clear that I just needed to script that would reply something in a predefined pattern. For all that mattered, even a line of script that sends a char back and forth would do the job but then that would take out all the fun in it. So I turned to the most common game that kept me occupied at classes during the school days..."rock, paper, scissors". After a brief nostalgic moment, started implementing it. Simple logic, few lines of "if" and "else" statements with some pattern matching and it was done.




All that one had to do was ping me a line of chars, like, "rps= rock;". (rps=rock, paper, scissor :). With those chars, my mcabber script would parse, analyze it and reply back with msgs. Here's how it looked like.

[caption id="attachment_17" align="aligncenter" width="1008"][![mcabber with rps on gtalk](https://klnitheesh.files.wordpress.com/2014/06/screenshot-from-2014-06-15-00-24-09.png?w=1008)](https://klnitheesh.files.wordpress.com/2014/06/screenshot-from-2014-06-15-00-24-09.png) mcabber with rps on gtalk[/caption]

It soon turned out to be a fun time when my friend joined in to play along. She put it in an infinite loop and soon my gtalk was flooded with these txts. Mcabber handled it, but gtalk and the hangouts app crashed across all my devices. On the phone, tab, chrome &amp; firefox on both my laptop and my workstation. Guess we had hit the limits. Next I wanted to make it "rpsls"....Yes. Sheldon's rock, paper, scissor, lizard, spock!!" \\//,

and so, we got lost in couple of this and that and digressed away from our original intention.

Finally after many months, another boring night with nothing much to do. Sitting in front of my laptop, my friend's pic on gtalk reminded me about this rps that I had done. I must admit that it didnt seem as much exciting now as it had back then. Nevertheless, I gave it a shot to complete what I had started long ago. Quickly setup it up with my gmail and another temp account. With each mcabber client side-by-side, I initiated the first cmd "rps= rock;", and voila...was working as expected.

[caption id="attachment_18" align="aligncenter" width="1008"][![Screenshot from 2014-06-15 01-16-09](https://klnitheesh.files.wordpress.com/2014/06/screenshot-from-2014-06-15-01-16-09.png?w=1008)](https://klnitheesh.files.wordpress.com/2014/06/screenshot-from-2014-06-15-01-16-09.png) two mcabber clients playing rps with each other[/caption]

It was nice to see the two clients play with each other. Gave that whole satisfaction and happiness of coding for the fun of it. Also brought a whole range of fun ideas that I could use this for (thinking of remotely controlling my media player through gtalk..etc and what not). Guess it would have been even more fun if my friend was there online, to let the bot run on her system and mine here. To see our bots play and compete with each other while we spoke of our usual non-sense :)

Wondering what more I could do with this. Just a few days back it was officially declared that a super computer passed the turnig test. Not a bad thought eh...may be the next time I'm bored, I can work on building a client that imitates me. Would be good fun.

[1] - my mcabber integrations with awesome.
[https://github.com/nitheeshkl/radhacons](https://github.com/nitheeshkl/radhacons)
[https://github.com/nitheeshkl/kln_awesome](https://github.com/nitheeshkl/kln_awesome)




