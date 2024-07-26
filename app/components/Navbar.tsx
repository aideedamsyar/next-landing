"use client"
import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { Flex, Spacer, VStack } from '@chakra-ui/layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import { ChevronDownIcon } from '@chakra-ui/icons'; 
import Link from 'next/link';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('#E5E5E5', '#333');
    const isDark = colorMode === "dark";
    const router = useRouter(); 

    return (
        <div>
            <VStack p={3} pb={0}>
                <Flex w="100%">
                <div onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
                    <Image
                        src="/logoPNG.png" // Make sure this path is correct
                        alt="logo"
                        width={50}
                        height={50}
                        style={{ display: 'block' }} // Ensures image takes up the full space of the div
                    />
                </div>                    
                    <Spacer />
                    <IconButton
                        mr={2}
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        icon={isDark ? <FaSun /> : <FaMoon />}
                        isRound={true}
                        onClick={toggleColorMode}
                    />
                    <Menu>
                        <MenuButton
                            px={4}
                            py={2}
                            transition='all 0.2s'
                            borderRadius='md'
                            borderWidth='1px'
                            _hover={{ bg: 'gray.400' }}
                            _expanded={{ bg: 'blue.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Menu <ChevronDownIcon />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
                            <MenuItem onClick={() => router.push('/about')}>About</MenuItem>
                            <MenuItem onClick={() => router.push('/resume')}>Resume</MenuItem>
                            <MenuItem onClick={() => router.push('/contact')}>Contact</MenuItem>
                            <MenuDivider />
                            <MenuItem as='a' href="https://aideedamsyar.com/blog">Blog</MenuItem>
                            <MenuItem as='a' href="https://studio.aideedamsyar.com">Art Inspiration</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </VStack>
        </div>
    );
}