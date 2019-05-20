Author: Bibek Gautam
Date: 2019-05-19 20:29
Title: Dijkstra's Algorithm and Efficient path finding
Slug: dijkstra's-algorithm-and-efficient-path-finding
Category: Programming
Tags: dijkstra's, algorithm, programming, project euler
Status: Draft
Summary: A particularly fun problem and way to solve it using dijkstra's algorithm

I used to work on the problems from this website called Project Euler and this is one of the problem
I found particularly fun. So the problem goes like this:

You have a inverted tree structure as so

```
   3
  7 4
 2 4 6
8 5 9 3
```

And by starting at the top you have to find a path that has the least sum along the way till you
reach the bottom. You can pick either left or right on every new row.

So, in this example, the path have a minimum sum of 23.
That is, 3 + 7 + 4 + 9 = 23.

Now the problem is to find such minimum path that you can achieve on a similiar tree structure but
with 100 rows.

This is one of those problems that you can't brute force your way out. On every level down you have
2 choice.

So, in all, that's $2^99$ choices. To quote the problem page itself - "If you could check one trillion
($10^{12}$) routes every second it would take over twenty billion years to check them all."


