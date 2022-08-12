import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	fonts: {
		body: "'Ubuntu', system-ui, sans-serif",
		heading: "'Ubuntu', system-ui, sans-serif"
	},
	styles: {
		global: {
			h1: {
				fontSize: '3xl',
				fontWeight: 'bold'
			},
			h2: {
				fontSize: '2xl',
				fontWeight: 'bold'
			},
			h3: {
				fontSize: 'lg'
			},
			h4: {
				fontSize: 'md'
			}
		}
	},
	components: {
		Heading: {
			baseStyle: {
				my: 5
			},
			defaultProps: {
				size: { base: 'xl', lg: 'xl' }
			}
		},
		Text: {
			baseStyle: {
				my: 1,
				fontSize: { base: 'lg', lg: 'xl' }
			}
		}
	}
});
