Author: Bibek Gautam
Date: 2019-06-05 08:21
Title: Computer Programming - TU
Slug: computer-programming-third-year
Category: programming
Tags: C, programming, TU
Summary: Study Resources for B.Sc. Math 3rd Year computer programming

## Ch - 1: Introduction to computer systems

** Q. What is a computer ? **

Computer is an advanced electronic device that takes raw data as input from the user and processes
these dataunder the control of set of instructions (called program) and gives the result (output) and
saves output for the future use. It can process both numerical and non-numerical (arithmetic and logical) calculations. The term computer is derived from the Latin term *computare*, which means to calculate.


** Q. Write about computer architecture. **

Computer Architecture is all about the structure and behaviour of the computer as seen by the
user. A computer has various components. The study of how these components fit and work together to
perform the desired computation is known as computer architecture.

The main components in a typical computer system are the processor, memory, input/output devices,
and the communication channels that connect them.

![computer architecture diagram]( /images/architecture.webp )

**Processor**

The processor is the workhorse of the system. It is the component that executes a program by performing
arithmetic and logical operations on data. It is the only component that creates new information by
combining or modifying current information. In a typical system there will be only one processor, known
at the central processing unit, or CPU. Modern high performance systems, often have more than one
processor aka parallel processors or vector processors. Systems with only one processor are serial
processors or also known as scalar processors.

**Memory**

Memory is a passive component that simply stores information until it is requested by another part of
the system. During normal operations it feeds instructions and data to the processor, and at other
times it is the source or destination of data transferred by I/O devices. Information in a memory is
accessed by its address. Memory can be thought of as a one-dimensional array M. A processor's request to
the memory might be:  
*send the instruction at location M[1000]* 
*store the following block of data in locations M[0] to M[255]*  
and so on.


**I/O Devices**

Input/output (I/O) devices transfer information without altering it to and from the user space and one
or more internal components. These are also called Man machine interfaces. I/O devices can be secondary
memories, for example **disks** and **tapes**,
or devices used to communicate directly with users, such as **displays**, **keyboards**, **joystick**,
and **mouse**, etc.  

**Link components**

The components that link the system together could be simple links that connect two devices or more
complex switches that interconnect several components and allow any two of them to communicate at a
given point in time. When a switch is configured to allow two devices to exchange information, all other
devices that rely on the switch are blocked, i.e. they must wait until the switch can be reconfigured.  


#### Central Processing Unit
_**Q. What is the use of CPU in a computer system? How does it work?**_

CPU is short for central processing unit. It is sometimes referred to as the central processor, but more
commonly as processor. The CPU is the brains of the computer where most calculations take place. In
terms of computing power, the CPU is the most important element of a computer system.

Major functions of CPU are listed below:
1. Perform all basic arithmetic operations
2. Perform logical ie. decision making tasks
3. Facilitate reading and writing to and from memory devices
4. Connect all the input/output devices together and interpret signals


CPU has two distinct components:

1. **Arithmetic and Logical Unit (ALU)**  
  ALU is a digital electronic circuit that performs arithmetic and logical operations. It is the
  fundamental building block of CPU. Transistors are combined together to make basic arithmetic
  units like adder, substractor, etc and also logic gates such as *AND*, *OR*, *NOT*, *XOR*, etc.
  These work together to perform all arithmetic, floating point and bitwise operations. Logic gates
  helps in decision making and switch case operations.

2. **Control Unit (CU)**  
  A control unit is also made up of transistor circuits.
  A CU component is considered the processor brain because it issues orders to just about
  everything and ensures correct instruction execution. Some of it works are as follows:
    - handles all processor control/interrupt signals.
    - directs all input and output flow
    - fetches code for sequential instructions from programs into memory
    - directs other units by providing control and timing signals.
    - handles multi taksing


### Memory Systems
Memory system consists of memory devices, means to access, read and write data and link components
to the cpu. The main purpose of memory system is to store and access data. Depending on the type of
the data, they are split into two types which are:

* Primary Memory
* Secondary Memory

##### Primary Memory
Primary Memory or main memory is the area in a computer which stores data and information for fast
access. It’s a
memory which is used to store frequently used programs which can be directly accessed by the processing
unit for further processing. This is where the currently executing set of instructions resides.  

