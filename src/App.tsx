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
  Center,
  AspectRatio,
  Image,
  Circle,
  Float,
  Avatar,
  Badge,
  ScrollArea,
} from "@chakra-ui/react";

import LoremIpsum from "react-lorem-ipsum";
import { useState, useRef, useEffect, useCallback } from "react";

function App() {
  const bg = useColorModeValue("green.900", "blue.900");

  const handleClick = () => {
    alert("Hello");
  };

  return (
    <Center>
      <Center w="1600px" h="500px" bg={bg}>
        <Stack>
          <Demo2></Demo2>
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
          <ThemeIcon />
          <Demo></Demo>

          <Demo3></Demo3>
          <Demo4></Demo4>
          <Demo5></Demo5>
          <Demo6></Demo6>
          <Demo7></Demo7>
        </Stack>
      </Center>
    </Center>
  );
}

const Demo7 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollAreaProps = {
    height: "8.5rem",
    maxW: "lg",
    bg: "gray.800",
    p: 4,
    pt: 0,
    pb: 0,
    borderRadius: "md",
  };

  const handleScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const scrollTop = viewport.scrollTop;
    const scrollHeight = viewport.scrollHeight - viewport.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.addEventListener("scroll", handleScroll);

    // Initial calculation using requestAnimationFrame to avoid synchronous setState
    requestAnimationFrame(() => {
      handleScroll();
    });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Stack gap={0}>
      <Box
        w="100%"
        h="4px"
        bg="gray.700"
        borderRadius="full"
        overflow="hidden"
        mb={2}
      >
        <Box
          h="100%"
          bg="blue.500"
          borderRadius="full"
          transition="width 0.1s ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </Box>
      <ScrollArea.Root {...scrollAreaProps} variant="hover" size="lg">
        <ScrollArea.Viewport ref={viewportRef}>
          <ScrollArea.Content spaceY="4" textStyle="sm">
            <LoremIpsum p={10} />
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar bg="blue.500">
          <ScrollArea.Thumb cursor="pointer" bg="red.500" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Stack>
  );
};

const Demo6 = () => {
  return (
    <Box position="relative" display="inline-block" w="50px" h="50px">
      <Avatar.Root size="lg" w="100%" h="100%">
        <Avatar.Image
          src="https://wallpapers.com/images/hd/green-grass-cute-cat-hd-de37pmurfb12yl3j.jpg"
          borderRadius="md"
        />
      </Avatar.Root>

      <Badge
        position="absolute"
        bottom="-5px"
        right="-5px"
        colorScheme="teal"
        fontSize="0.6rem"
        borderRadius="md"
        px="2"
        py="1"
      >
        New
      </Badge>
    </Box>
  );
};

const Demo5 = () => (
  <Box position="relative" w="80px" h="80px" bg="bg.emphasized">
    <Demo3></Demo3>
    <Float placement="top-end">
      <Circle size="6" bg="red" color="white">
        3
      </Circle>
    </Float>
  </Box>
);

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

  const bg = useColorModeValue("blue.500", "black");
  const color = useColorModeValue("white", "white");

  return (
    <Stack align="flex-start" gap="4">
      <Box p="2" bg={bg} color={color}>
        This box&apos;s style will change based on the color mode.
      </Box>
      <Button
        variant="solid"
        size="sm"
        onClick={toggleColorMode}
        colorScheme="yellow"
      >
        Toggle Mode
      </Button>
    </Stack>
  );
};

const Demo3 = () => {
  return (
    <>
      <AspectRatio w="100%" maxW="100px" ratio={1 / 1}>
        <Image
          src="https://wallpapers.com/images/hd/green-grass-cute-cat-hd-de37pmurfb12yl3j.jpg"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
    </>
  );
};

const Demo4 = () => {
  return (
    <>
      <Box
        as="Center"
        bg="tomato"
        p="4"
        _hover={{
          bg: "blue.500",
          shadow: "0 0 10px 10px rgba(245, 245, 245, 0.1)",
        }}
        transition="all 0.3s ease-in-out"
        cursor="pointer"
        _focus={{ bg: "green.500" }}
        borderRadius="md"
        borderWidth="1px"
        borderColor="gray.200"
        shadow="10px 10px 10px 10px rgba(0, 0, 0, 0.1)"
      >
        This is a box
      </Box>
    </>
  );
};

const ThemeIcon = () => {
  return <ColorModeButton />;
};

export default App;
