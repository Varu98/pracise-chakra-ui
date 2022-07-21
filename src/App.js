import React from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Grid,
  theme,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Pricing from './components/Pricing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher /> */}
      <Header />
      <Pricing />
    </ChakraProvider>
  );
}

export default App;
