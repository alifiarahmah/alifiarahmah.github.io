---
title: 'Complete Intro to React, v7 - Notes'
excerpt: 'A simple study note written as I take "Complete Intro to React, v7" course in FrontendMasters'
date: '2020-08-06'
slug: 'complete-intro-to-react-v7-notes'
---

This is the note I take as I watch this course 
[Complete Intro to React, v7 - FrontendMasters](https://frontendmasters.com/courses/complete-react-v7/)
## Vanilla React

React can be used purely by importing the react script in HTML.

````HTML
<body>
  <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
  <script>
    // Your code is going to go here
  </script>
</body>
````

Then we put our code in the last script tag.

```js
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

To implement best practice, we could separate the code into a separate file called `App.js` then import it in the HTML file with `<script src="App.js"></script>`.

### Component

Create component that return element with multiple children with passing it in array of elements. 
```js
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Havanese"),
  ]);
};
```

The component will be used inside the `App` component.
```jsx
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    ...
    React.createElement(Pet)
  );
}
```

Add props to the element
```jsx
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      ...
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese"
      })
    ]);
}
```

## JS Tools

### npm (Node Package Manager)

Bring various open source code modules to import into the project.

To initialize, run
```sh
npm init -y
```
It will make a new file called `package.json` in the root directory.

### Prettier

Re-print the code with a predefined style. This is a good way to make sure the code is formatted correctly.

To install prettier globally, run
```sh
npm install --global prettier
```

To declare a project as a prettier project, create a file `.prettierrc`. This configuration could be either empty (only contains `{}`) or have some configuration.

To manually format the code, run
```sh
prettier --write \"src/**/*.{js,jsx}\"
```

We can also set up a CLI command in the `package.json` to format the code automatically.

```json
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx}\""
}
```

Then we can use `npm run format` to format the code.

### ESLint

It is a linter to enforce a style guide for JavaScript code.

To install ESLint, run
```sh
npm install -D eslint@8.8.0 eslint-config-prettier@8.3.0
```

There are so many preset configs. To create a new config, create a file `.eslintrc.json`.

```json
{
  "extends": ["eslint:recommended", "prettier"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

To run ESLint, add the CLI command to `"scripts"`.
```sh
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
```

### Git

There are several things that shouldn't we commit to repo. Add to `.gitignore`

- `node_modules`
- `.parcel-cache/`
- `dist/`
- `.env`
- `.DS_Store`
- `coverage/`
- `.vscode/`

### Parcel

A bundler for modern JavaScript applications. It crawl through the project and bundle all the files together and then run the code on a server.

Install Parcel with
```sh
npm install -D parcel@2.2.1
```

Inside the `package.json` file, add the following script to `"scripts"`.
```sh
"dev": "parcel src/index.html",
```

Then we can use `npm run dev` to run the app. The app will be served on `localhost`. It will automatically watch for changes and rebuild the app.

### Browserslist

Transforms JS code from futuristic code to code that is understandable by older browsers with Babel.

Browserslist are intstalled with Parcel and can be used to specify the browsers that the code will be transpiled to. Add to `package.json`

```json
{
    ...
    "browserslist": [
        "last 2 Chrome versions"
    ]
}
```

## Core React Concepts

### JSX

Makes code more readable and more HTML-like. React component in JSX should be written in capitalized format.

```jsx
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
```

Javascript expression inside the return value is wrapped in `{}` e.g. `{props.name}`.

### Hooks

Hooks get caught every time a component is rendered. We can keep pieces of mutable state and modify them later using the updater functions.

To add a hook 

**useState**

`const [state, setState] = useState(initialState)`. 

State is the piece of mutable state and setState is the updater function. The updater function is used to update the state value.

```jsx
import { useState } from "react";

const App = () => {
    const [location, setLocation] = useState("");
    return (
        <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
        />
    );
}
```

**useEffect**

Allows to say "do a render of this component first so the user can see something then as soon as the render is done, then do something (the something here being an effect.)". The effect is a function that is called when the component is rendered.

To let the user see the UI first before make request to API, we put the request API in the `useEffect` hook.

```jsx
// change import at top
import { useEffect } from "react";

const App () => {
    useEffect(() => {
      requestPets();
    }, []); // dependent var. will call exactly once.
    // if we want it to call every time breed changes, change [] to [breed]
    // if no second argument, it will call everytime the component is rendered (anything changes).
    
    async function requestPets() {
      const res = await fetch(
        ...
      );
    }
    
    ...
}
```

**Custom Hooks**

We can use one or several react hooks to make a reusable custom hooks.

```jsx
import { useState, useEffect } from "react";

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      ...
    }

    async function requestBreedList() {
      ...
    }
  }, [animal]);

  return [breedList, status];
}
```

The function will return two things. We can use the hooks like this

```jsx
import useBreedList from "./useBreedList";

const [breeds] = useBreedList(animal);
```

### Handling User Input

To listen to user actions on input like submit events

```jsx
<form
  onSubmit={e => {
    e.preventDefault();
    requestPets();
  }}
>
```

There are other listener like `onChange`, on mouse enter, key pres, copy paste, etc.

### React Dev Tools

**`NODE_ENV=development`**

When using Parcel, there are some developer conveniences for debugging stuffs to help in development. When building the app, the environment variable will be `NODE_ENV=production` to strip the development tools and make the bundle smaller.

**<React.StrictMode>**

Will give additional warnings about things that might be wrong in React usage.

**DevTools extension**

Extension to explore DOM tree, modify state, props, etc.

## React Capabilities

### React Router

Install

```sh
npm install react-router-dom@6.2.1
```

To use

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      ...
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
}
```

To make link to page, use `<Link>` so React won't totally reload the entire app all over again when clicked.

```jsx
<Link to={`/details/${id}`} className="pet">
  ...
</Link>;
```

To get the `id` params from the URL, use `useParams()`.

```jsx
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return (
    ..
  );
}
```

### Class Components

Use class as a way to declare a component.

```jsx
import { Component } from "react";
...

