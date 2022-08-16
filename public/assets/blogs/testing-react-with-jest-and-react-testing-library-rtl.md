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

## Examples

Get button with text "Change to blue" and expect it to be red in initial

```jsx
const colorButton = screen.getByRole('button', {name: 'Change to blue'});
expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
```

Expect button to be red when clicked

```jsx
fireEvent.click(colorButton);
expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
```

### When to do unit test
Some simple case could be covered by functional tests. But for complicated functions, unit test helps with:
- Covering all possible edge cases
- Determining what caused functional tests to fail
Issue with functional test: High-level makes them resistant to refactors and makes them difficult to diagnose

## ESLint and Prettier in Testing Library

ESLint: A popular linter for Javascripts. Linter is a tool that analyzes text and marks syntax that breaks rules. Linter analyzes code as written, not what happens when code is run. Linter also can adress format and style, for example, preferred assertion method.

Prettier: A tool that formats code writing such as indents, spacing, and spaces around curly braces.

ESLint has plugin for testing library and Jest DOM.  Install it by

```
npm install eslint-plugin-testing-library eslint-plugin-jest-dom
```

At the root directory, create file `.eslintrc.json`.

```json
{
	"plugins": [
		"testing-library", 
		"jest-dom"
	],
	"extends" [
		"react-app",
		"react-app/jest",
		"plugin:testing-library/recommended",
		"plugin:testing-library/react",
		"plugin:jest-dom/recommended"
	]
}
```

### Configure ESLint in VSCode

Create new file in `.vscode/settings.json`

```json
{
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	}
}
```

Add `.vscode` and `.eslintcache` to `.gitignore`.

If we working on VSCode, we can install ESLint plugin in VSCode. And then allow ESLint to run. If there's red underline mark on code, it means ESLint found error. If we check the error, we can see the error message and sometimes we can quick fix it.