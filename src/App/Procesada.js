//Librerias y componentes

import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {HStack, Image, Text, VStack, Button, Container} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {ArrowBackIcon} from "@chakra-ui/icons"

import ola1 from "../assets/wave1.svg"

import {usePage, useChangePage} from "./Hooks"

export default function Procesada({imagen}) {
  const page = usePage()
  const changePage = useChangePage()

  //Esta pantalla muestra la imagen de la pantomografía procesada, mediante la base de datos

  return (
    <VStack
      background={`url(${ola1})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      position="relative"
      width="100%"
    >
      <Container height="100%" maxW="4xl">
        <VStack paddingTop="0" spacing="60px">
          <Text
            color="#75747F"
            fontFamily="Lato"
            fontSize="4xl"
            fontWeight="300"
            marginTop="90px"
            maxWidth="950px"
            textAlign="left"
          >
            PROCESAMIENTO DE LA PANTOMOGRAFÍA
          </Text>
          <Image boxShadow="0px 10px 15px 10px rgb(0 0 0 / 10%)" src={imagen.procesada.url} />
        </VStack>
      </Container>
      <HStack
        justify="flex-start"
        paddingBottom="20px"
        paddingLeft="50px"
        paddingTop="40px"
        position="relative"
        spacing="20px"
        width="100%"
      >
        <IconButton
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          onClick={() => {
            changePage("Negatoscopio")
          }}
        />
        <Button
          colorScheme="gray"
          fontFamily="Lato"
          fontSize="xl"
          fontWeight="300"
          height="40px"
          size="sm"
          textColor="#75747F"
          variant="solid"
          onClick={() => {
            changePage("Diagnostico")
          }}
        >
          DIAGNÓSTICO
        </Button>
      </HStack>
    </VStack>
  )
}
