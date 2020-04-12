Author: Bibek Gautam
Date: 2019-04-09 15:36
Title: Logistic regression and Non Linear functions
Slug: logistic-regression-and-non-linear-functions
Category: Machine Learning
Status: Draft
Tags: machine learning, functions, graphs, neural network
Summary: Here I talk about logistic regression and various non linear functions that are used and relate it to Neural Networks



Logistic regression 

Logistic regression is a model for approaching the problems with binary dependent outcome. What does that mean?

Say, you're trying to classify email as either SPAM or NOT-SPAM. That's a binary outcome problem. You may be dealing with
medical images of various human tissues and you want to figure out if a certain tissue growth is MALIGNANT (cancerous) or NOT.

In either case, you're trying to label each input with one of two labels. Logistic regression is a statistical technique for
approaching these kinds of problems.

Let's take an example of email classification. For simplicity, let's consider two features of an email that might be indicative of 
whether the email is spam. Along horizontal axis, we put length of the email. And along vertical axis, we put the total count of
usage of the suspicious words like *buy, free, discount, offer* etc.

We plot some known examples in the graph as shown below.

<img width=300 src="/images/classification-example.png" alt="Classification Example">


The red points indicate spam emails and green dots indicate non spam ones. Of course, the real examples wouldn't look this distinct,
but this helps to illustrate.

Clearly, there is a line to be drawn in between two cluster of points which serves as a boundary for spam vs. non-spam emails.
