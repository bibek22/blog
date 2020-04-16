Author: Bibek Gautam
Date: 2020-04-12 08:34
Title: g<sup>ab</sup> is not an inverse of g<sub>ab</sub>
Slug: metric-tensor
Category: physics
Tags: physics, differential geometry, GTR
Summary: Brief note on metric tensors

We would like to have a notion of length in our smooth manifolds. Maybe we'd
like to have a notion of angles between vectors in $T_pM$. In a smooth manifold
with connection $(M, \mathcal O, \mathcal A, \mathrm \nabla)$, we don't have enough structure to talk about those things.
We could introduce norm to define lengths of vectors. Similarly, we could introduce
inner product to talk about angles. But we need a metric to talk about length
in position space. Metric is an extra structure we provide, on top of a smooth
manifold, in order to be able to talk about these things.

A Metric tensor g on a smooth manifold is a (0, 2) tensor field ie.

$${g_{ab}}:{\Gamma (TM) \times \Gamma (TM)}\rightarrow{\mathbb R}$$

satisfying:

1. Symmetry
$$g(X, Y) = g(Y, X) \qquad \forall X, Y \in TM$$
2. Non-degeneracy  
What this says, in essence, is that an 'inverse' exists. But as the title
suggests, we are going to find out why it doesn't make sense to call it an inverse.
From linear algebra, we know a matrix should be non-singular for it to have an
inverse. That implies, diagonal entries should all be non-zero in the matrix
obtained after diagonalization. Equivalently, all the eigenvalues should be
non-zero.  Also equivalently one could say the rank of the matrix is equal to
its dimension.
In manifold way of speaking, one could also say that so called musical map
exists. But that isn't any more insightful.


The inverse of $g_{ab}$ obtained in the way of matrix inversion denoted by
$g^{ab}$ is a (2,0) tensor which we know is a multilinear map as such

$${g^{ab}}:{\Gamma (T^*M) \times \Gamma (T^*M)}\rightarrow{\mathbb R}$$

But we expect the inverse of a map to be defined from co-domain to domain of the
map itself. So, as we see a (2,0) tensor, $g^{ab}$ is an example of which, fails to
comply to that definition.

#### Eigenvalues and Signature
We've seen eigenvalues of matrix in linear algebra. Since a metric tensor can
also be represented in a matrix form, do we also have eigenvalues for metric
tensor? That's a curious question to ask.

Let's investigate.

Let $A^i_j$ be a (1,1) tensor ie.

$${A^i_j}:{\Gamma (T^*M) \times \Gamma (TM)}\rightarrow{\mathbb R}$$

But, we could still feed it a single vector: $A^i_j v^j$ which we expect to be a
vector.

So, it makes sense to try and solve the eigenvalue equation:

$$ A^i_j v^j  = \lambda v^i $$

But what about a (0,2) tensor?

We could feed a vector to a (0,2) tensor, lets take $g_{ij}$ for example. But
$g_{ij} v^j$ would be a co-vector.

$$ g_{ij} v^j  = \lambda v^i (?) $$

So, we can't really talk about eigenvalues of metric tensor.

However, there's nothing stopping us from diagonalizing the matrix
representation by going to the right basis where let's say we get the diagonal
entries $\lambda_1, \lambda_2, \cdots, \lambda_n$. These could be any real
value at a point $p \in M$. But, there's a nice theorem which allows you to
rescale the parameter of curves in the manifold without worrying about the
lengths of the curve. So, the nice thing is that we can scale away these
$\lambda$'s upto their signs. Therefore, the diagonal entries could be reduced
to 1's, -1's and 0s.

If $p$ and $q$ are the number of 1's and -1's in the diagonal entries, $(p,q)$ is
defined as the signature of the metric at that point. And the statement is that
this signature is well-defined with respect to the choice of charts.
