title: Simulating double pendulum
tags: physics, simulation, maths
date: 2019-05-05 12:28
category: physics
slug: double pendulum
authors: Bibek Gautam
Stylesheets: style_sim.css
inbodyjs: /js/pendulum.js, /js/doublePendulum.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js, detectmobile.js
Summary: Chaotic system with double pendulum...

Double pendulum is just two simple pendulum attached on end. The strings are massless as usual. With
point mass $m1$ and $m2$ being at the ends of the two pendulum.
<div id='trailer' class='sketchContainer'></div>

#### Chaos
This is a simple, maybe even contrived example of a chaotic system. If even a slight difference is
given in otherwise identical two systems, the time evolution is drastically different for these
systems. As seen in this one below  

<span id='slight_1' class='sketchContainer'></span> <span id='slight_2' class='sketchContainer'></span>

<button id='playS'onclick='simPlay()'>play/pause</button>


As you can see, even though the initial configurations are identical as far as we can tell, as the
time progresses, these systems have wildly different configurations.  

This is amazing!
