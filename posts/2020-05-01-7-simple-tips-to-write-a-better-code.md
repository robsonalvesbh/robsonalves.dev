---
title: 7 simple tips to write a better code
description: >-
  There are several ways to troubleshoot a problem, and sometimes we write the hardest solution to understand that even ourselves have difficulty in understanding when we see the code six months later, that happens and it is not our fault, but there are some tips that we can apply to naturally improve the quality of the code we’re working on and make it more readable, testable, maintainable, and easy to understand.
date: '2020-04-22 10:09:22'
tags:
  - Career
  - Clean Code
  - English
image: assets/img/return_early_functions_placeholders.png
---

![readable code](assets/img/return_early_functions_placeholders.png 'readable code')

There are several ways to troubleshoot a problem, and sometimes we write the hardest solution to understand that even ourselves have difficulty in understanding when we see the code six months later, that happens and it is not our fault, but there are some tips that we can apply to naturally improve the quality of the code we’re working on and make it more readable, testable, maintainable, and easy to understand.

I decided to compile all tips that I've learned throughout my journey as a software engineer and I will try to write in a way to be agnostic of design patterns or programming paradigm and that could be applied in any programming language.

My advice to you is to try it, try it for at least a few weeks.

## Tips

- [Write Meaningful Names](#write-meaningful-names)
- [Early returns](#early-returns)
- [Avoid using ELSE](#avoid-using-else)
- [Only one level of indentation per method](#only-one-level-of-indentation-per-method)
- [Avoid setting value Hard Coding](#avoid-to-set-value-hard-coding)
- [Encapsulate conditions](#encapsulate-conditions)
- [Follow a style guide](#follow-a-style-guide)

## Write Meaningful Names

**We name things all the time** we name our variables, functions, class, arguments, and files, because of it we need to do this well.

This topic is so important that [Uncle Bob](https://twitter.com/unclebobmartin) wrote an entire chapter about it in the [Clean Code book](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882).

To write meaningful names you can follow some rules:

- Use pronounceable names.
- Use searchable names.
- Do not use abbreviations.
- Function names should be verbs.

The chosen name should answer these questions:

- Why does it exist?
- What does it do?
- How is it used?

The name should reveal its intention.

See some examples:

**Bad names**:

```js
const x = 5
const list = []
const cName = 'Jose'
const genDate = '2019-03-11'
```

**Good names**:

```js
const elapsedTimeInDays = 5
const accounts = []
const customerName = 'Jose'
const generatedDate = '2019-03-11'
```

**Don't worry if you spend so much time thinking about the name** of a just variable, it's completely normal, but I guarantee it will be worth it.

**Remember**: The name of things is like a joke if the name requires a comment for an explanation, it is because the name is not good enough.

## Early returns

**Always you have a chance to get out of a function, do it as soon as possible**. The main goal is to get out of the way invalid cases first to focus on the "real" purpose of the function.

It's very simple to implement Early return, the only thing you have to do is to reverse conditions.

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

Applying the early return, we will reverse the conditions and throw an exception:

```js
const sendEmail = (email, message) => {
  if (!isValidEmail(email)) {
    throw new Error('Email is not valid.')
  }

  if ($message === '') {
    throw new Error('Cannot send an empty message.')
  }

  return mailer.send(email, message)
}
```

In some cases, using early returns can be optional.

Either you can do:

```js
const setName = name => {
  if (!name) {
    return
  }

  this.name = name
}
```

or just:

```js
const setName = name => {
  if (name) {
    this.name = name
  }
}
```

It's up to you, choose what you prefer.

## Avoid using ELSE

When you use if/else statement you are creating multiples ways that the execution of your code can follow and this increases the [Cyclomatic Complexity](https://www.perforce.com/blog/qac/what-cyclomatic-complexity).

![hadouken code](assets/img/0_wjwy84monqqzzhkj.png)

This approach will help you to decrease the Cyclomatic Complexity of your code and turn it more readable.

How do I eliminate the else? Applying the [early returns](#early-returns).

Another example that ELSE it's not necessary:

```php
function someFunction {
  if (someCondition()) {
    return true;
  } else {
    return false;
  }
}
```

It is quite common to find code like this, but think, if your condition will be true then you will return `true`, why do not just return the condition result instead?

```php
function someFunction {
  return someCondition();
}
```

## Only one level of indentation per method

This tip will help you to keep your functions small, more readable, and easy to compile the code in your head.

Let’s see an example:

```java
class Board {
    public String board() {
        StringBuilder buf = new StringBuilder();

        // first level
        for (int i = 0; i < 10; i++) {
            // second level
            for (int j = 0; j < 10; j++) {
                // third level
                buf.append(data[i][j]);
            }
            buf.append("\n");
        }

        return buf.toString();
    }
}
```

Using the Extract Method pattern, we will extract all the deepest levels.

```java
class Board {
    public String board() {
        StringBuilder buf = new StringBuilder();

        collectRows(buf);

        return buf.toString();
    }

    private void collectRows(StringBuilder buf) {
        for (int i = 0; i < 10; i++) {
            collectRow(buf, i);
        }
    }

    private void collectRow(StringBuilder buf, int row) {
        for (int i = 0; i < 10; i++) {
            buf.append(data[row][i]);
        }

        buf.append("\n");
    }
}
```

You won’t reduce the number of lines of code, but you will increase readability in a significant way.

## Avoid setting value as Hard Coding

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

## Encapsulate conditions

Encapsulating conditions is a way to spell out your intention and what you want to validate, and code with encapsulated conditionals is easier to test.

Getting the previous example, we can encapsulate the condition in a function:

```js
const DEVELOPER_PROFILE_ID = 956473

const isDeveloper = user => user.profile === DEVELOPER_PROFILE_ID

if (isDeveloper(user)) {
  // do something
}
```

Follow below an example of a unit test of isDeveloper function:

```js
test('should return true when the user has a developer profile', () => {
  const user = {
    profile: 956473
  }

  expect(isDeveloper(user)).toBeTruthy()
})

test('should return false when the user has not a developer profile', () => {
  const user = {
    profile: 123456
  }

  expect(isDeveloper(user)).toBeFalsy()
})
```

## Follow a style guide

A style guide helps to standardize coding conventions for everyone on the team and when the project has a consistent style, it brings several benefits such as increased productivity of the team and makes it easier to maintain.

No matter what language you are coding, there is probably a style guide for it, you can see some examples bellow:

PHP

- [PSR-1](https://www.php-fig.org/psr/psr-1/)
- [PSR-12](https://www.php-fig.org/psr/psr-12/)

NodeJS

- [StandardJS](https://standardjs.com/)
- [Airbnb](https://github.com/airbnb/javascript)

Python

- [PEP-8](https://www.python.org/dev/peps/pep-0008/)

You can use some plugin in your preferred editor or IDE to formatting your code automatically when coding and you can use a Lint in your deployment pipeline to validate your code before merging into the master branch.

## Conclusion

As you can see, the major of these tips are really connected, so when you're applying one tip unconsciously you'll apply another one, all of these tips will help you to write a better code in a natural way.

We spend much more time reading code than writing, so write a better code means that you in the future will thank you.

## References

- https://medium.com/mindorks/meaningful-names-a-dimension-of-writing-clean-code-fdae1ae4f0b1
- https://szymonkrajewski.pl/why-should-you-return-early/
- https://williamdurand.fr/2013/06/03/object-calisthenics/#1-only-one-level-of-indentation-per-method
- https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
