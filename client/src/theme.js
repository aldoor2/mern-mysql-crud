import { extendTheme, theme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.twitter,
    secondary: theme.colors.gray,
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
        fontWeight: "bold",
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, "white")(props),
        }),
      },
    },
    Input: {
      variants: {
        solid: (props) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, "white")(props),
        }),
      },
    }
  },
  styles: {
    global: {
      'body': {
        backgroundColor: 'gray.900',
        color: 'white',
        lineHeight: 'tall',
      }
    }
  }
})