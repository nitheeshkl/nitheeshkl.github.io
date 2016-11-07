---
layout: splash_page
title: Splash
permalink: /splash/
splash:
    intro_link: about
    background: "/assets/img/intro-bg.jpg"
    ticker:
        - Engineer
        - Creator
        - "<span style='font-family: Tangerine, cursive; font-size: 90px;'>Artist</span>"
        - Traveller
        - Sportsman
intro_message:
    title: "Namaskaara."
    body: "That's hello in my native language, Kannada, if you're wondering.<br/>I'm <strong>Nitheesh</strong> btw. A software engineer by profession & and a whole lot more by passion."
---

{% include message_bar message=page.intro_message %}

<div id="about_wrapper" class="container-fluid">
<div class="container">
<div id="about">
    <h1 class="section_title text-center"> <span class="underline">About</span></h1>
    <div class="row">
    <div class="col-xs-12 col-md-4">
        <p class="section_subtitle"> <span class="underline">work</span></p>
        <p> Engineer, Linux geek & Open Source enthusiast at Intel. Currently 
            part of the internal consulting team delivering expertise in software 
            development to customers. </p>
    </div>
    <div class="col-xs-12 col-md-8">
        <p class="section_subtitle_special">
            <span class="underline">as a passionate hacker & for fun</span>
        </p>
        <p>
`-- build customized linux distros & android roms for different usecases<br/>
`-- Maintain & host apache and git servers for local usage<br/>
`-- Develop software for personal automation & use.<br/>
`-- Built usable laptops & workstations by reusing scrapped materials<br/>
`-- Mentor interns & students on their projects<br/>
`-- Provide technical consultation for others on prototyping & POCs<br/>
        </p>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-12 col-md-8">
        <p class="section_subtitle"> <span class="underline">other activities</span></p>
        <p>
            <strong>Trekking & backpacking</strong> - visit the himalayas every year
            | <strong>Badminton</strong> - pro player at the local clubs 
            | <strong>Sketching</strong> - an amateur from a long time
            | <strong>Travel</strong> - never miss a chanc to roam the world
            | <strong>Robotics</strong> - building bots for fun
        </p>
    </div>
    <div class="col-xs-12 col-md-4">
        <p class="section_subtitle"> <span class="underline">motivation</span></p>
        <blockquote class="blockquote">
            To create & customize technology for simplifying daily life
        </blockquote>
    </div>
    </div>
    <div class="row">
    <div class="col-xs-12 col-md-6">
        <p class="section_subtitle"> <span class="underline">skills</span></p>
        <div id="skills">
            <div id="words"></div>
        </div>
    </div>
    <div class="col-xs-12 col-md-6">
        <div id="slider">
        {% include carousel %}
        </div>
    </div>
    </div>
</div>
</div>
</div><!-- about section -->

<div id="portfolio_wrapper">
<div class="container">
<div id="portfolio">
    <h1 class="section_title text-center"> <span class="underline">Portfolio</span></h1>
</div>
</div>
</div>