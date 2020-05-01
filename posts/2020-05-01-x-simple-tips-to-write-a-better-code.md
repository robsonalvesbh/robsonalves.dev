---
title: X simple tips to write a better code
description: >-
  These tips are a mix of some tips from the [book Clean
  Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882),
  [Object
  Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/), and
  my experience of more than 6 years as a developer. I tried not to use advanced
  concepts so that developers of any level can use them.
date: '2020-04-22 10:09:22'
tags:
  - English
image: assets/img/unnamed.png
---
These tips are a mix of some tips from the [book Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), [Object Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/), and my experience of more than 6 years as a developer. I tried not to use advanced concepts so that developers of any level can use them.

My advice to you is to try it, try it for a few weeks and you will see how much the quality of your code will improve.

## Follow a style guide

A style guide helps to standardize coding conventions for everyone on the team and this brings several benefits, such as increased productivity, makes the code more readable, and makes it easier to maintain the software.

No matter what language you are coding, there is probably a style guide for it, you can see some examples bellow:

PHP
- [psr-1](https://www.php-fig.org/psr/psr-1/)
- [psr-12](https://www.php-fig.org/psr/psr-12/)

NodeJS
- [StandardJS](https://standardjs.com/)
- [Airbnb](https://github.com/airbnb/javascript)

Python
- [PEP-8](https://www.python.org/dev/peps/pep-0008/)

## Write Meaningful Names

We name things all the time, we name our variables, functions, class, arguments, and files, because of it we need to do this well.

https://twitter.com/unclebobmartin

This topic is so important that Uncle Bob wrote an entire chapter about it in the clean code book.

To write meaningful names you can follow some rules:

- Use pronounceable names
- Use searchable names
- Do not use abbreviations
- Function names should be verbs

The chosen name should answer these questions:

- Why does it exist?
- What is it does? 
- How is it used?

The name should reveal its intention.

Don't worry if you spend to much time thinking about name of just variable, it's completely normal, but I guarantee it will be worth it.

Remember: Name of things is like a joke if a name requires a comment, it is because the name is not good enough.

References:

- The best reference is the chapter 2 of [clean code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). 
- [Notes on "Clean Code" Chapter 2: "Meaningful Names"](https://dev.to/tangweejieleslie/chapter-2-meaningful-names-1cgj)
- [Meaningful Names - A Dimension of writing Clean Code.](https://medium.com/mindorks/meaningful-names-a-dimension-of-writing-clean-code-fdae1ae4f0b1)
- [Clean code 101 — Meaningful names and functions](https://medium.com/coding-skills/clean-code-101-meaningful-names-and-functions-bf450456d90c)
- [Clean Code Chapter 2 Thoughts](https://dev.to/davidemily/clean-code-chapter-2-thoughts-18l8)

## Early returns

if you have the possibility to exit the method, do it as soon as possible.
negation of condition

## Avoid using ELSE

When you use IF/ELSE statement you are creating multiples ways that the execution of your code can follow and this increase the cyclomatic complexity.

This approach will help you to decrease the cyclomatic complexity of your code, turn it more readable.


- Avoid code duplication
- Code more readable
- Decrease bugs

Example:



https://www.perforce.com/blog/qac/what-cyclomatic-complexity

## Only one level of indentation per method

avoid hadouken code 

## Avoid Hardcoding

If you see the numbers 6.283 or 299792458 in an equation, do they instantly jump out at you as meaningful numbers? Probably not

