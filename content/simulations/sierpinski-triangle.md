Author: Bibek Gautam
Date: 2019-05-06 07:25
Title: Sierpinski Triangle
Slug: sierpinski-triangle
Category: Physics
Tags: physics, maths, fractals
Stylesheets: style_sim.css
inbodyjs: /js/sierpinski.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js
Summary: See how Sierpinski Triangle emerges as you go through this iterative algorithm...


This is a simple, straightforward algorithm which goes like this (if you allow me to quote
from Wikipedia):

1. Take three points(vertices) in a plane to form a triangle.  
2. Randomly select any point(tracer) inside the triangle and consider that your current position.  
3. Randomly select any one of the three vertex points.  
4. Move half the distance from your current position to the selected vertex.  
5. Plot the current position.  
6. Repeat from step 3.  


That is what I am trying to demonstrate in this post. Also, I want to get a sense of the number of
iterations it takes for a satisfactory Sierpinski Triangle looking shape to emerge.  

<span id="simulation"><span>
<button id='queenBtn'>add Tracer</button> <button id='pointBtn'>add Vertices</button>

Iterations: <data id='iterations'>0</data>i

<button id='play'>play/pause</button>
<button id='reset'>reset</button>

