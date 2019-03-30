Author: Bibek Gautam
Date: 2019-03-30 08:46
Title: Handling terminal signals in bash scripts
Slug: handling-terminal-signals-in-bash-scripts
Category: Linux
Tags: linux, bash, command-line
Summary: If you want to run a few commands after the user has pressed `Ctrl+C` to clean up or other, this is the way...

`trap` is the command that we are interested in. It listens for a interrupt signal and runs the command/function that has been specified.

Let's first define a function that we want to run before exiting:

```bash
user_interrupt(){
    echo "Received Keyboard Interrupt from User"
    echo "Exiting..."
}
```

Now you tell `trap` to listen for interrupts and run this function in case of such events:

```bash
trap user_interrupt SIGINT
trap user_interrupt SIGSTOP
```

With something like this at the beginning of your script, `user_interrupt` function is run if `SIGINT` or `SIGSTOP` signal is received.
