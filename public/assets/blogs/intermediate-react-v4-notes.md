---
title: 'Intermediate React, v4 - Notes'
excerpt: 'A simple study note written as I take "Intermediate React, v4" course in FrontendMasters'
date: '2020-08-11'
slug: 'intermediate-react-v4-notes'
---

This is the note I take as I watch this course 
[Intermediate React, v4 | FrontendMasters](https://frontendmasters.com/courses/intermediate-react-v4/)

## Hooks in Depth

### `useState`

Lets you manage state of React component.

### `useEffect`

Lets you call side effect for component outside of normal render cycle. Second argument is used to determine dependencies. 

### `useContext`

If not using useContext, we have to pass context to component several levels lower way down (prop drilling). We can access/update context from child level. Using useContext solve this problem like a global variable, but it don't show the explicit relationship between components.

### `useRef`

useRef difference from useState is that it's a reference to the DOM element. useState will be changed when component re-renders, but useRef will be changed when component unmounts.

### `useReducer`

Basically useState with extra steps to manage state using dispatch, break it and make it testable. Using the reducer with the same state and action will always return the same new state.

### `useMemo`

useMemo is a function that memoizes a function or value. It's useful when you want to memoize a function that is expensive to compute or when you want to memoize a value that you expect to be constant (no need to recalculate).

### `useCallback`

Same as useMemo, useCallback is used for performance optimization. It's a function that memoizes a function and only recalculates if the dependencies change.

### `useLayoutEffect`

Same as useEffect, but it's called after the component has been mounted. It's synchronous to render. This is helpful because useLayout runs the same time as `componentDidMount` and `componentDidUpdaete` in class component, where `useEffect` is scheduled after. Use `useLayoutEffect` if it is guaranteed that the effect will run synchronously after the component has been mounted.

### `useImperativeHandle`

useImperativeHandle is a function that lets you customize methods of object that is returned from useRef hook.  It's useful when you want to pass a ref to a component that is not a child of the component you are using it in, expecially on creating libraries.

### `useDebugValue` & `useId`

useDebugValue can be used to expose custom value while debugging custom hooks in DevTools. useId is a function that generate a unique ID.

## TailwindCSS

### CSS & React

Tailwind is not tied to React. It's a CSS framework.

Install:
```
npm i -D tailwindcss@3.0.22 postcss@8.4.6 autoprefixer@10.4.2
```

Init Tailwind project:
```
npx tailwindcss init
```

This will create a tailwind config in `tailwind.config.js`.

Then add these line in the beginning of the global CSS file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then create `.postcssrc` in root directory

```json
{
  "plugins": {
    "autoprefixer": {},
    "tailwindcss": {}
  }
}
```

### Basics & Gradients

Basically, working with Tailwind CSS require us to implement CSS rules via adding `className` to our component so component will have a long className string from Tailwind. But sometimes we will have to add some custom style e.g. background image because Tailwind doesn't support it.

```jsx
<div
	className="p-0 m-0"
	style={{
		background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
	}}
>
  	...
</div>
```

More Tailwind CSS class can be found at the docs.

### CSS Libraries

Using Tailwind will make our CSS size much smaller. There are several other tools to do styling, including emotion and styled-components. They are good if we need to have some javascript functionality in our CSS like computing colors, etc.

### Layout Basics

We can also use Tailwind to layout our components using flex.

### Tailwind Plugins

There are several component styling by Tailwind CSS. Install it with

```
npm install -D @tailwindcss/forms@0.4.0.
```

This will apply some default styling to basic form elements. In text input, add `type=text` so it will be styled as a text input.

### Grid & Breakpoints

We can also use Tailwind to layout our components using grid and it's much easier than using pure CSS. We can also make it responsive.

### Positioning

We can also have relative positioning in CSS.

## Code Splitting & Server Side Rendering

### Code Splitting

Code splitting is a technique to split our application into smaller parts so the application won't be loaded all at once. This is useful when we have a big application and we want to load it faster. To implement this, we can use `Suspense` and `React.lazy` in router.

```jsx
import { useState, StrictMode, lazy, Suspense } from "react";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
	return (
		<Suspense fallback={<h1>loading route...</h1>}>
			<BrowserRouter>
				...
			</BrowserRouter>
		</Suspense>
	);
}
```

Other than this, the code can be load asynchronously with `lazy`.

```jsx
import { ..., lazy } from "react";

const Modal = lazy(() => import("./Modal"));
```

### Server Side Rendering

Performance is a big concern when we have a big application. There are several ways to improve performance. One challenge is to load the correct content first so user can see the site faster.

Server side rendering is a technique to run React on the server before send it to the user and send the first rendering of the application. The user will only has to download the HTML and see the page, otherwise the user has to download HTML, JS, and load it before showing anything. The total time is relative slower because the React app is loading in the background, but the time the user see something on the page is much faster.

To implement SSR, we have o change where our app is rendered. We use `hydrate` from `react-dom` instead of `render`, and then achieve it using Express and Node.

### Streaming Markup

We can use *streaming* when making HTTP request so we can send response in chunks (partially rendered) instead of sending the whole big payload at the end. Browser can immediately start downloading CSS while the app is loading. To implement this, we can use `renderToNodeStream` from `react-dom/server`.

## TypeScript

Typescript make you write javascript code in a more strict way. It's a good way to make sure your team don't make mistakes as the project scales up. TypeScript make the code more readable and maintainable.

### Setup & Refactoring

Install

```
npm install -D typescript@4.5.5
```

Then run
```
npx tsc --init
```

It will generate `tsconfig.json` file. Some React dependency types are required to be installed.

```
npm install -D @types/react@17.0.39 @types/react-dom@17.0.11
```

### TypeScript & ESLint

There is a project called `typescript-eslint` to replace TSLint (deprecated) that can be used to lint TypeScript code using ESLint.

```
npm install -D eslint-import-resolver-typescript@2.5.0 @typescript-eslint/eslint-plugin@5.13.0 @typescript-eslint/parser@5.13.0
```

Change `package.json` "lint" entry to 
```json
"scrips": {
	...
	"lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --quiet",
	...
}
```

Modify `.eslintrc.json`

```json
{
	"extends": [
		...,
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"prettier"
	],
	"rules": {
		...,
		"@typescript-eslint/no-empty-function": 0
	},
	"plugins": [..., "@typescript-eslint"],
	"parserOptions": {
		...,
		"project": ["./tsconfig.json"],
		...
	}
	...,
	"settings": {
		...,
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"]
		},
		"import/resolver": {
			"typescript": {
				"alwaysTryTypes": true
			}
		}
	}
}
```

### TypeScript Basic Notes

1. We can have a strict ordering of string and function which will be enforced to make other file easier to type.

2. `interface` is a way to define a object-like type that can be used in other file. Use interfaces unless you need type aliases.

	```ts
	// by export it, we can use it in other file
	export interface Pet {
		id: number;
		name: string;
		...
	}

	export interface PetAPIResponse {
		numberOfResults: number;
		...
	}
	```

3. We can make a custom, more-strict type alias that just allows a few different values by declare it with `type`.

	```ts
	export type Animal = "dog" | "cat";
	```

4. The type of a value can be enforced with `... as ...` syntax.

5. If the param can be undefined, we can use `?` to make it optional.

Add type check to `package.json`

```
"scripts": {
	...,
	"typecheck": "tsc --noEmit",
	...
}
```

## Redux

Redux is a library that does state management. Back then, Redux was made to replace Context that used to be worse in React. One feature of Redux is that it is testable.

Install Redux

```
npm install redux@4.1.2 react-redux@7.2.6
```

Including Redux middleware
```js
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
	reducer,
	typeof window === "object" &&
		typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);

export default store;
```
### Reducers

combineReducers is a function that takes an object of reducers and returns a reducer function.

```js
import { combineReducers } from "redux";
import location from "./location";

export default combineReducers({
  location,
  ...
});
```

Reducer takes an old state, an action, and combines those things to make a state. A reducer must have a default state. Reducer are synchronous.

```js
export default function location(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return action.payload;
    default:
      return state;
  }
}
```

### Action Creators

Action Creators are functions that return action objects.

```js
export default function changeTheme(theme) {
  return { type: "CHANGE_THEME", payload: theme };
}
```

### Providers & Dispatching Actions

Provider is a component that wraps the app and provides the store to the app.

```jsx
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}
```

Now we can use Redux in component.

```jsx
import { useSelector, useDispatch } from "react-redux";
import changeLocation from "./actionCreators/changeLocation";
...

const location = useSelector((state) => state.location);
...
const dispatch = useDispatch();

const SearchParams = () => {
	return (
		...
		<input
			id="location"
			value={location}
			placeholder="Location"
			onChange={(e) => dispatch(changeLocation(e.target.value))}
		/>
		...
	)
}
```


### Redux Dev Tools

Redux Dev Tools is a browser extension that allows us to see the state of the store.

## Testing

Jest is a testing library that allows us to write tests in JavaScript. It is built on top of Jasmine.

Install Jest
```
npm install -D jest@27.5.1 @testing-library/react@12.1.3
```

Replace `.babelrc` with
```json
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-env"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
}
```

Add `test` script to `package.json`
```json
"scripts": {
	...,
	"test": "jest",
	"test:watch": "jest --watch"
	...
}
```

### Basic React Testing

- Try to test functionality, not implementation
- Don't test UI or something that likely to change, test the action to the UI instead
- Test the important part to the user
- Delete test on a regular basis
- Fix/delete bad test

Basic test file has extension `.test.js` or `.spec.js`

```js
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Pet from "../Pet.js"; // the component

test("displays a default thumbnail", async () => { // test case
  const pet = render(<Pet />);

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
});
```

`findByTestId` is a function that finds a component by its test id. To catch a specific component for testing, we can add a `data-testid` attribute to the component.

For testing custom hooks, we can make a fake component, or using `@testing-library/react-hooks`, then we can use `renderHook` to render a component.

### Mocks

To test a component that uses a library that is not available in the browser, we can mock the library. A mock is a fake implementation.

Install

```
npm install -D jest-fetch-mock@3.0.3
```

Add to `package.json`

```json
{
  "jest": {
    "automock": false,
    "setupFiles": ["./src/setupJest.js"]
  }
}
```

Create `setupJest.js` in root.

```js
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();
```

Implement in testing

```js
test("...", async () => {
	const breeds = [
		...
	];
	fetch.mockResponseOnce(
		JSON.stringify({
		animal: "...",
		breeds,
		})
	);
	const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"));
	await waitForNextUpdate();
	...
});
```

### Snapshots

Snapshot tests are a low-cost way to write tests.

```
npm install -D react-test-renderer@17.0.2.
```

Add
```js
/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import Results from "../Results";

test("renders correctly with no pets", () => {
  const tree = create(<Results pets={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

The snapshot will show on the CLI and create a `__snapshots__` folder.

### Test Coverage with Istanbul

Add command to `package.json`

```json
"scripts": {
	...,
	"test:coverage": "jest --coverage"
	...
}
```

The script will generate a report of things that are covered and not coveredd with tests. It will also generate a `index.html` file open in the browser by running
```
open coverage/lcov-report/index.html
```

Add `coverage` to `.gitignore`