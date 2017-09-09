---
author: nitheeshkl
comments: true
date: 2011-05-22 18:16:00+00:00
layout: post
link: https://klnitheesh.wordpress.com/2011/05/22/restoring-grub-entries/
slug: restoring-grub-entries
title: Restoring Grub entries...
wordpress_id: 65
categories:
- Tech
tags:
- grub
- linux
---

If you’ve lost your grub entries after installing a new os, here’s a simple way of adding it back to your grub.Lets take the common situation where fedora has been installed along side ubuntu.In this case, the grub which you’l see is that of fedora, so you’l have to add the ubuntu entry into fedora’s grub.
first, boot into fedora and open the file ‘/boot/grub/menu.lst’.This is the file that has the entries which are visible when the grub is loaded.
Amongst other things, the file would have a few statements that would look like

    
    ####################################
    title Fedora (2.6.35.12-90.fc14.i686.PAE)
        root (hd0, 1)
        kernel /boot/vmlinuz-2.6.35.12-90.fc14.i686.PAE ro root=UUID=912d5b84-5c9c-4NO_LVM rd_NO_MD rd_NO_DM 
        LANG=en_US.UTF-8 SYSFONT=latarcyrheb-sun16 KEYTABLE=us rhgb
        initrd /boot/initramfs-2.6.35.12-90.fc14.i686.PAE.img
    ###################################
    


these four lines are responsible for your grub to show the title ‘fedora…’ on the grub menu and boot it. To be short, the first line denotes the name to be displayed in the grub menu.The second line provides the hard disk and partiion (in which that particular os is existing) to be set as the root in the path. The third line is the full path to the kernel image of that os and the arguments that have to be passed for booting and the fourth line is the path to the initrd image

so if you want to add ubuntu(or any other) to the grub menu, all you have to do is to provide these parameters in the fedora’s menu.lst file.These parameters will already be present in ubuntu(or any other) grub file.

mount your ubuntu partition and open the grub menu file(/boot/grub/menu.lst or grub.cfg).If the other os uses grub2 then you’l have to use grub.cfg instead of menu.lst
Since ubuntu is now shipped with grub2, grub.cfg will have entries similar to

    
    ###################################
    menuentry 'Ubuntu,  with Linux 2.6.32-28-generic' --class 
    ubuntu --class gnu-linux --class gnu --class os{
        recordfail
        insmod ext2
        set root='(hd0, 8)'
        search --no-floppy --fs-uuid --set f18af736-8d79-43e5-815e-0033f9c31ffe
        linux /boot/vmlinuz-2.6.32-28-generic root=UUID=f18af736-8d79-43e5-815e-0033f9c31ffe 
        ro crashkernel=384M-2G:64M, 2G-:128M quiet splash
        initrd /boot/initrd.img-2.6.32-28-generic
    }
    ###################################


it has a differnt format, but contains the same information

1st line is the title

in the 4th line (hd0, 8) is the harddisk and the partition in that hard disk where the os is existing

6th line is the path to that os’s kernel and its boot options7th line is the path to the initrd image of that os

so all you’ve to do now is to add these entries into fedora’s menu.lst fileIn our case, the new entry in the menu.lst file would be

    
    ###################################
    title ubuntu
        root (hd0, 7)
        kernel /boot/vmlinuz-2.6.32-28-generic root=UUID=f18af736-8d79-43e5-815e-0033f9c31ffe ro 
        crashkernel=384M-2G:64M, 2G-:128M quiet splash
        initrd /boot/initrd.img-2.6.32-28-generic
    ###################################
    


Note: in grub.cfg the partition was 8, but we use 7 in menu.lst because for this version of grub the partition number starts from 0

Now save the file and reboot. You’l have this new option in the grub menu
