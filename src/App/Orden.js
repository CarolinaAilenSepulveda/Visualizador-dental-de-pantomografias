import React from "react"

import foto1 from "../assets/foto1.png"
import foto2 from "../assets/resultado1.png"
import foto3 from "../assets/foto6.png"
import foto4 from "../assets/resultado6.png"

import {usePage} from "./Hooks"
import App from "./App"
import Bienvenida from "./Bienvenida"
import Panoramica from "./Panoramica"
import Final from "./Final"
import Final2 from "./Final2"
import Diagnostico from "./Diagnostico"
import Nega from "./Nega"
import Nega2 from "./Nega2"

export default function Orden() {
  const page = usePage()

  console.log(page)

  return (
    <>
      {page == "Bienvenida" && <Bienvenida />}
      {page == "Panoramica" && <Panoramica />}
      {page == "Final" && <Final />}
      {page == "App" && <App direccion={foto1} />}
      {page == "Nega" && <Nega direccion={foto2} />}
      {page == "Nega2" && <Nega2 direccion={foto4} />}
      {page == "Diagnostico" && <Diagnostico />}
      {page == "Final2" && <Final2 />}
      {page == "App2" && <App direccion={foto3} />}
    </>
  )
}