It is also called  *volatile memory* because the data is stored temporarily and is liable to change or
loss in case of power failure or shutdown. So, the data is only intact as long as the computer is
running. Because of their need for fast access time, they are made up of semiconductor chips.

Every program is loaded into main memory before execution.

Primary memory are of two types:  

* **RAM:** Random Access Memory is what is what we mean when we say main memory. It is a memory to load
  the program before execution. They are still divided as:

    * **Static RAM (SRAM)**: They are more expensive, consume less power and have higher speed
      (20-40 ns) than DRAM. These are used in cache or as main memory in high end computers.

    * **Dynamic RAM (DRAM)**: They are cheaper, have moderate speed (60-100 ns) and need more power. They
      are used in main memory. This is comparitively denser memory.

* **ROM:** Read only memory can only be read as the name suggests. They are written at the time of
  manufacture by the manufacturer themselves. ROM is non-volatile memory. These generally host very
  essential program(BIOS) that is loaded at the boot time and is required to load the operating system.
  These also have some types which are:  

    * **PROM** (Programmable ROM): can only be written once.  
    * **EROM** (Erasable ROM): can be rewritten by erasing previous data. needs exposure to UV light for
      erasing
    * **EEROM** (Electrically Erasable ROM): similar to EROM but erasing can be done electrically.


##### Secondary Memory
Secondary memory on the other hand is the external memory of the computer which can be used to store data
and information on a long-term basis. It’s a non-volatile memory which means data stays intact even if
the computer is turned off. Data cannot be directly processed by the processing unit in secondary memory;
in fact, it is first transferred into the main memory before processing.

Secondary memory consits of all external storage devices that are capable of storing high volumes of data
such as hard drives, floppy disks, magnetic tapes, USB flash drives, CDs, DVDs, etc. It’s generally slower
than primary memory but can store much larger amount of data in the range of gigabytes to terabytes.


