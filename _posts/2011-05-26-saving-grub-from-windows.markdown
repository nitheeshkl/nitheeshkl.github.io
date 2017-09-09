---
author: nitheeshkl
comments: true
date: 2011-05-26 18:43:59+00:00
layout: post
link: https://klnitheesh.wordpress.com/2011/05/26/saving-grub-from-windows/
slug: saving-grub-from-windows
title: saving grub from windows
wordpress_id: 53
categories:
- Tech
tags:
- grub
- linux
---

lost your grub after installing windows? here is a simple way of getting it back.

[note: assuming windows being installed on top of ubuntu(using grub2) ]

1: boot from a live cd and open a terminal

2: sudo fdisk -l

this will show the partitioin table. Here is my partition table

    
    Device     Boot   Start       End       Blocks     Id  System
    /dev/sda1         63          771119      385528+    de  Dell Utility
    /dev/sda2   *     772096      105629695   52428800   83  Linux
    /dev/sda4         105631722   625141759   259755019   f  W95 Ext’d (LBA)
    /dev/sda5         105631744   315355949   104862103   7  HPFS/NTFS
    /dev/sda6         315356013   561134384   122889186   7  HPFS/NTFS
    /dev/sda7         621142016   625141759   1999872    82  Linux swap / Solaris
    /dev/sda8         561134448   621137159   30001356   83  Linux
    


3: mount the linux partition on which you want install the grub (sda8 in my case)

```bash    
    $ sudo mount /dev/sda8 /mnt/
    $ sudo mount --bind /dev /mnt/dev
    $ sudo mount --bind /proc /mnt/proc
```


4: Now chroot into this environment

```bash
   $ sudo chroot /mnt
```

[optional]if you want to change any default setting like timeout optiions... then look at /etc/default/grub

5: grub install

```bash
[root#] grub-install /dev/sda
```
[ in case of error do #grub-install --recheck /dev/sda ]

6: now unmount and reboot the system.

```bash
    [root#] exit
    $ sudo umount /mnt/dev
    $ sudo umount /mnt/proc
    $ sudo umount /mnt
    $ sudo reboot
``` 



