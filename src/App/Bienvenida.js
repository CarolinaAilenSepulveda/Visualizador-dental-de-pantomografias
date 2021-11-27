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
      <div
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight angle={0.15} penumbra={1} position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} />
          </Suspense>
        </Canvas>
      </div>
      <Container maxW="container.xl">
        <VStack>
          <div style={{position: "absolute", bottom: 200, left: 700, width: 100}}>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => {
                changePage("Panoramica")
              }}
            >
              Siguiente
            </Button>
          </div>
          <Text
            bottom={400}
            color="teal"
            fontFamily="monospace"
            fontSize="8xl"
            left={500}
            position="absolute"
          >
            Bienvenida
          </Text>
        </VStack>
      </Container>
    </div>
  )
}
