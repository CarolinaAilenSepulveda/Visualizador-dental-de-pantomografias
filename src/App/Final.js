import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {
  Center,
  Box,
  HStack,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Button,
  Container,
} from "@chakra-ui/react"

import imagen from "../assets/resultado1.png"

import {usePage, useChangePage} from "./Hooks"

export default function Final() {
  const page = usePage()
  const changePage = useChangePage()

  console.log(page)

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightblue",
        height: "100vh",
        position: "relative",
      }}
    >
      <Container height="100%" maxW="8xl" widht="100%">
        <VStack height="100%" paddingTop="50" spacing="20px">
          <Text color="teal" fontFamily="monospace" fontSize="6xl">
            Pantomografía procesada
          </Text>
          <Image src={imagen} />
        </VStack>
      </Container>
      <Button
        bottom={20}
        colorScheme="teal"
        position="absolute"
        right={10}
        size="lg"
        variant="outline"
        onClick={() => {
          changePage("App")
        }}
      >
        Atrás
      </Button>
    </div>
  )
}
