'use client'
import React, { useEffect, useRef }  from 'react'
import lottie from "lottie-web";
import { useRouter } from 'next/navigation';
import { Box, Button, ButtonGroup, Container, Heading, Link, Text } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import NotFound from './components/NotFound';

const NotFoundPage: React.FC = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const router = useRouter();

    return (
        <div>
            <Container mt={20}>
                <Heading mt={4} lineHeight="2.5rem" fontSize="2.5rem">Hmm, the page doesn&apos;t seem to be available.</Heading>
                <Box mt={-10} width="100%" maxW="500px"> 
                    <NotFound />
                </Box>            
                <Text mt={-32}>If you think this is a mistake, feel free to send feedbacks.</Text> 
            </Container>
            <Container>
                <ButtonGroup mt={4} mb={4}>
                    <Button onClick={() => {router.push("/contact")}}>Send feedback</Button>
                    <Button onClick={() => {router.push("/")}}>Back to home</Button>
                </ButtonGroup>
            </Container>
        </div>
    )
}

export default NotFoundPage;