---
title: 'Testing React with Jest and React Testing Library (RTL)'
excerpt: 'A simple study note written as I take "Testing React with Jest and React Testing Library (RTL)" course in Udemy'
date: '2020-08-12'
slug: 'testing-react-with-jest-and-react-testing-library-rtl'
---

This is the note I take as I watch this course 
[Testing React with Jest and React Testing Library (RTL) - Udemy](https://www.udemy.com/course/react-testing-library/)

## Introduction

React Testing Library (RTL) is a library that provides virtual DOM for React testing. Jest is a framework to run tests that is designed to be used in a CLI. In We write test using a testing function `test()` that takes two arguments: a description of the test and a callback function that contains the test code. 

The testing processes are basically like using assertions. First we find the element on the app, then we can use assertions to check value of an element (`expect(...).toBe(...)`), and several other assertions are available. It throws error if the assertion fails.

Testing library recommends finding elements in testing by using accesibility handles. There are several handles, especially `getByText()` (but better using `getByRole()`) and `getByTestId()`. This also encourages us to make the accesibility of the app is better.

### Test-driven Development

Test-driven development is a development method that creating test first before building the app. The code then will be implemented with specs from test file. The difference between TDD and BDD (Behavior-driven Development) is that TDD is focused on writing tests first, and BDD is focused on writing code first and involves a lot of people in different roles while the TDD is focused on writing tests first.

Type of tests:
1. Unit tests: Test one small piece of functionality in isolation
2. Integration tests: Test multiple units working together
3. Functional tests: Test a functionality of how users interact in isolation (e.g. fill form and submit)
4. Acceptance/End-to-end (E2E) tests: Test using actual browser and server