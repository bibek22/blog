Author: Bibek Gautam
Date: 2019-03-30 07:41
Title: Xargs - piping the STDOUT to the argument of a command
Slug: short-introduction-to-xargs
Category: Linux
Tags: xargs, linux, command-line
Summary: Xargs allows you to take the output of a program and pass it as an argument of some other program easily. Read on to learn more...

Coming across these little unix tools that do small but particular things and do them well and as expected is a joy. This adds for me a sense of reverence to all the unix developers of early days. And this feels like a welcome gift.

I'm going to talk about a practical use case of xargs while introducing it.

Your screenshot folder probably has a lot of images. Say you want to find the last screenshot you took. You could do that with `ls` sorting by time. 
```bash
$ ls -t
```

This lists the files in reverse chronological order. But, I like to see the most recent one at the buttom as the first line always gets scrolled up from the screen. You put an extra `-r` flag for reversing the order.

Since you only want the most recent one, you can select that by using `tail` command. As such:
```bash
$ ls -tr | tail -n 1
```

`-n 1` specifies that I only want one line from the buttom. Now this prints the last file that was created which is what we want. Awesome! 

Now, say you want to move this file to some other location. This is where `xargs` comes in. 

You have the name of the file you want as standard output of a program. And you want to use it as an argument to second command namely `mv`.  

Say the name of the file was `screenshot.png`, this is how `xarg` works:

```bash 
$ ls -tr | tail -n | xargs echo fileName: 
fileName: screenshot.png
```
So, as you see, xargs took the standard input and put it as the argument to `echo` command.
Now, by default, xargs adds as the last argument. But, like when you want to move, you want the file name to be the first argument.

You can do that like so: 

```bash
$ ls -tr | tail -n | xargs -I 'file' mv 'file' /path/to/dest/
```

And that quietly moves your file `screenshot.png` to the `dest` directory.

The End.

