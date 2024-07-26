// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from './components/Theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}