import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

export const theme = extendTheme({
	body: {
		bg: (props: StyleFunctionProps) => mode("gray.100", "whiteAlpha.100")(props),
	},
	fonts: {
		body: "'Ubuntu', system-ui, sans-serif",
		heading: "'Ubuntu', system-ui, sans-serif",
	},
	components: {
		Heading: {
			baseStyle: {
				my: 5
			},
			defaultProps: {
				size: { base: "xl", lg: "2xl"}
			}
		},
		Text: {
			baseStyle: {
				my: 1
			},
			defaultProps: {
				size: "2xl"
			}
		},
	}
})