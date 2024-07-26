'use client'
import React from 'react';
import Circle from './Circle';
import { useColorMode } from '@chakra-ui/color-mode';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import '../globals.css'; // Ensure this is the correct path

const Contact: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Container maxW="full" mt={10} centerContent overflow="hidden">
      <Flex mt={4} mb={4} w="full" justifyContent="center">
        <Box
          bg={isDark ? 'rgba(0, 0, 0, 0.87)' : 'black'}
          color="white"
          borderRadius="lg"
          m={{ base: 4, md: 10 }}
          p={{ base: 5, md: 16 }}
          w={{ base: 'full', md: 'auto' }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 5, md: 10 }}>
              <WrapItem>
                <Box>
                  <Heading color="white">Contact.</Heading>
                  <Text mt={{ base: 3, md: 5 }} color="gray.500">
                    Feel free to fill up the following form to contact me!
                  </Text>
                  <Box width={{ base: '100%', sm: '250px' }} mt={5}>
                    <Circle />
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg={isDark ? 'black' : 'white'} borderRadius="lg" p={5} ml={4}>
                  <Box color={isDark ? 'grey' : 'black'}>
                    <VStack spacing={5}>
                      <form
                        action="https://formsubmit.co/6bfb6188e6676479175c152f6a2b8806"
                        method="POST"
                      >
                        <FormControl id="name" isRequired>
                          <FormLabel color={isDark ? 'white' : 'black'}>Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input placeholder="Name" type="text" name="name" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email" isRequired>
                          <FormLabel color={isDark ? 'white' : 'black'}>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input placeholder="Email" type="email" size="md" name="email" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel color={isDark ? 'white' : 'black'}>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Message"
                            name="message"
                          />
                        </FormControl>
                        <FormControl id="submit" float="right">
                        <Button
                            mt={2}
                            type="submit"
                            variant="solid"
                            color={isDark ? 'black' : 'white'}
                            _hover={{}}
                            sx={{
                              animation: 'gradientAnimation 5s ease infinite',
                              background: 'linear-gradient(90deg, rgba(255,74,6,1) 0%, rgba(184,87,255,1) 78%, rgba(255,13,142,1) 100%)',
                              backgroundSize: '200% 200%',
                            }}
                          >
                            Send
                          </Button>
                        </FormControl>
                        <input type="hidden" name="_next" value="https://work.aideedamsyar.com/thanks" />
                        <input
                          type="hidden"
                          name="_autoresponse"
                          value="Hello there! Aideed here. Thank you for sending me a message. If it happens to require a reply, I will get back to you soon! Here's a copy of your message."
                        />
                        <input type="hidden" name="_template" value="box" />
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;