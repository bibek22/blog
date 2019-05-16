Title: Python <wbr>for beginners !
Date: 2019-03-28
Category: Programming
Tags: tutorial, python, programming
Slug: python-for-absolute-beginners
Summary: [to be edited] Are you a beginner programmer or know nothing about programming but want to learn ? Have you heard about *python* before and wondered what the fuss was about? **Continue reading** if you want to learn one of the most popular programming language right now from the very basics.

*Note: This is a direct export of jupyter notebook I made for a one day workshop on python I did. This needs editing. I might come back to it at some point in the future.*

# Introduction to Programming in Python

Let's skip the part where I talk about what programming is and why it is important. Python is a right programming language to pick as a beginner for a lot of reasons which you will understand for yourselves a bit later.

### Python

Programming languages are of two kinds: interpreted and compiled.  

- **Compiled languages:**  
For compilled languages, you write the program, also known as *source code*, run the compiler against it, and finally run the executable program produced by the compiler. Compiler, here, means a piece of software that you install when you 'install' a programming language like *C* or *Fortran*, etc. to your computer.  

- **Interpreted languages:**   
Using interpreted languages is more straightforward. You install a software called *interpreter*, for eg. *python* interpreter, when you install the program. You type the code directly on to this interpreter and it executes your code one line at a time.  

Python is an interpreted language. I am going to assume you have access to a *python interpreter* which is also called *python console*. And make sure the version of python you are using is python 3. You can check by running `python -V` at your terminal.

###  Numbers

Programming, especially in science, is used for manipulation of data in some ways. Therefore, it is necessary that the language that we use have some ways of representing different types of  data that we might want to work with eg. integers, real numbers, complex numbers etc.  
  
Python understands numbers automatically.


* **Integers**  
```python3
>>> 1
```
    1

When I type `1` into the interpreter, it returns 1. Note that `>>> ` is the python prompt. This is where you Enter your line of code. I might avoid showing the prompt a bit later. But you know it's there.
```python3
>>> 10     # simple integer
```


    10

Note that: Everything after `#`  is considered as *comment* in python.  

*Comments* are little notes you write in your source code to explain what it does to someone else or yourself for when you come back to it days later.

* **Real numbers** 
Real numbers are called floating points, or just `floats` in programming term.

```python3
>>> 1.23e-3  # floating points in scientific notation
0.00123
```


* **Complex Numbers**
Python also has a way to represent complex numbers by default.
```python3
>>> 2+3j
(2+3j)
```

#### Basic Arithmetic with numbers
```python3
>>> 7*2 - 25/5
9.0
```

As you can see, python is a built-in calculator. It does all the number arithmetic out of the box. Try it for yourself. All the basic operations are supported:
<table border=2>
<tbody><tr>
<th style="text-align:center;width:10%">Operator</th>
<th style="text-align:center;width:45%">Description</th>
<th style="text-align:center;">Example</th>
</tr>
<tr>
<td >+ </td>
<td>Aditions</td>
<td >5 + 15 = 30</td>
</tr>
<tr>
<td >- </td>
<td>Subtraction </td>
<td >5 – 15 = -10</td>
</tr>
<tr>
<td >\* </td>
<td>Multiplication</td>
<td >5 * 15 = 75</td>
</tr>
<tr>
<td >/ </td>
<td>Division</td>
<td >15 / 5 = 3</td>
</tr>
<tr>
<td >% </td>
<td>Modulus Operator</td>
<td >9 % 5 = 4</td>
</tr>
<tr>
<td >\*\* </td>
<td>Exponential (power) operator</td>
<td >10**20 = $10^{20}$</td>
</tr>
<tr>
<td >//</td>
<td>Integer Division</td>
<td >7//2 = 3</td>
</tr>
</tbody></table>


### Variables 

Variables is something that can refer to the data that you store in memory. 
1. implicitly declared.
2. dynamically typed.


```python3
a = 5  # variable declaration and assignment
b = 2e-1  
c = a + b
print(c)
```

    5.2

As you can see, you can do arithmetic with variables just fine. In above, `a` is a `integer` variable, and `b` is a `float`. The sum of these two, `c` is a `float` as you'd expect. 
Let me show you a way to check the type of a variable: 
```python3
type(a)
```


    int

It confirms that `a` is indeed an `int`. Now, try for `b` and `c` yourself.

#### Functions
What we just used above to check the type of a variable is a `function`. 
Functions in computer programs are like those in mathematics.
A function takes some inputs, do something to them and (usually) 
return some output.  
`type()` function as we saw took one input, i.e. name of the variable and returned it's type. You'll see
functions that take many more inputs and return multiple or complex kind of data as you learn more.

The line of code we saw above is called a **function call**  
but you can also think of it as running a machine that performs
a specific task.
Inputs to a functions are called `arguments`. This is the way to call any function:  

