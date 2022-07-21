import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export const ListItem = ({ children }) => {
  return (
    <HStack as={'li'}>
      <FaCheckCircle color={'purple'} />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <HStack
      maxWidth={'994px'}
      justifyContent="center"
      alignItems={'stretch'}
      margin={'auto'}
      mt={'-150px'}
    >
      <VStack
        borderLeftRadius={'5px'}
        p="10"
        bg={'purple.100'}
        color={'blackAlpha.900'}
        boxShadow="lg"
      >
        <Text fontSize={'2xl'} fontWeight="extrabold">
          Premium PRO
        </Text>
        <Heading>₹329</Heading>
        <Text fontWeight={'black'}>billed just once</Text>
        <Button size={'lg'} colorScheme={'purple'}>
          Get Started
        </Button>
      </VStack>
      <Box
        boxShadow="lg"
        borderRightRadius={'5px'}
        margin={'0 !important'}
        bgColor={'white'}
        p={'10'}
      >
        <Text mb={'3'} fontWeight={'extrabold'}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </Text>
        <Stack spacing={'5'} as="ul">
          <ListItem>Lorem ipsum dolor sit amet.</ListItem>
          <ListItem>Lorem ipsum ef sit amet.</ListItem>
          <ListItem>Lorem ipsum dolor sit amet.</ListItem>
          <ListItem>Lorem ipsum dolor sit amet.</ListItem>
        </Stack>
      </Box>
    </HStack>
  );
};
export default Pricing;
