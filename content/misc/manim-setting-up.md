Author: Bibek Gautam
Date: 2019-04-04 19:56
Title: Getting Started with Manim [VirtualEnv]
Slug: getting-started-with-manim
Category: Tech
Tags: programming, animation, python
Status: Draft
Summary: Get up and running with `Manim`, a maths animation python library written by Grant Sanderson of [3Blue1Brown](https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw).


Make a directory that will host virtual environment as well as the `manim` source files at a
location of your choosing:
```bash
$ mkdir manimProject
```
Create a folder for python virtual environment within the directory created and create a virtual environment in that directory:
```bash
$ cd manimProject
$ mkdir venv
$ virtualenv -p python3 venv/
```

Next, activate the virtual environment:
```bash
$ source venv/bin/activate
```

Now, clone the `manim` git [repository](https://github.com/3b1b/manim) :
```bash
$ git clone https://github.com/3b1b/manim
```

Change into the `manim` directory and install dependencies:
```bash
$ cd manim
$ python3 -m pip install -r requirements.txt
```

This will install all package dependencies you'll need.

Just to check, do the following and see it runs without error:
```bash
$ python -m manim example_scenes.py -pl

```

And pick any scene just to see if it renders and play. It should.