`functionName(argument1, argument2, ..)`  

And the result is called `return value` which again if you want to save into a variable, you can do so:

`returnVal = functionName(argument1, argument2, ..)`  

```python3
type("hi everyone!")
```

    str

##### What's str ??

What we generally call "text" in normal talk is called `string` 
in programming. 


```python3
college = "St. Xavier's College"
```


```python3
 1stName = "bibek"   # no digits allowed as the first character
# name_1st is okay!
```


      File "<ipython-input-10-092931d47764>", line 1
        1stName = "bibek"   # no digits allowed as the first character
              ^
    SyntaxError: invalid syntax




```python3
class = "BSC-III"   # keywords are reserved
```


      File "<ipython-input-11-86ebb738ef0a>", line 1
        class = "BSC-III"   # keywords are reserved
              ^
    SyntaxError: invalid syntax



few more **keywords** are :  
**def, True, False, if, else, while, for, not, in**,  etc..



#### Strings in python are first class citizens !


```python3
country = "Nepal"
```


```python3
"I love " + country + "."
```




    'I love Nepal.'



^^    This is called concatenation ! Adding strings together.

You were talking about functions !!

Okay, here's one more!


```python3
text = input("Enter some text: ")
# a function to take inputs from keyboard
```

    Enter some text: 



```python3
text.replace("i", "y")
```




    ''




```python3
text
```




    ''




```python3
text.count("i"
```


      File "<ipython-input-17-c293c3f42586>", line 1
        text.count("i"
                      ^
    SyntaxError: unexpected EOF while parsing




```python3
text.split(" ")
```




    ['']




```python3
text.isdigit()
```




    False




```python3
text[::-1]
```




    ''



#### Whoa ! What just happened??

### Splicing

`string[start:end:step]`



```python3
statement = "PythonIsAwesome!"
```


```python3
statement*2
```




    'PythonIsAwesome!PythonIsAwesome!'




```python3
statement*5.0  # not allowed
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-23-98c3f2dda63f> in <module>
    ----> 1 statement*5.0  # not allowed
    

    TypeError: can't multiply sequence by non-int of type 'float'



```python3
statement*statement   # not allowed
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-24-51b047b3f69f> in <module>
    ----> 1 statement*statement   # not allowed
    

    TypeError: can't multiply sequence by non-int of type 'str'



```python3
statement[1:16:3]
```




    'yosem'



So, index starts at 0.


```python3
statement[:16:3]  # omiting value means 0 for start and -1 for end
```




    'PhIwo!'




```python3
statement[:] # step can be omitted and it defaults to 1.
```




    'PythonIsAwesome!'




```python3
statement[::-1]   # that should explain it.
```




    '!emosewAsInohtyP'



#### Exercises about string and inputs

### Importing Modules
Tell me more about functions:

#### To get more functions ! 
you can import them.   
We import functions from what are called modules (C would call it library and header file.)  
`
import math
import numpy
`


```python3
import math
```


```python3
math.pi
```




    3.141592653589793




```python3
math.e
```




    2.718281828459045




```python3
math.sqrt(2)
```




    1.4142135623730951




```python3
math.sin(math.pi) 
# not exactly zero because pi is  
# irrational and we've used finite decimals
```




    1.2246467991473532e-16




```python3
math.sin(0)
```




    0.0



### function definition and Flow of execution

Let's create a function which takes two   
inputs - **base and height** of a right angled  
triangle and outputs the **hypotenuse**.  
  
Let's call the function `getHyp`


```python3
# import math   <- this already done above.
def getHyp(a, b):
    h = math.sqrt(a**2 + b**2)
    return(h)
```


```python3
getHyp(4, 3)
```




    5.0




```python3
getHyp(getHyp(4,3), 12)  # Flow of execution
```




    13.0



Let's create a function which takes one   
input - **some text** (aka a string) and  
outputs the **number of occurance of letter e**.  
   
Let's call the function `countE`


```python3
def countE(string):
    total = string.count("e")
    return total
```


```python3
a  = "My name is Bibek and I'm not a terorist."
countE(a)
```




    3



Ex. Count e by taking input from keyboard

Ex. Count some letter by taking string and  
the letter **both** from keyboard.

### Namescope  

#### Lets talk about one more data type:
Boolean type:  
As the name suggests, it stores binary values: 


```python3
a = True
b = False
```


```python3
3 == 4
```




    False




```python3
a == 1
```




    True




```python3
False == False
```




    True




```python3
False != True
```




    True




```python3
3 >= 32
4 <= 5
"me" != "you"
```




    True



Yo sab ta thik xa I want more functions! Functions are cool!
## Some more functions!


```python3
def absolute(n):
    if not (n < 0):    # could put the conditional in parenthesis!
        return(-n)
    else:
        return(n)
```

Write a function that takes age of the user from  
the **keyboard** and tells(*prints*) if the user is legally allowed  
to have license. (allowed if age is **at least 18**)

Some more functions!!

Write a program that takes a number **n**  
as argument and computes n! (n factorial)  
name the function `factorial`

#### Above is called a recursive function.  
a function that calls itself. 

Explain the recursion!

Bonus Question:  
   - Write a function `fibonacci(n)` that takes a  
    integer **n** and returns $n^{th}$ number of fibonacci  
    series: $1, 1, 2, 3, 5, 8, 13,$ etc... 


```python3
import random    # random info 
random.random()
random.normalvariate(0, 1)  # mu and sigma
```




    -0.2294857773288854



Show the Thinking like a programmer slide  
from slide (page 14) before repetition

### Before we move on to repetition aspect; let's make a game !
It'll be a simple game. We can't make fortnite and PUBG yet.
**Game of Dice:**



```python3
import math
import random
def rollDice():
    faceUp = math.ceil(random.random() * 6)
    return(faceUp)
```


```python3
rollDice()    # now, if only we could run this on repeat !
```




    2



### Let me show you yet another function!


```python3
def sumN(n):
    totalSum = 0
    for i in range(n+1):
        totalSum = totalSum + i
    return(totalSum)
```


```python3
sumN(100)
```




    5050



Let's dissect the program !


```python3
for i in range(10):  # explain for loop here !
    print(i)
```

    0
    1
    2
    3
    4
    5
    6
    7
    8
    9



```python3
[i  for i in range(10)]  # list comprehension !
```




    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]




