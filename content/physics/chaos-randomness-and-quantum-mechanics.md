Author: Bibek Gautam
Date: 2020-02-27 12:34
Title: Randomness and Chaos
Slug: chaos-randomness-and-quantum-mechanics
Category: physics
Tags: physics,chaos, quantum mechanics, non-linear dynamics
Summary: talks about about Bernouli map

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

<img src="/images/bernoulli-map.png" width='200' class='center'/>

Now, suppose we are only interested in which of the two halves the new point
lands and not in the number itself. So, let's denote the the first half as $H$
and the other as $T$.
<img src="/images/bernoulli-map1.png" width='150' class='center'/>

As an example, let's start with $x_0 = 0.4$ and let's see how the system evolves
keeping track of only $H$ and $T$'s as it lands on a new point.
We begin with $x_0 = 0.4$ which would be $H$ and the first few strings in this
series would be as follows:

$$x_1 = 2\cdot x_0 \mod 1 = 0.8 \rightarrow T$$
$$x_2 = 1.6 \mod 1 = 0.6 \rightarrow T$$
$$x_3 = 1.2 \mod 1 = 0.2 \rightarrow H$$
$$x_4 = 0.4 \mod 1 = 0.4 \rightarrow H$$
$$x_5 = 0.8 \mod 1 = 0.8 \rightarrow T$$
$$\vdots$$

In this way, we can see the system evolves as $HTTHHTTHH$ and so on. In this
example, the system retraces itself once it hits $x_4=0.4$. 
Let's check a few random numbers. In fact, let's get a little python script to do this for us.

```python
def bernouli(x):
    for _ in range(15):
        x = 2 * x % 1
        if x <= 0.5:
            print("H", end="")
        else:
            print("T", end="")
```

```python
bernouli(0.3)
```

```text
THHTTHHTTHHTTHH
```

```python
bernouli(0.40)
```

```text
TTHHTTHHTTHHTTH
```

```python
bernouli(0.15)
```

```text
HTHHTTHHTTHHTTH
```

One can prove that if the initial point is a rational number, the system
eventually goes into a periodic orbit.

But if $x_0$ is irrational, the system never visits the same point again which implies
the pattern of H and T never repeats itself.

It is obvious that Bernouli map describes a deterministic system. Given the initial 
condition, you can figure out the state of the system at any point in the future(after
descrete time evolution) with certainty. This is unlike any stochastic system.

But, as you might have noticed this is remenescent of a stochastic system in some way.

The non-repeating of the pattern in case of irational numbers combined with the fact that
the irrational numbers densely pack real numbers (more densely, in fact, than rational numbers)
, it is possible to find a initial point in the domain $(0,1)$ such that the system evolves to give
a pattern of H and T identical to the result of any sequence of random bernouli trails.

Let's flip a coin N times. Let N = 4 just for the example. And let's say we get the following outcome:
$HTTH$
Now, the question is: could we taylor an initial point such that it produces this exact sequence in its
first four steps. The thing to realize to convince yourself of this is that for each letter added in the sequence, you half the size of possible initial conditions in the domain.

<img src="/images/bernoulli-map2.png" width='150' class='center'/>

In the diagram above, only the gray shaded portion of the domain maps to H in the next step. And if you require either H or T in the steps after that, the initial choice halves again.

So, measure of possible initial choice given a string of N characters is 
$$\Big(\frac{1}{2}\Big)^N$$

This implies, there exist points in the domain that can reproduce any result of a sequence of Bernouli trails. 

And another important thing here is that this system is sensitive to initial condition. Any error in specifying the initial condition grows exponentially. This is characteristic of a chaotic system. In particular it doubles on each step. Hence, the lyapunov exponent for Bernouli map is $\ln(2)$.

This convinces me that it's very difficult to tell apart a *stochastic* system from a system governed by chaotic non-linear but importantly *deterministic* laws.
