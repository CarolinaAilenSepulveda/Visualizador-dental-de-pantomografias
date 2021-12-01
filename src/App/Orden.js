import React from "react"

import foto1 from "../assets/1.png"
import foto2 from "../assets/resultado1.png"
import foto3 from "../assets/6.png"
import foto4 from "../assets/resultado6.png"
import foto5 from "../assets/3.jpg"
import foto6 from "../assets/resultado3.jpg"
import foto7 from "../assets/4.jpg"
import foto8 from "../assets/resultado4.jpg"
import t1 from "../assets/texto1.png"
import t2 from "../assets/texto6.png"
import t3 from "../assets/texto3.png"
import t4 from "../assets/texto4.png"

import {usePage} from "./Hooks"
import App from "./App"
import Bienvenida from "./Bienvenida"
import Panoramica from "./Panoramica"
import Final from "./Final"
import Diagnostico from "./Diagnostico"

export default function Orden() {
  const page = usePage()

  console.log(page)

  return (
    <>
      {page == "Bienvenida" && <Bienvenida />}
      {page == "Panoramica" && <Panoramica />}
      {page == "Final" && <Final imagen={foto2} />}
      {page == "App" && <App direccion={foto1} />}
      {page == "Nega" && <App direccion={foto2} />}
      {page == "Nega2" && <App direccion={foto4} />}
      {page == "Final2" && <Final imagen={foto4} />}
      {page == "App2" && <App direccion={foto3} />}
      {page == "Final3" && <Final imagen={foto6} />}
      {page == "App3" && <App direccion={foto5} />}
      {page == "Final4" && <Final imagen={foto8} />}
      {page == "App4" && <App direccion={foto7} />}
      {page == "Nega3" && <App direccion={foto6} />}
      {page == "Nega4" && <App direccion={foto8} />}
      {page == "Diag1" && <Diagnostico imagen={t1} />}
      {page == "Diag2" && <Diagnostico imagen={t2} />}
      {page == "Diag3" && <Diagnostico imagen={t3} />}
      {page == "Diag4" && <Diagnostico imagen={t4} />}
    </>
  )
}