[Here](http://cdn.differencebetween.net/wp-content/uploads/2018/03/Primary-Memory-VERSUS-Secondary-Memory-.jpg) is a table that shows the difference between secondary and main memory.

#### Input Devices
Devices used to feed any input signal into the computer are called input devices.
Following are some of the important input devices:

* Keyboard
* Mouse
* Joy Stick
* Light pen
* Track Ball
* Scanner
* Graphic Tablet
* Microphone
* Magnetic Ink Card Reader(MICR)
* Optical Character Reader(OCR)
* Bar Code Reader
* Optical Mark Reader(OMR)

This [page](https://www.tutorialspoint.com/computer_fundamentals/computer_input_devices.htm) has the
description for each devices.

### Output devices
These are the devices where the output of the program or data stored in the memory devices can be
seen by the user.

Following are some of the important output devices:

* Monitors
* Graphic Plotter
* Printer

### Computer Software
Software is a set of programs, which is designed to perform a specific and well-defined task. A program is a sequence of instructions written to solve a particular problem.

There are two types of software:

* **System Software**  
  System software is software designed to provide a platform for other software. It is an interface
  between application softwares and the hardware. Operating system is an example of system software.
  Some others are:
    * **BIOS**: (basic input/output system) gets the computer system started after you turn it on and
    manages the data flow between the operating system and attached devices such as the hard disk, video
    adapter, keyboard, mouse and printer.
    * **Boot**: Boot program loads the operating system into the computer's main memory or random access
    memory (RAM).
    * **Assembler**: It takes basic computer instructions and converts them into a pattern of binary
    digits that the processor understands.
    * **Device Driver**: A device driver controls a particular type of device that is attached to your
    computer, such as a keyboard or a mouse. The driver program converts the more general input/output
    instructions of the operating system to messages that the device can understand. Eg. Keyboard
    driver, display driver, etc.

* **Application Software**  
Application software are the program that are of specific utility to the users. Application software
can be a single program like MS Notepad with a single utility function. It can also be a collection
of programs called software package which perform more broad and related tasks. For ex. MS Office
Suite which includes MS Word, MS Powerpoint, MS Excel, and so on.  
The characteristics(differences) of application software compared to System software are as follows:
    * Close to the user
    * Easy to design
    * More interactive
    * Slow in speed
    * Generally written in high-level language
    * Easy to understand
    * Easy to manipulate and use
    * Bigger in size and requires large storage space

### Operating Systems (OS)
Operating system is a system software which provides platform for other user applications to run on
a computer. Operating system maintains an ecosystem of input and output devices working with each
other in harmony.  

Besides I/O devices, OS also manages otehr hardware resources such as network
devices which includes modem, routers etc.

An operating system has three distinct components:

* **Kernel**  
  This is a software that provides basic level control over all the hardware devices. It's main roles
  include reading/writing data to and from memory, dealing with data received from input devices like
  keyboard, mouse and data to be sent to output devices like monitor and also dealing with incoming
  and outgoing data via networks.  
* **User Interface**  
  This is the part of the OS which facilitates the user to interact with the computer. So, this
  includes, graphical window, icons, desktop, command line etc.  
* **Application Programming Interface(API)**  
  Presence of API in the OS allows the programmers to write application softwares more easily. API
  provides an interface for the programmer to manipulate the underlying hardware using high level
  languages.


Examples of operating systems are Microsoft Windows, Mac OS X, Android, iOS, Linux, etc.

### Generations of computer

### Applications of computer

## Ch - 2: Introduction to Programming Languages

###Programming Language
Programming language is any language used to instruct a computer for performing specific tasks. It
is a set of vocabulary and rules of grammar (syntax) like any other languages. Programming languages
are low level and high level depending on how close to the hardware they deal with.

###Evolution of Programming Languages

** Q. What is Structured Programming? **  
It is a programming paradigm in which structured control flow constructs like choice(if, else,
then), repetition(for, while), block structures (with curly braces), functions etc are used to
improve the clarity, quality, and development time of the programs.

###Compilation Process
** Q. Describe the compilation process. **  
Compilation is the process of translating the source code written by the programmer into a language
that is understood by the target machine.  

Compilation is a multi step process. It has four distinct process which are:

* ** Preprocessing**  
This is the first step of the compilation. In this step, lines starting with a # character are
interpreted by the preprocessor as preprocessor commands. Any macros or constant definitions made in
those lines are used to substitute the occurance of the macros or constants in the rest of the
source code.  
The library files that are included in the header are also attached with the program in this step.

* **Compilation**  
The second step is called the compilation. In this step, the preprocessed code is translated to assembly instructions specific to the target processor architecture. This is still human readable.

* **Assembly**  
During this stage, an assembler is used to translate the assembly instructions to object code. The
output is written in an object file with `.o` extension and contains the actual instructions that
the target processor can run.  
Since large program generally contain multiple source code file, more than one object files are
generated in this step. They have to linked together to form the final program which is done in the
next step.

* **Linking**  
In the last step, the object files are linked together using a piece of software called linker to create
a complete set of instructions that can be executed in the machine. An executable file is produced after
this step which has the extension `.exe` in windows system. This file can now be run to perform the
desired task.

Preprocessor, compiler, assembler, linker all are the part of C compiler. They don't need to be run
seperately.

**Q. What is Object code?**  
Object code is a set of instruction codes that is understood by a computer at the lowest hardware level. Object code is produced by a compiler that reads some higher level computer language (like C) source code and translates them into equivalent machine language instructions. Object code is produced by assembler and they have `.o` extension.

**Q. What do you mean by source code?**  
It is the sequence of instructions written by the programmer. Source code is in plain
text.

**Q. Define Executable code.**  
It's a piece of code that can be executed on the target machine. Executable code is produced in the
last step of compilation process after linking all the object files together to form a complete set
of instructions called program.

**Q. What's Interpreter?**  
Unlike C, some programming languages can directly be executed from the source code without
the compilation process. The software that takes in the source code and directly executes them is
known as interpreter. Interpreters avoid the neccesity to have a previously compiled executable
program.

**Q. What is Loaders? What does it do ?**  
A loader is a part of the Operating System that is responsible for loading the programs into memory
and preparing the execution of the program. Once the loader loads the program into memory, the OS
passes control to the loaded program code for it's execution.

**Q. What do you understand by Algorithm?**  
An algorithm is a detailed series of instructions for carrying out an operation or solving a problem.

**Q. What do you mean by Flow Chart?**  
A flowchart is a diagram that depicts a process, system or computer algorithm. Before writing the
source code, it is helpful to draw a flow chart containing the algorithm that you intend to
implement. Flow chart makes coding a little more easy especially when the program is large and
complicated. It also helps in debugging.


## Ch - 3 Fundamentals of C programming

