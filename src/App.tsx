// import { useEffect, useState } from "react";

import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";

import {
  HStack,
  Button,
  Heading,
  Box,
  Stack,
  Container,
} from "@chakra-ui/react";

function App() {
  const bg = useColorModeValue("green.500", "blue.500");

  const handleClick = () => {
    alert("Hello");
  };

  return (
    <Container bg={bg}>
      <Heading className="test" as="h1">
        Posts
      </Heading>
      <HStack>
        <Button onClick={handleClick}>Click me</Button>
      </HStack>
      <Box
        data-state="open"
        _open={{
          animation: "fade-in 1000ms ease-out",
        }}
      >
        Hello
      </Box>
      <Demo></Demo>
      <Demo2></Demo2>
      <ThemeIcon />
    </Container>
  );
}

const Demo = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Theme
    </Button>
  );
};

const Demo2 = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("blue.500", "green.200");
  const color = useColorModeValue("white", "gray.900");

  return (
    <Stack align="flex-start" gap="4">
      <Box p="2" bg={bg} color={color}>
        This box&apos;s style will change based on the color mode.
      </Box>
      <Button variant="outline" size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </Stack>
  );
};

const ThemeIcon = () => {
  return <ColorModeButton />;
};

export default App;
