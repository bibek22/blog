Author: Bibek Gautam
Date: 2019-05-18 10:28
Title: Fourier Series and Fourier Transform
Slug: fourier-series-and-transform
Category: Physics
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

This is equivalent to the more familiar Fourier series formula\eqref{eq:fseries} that we started with.

Now if the function has a period other than $2\pi$, you can go through this same process with the
Fourier series in such cases and arrive at a formula that looks like this:

<div class='math-equation'>
\begin{equation}
f(x) = \sum_{n=-\infty}^\infty{c_n e^{\frac{in\pi x}{L}}}
\end{equation}
</div>

The coefficients can be determined by the following formula:

<div class='math-equation'>
\begin{equation}
 c_n = \frac{1}{2L}\int_{-\infty}^\infty{f(x) e^{\frac{-i n\pi x}{L}}} dx 
\end{equation}
</div>

Substitute $f(x)$ from $(2)$ in $(3)$ to see that above formula is indeed valid.

Now, what if the function is not periodic? How can we extend this Fourier relation to non periodic function.

To say that a function is not periodic is equivalent to saying that its period is $\infty$

So, maybe there is a way to safely let $L$ tend to $\infty$

#### Fourier Transform

Since we want to see a clear link between fourier series and fourier transform, let's look at
the fourier transform formula here.

$$ G(k) = \frac{1}{\sqrt{2 \pi}}\int_{-\infty}^{\infty}{f(x)e^{ikx} dx} $$

$G(k)$ and $f(x)$ are called the Fourier transforms of each other.


*$\dagger$ subject to Dirichlet Conditions*
