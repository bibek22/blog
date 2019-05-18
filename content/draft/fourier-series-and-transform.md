Author: Bibek Gautam
Date: 2019-05-18 10:28
Title: Fourier Series and Transform
Slug: fourier-series-and-transform
Category: Physics
Tags: fourier, series, transform, physics, maths
Status: Draft
Summary: On how fourier series and fourier series relate to each other


If you're familiar with fourier series, you already know that given a function $f(x)$ satisfies a
certain [conditions](https://en.wikipedia.org/wiki/Dirichlet_conditions), it can be written as an infinite sum of sines and cosines as follow:

$$ f(x) = a_0 + \sum_{n=1}^\infty{a_n \cos nx} + \sum_{n=1}^\infty{b_n \sin nx} $$

Euler gave this wonderful formula that relates sines and cosines to complex exponent:

$$ e ^{ix} = \cos x + i \sin x $$

You can verify that using this formula, we can write sin and cos as follow:

$$ \sin x =  \frac{e ^{ix} - e^{-ix}}{2} $$

$$ \cos x =  \frac{e ^{ix} + e^{-ix}}{2} $$


In light of these relations, lets rewrite the fourier series in terms of complex exponentials:

$$ f(x) = a_0 + \sum_{n=1}^\infty{a_n \frac{e ^{inx} + e^{-inx}}{2}} + \sum_{n=1}^\infty{b_n \frac{e ^{inx} - e^{-inx}}{2} } $$

Let's accumulate like terms and rewrite as:

$$ f(x) = a_0 + \sum_{n=1}^\infty{\left(\frac{a_n + b_n}{2}\right) e^{inx}} + \sum_{n=1}^\infty{\left(\frac{a_n - b_n}{2}\right) e^{-inx}} $$

Now, let's clean up the notations a bit. Let's redefine those terms in brackets as $c_n$ and $c_{-n}$. So, we have:
$$ f(x) = a_0 + \sum_{n=1}^\infty{c_n e^{inx}} + \sum_{n=1}^\infty{c_{-n} e^{-inx}} $$

Let's also rename $a_0$ as $c_0$ and combine all the terms in one big summation as the following:

$$ f(x) = \sum_{n=-\infty}^\infty{c_n e^{inx}} $$

Make sure you get exactly the same terms as above when you expand this new expression.

This is equivalent to the more familiar fourier series formula that we started with.

Let me reiterate the big punchline here.

Just like you can add various pure harmonics of various frequencies to create wonderfully complex music, you can add pure sines and cosines of various period to get any$^\dagger$ complicated functions.

But, obviously, we've only added sines and cosines with period $\frac{n}{2\pi}$, where n = 1, 2, 3,
and so on. Those are descrete values of n, where it could really take continuous values.

#### Fourier Transform

Our goal is to see the connection between fourier series to the fourier transform. Let me write the
fourier transform formula which goes like this:

$$ G(k) = \int_{-\infty}^{\infty}{f(x)e^{ikx} dx} $$


*$\dagger subject to Dirichlet Conditions$*
