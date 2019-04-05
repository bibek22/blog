Author: Bibek Gautam
Date: 2019-04-04 22:41
Title: Lazy Evaluation in Python
Slug: lazy-evaluation-in-python
Category: Programming
Tags: python, programming
Summary: I talk about lazy evaluation and use it to generate infinite list of primes.

### Lazy evaluation
Say, I wrote a program that generates fibonacci numbers. I could write a loop keeping in memory last
two fibonacci numbers and returning the new one as the sum of last two. We've all seen this.
```python3
last = 0
secondlast = 0
while (True):
    next = last + secondlast
    secondlast = last
    last = next
    print(next)
```

This gives a 'infinite' list of fibonacci numbers. But the problem is this essentially useless as it is.
I'd like it to stop after the evaluation of each fibonacci number so that I can do some other complicated thing in some other
function.  
The answer to this is lazy evaluation. Generating the next number only when we *need* it
and yet maintaining this kind of loop structure.

### Prime Generator
Let's do it the less efficient way first. We use the definition of prime. A number must have only
$1$ and $n$ itself as a factor to be a prime. To that extent, we define a function that returns
factors:
```python3
def fact(n):
    return [x for x in range(1, n+1) if n%x == 0]
```
And, we can define prime as:

```python3
def prime(n):
    return fact(n) == [1,n]
```

With this definition, you can see, `prime(2)` should return `True` and `prime(14)` should return `False`. Now, we can use lazy evaluation to check all the integers $n \in Z ^+$ for primality as the following:

```python3
def nextprime():
    i = 1
    while (True):
        i = i + 1
        if (prime(i)):
            yield i
```

Just for sanity check, copy and paste the above definitions in a python3 console and do the
following:
```python3
>>> a = nextprime()
>>> next(a)
2
>>> next(a)
3
>>> next(a)
5
>>> next(a)
7
```
and so on. This is exactly what we were looking for. Generate next prime only when we need it.

### Twin primes
Let's go a little further and generate twin primes. First, let's define what twin numbers are:
```python3
def twin(n, m):
    return abs(n-m)==2
```
Sure enough, `twin(2,3)` returns `False` and `twin(3,5)` returns `True`.

Next, we use this definition to filter out twin primes:
```python3
def listTwinPrimes():
    a = nextprime()
    b = nextprime()
    next(b)
    for i,j in zip(a,b):
        if twin(i,j):
            print(i, j)
```

Admittedly, this performs terribly. Prime generation algorithm can do much better, and also every
prime is generated twice: once from `a` and `b` each. But it does the job. Gives you an 'infinite'
list of twin primes. ;)

The End
