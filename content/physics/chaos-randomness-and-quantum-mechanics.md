Author: Bibek Gautam
Date: 2020-02-27 12:34
Title: Chaos, Randomness, and Quantum Mechanics
Slug: chaos-randomness-and-quantum-mechanics
Category: physics
Tags: physics,chaos, quantum mechanics, non-linear dynamics
Summary: Some thoughts on chaos and randomness

Status: Draft

A system is said to be chaotic if it is highly sensitive to initial condition.
Double pendulum is a classical example. Very little uncertainty or error in the
initial condition gets amplified exponentially to be as large as the system
size itself. A dynamical variable which is governed by such chaotic non linear
dynamics looks very 'random'. We are going to explore more on this in this post.

Let's suppose we have a variable x and a prescribed rule of evolution of this
variable which goes as follows

$$ x_1 =  f(x_0) = 2x\textrm{ mod }1 \qquad x \in [0, 1]$$ 

Unlike differential dynamics, where system evolves in continuous time, what we
have above is a descrete time dynamics, also known as maps. System maps from
one state to another in descrete time steps as $x_0 \rightarrow x_1 \rightarrow x_2 \rightarrow \ldots$
and so on. The example above is called the **Bernoulli Map**.

You can plug in a few numbers and see that the range of the map is $[0,1]$ and
the map itself is discontinuous at 0.5 above which mod 1 trims off the integer portion.

<img src="/images/bernoulli-map.png" width='200'/>
