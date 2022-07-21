import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Box
      as={'section'}
      color="whiteAlpha.900"
      bgColor={'purple.600'}
      pt="98px"
      pb="198px"
      textAlign={'center'}
    >
      <Heading fontWeight={'800'} fontSize="48px">
        Simple Pricing for your business
      </Heading>
      <Text fontWeight={'500'} fontSize="24px">
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
};

export default Header;
