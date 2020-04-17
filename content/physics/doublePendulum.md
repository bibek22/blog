title: Simulating double pendulum
tags: physics, simulation, maths
date: 2019-05-05 12:28
category: Physics
slug: double pendulum
authors: Bibek Gautam
Stylesheets: style_sim.css
inbodyjs: /js/pendulum.js, /js/doublePendulum.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js, detectmobile.js
Summary: Chaotic system with double pendulum...

If you attach a single pendulum to another with it's fixed point being at the
mass of the later, you get a double pendulum. The strings are massless as usual.
Point mass $m1$ and $m2$ are hooked at the ends of the two pendulum. I've taken
$m_1 = 10\ Kg$ and $m_2 = 5\ Kg$ for all the examples below.
<div id='trailer' class='sketchContainer'></div>

#### Chaos
This is a simple, maybe even contrived example of a chaotic system. If even a slight difference is
introduced in two otherwise identical systems, the time evolution happens to be
drastically different for these systems. Play the demonstration below, watch
till the differences start to seem apparent and notice how wildly they diverge
from each other.

<span id='slight_1' class='sketchContainer'></span> <span id='slight_2' class='sketchContainer'></span>

<button id='playS'onclick='simPlay()'>play/pause</button>



$\dagger$ *there's a problem with two penduli above. If you've noticed it,
great! I'll try to fix this later.*
