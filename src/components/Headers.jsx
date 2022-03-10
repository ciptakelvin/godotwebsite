import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Link as CLink,
    useDisclosure,
} from '@chakra-ui/react';

import Link from 'next/link';


function Headers({ headers_items }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="pink.300"
            color="white"
        >
            <Flex align="center" mr="5">
                <Heading as="h1" size="lg" letterSpacing="tighter">
                    GodotID
                </Heading>
            </Flex>
            <Box>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: isOpen ? "block" : "none", md: "flex" }}
                    alignSelf="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    {headers_items.map((a, i) => (<CLink><Link href={a.link}>{a.title}</Link></CLink>))}
                </Stack>
            </Box>
        </Flex>
    );
}

export default Headers;
