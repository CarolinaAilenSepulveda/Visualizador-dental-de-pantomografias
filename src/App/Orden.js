import React from "react"

import {usePage} from "./Hooks"
import App from "./App"
import Bienvenida from "./Bienvenida"
import Panoramica from "./Panoramica"
import Final from "./Final"
import Nega from "./Nega"
import Diagnostico from "./Diagnostico"

export default function Orden() {
  const page = usePage()

  console.log(page)

  return (
    <>
      {page == "Bienvenida" && <Bienvenida />}
      {page == "Panoramica" && <Panoramica />}
      {page == "Final" && <Final />}
      {page == "App" && <App />}
      {page == "Nega" && <Nega />}
      {page == "Diagnostico" && <Diagnostico />}
    </>
  )
}
