//Librerias
import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {Center, Box, VStack, HStack, Image, Text, Link} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {ArrowBackIcon} from "@chakra-ui/icons"

import ola1 from "../assets/wave1.svg"

import {usePage, useChangePage} from "./Hooks"

export default function Procesada({imagen}) {
  const page = usePage()
  const changePage = useChangePage()

  return (
    <VStack
      background={`url(${ola1})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="100vh"
      justify="space-between"
      position="relative"
      width="100%"
    >
      <HStack height="100%" justify="space-around" paddingTop="20px" width="100%">
        <Text
          color="#DDE5EA"
          fontFamily="Lato"
          fontSize="4xl"
          fontWeight="300"
          maxWidth="1000px"
          textAlign="left"
        >
          DIAGNÓSTICO DENTAL
        </Text>

        <Link href={imagen.diagnostico.url} target="_blank">
          <VStack>
            <Image
              boxShadow="0px 10px 15px 10px rgb(0 0 0 / 10%)"
              maxHeight="600px"
              //maxWidth="500px"
              src={imagen.diagnostico.url}
            />

            <Text
              color="#DDE5EA"
              fontFamily="Lato"
              fontSize="xl"
              fontWeight="300"
              maxWidth="1000px"
              textAlign="left"
            >
              click para abrir el diagnóstico
            </Text>
          </VStack>
        </Link>
      </HStack>
      <HStack
        justify="flex-start"
        paddingBottom="20px"
        paddingLeft="50px"
        paddingTop="20px"
        position="relative"
        spacing="20px"
        width="100%"
      >
        <IconButton
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          onClick={() => {
            changePage("Procesada")
          }}
        />
      </HStack>
    </VStack>
  )
}
