'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import { Box, Button, Link, Text, Flex, Spacer, Stack, useToast, CloseButton } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from "@chakra-ui/color-mode";
import GamingTime from './GamingTime'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import '../globals.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

function Resume() {
    const toast = useToast();

    const showToast = () => {
        toast({
            duration: 8000,
            isClosable: true,
            render: ({ id, onClose }) => (
                <Box className="animated-gradient-bg" p={3} borderRadius="md" maxWidth="sm">
                    <strong>Removed Content</strong>
                    <Text fontSize='md'>Hello, Aideed here. The file and some contents of the CV are no longer public. Feel free to contact me if you would like to access them. Have a great day!</Text>
                    <Button mt="1.5" size="sm" onClick={() => onClose()} color="black">Close</Button>
                </Box>
            ),
        });
    };

    let router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <div>
            <Container>                
            <Box mt="0" ml={5} alignSelf='flex-start'>
                <Text fontSize="7xl" fontWeight="bold">Resume.</Text>
            </Box>
            <GamingTime />
            <Stack direction='row'>
                <Button variant='solid' mt={4} size='xs' mb="1.5rem" onClick={showToast}>Download CV (PDF)</Button>
                
            </Stack>
                    
            <Accordion mb={6} allowToggle borderColor={isDark ? "gray.100" : "gray.500"}>
                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Education
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">Hanyang University</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Seoul, South Korea</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Bachelor of Computer Science </Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2023 - 2027 (Expected)</Text>
                    </Flex>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">Silla University</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Busan, South Korea</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Korean Language Preparatory Program</Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2022 - 2023</Text>
                    </Flex>
                    </AccordionPanel>

                    <AccordionPanel pb={4}>
                    <Flex>
                        <Text fontSize="2xl" fontWeight="bold">University of Malaya</Text>
                    </Flex>    
                    <Text fontSize="sm" fontWeight="bold ">Kuala Lumpur, Malaysia</Text>
                    <Flex>
                        <Text mr={2} color={isDark ? "gray.100" : "gray.900"} fontSize="lg" fontWeight="normal">Foundation in Physical Sciences</Text>
                        <Text color='gray.500' fontSize="xs" fontWeight="normal">2020 - 2021</Text>
                    </Flex>
                    </AccordionPanel>

                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Skills & Interest
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Skills</Text>                
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Fluent in C, Java, Python, HTML5, CSS3/SASS, Javascript, React.js, Microsoft Office, Apple iWork. Videography using Final Cut Pro X, Adobe Premiere Pro. Product Design (UI/UX) using Figma. Language: Malay, English, Korean.</Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Certification</Text>       
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Test of Proficiency in Korean (TOPIK) - Level 5</Text>
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Malaysian University English Test (MUET) - Band 5</Text>
                    <Text color={isDark ? "gray.100" : "gray.500"} fontSize="sm" fontWeight="normal">(Equivalent to CEFR C1/C2, IELTS 7.0-8.0, TOEFL IBT 94-114 & TOEFL PBT 560-625)</Text>
                             
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Data Science for Business, DataCamp (<Link color={'blue'} onClick={() => {window.open("https://www.datacamp.com/statement-of-accomplishment/course/25d6dcdf824eec8d8825aa562af48c1326fee071")}}>See credential</Link>)</Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                    <Text color='gray.500' fontSize="md" fontWeight="normal">Interests</Text>                
                    <Text color={isDark ? "gray.100" : "gray.900"} fontSize="sm" fontWeight="normal">Full Stack Software Engineering (primarily Front-End Development), Product Design (UI/IX), Cinematography, Writing.</Text>
                    </AccordionPanel>
                </AccordionItem>
                                            
            </Accordion>
            <Button mb={10} onClick={() => {router.push("/contact")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Contact</Button>
            </Container>
             
        </div>
    )
}

export default Resume