```python3
[i**2  for i in range(10)]  # list comprehension !
```




    [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]




```python3
[i  for i in range(10) if (i % 2 == 0)]  
```




    [0, 2, 4, 6, 8]




```python3
[i**2  for i in range(10) if (i % 2 == 0)]  
```




    [0, 4, 16, 36, 64]



`range(start, stop, step)` # doesn't include stop

So, range(n) gives a list of numbers from 0 to n-1. 

**Ex.** print the squares of first 10 natural numbers:



```python3
for i in range(1, 11):
    print(i**2)
```

    1
    4
    9
    16
    25
    36
    49
    64
    81
    100


**Ex.** print the first 5 odd integers:


```python3
for n in range(5):
    print(2*n+1)
```

    1
    3
    5
    7
    9


### range() returns what are known as iterables.  
We can put any interable in place of range() in for loop. 
One example is good old string.


```python3
for i in "hello World!":
    print(i)
```

    h
    e
    l
    l
    o
     
    W
    o
    r
    l
    d
    !


#### Implement countE() function written above but without string.count() method.
using loops and conditionals


```python3
six = "6"
sum = 0
for i in range(1, 667):
    newValue = six*i
    newValue = int(newValue)
    sum = sum + newValue
print(sum)
```

    740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740740296


#### Write a program that lists all the numbers divisible by 7 but not a multiple of 5 between 1,000 and 3,000 (both included).

Let's do this with while loop 


```python3
i = 1000             # think of i as saying 'index' or just a
                    # running variable that we are used to in Summation notation.
>>> while (i <= 2000):
    if (i%7 == 0) and (i%5 != 0):
        print(i, ", ")
    i += 1

1001 , 
1008 , 
1022 , 
1029 , 
1036 , 
1043 , 
1057 , 
1064 , 
1071 , 
1078 , 
1092 , 
1099 , 
1106 , 
1113 , 
1127 , 
1134 , 
1141 , 
1148 , 
1162 , 
1169 , 
1176 , 
1183 , 
1197 , 
1204 , 
1211 , 
1218 , 
1232 , 
1239 , 
1246 , 
1253 , 
1267 , 
1274 , 
1281 , 
1288 , 
1302 , 
1309 , 
1316 , 
1323 , 
1337 , 
1344 , 
1351 , 
1358 , 
1372 , 
1379 , 
1386 , 
1393 , 
1407 , 
1414 , 
1421 , 
1428 , 
1442 , 
1449 , 
1456 , 
1463 , 
1477 , 
1484 , 
1491 , 
1498 , 
1512 , 
1519 , 
1526 , 
1533 , 
1547 , 
1554 , 
1561 , 
1568 , 
1582 , 
1589 , 
1596 , 
1603 , 
1617 , 
1624 , 
1631 , 
1638 , 
1652 , 
1659 , 
1666 , 
1673 , 
1687 , 
1694 , 
1701 , 
1708 , 
1722 , 
1729 , 
1736 , 
1743 , 
1757 , 
1764 , 
1771 , 
1778 , 
1792 , 
1799 , 
1806 , 
1813 , 
1827 , 
1834 , 
1841 , 
1848 , 
1862 , 
1869 , 
1876 , 
1883 , 
1897 , 
1904 , 
1911 , 
1918 , 
1932 , 
1939 , 
1946 , 
1953 , 
1967 , 
1974 , 
1981 , 
1988 , 
```

