title: Calculating Pi
tags: maths
date: 2019-04-27 22:28
category: physics
authors: Bibek Gautam
slug: calculate-pi-md
Stylesheets: stylepi.css
inbodyjs: /js/piCollision.js, /js/block.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js
Summary: An extremely computationally inefficient pi. Inspired from a 3Blue1Brown <a href='https://www.youtube.com/watch?v=HEfHFsfGXjs'>video </a>

If you're unsure what this is about, watch this awesome [video](https://www.youtube.com/watch?v=jsYwFizhncE) that explains everything. Code for this simulation is available on my github.  



Small mass: <data id="small">1</data> Kg<br>
Big mass: <data id="big">100</data> Kg<br>
<input class="slider" type="range" id="digits" min="0" max="7" step="1" value="1">
<div id='simulation'></div>


<b><h4 color="#550000">Collisions: <data id="counter">0</data></h4></b>
<input type="button" id="play" value="play/pause">
<input type="button" id="restart" value="restart"> <br>
