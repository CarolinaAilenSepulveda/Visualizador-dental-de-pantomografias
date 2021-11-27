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
          <Text
            bottom={620}
            color="teal"
            fontFamily="monospace"
            fontSize="6xl"
            left={350}
            position="absolute"
          >
            Pantomografía procesada
          </Text>
          <Image position="absolute" right={450} src={imagen} top={200} />
          <div style={{position: "absolute", bottom: 20, right: 10, width: 100}}>
            <Button
              colorScheme="teal"
              size="lg"
              variant="outline"
              onClick={() => {
                changePage("App")
              }}
            >
              Atrás
            </Button>
          </div>
        </VStack>
      </Container>
    </div>
  )
}
