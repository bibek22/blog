Author: Bibek Gautam
Date: 2019-05-18 10:28
Title: Fourier Series and Fourier Transform
Slug: fourier-series-and-transform
Category: Physics
Status: Draft
Tags: fourier, series, transform, physics, maths
Summary: On how fourier series and fourier series relate to each other

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  TeX: { equationNumbers: { autoNumber: "AMS" } }
});
</script>

If you're familiar with fourier series, you already know that given that a periodic function $f(x)$
satisfies a certain [conditions](https://en.wikipedia.org/wiki/Dirichlet_conditions), it can be
written as an infinite sum of sines and cosines as follow:
<div class='math-equation'>
\begin{equation}
 f(x) = a_0 + \sum_{n=1}^\infty{a_n \cos nx} + \sum_{n=1}^\infty{b_n \sin nx}
\label{eq:fseries}
\end{equation}
</div>

Euler gave this wonderful formula that relates sines and cosines to complex exponentials:

$$ e ^{ix} = \cos x + i \sin x $$

You can verify that using this formula, we can write sin and cos as follow:

$$ \sin x =  \frac{e ^{ix} - e^{-ix}}{2} $$

$$ \cos x =  \frac{e ^{ix} + e^{-ix}}{2} $$


In light of these relations, lets rewrite the fourier series in terms of complex exponentials:

<div class='math-equation'>
$$ f(x) = a_0 + \sum_{n=1}^\infty{a_n \frac{e ^{inx} + e^{-inx}}{2}} + \sum_{n=1}^\infty{b_n \frac{e ^{inx} - e^{-inx}}{2} } $$
</div>

Let's accumulate like terms and rewrite as:

<div class='math-equation'>
$$ f(x) = a_0 + \sum_{n=1}^\infty{\left(\frac{a_n + b_n}{2}\right) e^{inx}} + \sum_{n=1}^\infty{\left(\frac{a_n - b_n}{2}\right) e^{-inx}} $$
</div>

Now, let's clean up some notations. Let's redefine those constants in brackets as $c_n$ and $c_{-n}$. So, we have:
$$ f(x) = a_0 + \sum_{n=1}^\infty{c_n e^{inx}} + \sum_{n=1}^\infty{c_{-n} e^{-inx}} $$

Let's also rename $a_0$ as $c_0$ and combine all the terms in one big summation as the following:

$$ f(x) = \sum_{n=-\infty}^\infty{c_n e^{inx}} $$

Make sure you get exactly the same terms as above when you expand this new expression.

This is equivalent to the more familiar fourier series formula\eqref{eq:fseries} that we started with.

Now if the function has a period other than $2\pi$, you can go through this same process with the
fourier series in such cases and arrive at a formula that looks like this:

$$ f(x) = \sum_{n=-\infty}^\infty{c_n e^{\frac{in\pi x}{L}}} $$

Let me reiterate the big punchline of fourier series.

Just like you can add various pure harmonics of various frequencies to create wonderfully complex music, you can add pure sines and cosines of various period to get any$^\dagger$ complicated periodic functions.

What about the functions that are not periodic ? After all, Fourier transform doesn't require the
function to be periodic. If you're thinking why not try to get the Fourier series with at the limit
when $\left(-L, L\right) \to \left( -\infty, \infty \right)$, you're in the right direction.

<!
But, obviously, we've only added sines and cosines with period $\frac{n}{2\pi}$, where n = 1, 2, 3,
and so on. Those are descrete values of n, where it could really take continuous values.
!>

#### Fourier Transform

Our goal is to see the connection between fourier series to the fourier transform. Let me write the
fourier transform formula which goes like this:

$$ G(k) = \int_{-\infty}^{\infty}{f(x)e^{ikx} dx} $$


*$\dagger$ subject to Dirichlet Conditions*
