title: Calculating Pi
tags: maths
date: 2019-04-27 22:28
category: Physics
authors: Bibek Gautam
slug: calculate-pi-with-block-collisions
Stylesheets: stylepi.css
inbodyjs: /js/piCollision.js, /js/block.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js
Summary: An extremely computationally inefficient way to calculate pi. Inspired from a 3Blue1Brown <a href='https://www.youtube.com/watch?v=HEfHFsfGXjs'>video</a>...

If you're unsure what this is about, watch this awesome [video](https://www.youtube.com/watch?v=jsYwFizhncE) that explains everything. You can find the code for this simulation on [github](https://github.com/bibek22/blog).  

But let me explain the setup here anyway. So, you have two blocks on a frictionless surface free to
move in one direction.  

The small block has $1$ unit mass. The bigger block has mass of some power $n$ of $100$ units. And for
the reason that is very well explained in the above linked video, the number of total collisions
that happen before both the mass slide towards infinity never to interact again - that number comes
out to be a whole number with first $n$ digits of $\pi$.  

Small mass: <data id="small">1</data> Kg<br>
Big mass: <data id="big">100</data> Kg<br>
<input class="slider" type="range" id="digits" min="0" max="7" step="1" value="1">
<div id='simulation'></div>


<b><h4 color="#550000">Collisions: <data id="counter">0</data></h4></b>
<button id="play">play/pause</button>
<button id="restart">restart</button><br>

### On conservation of Energy
<span id='phasespace'></span>  

It's clear that the total kinetic energy in the system is conserved. To put that in equations:

$$\frac{1}{2}m_1v_2^2 + \frac{1}{2}m_2v_2^2 = E$$

where, the symbols have the usual meaning. $E$ is constant and its exact value isn't relevant for our
problem since the result (i.e. total number of collisions) is the same irrespective of the initial velocity of the bigger block.

Since, only $v_1$ and $v_2$ are changing in the above equation, it makes sense to try to plot the
equations with those as the coordinates.

You can immediately see that the equation is an ellipse. We can transform it to a circle if we
scale the coordinate axes by right amount - in particular if we take $x = \sqrt{m_1}v_1$ and
$y = \sqrt{m_2}v_2$ as the coordinates.

That is what we've  done in the diagram above. State of the system on this phase diagram, which is
represented by black dots, changes on each collision. But it always remains *on* the
circle. And we know that conservation of the energy is the reason why!

Make sure you're working with $2$ digits to see the plot on phase space. Anything more than that
would just cover up the entire circle because there are too many collisions. I've excluded those cases.

<!
#### Why is the value of E irrelevant?
Before answering that question, notice that on each collision between the blocks, the momentum of bigger block is increasing in positive x - direction.
The velocity of the bigger mass after elastic collision with the small mass is:
!>