class Details extends Component {
  constructor() {
    super();
    this.state = {
      ...
    };
  }

  async componentDidMount() {
    ...
  }

  render() {
    return (
      <div>
        ...
      </div>
    );
  }
}
```

Class elements:

- Declaration: React class extends `React.Component` and have one render method that returns JSX.
- `constructor()`: We can set the initial state. We have to write `super(props)` at the beginning so it also run the constructor of the parent class.
- `componentDidMount()`: Called after the component is rendered. Usage example: to make a request to API.
- `this.state`: Mutable state of component, use `this.setState` to modify
- `this.props`: Come from parent component, immutable.

If working with hooks, we make wrapper component that uses the hook and pass the jsx returns to the wrapper component.

```jsx
class Details extends Component {
  ...
  render() {
    ...
    return (
      ...
    );
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <Details params={params} />
  );
}
```

### Class Properties

Install a Babel plugin to use class properties to replace constructor.

```sh
npm i -D @babel/plugin-proposal-class-properties@7.16.7
```

Make file `.babelrc`

```json
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

The constructor in class Details can be replaced to

```jsx
class Details extends Component {
  state = { loading: true };
  ...
}
```

### Managing State in Class Components

We can have defaultProps in class components to set props that a component has by default if it's not passed from the parent.

Make event listener

```jsx
handleIndexClick = event => {
  this.setState({
    ...
  });
}
...
<img 
  onClick={this.handleIndexClick} 
  ... 
/>
```

## Special Case React Tools

### Error Boundaries

To catch errors in components.

```jsx
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info){
    console.error("ErrorBoundary caught an error", error, info);
  }

  render () {
    if (this.state.hasError) {
      return ...
    }

    return ...
  }
}
...
```

Now wrap the component with `<ErrorBoundary>` and catch the error.
```jsx
const WrappedDetails = () => {
  ...
  return (
    <ErrorBoundary>
      ...
    </ErrorBoundary>
  )
}
```

To make redirect automatically, use `componentDidUpdate`

```jsx
class Details extends Component {
  state = { hasError: false, redirect: false };
  ...

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  ...
  
  if (this.state.redirect) {
    return <Navigate to="/" />;
  } } else if (this.state.hasError) {
    ...
  }
}
```

### Context

Context is like global state in application. Mostly replaces Redux. Context won't really be used in most of applications, only use when needed.

```jsx
import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);

...
```

`createContext` returns two object, `Provider` and `Consumer`. Provider is the component that provides the context and Consumer is the component that consumes the context. Consumer accept function as a child and give it to the context. To use the consumer, use `useContext`.

```jsx
import ThemeContext from "./ThemeContext";

// top of SearchParams function body
const [theme, setTheme] = useContext(ThemeContext);
```

To consume inside class component

```jsx
// import
import ThemeContext from "./ThemeContext";

// replace button
<ThemeContext.Consumer>
  {([theme]) => (
    <button style={{ backgroundColor: theme }}>Adopt {name}</button>
  )}
</ThemeContext.Consumer>
```

To change the theme in the context, use `setTheme`.


### Portals and `useRef`

Separate mount point. Can be used to make a modal or contextual navbar.

```jsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}
...
```

This will mount the component when rendered and then remove it when unrendered.

Refs are instance variable for function components. Anytime refer to `elRef.current`, it will always referring to the same element, while `useState` will always refer to the state of variable when the function is called.