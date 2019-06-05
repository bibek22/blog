Author: Bibek Gautam
Date: 2019-06-05 08:21
Title: Computer Programming - TU
Slug: computer-programming-third-year
Category: programming
Tags: C, programming, TU
Summary: Study Resources for B.Sc. Math 3rd Year computer programming

##### Introduction to computer systems

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
*send the instruction at location M[1000]* or  
*store the given data in locations M[0] to M[255]*  
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

1. Arithmetic and Logical Unit (ALU)

  ALU is a digital electronic circuit that performs arithmetic and logical operations. It is the
  fundamental building block of CPU. Transistors are combined together to make basic arithmetic
  units like adder, substractor, etc and also logic gates such as *AND*, *OR*, *NOT*, *XOR*, etc.
  These work together to perform all arithmetic, floating point and bitwise operations. Logic gates
  helps in decision making and switch case operations.

2. Control Unit (CU)

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

