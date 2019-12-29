Author: Bibek Gautam
Date: 2019-08-18 10:28
Title: Fourier Series and Transform
Slug: fourier-series-and-transform
Category: Physics
Tags: Fourier, series, transform, physics, maths
Summary: On how Fourier series and Fourier transform relate to each other

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  TeX: { equationNumbers: { autoNumber: "AMS" } }
});
</script>

If you're familiar with Fourier series, you already know that given that a periodic function $f(x)$
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


In light of these relations, lets rewrite the Fourier series in terms of complex exponentials:

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
Indeed that is what we do when we get to Fourier transform. Instead of trying to present a textbook derivation leading to the Fourier transform, I've decided to just assert that such derivation is possible and instead talk about the physical intuition relating the transform. 

When you let $L$ approach $\infty$ as mentioned above and change the summation involved into an integral in the process, you get to the following relation.

<div class='math-equation'>
\begin{equation}
f(x) = \frac{1}{2\pi} \int_{- \infty}^{\infty} e^{ikx} dk \int_{- \infty}^{\infty} f(u) e^{-iku} du
\end{equation}
</div>

Then, we just *define*
$$ g(k) := \frac{1}{\sqrt{2 \pi}}\int_{-\infty}^{\infty}{f(x)e^{-ikx} dx} $$
And from the above relation:
$$ f(x) = \frac{1}{\sqrt{2 \pi}}\int_{-\infty}^{\infty}{f(x)e^{ikx} dk} $$

$g(k)$ and $f(x)$ are called the Fourier transforms of each other.

The function $g(k)$ here is a continuous analogue of $c_n$ that we had in Fourier Series, which you'll remember are just the coefficients of the particular frequency component n present in the function $f(x)$.

What equation (4) is basically trying to say is the following:

1. Start with a function $f(x)$
1. For every all real values of k (all possible frequencies), compute the coefficient, $g(k)$, for that particular frequency component k,
2. Take $g(k)$ "amount" of the pure frequency k for all values of 

*$\dagger$ subject to Dirichlet Conditions*
