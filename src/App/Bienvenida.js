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

import {usePage, useChangePage} from "./Hooks"

export default function Bienvenida() {
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
      <Container height="100%" maxW="8xl">
        <VStack paddingTop="200" spacing="20px">
          <Text color="teal" fontFamily="monospace" fontSize="8xl">
            Bienvenida
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => {
              changePage("Panoramica")
            }}
          >
            Siguiente
          </Button>
        </VStack>
      </Container>
    </div>
  )
}
