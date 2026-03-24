---
title: 'Build a Modern User Interface with Chakra UI - Notes'
excerpt: 'A simple study note written as I take "Build a Modern User Interface with Chakra UI" course in egghead.io'
date: '2020-08-05'
slug: 'build-a-modern-user-interface-with-chakra-ui-notes'
---

This is the note I take as I watch this course 
[Build a Modern User Interface with Chakra UI - egghead.io](https://egghead.io/lessons/react-install-and-setup-chakra-ui-in-a-react-project)

For more information about Chakra UI, check out the [Chakra UI documentation](https://chakra-ui.com/docs).

## Install and Setup Chakra UI in a React Project

Add dependencies to project.

```sh
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

## or

yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Wrap the outer app in a `<ChakraProvider>` component.

```jsx
const App = () => {
  return (
	<ChakraProvider>
	  ...
	</ChakraProvider>
  );
}
```

## Build a Layout with the Container, Flex and VStack Component in Chakra UI

Import the component

```jsx
import { Container, Flex, VStack } from '@chakra-ui/react';
```

Use the component in jsx

```jsx
const IndexPage = () => (
	<Container>
		...
	</Container>
)
```

We can also style the Chakra UI components with style props. In the background, the style props are converted into CSS rules.

Some props also has custom values from Chakra that we can use e.g. `maxW="container.xl"` or `h={5}`. 

Some props also has it's own shorthands like `maxW` instead of `maxWidth` and `h`/`w` instead of `height`/`width`.

Chakra also has `Stack` component, it has support to set spacing between elements, it has two derivatives, `HStack` and `VStack`.

## Build a 2-Column Form with the SimpleGrid, FormControl, and Input Component in Chakra UI

Chakra has `SimpleGrid` component.

```jsx
import { SimpleGrid } from '@chakra-ui/react';
```

`SimpleGrid` is a grid component that can be used to create a grid of elements. We can set the number of columns and the spacing between them.

```jsx
...
	<SimpleGrid columns={2} columnGap={3} rowGap={2} rows={3}>
		...
	</SimpleGrid>
...
```

`GridItem` is a component that can be used to create a grid item inside the `SimpleGrid`. By setting the colSpan and rowSpan props, we can set the number of columns and rows that the item will take.

```jsx
import { GridItem } from '@chakra-ui/react';

...
<GridItem colSpan={1}>
	...
</GridItem>
...
```

Creating Form in Chakra UI has several inputs. We can use them to create a form. Several of them are `Input`, `Select`, and `Checkbox`. We can wrap them inside `FormControl` component. Inside `FormControl`, We can use `FormLabel` to create a label for the input.

## Create a Dark Mode Switcher in Chakra UI

Chakra UI has `useColorMode` and `useColorModeValue` React hook. It could be used to create a dark mode switcher.
We can use it with `onClick` props in button.

```jsx
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

	...
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
	...
	<VStack
		bg={bgColor}
	>
		<Button onClick={toggleColorMode}>
			
		</Button>
	</VStack>
	...
```

`useColorModeValue` used to decide the color on dark and light mode, with the first argument being the light mode color and the second argument being the dark mode color.

## Implement Responsive Design in Chakra UI

There are few ways to implement responsive design in Chakra UI. 

1. Responsive array syntax.

	```jsx
	py={[0, 10, 20]}
	```

2. Responsive object syntax.

	```jsx
	direction = {{ base: 'column-reverse', md: 'row' }}
	```

3. Use `useBreakpointValue`.

	```jsx
	import { useBreakpointValue } from '@chakra-ui/react';

	...
	const colSpan = useBreakpointValue({ base: 2, md: 1 });
	<GridItem colSpan={colSpan}>
		...
	</GridItem>
	...

	```

## Define Custom Colors and Fonts in Chakra UI

We could define custom themes by make a separate file and import `extendTheme()` method.

```jsx
import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
	...
});
```

and use it in the `<ChakraProvider>` component.

```jsx
<ChakraProvider theme={theme}>
...
</ChakraProvider>
```

We can also provide fallback value to the theme.

```jsx
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: `..., ${base.fonts?.heading}`,
		body: `..., ${base.fonts?.body}`,
	},
	colors: {
		...
	}
});
```

## Use Theme Extensions in Chakra UI

By using theme extension, we can extend the theme.

One of the theme extension is `withDefaultColorScheme` and use it inside `extendTheme()`.

```jsx
import { ..., withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
	{
		...
	},
	withDefaultColorScheme({
		colorScheme: 'brand',
		components: ['Checkbox', ...],
	})
);
```

We can also use another theme extensions like `withDefaultVariant`, etc.

By using theme extension, we can set custom style without manually set style to each components.

## Override the Built-in Component's Styles in Chakra UI

We can override component props inside `extendTheme`.

```jsx
const theme = extendTheme({
	...,
	components: {
		Input: {
			variants: {
				filled: {
					field: {
						_focus: {
							boderColor: 'brand.500'
						}
					}
				}
			}
			sizes: {
				md: {
					field: {
						borderRadius: 'none'
					}
				}
			}
		}
	}
})
```

We could also separate the style of the component into a separate variable.

```jsx
const inputSelectStyles: {
	...
}

const theme = extendTheme({
	...
	components: {
		Input: { ...inputSelectStyles },
		...
	}
})
```

## Create Custom Variants in Chakra UI


We can add custom variants like we override component props.

```jsx
const theme = extendTheme({
	...
	components: {
		Input: {
			variants: {
				custom: {
					border: none
				},
				...
			}
		}
	}
})
```

We can set light mode and dark mode color for the custom variant.

```jsx
const theme = extendTheme({
	...
	components: {
		Input: {
			variants: {
				primary: (props) => ({
					backgroundColor: mode('gray.100', 'whiteAlpha.100')(props),
				})
			}
		}
	}
})
```

```jsx
const theme = extendTheme({
	...
	components: {
		Input: {
			variants: {
				custom: {
					color: 'gray.500',
					colorMode: 'dark'
				},
				...
			}
		}
	}
})
```