import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',  // Default to light mode
  useSystemColorMode: false,  // Disables automatic switching based on OS settings
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'rgb(20, 18, 20)02C' : '#E5E5E5', 
    },
    p: {
        fontSize: 'xl',
        lineHeight: 'tall',
    }
  }),
};

export const theme = extendTheme({ config, styles });