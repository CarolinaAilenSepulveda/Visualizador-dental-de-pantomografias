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
        <VStack paddingTop="100" spacing="30px">
          <Text color="green.500" fontFamily="monospace" fontSize="5xl">
            Diagnóstico de pantomografías mediante el uso de inteligencia artificial y aprendizaje
            profundo
          </Text>
          <Text color="teal" fontFamily="monospace" fontSize="3xl">
            Proyecto en desarrolo de un dispositivo para el diagnóstico automático y visualización
            de radiografías panorámicas.
          </Text>
          <Text color="teal" fontFamily="monospace" fontSize="3xl">
            Creado por un equipo interdisciplinario con investigadores Conicet y el Departamento de
            Ingeniería Eléctrica y Computadoras de la Universidad del Sur, supervisado por
            especialistas en diagnóstico por imágenes bucomaxilofacial de la Universidad de Bs As.
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
