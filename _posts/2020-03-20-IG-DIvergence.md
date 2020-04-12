---
layout: post
title: "Divergence"
modified:
categories: Math
excerpt: "Introduction"
tags: [IG, Math, ML]
image:
  feature:
comments: true
date: 2020-03-20
---
A Divergence function D[p:q] between two points P, Q on a manifold plays a major role in information geometry. Its applications range from Machine Learning, Vision, Optimization, Information theory and Statistics. 

Let's take a simple example of the Manifold of Gaussian Distribution. A one dimensional Gaussian distribution with mean $\mu$, and sd $\sigma$, is represented by probability density function: 

It can be parameterized by  a two-dimensional parameter $\xi$ = ($\mu$, $\sigma$). If we consider all possible values of $\xi$, we get a set $M_g$ of all gaussian distributions. It can be viewed as a two dimensional manifold. M = {p(x; $\xi$)} ,where $\xi$ = ($\mu$, $\sigma$) is a coordinate system of M.
There can be various other coordinate systems with other parameters. 

In general, let's consider a manifold M, homeomorphic(Link) to R. We define a coordinate system of a Point p by $x = (x_1, x_2, ..... , x_n)$. Divergence function D[P:Q] of two points P, Q on M is denoted as 
D[x:y] where x,y denote coordinates of P and Q respectively. Divergence has the following properties :

1. D[x:y] >=0 with equality when x=y
2. D[x:y] is differentiable  and [Hessian](https://mathworld.wolfram.com/Hessian.html) with respect to x at y=x is [positive definite](https://en.wikipedia.org/wiki/Definiteness_of_a_matrix).

Divergence need not be symmetric with respect to two points. So it's not a distance. It need not follow triangular inequality either. 

### Bregman divergence
Bregman divergence or Bregman distance is a measure of distance between two points, defined in terms of a strictly convex function they form an important class of [divergences](https://en.wikipedia.org/wiki/Divergence_(statistics)). When the points are interpreted as probability distributions – notably as either values of the parameter of a parametric model or as a data set of observed values – the resulting distance is a [statistical distance](https://en.wikipedia.org/wiki/Statistical_distance). The most basic Bregman divergence is the squared Euclidean distance.

Bregman divergences are similar to metrics, but satisfy neither the triangle inequality (ever) nor symmetry (in general). However, they satisfy a generalization of the Pythagorean theorem, and in information geometry the corresponding [statistical manifold](https://en.wikipedia.org/wiki/Statistical_manifold) is interpreted as a (dually) [flat manifold](https://en.wikipedia.org/wiki/Flat_manifold). This allows many techniques of optimization theory to be generalized to Bregman divergences, geometrically as generalizations of least squares.


### f-divergence
f-divergence function $D_f$$ (P  || Q)$ that measures the difference between two probability distributions P and Q. It is defined as :

Let P and Q be two probability distributions over a space $\Omega$ such that P is absolutely continuous with respect to Q. Then, for a convex function f such that f(1) = 0, the f-divergence of P from Q is defined as
$D_{f}(P\parallel Q)\equiv \int _{{\Omega }}f\left({\frac  {dP}{dQ}}\right)\,dQ.$

The intuition is to understand divergence as an average of two probability distribution weighted by function f. f-divergences are widely used and have applications in ML, AI, statistics and optimization techniques. Some of the majorly used divergences are:

####  Kullback–Leibler divergence
K-L Divergence is a measure that explains how one probability distribution P is different from another distribution Q. Its is special case of f-divergences with function $f(t) = tlog(t)$
$D_{\text{KL}}(P\parallel Q)=\sum _{x\in {\mathcal {X}}}P(x)\log \left({\frac {P(x)}{Q(x)}}\right)$

Since it's an asymmetric measure, it can not be considered as a statistical measure of spread. It doesn’t satisfy triangle inequality. This is also a special case of Bregman divergences.

The interpretation of the KL divergence depends on the applications. In Machine learning it is the information gain when distribution P is used instead of Q. In Information theory its the relative entropy of P with respect to Q. In Statistics, its gained by revising one's beliefs from the prior probability distribution P to posterior probability distribution Q. More details can be found in [KL-divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence).

#### Total variation distance
Given two probability distributions P, Q, a natural way of defining distance between them is to take $l_1$ distance between the probability vectors :
			${\bigl \|}{P}-{Q}{\bigr \|}_{1} =\sum _{i=1}^{k}{|{p_{i}-q_{i}}}|$
The total variation distance, denoted by $\Delta(P, Q)$ is half the above quantity. For a given sigma algebra $\mathcal {F}$ It can be defined as 
			$\delta (P,Q)=\sup _{A\in {\mathcal {F}}}\left|P(A)-Q(A)\right|.$
Total Variation distance is a statistical measure and also called as statistical distance.

#### Hellinger Distance
Hellinger distance is the measure to quantify similarity between two probability distributions P and Q. It can be defined in terms of eucliden norm as 
$H(P,Q)={\frac {1}{\sqrt {2}}}\;{\bigl \|}{\sqrt {P}}-{\sqrt {Q}}{\bigr \|}_{2}$

The Hellinger distance and total variation distance can be related as : 
$H^{2}(P,Q)\leq \delta (P,Q)\leq {\sqrt {2}}H(P,Q)\,$

The Hellinger distance is a metric satisfying triangle inequality. The $\sqrt {2}$ in the definition is to ensure that $h(P, Q) ≤ 1$ for all probability distributions. It is closely related to a quantity known as Fidelity or the [Bhattacharya coefficient](https://en.wikipedia.org/wiki/Bhattacharyya_distance) of two probability distributions $F(P, Q) = \sum _{i=1}^{k}({\sqrt {p_{i}q_{i}}})$ by the relation 
$H^{2}(P,Q)=1-F(P, Q)$



#### References
1. Information geometry in optimization, machine learning and statistical inference by Shun-ichi AMARI
2. Differential Geometry derived from Divergence Functions:Information Geometry Approach - Amari

