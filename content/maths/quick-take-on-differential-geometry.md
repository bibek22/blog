Author: Bibek Gautam
Date: 2020-04-16 07:20
Title: On trying to model spacetime
Slug: quick-take-on-differential-geometry
Category: mathematics
Tags: GTR, differential geometry, physics
Summary: a very quick survey of ideas in differential geometry

*I've committed all sorts of mathematical sins with this posts. This is just
supposed to be a very very quick summary of mathematical constructions that forms the
basis of spacetime in the general theory of relativity* 

Lengths, area, volume, curvature, rate of change etc are some of the things that
we are interested to study in geometry. We have a good handle on those when the
underlying space is nice and flat Euclidean. We are interested to extend this
ability to spaces that are not Euclidean. As a physicist, we are interested to
model spacetime mathematically. And if we are Einstein, we might be looking to
allow it a curvature and hope it somehow encodes gravitation.
Differential geometry is our attempt to model such physical reality in all
mathematical rigour without being too restrictive.

At the coarsest level, spacetime is a set. It's a set of points. Let's call this
set $M$. Does a set so
defined have enough complexity to model spacetime ? Of course not. In fact,
let's see what we have with the manifold. A set is just an unordered collection of
elements.

Imagine a sheet of paper to be some kind of two dimensional spacetime. Now,
shred the sheet into pieces. That's not enough, collect all the pieces and grind
them into fine powder, finest you can imagine. Finally, give it a good shuffle
and that's what we have so far as a mathematical model of this paper sheet
spacetime. We can see that the immediate next thing we want to have is some
notion of locality and neighborhood meaning we want to be able to capture that
these points are "close" to each other.

<img src="images/paper2powder.png" class='center'/>

So, we introduce a new set and give it a fancy name **topology**. A topology on
a set is just a set which contains a whole bunch of sets as its elements, each of which
to defines a "locality". So, for each point $p \in M$, there is an entry in this
set, denoted by $\mathcal O$, which contains all the neighbour
points of $p$. Let's see how our paper sheet spacetime is doing now.

A paper spacetime equipped with a tuple $(M, \mathcal O)$, called a topological
space, is closer to what we want compared to the powder that we had earlier. But You
can still take the paper, crumple it with your hand and give it wrinkles and
creases. You can even stretch, twist and turn and do all sorts of crazy thing with it.
As long as you, don't tear it anywhere, the mathematical representation does not complain. You
could stretch it along one side and make a wire out of it. It doesn't care. It's
still the same in our model.

Now you might say, stretching and squeezing is a property that we want to have
in our model, afterall that's what we want to model gravitation with. You're
right, we wont get rid of this flexibility. But we should still be able to say
that the spacetime has this shape and curvature provided some configuration of
gravitating system. We want a notion of curvature. Curvature requires
differentiability. And if we are gonna do calculus on our manifolds, we better
have a smooth structure. And also, wrinkles in the paper sheet is problematic
(what could it mean to differentiability). How do we get rid of it?

It turns out the kind of topology that one can form given the restrictions we
have so far are so many that they resemble the spacetime as we know it too
little. We look at a special kind of them called topological manifolds.
**Topological manifolds** are topological space that can be charted similar to
how surface of earth can be charted to a map on a plane sheet of paper. So, we
require a condition that our model of spacetime be mapped continuously to
subset of $\mathbb R^n$. We, therefore, add one more information to our collection namely an
**Atlas** denoted by $\mathcal A$ which is a set of $(\mathcal U, \mathcal x)$
as elements where
$\mathcal U$ is a chart and $x$ is the map that takes portion of M to a portion
$\mathcal U \in \mathbb R^n$. We have a whole bunch of charts because a single
might not cover the entire manifold. So, we now consider only those spaces that
are locally Euclidean. And the idea is to do calculus in charts, where we have
all nice results and theorems from analysis. But, immediately one should be
concerned and ask if whatever we try to establish on the charts will be
well-defined. Because, I could just as easily go and look at another chart and
the property that we try to ascribe to the manifold because they hold on one
chart may not hold in all of them. This is very serious. We don't want the
velocity of a particle, curvature of a trajectory and so on depend on the choice
of our coordinates (which is what charts are really).

So, let's think this through. Let's say we want to establish whether a certain curve in
a manifold (this could be representative for particle trajectory) is
continuous. We can go to a chart $(\mathcal U, \mathcal x)$ and check for the continuity of the chart 
representative of the curve. But the problem is when we have another chart
$(\mathcal V, \mathcal y)$ and the two charts have some overlap. Now, in this
overlap, the chart representatives of the curve better agree on their
continuity.

<img src="images/chart transitions.png" height="200" class='center'/>

Now, there are 3 maps of interest here namely $x$, $y$, and $x\circ y^{-1}$. We
know from analysis, that a continuous curve in $\mathbb R^n$ to remain
continuous after a map, it suffices that the map be continuous. Therefore, we
know that we need $x\circ y^{-1}$ to be continuous. But, we also know that
composition of two continuous functions is continuous. So, the continuity of
chart maps and their inverses save the day and our definition of continuity that
involves going to a chart remains well defined.

That was lucky. But what about differentiability? Can we define
differentiability of curves and functions in the same way - by going to charts?
Well, you cant make the same arguments about differentiability(chart maps are
merely continuous and continuous maps may not be differentiable). So, the answer
is no. We can't define differentiability without some further restrictions on
our atlas.

And believe it or not, what we do is restrict our atlas such that chart
transition map between any pair of charts is infinitely differentiable or in
other word smooth. With that restriction, we now have a smooth manifold $(M, 
\mathcal{O, A})$ where we can do calculus.


*to be continued...*
