'use client'
import { Button, IconButton } from '@chakra-ui/button';
import { Icon } from '@chakra-ui/icon';
import { Box, Flex, HStack, Link, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { background } from '@chakra-ui/styled-system';
import {FaFacebookF, FaInstagram, FaGithub, FaLinkedin, FaSpotify} from 'react-icons/fa'

const Social: React.FC = () => {
    return (   
        <HStack>
            <Link href="https://github.com/aideedamsyar/"><Icon as={FaGithub} boxSize="1.5rem"></Icon></Link>
            <Link href="https://www.linkedin.com/in/aideedamsyar/"><Icon as={FaLinkedin} boxSize="1.5rem"></Icon></Link>
            <Link href="https://www.facebook.com/deed.tengku"><Icon as={FaFacebookF} boxSize="1.5rem"></Icon></Link>
            <Link href="https://www.instagram.com/aideedamsyar/"><Icon as={FaInstagram} boxSize="1.5rem"></Icon></Link>
            <Link href="https://open.spotify.com/artist/65TrbGXb7mfEMsyI8R2nUo?si=wZgVP2GHQ2KFjO6KsrwmKw"><Icon as={FaSpotify} boxSize="1.5rem"></Icon></Link>
        </HStack>
        
    );
}
 
export default Social;