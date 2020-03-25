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
A divergence Function D[p:q] between two points P, Q on a manifold plays a major role in information geometry. Its applications range from Machine Learning, Vision, Optimization, Information theory and Statistics. 

Let's take a simple example of the Manifold of Gaussian Distribution. A one dimensional Gaussian distribution with mean $\mu$, and sd $\sigma$, is represented by probability density function: 

It can be parameterized by  a two-dimensional parameter $\xi$ = ($\mu$, $\sigma$). If we consider all possible values of $\xi$, we get a set $M_g$ of all gaussian distributions. It can be viewed as a two dimensional manifold. M = {p(x; $\xi$)} ,where $\xi$ = ($\mu$, $\sigma$) is a coordinate system of M.
There can be various other coordinate systems with other parameters. 

In general, let's consider a manifold M, homeomorphic(Link) to R. We define a coordinate system of a Point p by $x = (x_1, x_2, ..... , x_n)$. Divergence function D[P:Q] of two points P, Q on M is denoted as 
D[x:y] where x,y denote coordinates of P and Q respectively. Divergence has the following properties :

1. D[x:y] >=0 with equality when x=y
2. D[x:y] is differentiable  and [Hessian](https://mathworld.wolfram.com/Hessian.html) with respect to x at y=x is [positive definite](https://en.wikipedia.org/wiki/Definiteness_of_a_matrix).

Divergence need not be symmetric with respect to two points. So it's not a distance. It need not follow triangular inequality either. 
