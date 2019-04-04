Author: Bibek Gautam
Date: 2019-03-30 07:41
Title: Xargs - piping the STDOUT to argument of next command
Slug: xargs-piping-the-STDOUT-to-argument-of-next-command
Category: Linux
Tags: Linux, command-line
Summary: This allows you to take the output of some program and use it as an argument for some other program easily. Read on to see what it does...

Coming across these little unix tools that do small but particular things and do them well and as expected is a joy. This adds for me a sense of reverence to all the unix developers of early days. And this feels like a welcome gift.

Your screenshot folder probably has a lot of images. Say you want to find the last screenshot you took. You could do that with `ls` sorting by time. 
```bash
$ ls -t
```

That lists you the files in reverse chronological order. But, I like to see the last one at the buttom as the first one alwys gets scrolled up from the screen. You put an extra `-r` flag for reversing the order.

Since you want the last one, you can select that by using `tail` command. As such:
```bash
$ ls -tr | tail -n 1
```

`-n 1` says that I only want 1 line from the buttom. Now this prints the last file that was created which is what you want. Awesome. 

Now, say you want to move it to some other location. This is where `xargs` comes in. You have the name of the file you want as standard output of one program. And you want to use it as an argument to second command namely `mv`.  

Say the name of the file was `screenshot.png`, this is how `xarg` works:

```bash 
$ ls -tr | tail -n | xargs echo this is the file: 
this is the file: screenshot.png
```
So, as you see, xargs took the standard input and put it as the argument to `echo` command.
Now, by default, xargs adds as the last argument. But, like when you want to move, you want the file to be first argument. You can put it in some other place as such: 

```bash
$ ls -tr | tail -n | xargs -I 'file' mv 'file' /path/to/dest/
```

Now, that quietly moves your file `screenshot.png` to the `dest` directory.

The End.

