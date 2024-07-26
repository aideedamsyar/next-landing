'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Heading, Box } from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode";
import Thanks from './Thanks'; // Adjust the path as necessary

const ThanksPage: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const router = useRouter();

  return (
    <div>
      <Container mt={20}>
        <Heading mt="2rem" mb="1.5rem" lineHeight="2.5rem" fontSize="2.5rem">
          The message is on its way!
        </Heading>
        <Box width="100%" maxW="500px" mb="1.5rem"> 
            <Thanks />
        </Box>
        <Button onClick={() => router.push("/")}>Back to home</Button>
      </Container>
    </div>
  );
};

export default ThanksPage;