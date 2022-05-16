//Librerias y componentes

import React, {useRef, Suspense} from "react"
import {Canvas, useFrame} from "@react-three/fiber"
import {HStack, Image, Text, VStack} from "@chakra-ui/react"
import {IconButton} from "@chakra-ui/react"
import {ArrowBackIcon} from "@chakra-ui/icons"

import ola1 from "../assets/wave1.svg"

import {useChangePage} from "./Hooks"
import {HStackContainer} from "./styles"
const Menu = ({imagenes, setImagenSeleccionada}) => {
  const changePage = useChangePage()

  //En esta pantalla tenemos el menú de pantomografías desde la base y se las configura como
  //botones, para al hacer click que se coloque como textura del negatoscopio

  return (
    //Seleccionador de radiografia
    <VStack
      background={`url(${ola1})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="100%"
      justify="space-between"
      w="100%"
    >
      <Text
        color="#75747F"
        fontFamily="Lato"
        fontSize="4xl"
        fontWeight="300"
        marginTop="90px"
        maxWidth="950px"
        textAlign="left"
      >
        SELECCIONE PANTOMOGRAFÍA
      </Text>
      <HStackContainer>
        {imagenes
          .sort(function (a, b) {
            if (a.nombre > b.nombre) {
              return 1
            }
            if (a.nombre < b.nombre) {
              return -1
            }

            return 0
          })
          .map(
            (
              elem, //Al tocar la imagen llama al metodo set y carga el url, la imagen queda seteada como botón
            ) => (
              <VStack
                key={elem.id}
                as="button"
                backdropFilter="blur(8px)"
                bg="rgb(228 228 228 / 15%)"
                borderRadius="4px"
                boxShadow="0px 10px 15px 10px rgb(0 0 0 / 10%)"
                h="180px"
                //marginBottom="30px"
                justify="space-between"
                minWidth="300px"
                padding="0px 0px 8px 0px"
                onClick={() => {
                  setImagenSeleccionada(elem)
                  changePage("Negatoscopio")
                }}
              >
                <Image borderRadius="4px" objectFit="cover" src={elem.original.url} />
                <Text>{elem.nombre}</Text>
              </VStack>
            ),
          )}
      </HStackContainer>
      <HStack paddingBottom="20px" paddingLeft="50px" paddingTop="40px" w="100%">
        <IconButton
          aria-label="Search database"
          icon={<ArrowBackIcon />}
          onClick={() => {
            changePage("Bienvenida")
          }}
        />
      </HStack>
    </VStack>
  )
}

export default Menu
