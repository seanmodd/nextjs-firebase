import Link from 'next/link';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';

import PageContainer from 'components/other/PageContainer';
import MyContainer from 'components/other/MyContainer';
import Actions from 'components/other/Actions';
import { useRef, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { MyDarkModeSwitch, BadgeButton, LoadButton } from 'styles/theme';
import { MyButton, NewButton } from 'styles/myChakra';
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Stack,
  Flex,
  Input,
  Textarea,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { useAuth } from '../auth';

export default function Home() {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: '#bbbfff86',
    dark: '#001db1',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <MyContainer>
        <Heading bg="blue" color={color[colorMode]}>
          Sample Header
        </Heading>
        <NewButton>
          <Link href="/other">Go To The Other Pages</Link>
        </NewButton>
        <Text mt={8} textAlign="center">{`User ID: ${
          user ? user.uid : 'No user is logged in!'
        }`}</Text>
        <VStack pt={50}>
          <Button
            variant="solid"
            variantColor="blue"
            width="100%"
            isDisabled={!user}
          >
            <Link href="/authenticated">
              <a>Go to authenticated route</a>
            </Link>
          </Button>

          <Button
            variant="solid"
            variantColor="green"
            width="100%"
            isDisabled={user}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Button>
        </VStack>
      </MyContainer>
    </>
  );
}
