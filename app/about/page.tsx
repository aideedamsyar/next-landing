'use client'
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import { useRouter } from "next/navigation";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  VStack,
  Center
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  let router = useRouter();

  return (
    <Container maxW="container.lg" mt={5}>
      <VStack align="flex-start" spacing={4}>
        <Box>
          <Text
            textTransform={'uppercase'}
            color={isDark ? "white" : "gray.700"}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            p={2}
            rounded={'md'}
            display="inline-block"
            mt={2}
          >
            About me
          </Text>
          <Heading mt={4}>Hello there!</Heading>
          <Text mt={4}>My name is Tengku Aideed Amsyar. I am a Malaysian living in South Korea and an aspiring software engineer.</Text>
          <Text mt={4}>I created this site as a platform to showcase a glimpse into my professional endeavors and highlight my journey in computer science.</Text>
          <Text mt={4}>In my idle hours, I dive into the world of cinematography that spans filming and editing videos. Sometimes, my interest in music finds me at the piano, composing and producing melodies as a creative outlet.</Text>
          <Text mt={4}>Please feel free to reach out should you have any questions in mind. I would like to learn more about you!</Text>
          <ButtonGroup spacing={4} mt={4}>
            <Button onClick={() => {router.push("/resume")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Resume</Button>
            <Button onClick={() => {router.push("/contact")}} rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline'>Contact</Button>
          </ButtonGroup>
        </Box>
      </VStack>
    </Container>
  );
}