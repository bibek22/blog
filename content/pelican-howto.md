Title: How to build your blog with Pelican !
Date: 2019-03-27
Category: Tutorial, Tech, Website
Tags: blog
Slug: first


### First thing first !
Static site generators (SSG) are these nice little framework that help you manage your website with humble needs using static pages only. Blogs are perfect fit to use SSGs. You publish your articles and they are unchanged till you make further edits. Your sites doesn't need to be dynamic to accomodate that. This is why SSGs have gained popularity since they just make more sense and also make your life much easier. Once you set up and get going that is. We are going to use Pelican which is one such SSG based on `python`

### Why Pelican ?
**Short Answer:** Because, Python !   
**Long Answer:** Well, I don't really have a long answer to this. Admittedly, I haven't tried any other Static Site Generators besides Pelican. But of course I don't want to learn ruby(jekyll) just to run my blog. So, Pelican is the perfect fit for me. 

### What do I need ?
You'll need `python3`, `virtualenv`, `pip3` and a little bit of patience. And a Unix terminal helps !

### Setting up Virtualenv
Install `python3`, `virtualenv` and `pip3` on your system from your distribution if you haven't already. Then, go ahead and create a directory to keep the sources for your blog.

```console
$ mkdir /path/to/your/project
$ cd /path/to/your/project
```

Now, create a python3 virtual environment on the this directory:
``` console
$ virtualenv -p python3 ./
```

This creates all the python setup you need in the directory. It's good idea to create a virtual env for your projects like this as it keeps them seperate and independent. So, when you want to delete the project you don't have to go around searching for installed dependencies of the project and delete them, you just nuke the folder and you're done! Besides, it also avoids version conflicts between projects. You can read more about virtual environments [here](https://realpython.com/python-virtual-environments-a-primer/).

### Installing Pelican
Once, you have the virtualenv ready, next we install `Pelican` with `pip`:

``` console
$ pip install pelican
```

This will install `Pelican` and all the necessary dependencies.

### Create new Pelican project
You can run `pelican-quickstart` at this point. Create a new folder to host the sources for your blog.

``` console
$ mkdir blog
$ pelican-quickstart blog
```

You'll be prompted with options for necessary settings. Fill it up. It'll generate a `pelicanconf.py` file in your `blog` directory. Go ahead and make some edits if you want. You'll want to lookup documentation for the settings.

### Start Server
You can just start the server to make sure everything is working upto this point:
```console
$ pwd
/path/to/your/project/blog/
$ make devserver
```

A http server will be run at port `8000`. Point your browser at that port on your localhost and you should see a landing page for Pelican.

### Creating posts !
To keep your posts sources organized, create a directory `content` inside `blog` directory. Add `.md` or `.rst` files inside this directory, one for each post.

### Further...
You can pick one among several themes available for pelican from this [repo](https://github.com/getpelican/pelican-themes). Another awesome thing about Static site is that you can host it for free using github [pages](https://pages.github.com/), [netlify](https://www.netlify.com/) etc. Comment below if you are interested. I'll write about how to host your blog for free and with continuous deployment.

The End.
