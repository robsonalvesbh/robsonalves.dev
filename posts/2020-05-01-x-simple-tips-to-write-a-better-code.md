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
These tips are a mix of some tips from the , [Object Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/), and my experience of more than 6 years as a developer. I tried not to use advanced concepts so that developers of any level can use them.

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

This topic is so important that [Uncle Bob](https://twitter.com/unclebobmartin) wrote an entire chapter about it in the [Clean Code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882).

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

Remember: The name of things is like a joke if the name requires a comment for explanation, it is because the name is not good enough.

References:

* The best reference is the chapter 2 of [clean code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882). 
* [Notes on "Clean Code" Chapter 2: "Meaningful Names"](https://dev.to/tangweejieleslie/chapter-2-meaningful-names-1cgj)
* [Meaningful Names - A Dimension of writing Clean Code.](https://medium.com/mindorks/meaningful-names-a-dimension-of-writing-clean-code-fdae1ae4f0b1)
* [Clean code 101 — Meaningful names and functions](https://medium.com/coding-skills/clean-code-101-meaningful-names-and-functions-bf450456d90c)
* [Clean Code Chapter 2 Thoughts](https://dev.to/davidemily/clean-code-chapter-2-thoughts-18l8)

## Early returns

Always you have a chance to get out of a function do it as soon as possible, the main goal is to eliminate invalid cases to focus on the "real" purpose of the function.

it's very simple to implement Early return, the only thing you have to do is to reverse conditions.

Look the example below with many nested if/else statements:

```js
const sendEmail = (email, message) => {
  if (isValidEmail(email)) {
    if (message !== '') {
        return mailer.send(email, message)
    } else {
        throw new Error('Cannot send an empty message.')
    }
  } else {
    throw new Error('Email is not valid.')
  }
}
```

Applying the *early return* and reversing the conditions:

```js
const sendEmail = (email, message) => {
  if (! isValidEmail(email)) {
    throw new Error('Email is not valid.')
  }

  if ($message === '') {
    throw new Error('Cannot send an empty message.')
  }

  return mailer.send(email, message)
}
```

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

I particularly prefer the first approach because I can do a validation and throw an exception if necessary, but, it's up to you, choose what you prefer.

## Avoid using ELSE

When you use IF/ELSE statement you are creating multiples ways that the execution of your code can follow and this increase the cyclomatic complexity.

This approach will help you to decrease the cyclomatic complexity of your code, turn it more readable.

* Avoid code duplication
* Code more readable
* Decrease bugs

Example:

https://www.perforce.com/blog/qac/what-cyclomatic-complexity


How do I eliminate the else? Applying the early return.

## Only one level of indentation per method

avoid hadouken code 

## Avoid to set value as Hard Coding

If you see the ID `956473` in a condition, can you quickly know what it means? Probably not.

This is the problem when you set a value hard coding, you hide the real meaning of the values ​​and make the code hard to understand for developers who are not inserted in the same context that your code.

Take a look at the example below:

```js
if (user.profile === 956473) {
  // do something
}
```

What the hell does `956473` mean? It is hard to say. 

This problem is easy to solve just by extracting this ID in a constant with a meaningful name, see: 

```js
const DEVELOPER_PROFILE_ID = 956473

if (user.profile === DEVELOPER_PROFILE_ID) {
  // do something
}
```

Now, our code to explicit what it does, is easier to understand and you can reuse the constant `DEVELOPER_PROFILE_ID` in other parts of the code.

## Extract hard-coding secrets values

Other context that you must avoid hard coding is in secrets values.

```js
const connection = mysql.createConnection({
  host: "yourhost",
  user: "yourusername",
  password: "yourpassword"
})
```

In a collaborative environment (e.g., work, or open source) this is not a good practice at all, you are exposed and anyone can get your database access direct from your repository.

When you work with multiple repositories that can be a problem also, you probably will have a secret for each environment (development, homologation and production).

A good practice is to make your code more flexible and extracting the secrets to an environment variables, take a look at the example below:

```js
const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const connection = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
})
```

To define the value of environment variables, you can use a lib as [dotenv](https://www.npmjs.com/package/dotenv), it's very easy to find that lib for your preferred language.

I recommend that you take a look at a tool like [Consul](https://www.consul.io/docs/commands/index.html#environment-variables) to manage your environment variables. With this tool, you can change the secret value in hot production without needing a new deployment.

## Encapsulate conditions

Encapsulating conditions is a way to spell out your intention and what you want to validate, and code with encapsulated conditionals is easier to test.

Getting the previous example, we can encapsulate the condition in a function:

```js
const DEVELOPER_PROFILE_ID = 956473

const isDeveloper = (user) => user.profile === DEVELOPER_PROFILE_ID

if (isDeveloper(user)) {
  // do something
}
```

Follow below an example of a unit test of isDeveloper function:

```js
test('should return true when the user has a developer profile', () => {
  const user = {
    profile: 'developer'
  }

  expect(isDeveloper(user)).toBeTruthy()
})

test('should return false when the user has not a developer profile', () => {
  const user = {
    profile: 'designer'
  }

  expect(isDeveloper(user)).toBeFalsy()
})
```

## Conclusion

All of these tips will help you to write code more readable and easy to understand, your code will be more clear and less complex.
