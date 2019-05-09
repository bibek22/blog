Author: Bibek Gautam
Date: 2019-05-06 07:25
Title: Sierpinski Triangle
Slug: sierpinski-triangle
Category: Physics
Tags: physics, maths, fractals
Stylesheets: style_sim.css
inbodyjs: /js/sierpinski.js, /js/hexaloop.js
JavaScripts: p5.min.js, p5.dom.min.js, p5.sound.min.js
Summary: See how Sierpinski Triangle emerges as you go through this iterative algorithm...

Fractals are the geometric figures that are made up of identical parts which are themselves
identical to the whole figure. Snowflakes are one example. Even chaotic phenomenon like crystal
formation tend to give rise to these self-similar structural patterns.

[Sierpinski triangle](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle) is a fractal with a
unit shape of a (equilateral) triangle. It's named after a polish mathematician Waclaw Sierpinski.

There are copule straightforward algorithms to generate this structure. One is to start with a solid
triangle and repeatedly remove a similar triangle from the center (i.e. one with the line joining
mid-points as the sides).

But, there is another, a bit more interesting algorithm which really isn't all that trivial to see
how and why it generates Sierpinski triangle.

It is also pretty simple, straightforward and goes like this:

1. Take three points(vertices) in a plane to form a triangle.  
2. Randomly select any point(tracer) inside the triangle and consider that your current position.  
3. Randomly select any one of the three vertex points.  
4. Move half the distance from your current position to the selected vertex.  
5. Plot the current position.  
6. Repeat from step 3.  


 ** Steps 4 - 6 is done automatically, just hit the play button below. **

That is what I am trying to demonstrate in this post. Also, I want to get a sense of the number of
iterations it takes for a satisfactory Sierpinski Triangle looking shape to emerge.  

<button id='queenBtn'>add Tracer</button> <button id='pointBtn'>add Vertices</button><br><br>
<span id="simulation"><span>

Iterations: <data id='iterations'>0</data>

<button id='play'>play/pause</button>
<button id='reset'>reset</button>

### Arrowhead curve
Okay, here's a bonus. This is another way to create Sierpinski Triangle. It's called arrowhead curve. It is pretty interesting if this is the first time you're seeing this.

Once again, we start with something that looks nothing like Sierpinski Triangle. But slowly the shape
begins to appear. This essentially creates Sierpinski Triangle out of line.  

Of course,
Sierpinski Triangle is the limit of this process as you take infinite order of this recursion.
That  makes this an infinite line which, isn't all that amazing to say, I guess. Every figure can be made
with line of infinite length, or with infinite points.

But still, it's amazing to see the shape emerge.

<span id="hexaloop"> </span>  <br><br>
<button id='next'>next</button>
<button id='resetHexaLoop'>reset</button>

Try to look for pattern and see what the steps are. It's more subtle than you might think at first.

The End.

