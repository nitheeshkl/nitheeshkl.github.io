---
author: nitheeshkl
comments: true
date: 2012-10-22 18:19:18+00:00
layout: post
link: https://klnitheesh.wordpress.com/2012/10/22/axel-a-handy-accelerator/
slug: axel-a-handy-accelerator
title: axel - a handy accelerator
wordpress_id: 43
categories:
- Tech
tags:
- download
- linux
- terminal
---

There are times when i get totally frustrated due to some networks limiting my download capabilities. Mostly my college network!!. Had to find an alternative solution but the fact that i'm almost always on cmdline using wget or curl kept me away from using any of those fancy UI based download managers which claim to accelerate downloads. Well a bit of quick googling pointed me to "axel"... a simple yet wonderful cmdline tool that does exactly what it is meant to in a most elegant way. For those curious few, here is its residence [http://axel.alioth.debian.org/ ](http://axel.alioth.debian.org/)

For those die hard fans of wget &amp; curl, axel would be an immediate replacement. Its as simple as

```bash
axel -n 10 'http://www.kernel.org/pub/linux/kernel/v3.0/linux-3.6.3.tar.bz2'
```

this starts 10 simultaneous connections to get the files from the server.

While this would suffice most of the time, another pain is during system updates when the package manager defaults to using wget. So here are a few well know tricks to make the package manager use axel rather than wget.



apt-get users:

Download this nice little script by Matt parnell from [here](http://www.mattparnell.com/linux/apt-fast/apt-fast.sh).

and then

```bash
mv apt-fast.sh /usr/bin/apt-fasht && chmod +x /usr/bin/apt-fasht
```

Give it any fancy name you want and start using it instead of apt-get.



pacman users:

use the following Xfercommand in your /etc/pacman.conf

```bash
`XferCommand = /usr/bin/axel -n 2 -v -a -o %o %u`
```

emerge users:

add the following line to your /etc/make.conf



```bash    
 FETCHCOMMAND="/usr/bin/axel -a -o /\${DISTDIR}/\${FILE} \${URI}"
 RESUMECOMMAND="/usr/bin/axel -a -o /\${DISTDIR}/\${FILE} \${URI}"
```
 


here are some samples...

[![axel1](http://klnitheesh.files.wordpress.com/2014/06/axel1.jpg?w=300)](https://klnitheesh.files.wordpress.com/2014/06/axel1.jpg) [![axel2](http://klnitheesh.files.wordpress.com/2014/06/axel2.jpg?w=300)](https://klnitheesh.files.wordpress.com/2014/06/axel2.jpg)


