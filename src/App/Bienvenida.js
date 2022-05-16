//Librerias y componentes

import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {HStack, Text, VStack} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"

import fondo2 from "../assets/ejemplo.jpg"

import {usePage, useChangePage} from "./Hooks"

export default function Bienvenida() {
  const page = usePage()
  const changePage = useChangePage()

  //Pantalla de inicio con la información del grupo y el proyecto
  //La imagen es obtenida de una página web, no es propia

  return (
    <div
      style={{
        width: "100%",
        background: `url(${fondo2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        position: "absolute",
      }}
    >
      <VStack align="left" height="100%" justify="space-between" margin="auto" maxWidth="8xl">
        <VStack align="left" paddingTop="50" spacing="40px">
          <Text
            color="#000080"
            fontFamily="Lato"
            fontSize="4xl"
            fontWeight="300"
            maxWidth="950px"
            textAlign="left"
          >
            DIAGNÓSTICO DE PANTOMOGRAFÍAS CON INTELIGENCIA ARTIFICIAL Y APRENDIZAJE PROFUNDO
          </Text>
          <Text
            color="#000000"
            fontFamily="Lato"
            fontSize="3xl"
            fontWeight="300"
            marginLeft="0"
            maxWidth="600px"
            textAlign="center"
          >
            Proyecto en desarrolo de un dispositivo para diagnóstico automático y visualización de
            radiografías panorámicas
          </Text>
        </VStack>
        <HStack align="left" justify="space-between" paddingBottom="20px" paddingTop="40">
          <IconButton
            aria-label="Search database"
            icon={<ArrowForwardIcon />}
            marginTop="90px"
            onClick={() => {
              changePage("Menu")
            }}
          />

          <Text
            border="1px dotted #75747F"
            color="#75747F"
            fontFamily="Arial"
            fontSize="xl"
            marginTop="30px"
            maxWidth="700px"
          >
            Creado por un equipo interdisciplinario con investigadores CONICET y el Departamento de
            Ingeniería Eléctrica y Computadoras de la UNS, supervisado por especialistas en
            diagnóstico por imágenes bucomaxilofacial de la UBA
          </Text>
        </HStack>
      </VStack>
    </div>
  )
}