This just prints the numbers and exits.  
Wouldn't it be nice if there was a way  
to put them in a list ?  
That's what we are going to learn next:  List !

### Data Type: Lists


```python3
a = [1,2,3]
```


```python3
type(a)
```




    list




```python3
len(a)
```




    3




```python3
for i in a:   # list is also what is known as iterable
    print(i)
```

    1
    2
    3



```python3
a.append(4)
```


```python3
a.reverse()
```


```python3
a.sort()   # how would you sort descending ? 
# also this sorts in place 
# can't recover original ordering
# optional parameter reverse=False
```


```python3
b = sorted(a)   
# this takes input and gives output
# which means it doesn't tamper with original list  !
```


```python3
a
```




    [1, 2, 3, 4]



Splicing a list works similar to splicing a string


```python3
a[1:3]
```




    [2, 3]




```python3
a[1:]
```




    [2, 3, 4]




```python3
a[:2]
```




    [1, 2]




```python3
a[::2]
```




    [1, 3]



#### Clear the list a and go back and put the above numbers in a !!


```python3
import this
```

    The Zen of Python, by Tim Peters
    
    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!



```python3
import numpy as np
import matplotlib.pyplot as plt
```


```python3
y = np.sin(a)
```


```python3
from matplotlib import rc

a = np.linspace(1, 10, 50)   # start, end, how many points to sample
y = np.sin(a)

plt.subplot(3,1,1)
plt.tight_layout()

plt.plot(a,y, color='green', marker='^')
plt.rc('text', usetex=True)
plt.title("Sine Wave")
plt.xlabel(r"$\theta$ (rad)")
plt.ylabel(r"Sine($\theta$)")
plt.legend("sine")

plt.subplot(3,2,3)
plt.plot(a,np.log(a), color='blue')

plt.subplot(3,2,4)
plt.plot(a,np.exp(a), color='red')

plt.subplot(3,1,3)
plt.plot(a,np.cos(a), color='cyan')
plt.figure(num=None, figsize=(8, 8), dpi=80, facecolor='w', edgecolor='k')
```




    <Figure size 640x640 with 0 Axes>




![png](output_128_1.png)



    <Figure size 640x640 with 0 Axes>


### Working with Files


```python3
file = open("new.txt", 'w')
file.writelines("2,8\n")
file.writelines("12,8\n")
file.writelines("2,18\n")
file.writelines("20,89")
file.write("1,32\n")
file.close()
```


```python3
file = open("new.txt", 'r')   # file HANDLER
print(file.read())   # Try without print
file.close()         # This is required for safety.
```

    2,8
    12,8
    2,18
    20,891,32
    


There is also an append mode which just  
adds to the file without replacing

#### Prime numbers [Optional]


```python3
def fact(n):
    return [x for x in range(1, n+1) if n%x == 0]
```


```python3

```


```python3
def prime(n):
    return([1,n] == fact(n))
```


```python3

```


```python3
prime(4)
```




    False




```python3
prime(5)
```




    True




```python3
def infiniteNumbers():
    i = 0
    while True:
        yield i
        i += 1
```


```python3

```


```python3
infiniteNumbers()
```




    <generator object infiniteNumbers at 0x7f4a378f3570>




```python3
c = infiniteNumbers()
```


```python3
next(c)
```




    0




```python3
while True:
    a = next(c)
    if prime(a):
        print(a)
    if a >10000:
        break
```

    2
    3
    5
    .
    .
    .
    9967
    9973


##### Put this ^^ on a file 

```python3
from datetime import date 
```


```python3
today = date.today()
```


```python3
print(today)
2019-03-28
```



```python3
today.year
2019
```

```python3
tomorow = date(2020, 12, 22) # read date
```


```python3
type(tomorow)
datetime.date
```




```python3
print(tomorow)
2020-12-22
```



```python3
[x for x in range(20) if x%2 == 0]
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```



### 2D array [optional]


```python3
matrix = [[2,3], [3,4]]
```


```python3
matrix
[[2, 3], [3, 4]]
```




```python3
matrix[1]
[3, 4]
```




```python3
matrix[1][0]
3
```




```python3
for row in matrix:
    for element in row:
        print(element)
```

    2
    3
    3
    4



```python3
for row in range(len(matrix)):  
    for column in range(len(matrix[row])):
        print(matrix[row][column])
        
# This is where the range not including the <stop> and beginning
# from value 0 by default makes sense.
```

    2
    3
    3
    4

