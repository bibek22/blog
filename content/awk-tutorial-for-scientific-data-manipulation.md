Author: Bibek Gautam
Date: 2019-04-07 13:25
Title: Awk Tutorial and Introduction
Slug: awk-tutorial
Category: Linux
Tags: linux, programming
Summary: If you deal with a large data files with multiple rows and columns and you would like to make some quick edits, selection or manipulation right from the terminal, awk is the tool to look for.

### Awk
Awk is a full fledged, [turing complete](https://simple.wikipedia.org/wiki/Turing_complete) programming language
on its own but it was designed specifically to deal with text data.  

Say, you have the following kind of data:

```
PRN	  Az	 Ele	 Lat	 Lon	 Stec	 Vtec	 S4
1	155.41	5.82	15.74	90.22	29.20	10.78	-99.000
3	155.25	5.95	15.84	90.21	29.38	10.86	-99.000
2	155.09	6.08	15.94	90.21	29.26	10.84	-99.000
1	154.94	6.21	16.03	90.21	29.22	10.84	-99.000
3	154.78	6.33	16.13	90.21	29.16	10.84	-99.000
3	154.62	6.46	16.23	90.21	29.01	10.81	-99.000
2	154.46	6.59	16.32	90.21	28.98	10.82	-99.000
```

Say you are interested in only some of the columns. And you want to seperate out the data by PRN
value which runs from $1$ to $3$. You might also want to delete those rows which have a negative
value i.e. `-99.00` which you know implies an error or missing data. You could do all these things and
more using `awk`.


### Basic syntax
One thing you should note before we begin is that `awk` is a line editor. It processes one line at
a time. So, no matter how many lines of input you have, awk runs the same code on all of it. It's
basic structure is the following:

```awk
BEGIN{
    ...
}
{
    ...
}
END {
    ...
}
```
It has three blocks as you can see. Sometimes you need to do
something before you even begin editing lines, for eg. write the header, or initialize some variables
etc. That is what goes inside the `BEGIN{}` block. Similary, you have `END{}` block which runs after
the lines are finished processing. This may be used to write footer, for example. The code that runs
for each line of input is on the middle, also called the main block.

### Running the script
Let me show you how to run the awk script. First of all, create a script file using your text
editor, eg. `gedit`, `vim`, etc. I recommend creating a new directory to save the file so that it is
cleaner. Put the following into the file and name it `script.awk`:
```awk
BEGIN{
    print "###First Line###"
}
{
    print
}
END{
    print "###Last Line###"
}
```
Also create another  file which will be the file that we want to edit/manipulate using awk. So,
create a file named `list.txt` with the following content:
```
Apples
Potato
Onion
Garlic
```
Then open the terminal and `cd` into the directory where you saved
your files. Then, enter the following command to run the script. The syntax is `awk -f <script-file>
<input file>`.
```console
$ awk -f script.awk list.txt
###First Line###
Apples
Potato
Onion
Garlic
###Last Line###
```

If you get the output that looks like above, everything is working correctly. Now let's talk about
what the program did.  

`BEGIN` block has a line that says `print "###First Line###"`. Since this block runs before dealing
with any line in the file `list.txt` itself, we see the line in the first line of the output.
You also see that `print` is the command to write something to the screen/file.  

Similarly, the `END` block writes to the last line i.e. after every line in the given file is
evaluated. The line in the main block is a little different. It just says `print`. When the argument
to print is missing, it just prints the line in the input file as it is as we see above.  

It's only interesting when you start to manipulate the lines given. But before we do, let's see how
to save the output to a new file.

### Saving output to a file
Unix/Linux has this concept of pipe/redirection, which basically is a way to link output of one
program to the input of some other program or to a file, etc. Pipe symbols `|` are used to pipe data
between two programs and `<`, `>` for redirection to/from a file. As such:
```console
$ awk -f script.awk list.txt > output.txt
$ ls
list.txt  output.txt  script.awk
```

You see a new file `output.txt` has been created. You can `cat output.txt` to check that the output
has indeed been written to that file.

### Selecting columns
A column in awk is represented by $n where $n$ is $1$ for first column, and $8$ for eighth
column. So, $3 would be the third column. For example purpose, copy the following into the `list.txt` file we created earlier.
```
Apples  1Kg
Potato  5Kg
Onion   1Kg
Garlic  .5Kg
```

And create a script `itemOnly.awk` with the following code:
```awk
BEGIN{
}
{
    print $1
}
END {
}
```

And save and run the script against the file `list.txt` like this:
```console
$ awk -f itemOnly.awk list.txt
Apples
Potato
Onion
Garlic
```
Note that we didn't write anything in `BEGIN` and `END` block. That's allowed. If you wanted to
write a header for example that says "Items" at the top, you could do `print "Item"` in your `BEGIN`
block.  

You can also very simply change the order of the columns:
```awk
BEGIN{
    print "Price" "\t" "Items"
}
{
    print $2 "\t" $1
}
END {
}
```

Save and run just like above, you'll get something like this:
```
Price	Items
1Kg	    Apples
5Kg	    Potato
1Kg	    Onion
.5Kg	Garlic
```

So, you see the order has been reversed and the heading has been added. So, you can change the order
of columns into anything you like just by specifying them in the main block as we did above.   

Also note that the `\t` is a tab character which puts a tabspace in between two columns. You could
also put space or comma `,`(for csv files for example) or semicolon `;` or any other column seperator you like.

### Variables
Variables are easy to declare and use. If you are familiar with C, the syntax is similar. Let's add
a new column `S.N` for serial number into our list above. Since we want `awk` to put the value
$1,2,3$ and so on automatically, we need a variable that counts the line and writes the value of
`S.N` for each row. Let's see what I mean:

```awk
BEGIN{
    print "S.N." "\t" "Price" "\t" "Items"
    i = 1
}
{
    print i "\t" $2 "\t" $1
    i = i + 1
}
END {
}
```

Now if you save and run the program, you'll get the following:
```
S.N.	Price	Items
1	    1Kg	    Apples
2	    5Kg	    Potato
3	    1Kg	    Onion
4	    .5Kg	Garlic
```

So, we made a variable called 'i' which has a value $1$ to start. Note that since we only make a variable
once, we do this in `BEGIN` block. Then, we print the value of `i` in the main block, which is
executed once for every line of input, so it writes Serial Number for each line in the file given.
Also notice that we increase the value of `i` by 1 for each line in the second line of main block.


### Conditionals
To be continued...
