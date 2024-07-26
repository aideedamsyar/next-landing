import React from 'react';
import { useColorMode, Button, VStack, Text, Box, Flex, Center, Stack } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import Links from './components/Links';
import Social from './components/Social';

export default function Home() {

  return (
    <VStack mt={20}>
      <Stack align='center' mt={"4rem"}>
        <Flex
          alignSelf="flex-start">
          <Center>
            <Box ml={10} mr={10} mb={10} width='70%'>
              <Text fontSize='xl'>I&apos;m Tengku, an aspiring full stack software engineer based in Seoul, South Korea. I find myself drawn to full-stack software engineering, particularly front-end development. I am also interested in product design and writing, and I enjoy learning about these fields whenever I can.</Text>
              <Stack mt={10}>
                <Links />
                <Social />
              </Stack>
            </Box>
          </Center>
        </Flex>
      </Stack>
    </VStack>
  );
}