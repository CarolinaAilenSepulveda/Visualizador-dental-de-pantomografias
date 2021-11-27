import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider} from "@chakra-ui/react"

import {Provider as UserProvider} from "./App/Context"
import Orden from "./App/Orden"
import "./theme.css"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ChakraProvider>
        <Orden />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
