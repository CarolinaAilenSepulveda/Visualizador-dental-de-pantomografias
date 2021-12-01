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

export default function Diagnostico({imagen}) {
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
        <VStack paddingTop="100" spacing="20px">
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
          page === "Diag1"
            ? changePage("Final")
            : page == "Diag2"
            ? changePage("Final2")
            : page == "Diag3"
            ? changePage("Final3")
            : changePage("Final4")
        }}
      >
        Atrás
      </Button>
    </div>
  )
}
