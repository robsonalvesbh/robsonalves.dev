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

A style guide helps to standardize coding conventions for everyone on the team and, when the project has a consistent style, it brings several benefits, such as increased productivity, makes the code more readable, and makes it easier to maintain the software.

No matter what language you are coding, there is probably a style guide for it, you can see some examples bellow:

PHP

* [PSR-1](https://www.php-fig.org/psr/psr-1/)
* [PSR-12](https://www.php-fig.org/psr/psr-12/)

NodeJS

* [StandardJS](https://standardjs.com/)
* [Airbnb](https://github.com/airbnb/javascript)

Python

* [PEP-8](https://www.python.org/dev/peps/pep-0008/)

You can use some plugin in your preferred editor or IDE to formatting your code automatically when coding and you can use a Lint in your deployment pipeline to validate your code before merging into the master branch.

## Write Meaningful Names

We name things all the time, we name our variables, functions, class, arguments, and files, because of it we need to do this well.

https://twitter.com/unclebobmartin

This topic is so important that Uncle Bob wrote an entire chapter about it in the clean code book.

To write meaningful names you can follow some rules:

* Use pronounceable names
* Use searchable names
* Do not use abbreviations
* Function names should be verbs

The chosen name should answer these questions:

* Why does it exist?
* What is it does? 
* How is it used?

The name should reveal its intention.

Don't worry if you spend to much time thinking about name of just variable, it's completely normal, but I guarantee it will be worth it.

Remember: Name of things is like a joke if a name requires a comment, it is because the name is not good enough.

References:

* The best reference is the chapter 2 of [clean code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). 
* [Notes on "Clean Code" Chapter 2: "Meaningful Names"](https://dev.to/tangweejieleslie/chapter-2-meaningful-names-1cgj)
* [Meaningful Names - A Dimension of writing Clean Code.](https://medium.com/mindorks/meaningful-names-a-dimension-of-writing-clean-code-fdae1ae4f0b1)
* [Clean code 101 — Meaningful names and functions](https://medium.com/coding-skills/clean-code-101-meaningful-names-and-functions-bf450456d90c)
* [Clean Code Chapter 2 Thoughts](https://dev.to/davidemily/clean-code-chapter-2-thoughts-18l8)

## Early returns

Always you have a chance to get out of a function do it as soon as possible, the main goal is to eliminate invalid cases to focus on the "real" purpose of the function.

 your code will be more clear and less complex.

it's very simple to implement Early return

In some cases, using early returns optional. Take a look at the following example:

```js
const setName = (name) => {
  if (!name) {
    return
  }
  
  this.name = name
}
```

or you can just do it like this

```js
const setName = (name) => {
  if (name) {
    this.name = name
  }
}
```

is up to you, choose what you prefer.

The problem is when the code starts to have too many aligned conditions, like this following example:

```js 
const someFunction = () => {
  if (firstCondiction) {
    if (secondCondiction) {
      // do something
    } else {
      if (thirdCondiction) {
        // do something
      }

       // do something
    }
  }

  // do something
}
```

This code is hard to read and probably has too much responsibility.

```js
const someFunction = () => {
  if (!firstCondiction) {
    // do something
  }

  if (!secondCondiction) {
    // do something
  }

  if (!thirdCondiction) {
    // do something
  }

  // do something
}
```

## Avoid using ELSE

When you use IF/ELSE statement you are creating multiples ways that the execution of your code can follow and this increase the cyclomatic complexity.

This approach will help you to decrease the cyclomatic complexity of your code, turn it more readable.

* Avoid code duplication
* Code more readable
* Decrease bugs

Example:

https://www.perforce.com/blog/qac/what-cyclomatic-complexity

## Only one level of indentation per method

avoid hadouken code 

## Avoid to set value as Hard Coding

If you see the numbers 6,283 or 299792458 in an equation, can you quickly know what they mean? Probably not. This is the problem when you set a value hard coding, you 


você esconde o real significado dos valores e dificulta o entendimento do código para desenvolvedores que não estao acasdasd--inserinse
