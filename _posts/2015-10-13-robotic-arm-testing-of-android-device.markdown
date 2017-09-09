---
author: nitheeshkl
comments: true
date: 2015-10-13 08:03:46+00:00
excerpt: a low-cost usable robotic arm/platform to physically move test devices in
  different axis and motions to obtain real-time un-simulated data for performance
  &amp; UI analysis specifically for small teams
layout: post
link: https://klnitheesh.wordpress.com/2015/10/13/robotic-arm-testing-of-android-device/
slug: robotic-arm-testing-of-android-device
title: Robotic arm testing of android device
wordpress_id: 163
categories:
- fun
- Tech
tags:
- android
- customization
---

**Brief:**




The idea is to create a low-cost usable robotic arm/platform to physically move test devices in different axis and motions to obtain real-time un-simulated data for performance & UI analysis specifically for small teams.







**Need:**


The performance analysis & QA groups perform automated testing and running of workloads on android devices to collect data and analyze the device/platform. Workloads for these activities include benchmarks, test suites, custom apks...etc. for different application sub classes comprising of native, userspace, imagery, compute, games, memory & GC, sensors...etc. While most of these workloads are software automated/scripted, some, specifically for the class of games, virtual reality and sensors are complex to automate through software as these application rely on physical movement of the device. Although such motion events can be wedged into the subsystem to obtain the effective readings, the observations confer only the functionality of the features, but not the actual data such as delays, lag, instability or other such variations incurred from an actual device. Therefore the only suitable way of performing such analysis is through physical/hardware automation that actually moves the devices in required motions/directions.





**Usecase:**






consider an example of virtual reality workloads like the Google Cardboard application


[![](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/1817.edoam-image3.jpg)](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/1817.edoam-image3.jpg?attredirects=0)





. In order to capture data from all aspects of the cardboard app, the device should be moved across in 3 dimension (roll, yaw, pitch) similar to a human head. It might be okay to perform such manual action through hand or head for about 5 to 10 times, beyond which it becomes a physically daunting and injurious task to us. And when the workloads are to be 100s of times, the process demands to be automated.


 




**Existing solutions:**




there are several such robotics platforms available. Big players like Google and samsung utilize immense robotic testing to confer their devices stable. However all of these solutions are very costly ranging a few thousand dollars. When it comes down to individual teams small teams having to perform such tests ocassionally, then such industry solutions aren't feasible.




[http://www.t-plan.com/tplan_robot_mobile.html](http://www.t-plan.com/tplan_robot_mobile.html)




[https://www.youtube.com/watch?v=AYaHfyL2kx0](https://www.youtube.com/watch?v=AYaHfyL2kx0)







**My prototype:**




In order to showcase this POC it should be sufficient to build a setup in which I can place a phone in the robotic arm, control the movement of the robotic arm through my laptop keyboard and collect the data from the phone either by writing to the sdcard storage or through adb via usb. the important focus here is not about building another solution for this (as there are many solutions already as mentioned above) but is going to be in showcasing that its easy to build such a simple prototype in a very short duration & use it to perform reliable testing.







[![](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/robotic-arm.png)](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/robotic-arm.png?attredirects=0)







 




I build this prototype in a weekend. The components i purchased are as below








	
  1. arm base - [http://www.amazon.com/dp/B00NB1DFF2?psc=1](http://www.amazon.com/dp/B00NB1DFF2?psc=1) - $130

	
  2. arduino nano - [http://amzn.com/B00NLAMS9C](http://amzn.com/B00NLAMS9C) - $10

	
  3. servo driver -[ ](goog_1513328049)[http://amzn.com/B00EIB0U7A](http://amzn.com/B00EIB0U7A) - $15

	
  4. NiMh battery - [http://amzn.com/B003BHIOCU](http://amzn.com/B003BHIOCU) - $10

	
  5. basic electronic tools & components (jumper cables, soldering, voltmeter..etc) which I already had







With this h/w all setup, i wrote a simple UI control tool in linux that captures keystrokes and sends them through the laptop's serial port to arudino. I then ![](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/arm-control.png)wrote an arduino sketch that interprets this data and controls the arm's servos via the servo driver to move the arms. With a little bit of testing and tuning, the movements turned out to be smooth enough to use.







I then added an auto mode in my program that send a predefined set of motion controls to the arduino that makes the arm move accordingly. with this i could make the arm repeat the defined motions at repeated intervals and gather data.




 




In the end, after spending $200 and two days, i had this 




1. manual mode to control the arm movements through up, down, left, right arrow keys and a, s, d, w keys.




2. define a path of motion for a corresponding case and run this repeatedly in auto mode







<iframe width="560" height="315" src="https://www.youtube.com/embed/63n9y7ZWCfM" frameborder="0" allowfullscreen></iframe>





 




**Next plans:**




multi axis motion is just one of the usecase. going further, i intend to attach a touch stylus to the front of the arm and perform controlled precise touch gestures to a device placed in front of the arm. 




The solution should be such that, given the device screen size and placed at a fixed distance from the robotic arm, it should be possible to use monkey runner or any such test automation software to send specific touch (x,y) co-ordinates to the arm and the arm will move precisely to perform that touch or long touch actions on the device.




 




**Other hacks:**




Now that i have a base platform through which i can control the movements, i should be able![](https://sites.google.com/a/intel.com/kln/ideas/robotic-arm-testing-of-android-device/arm-hackathon.png) to fix a camera to the arm and with real time image tracking (like OpenTld [http://www.gnebehay.com/tld/](http://www.gnebehay.com/tld/)) i should be able to make the robotic arm move fluidly and track the person/object moving in front of it. Add in a bit of sound/speed output to it and it would become super fun :)







Me & my friend usually go star gazing and take photos. It would be awesome to have this setup track the stars or moon and record the video/photos as they move across the sky !
