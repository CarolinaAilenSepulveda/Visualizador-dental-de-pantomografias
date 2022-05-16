//Librerias y componentes

import React from "react"
import {Center, Spinner} from "@chakra-ui/react"
import axios from "axios"

import {useChangePage, usePage} from "./Hooks"
import Bienvenida from "./Bienvenida"
import Menu from "./Menu"
import Negatoscopio from "./Negatoscopio"
import Procesada from "./Procesada"
import Diagnostico from "./Diagnostico"

//Desde App2 se deciden los cambios de pantalla y que elemento se le pasa como parámetro
//a cada pantalla

const App2 = () => {
  const page = usePage()
  const changePage = useChangePage()
  const [imagenes, setImagenes] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [imagenSeleccionada, setImagenSeleccionada] = React.useState()

  //Se suma un loading mientras carga la base de datos - spinner

  React.useEffect(() => {
    if (!imagenes && loading) {
      axios
        .get("https://dientes-sepulveda.herokuapp.com/pantomografias") //URL base de datos, cada elemento de la colección tiene una foto original, procesada, nombre y diagnóstico
        .then((imagenes) => {
          setImagenes(imagenes.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }
  }, [imagenes, loading])

  React.useEffect(() => {
    console.log(imagenSeleccionada)
  }, [imagenSeleccionada])

  return (
    <Center h="100vh" w="100%">
      {loading && <Spinner />}
      {!loading && page === "Bienvenida" && <Bienvenida />}
      {page === "Menu" && (
        <Menu imagenes={imagenes} setImagenSeleccionada={setImagenSeleccionada} />
      )}
      {page === "Negatoscopio" && imagenSeleccionada && (
        <Negatoscopio
          imagenSeleccionada={imagenSeleccionada}
          setImagenSeleccionada={setImagenSeleccionada}
        />
      )}
      {page === "Procesada" && <Procesada imagen={imagenSeleccionada} />}
      {page === "Diagnostico" && <Diagnostico imagen={imagenSeleccionada} />}
    </Center>
  )
}

export default App2
