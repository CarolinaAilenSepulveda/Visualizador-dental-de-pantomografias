import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider} from "@chakra-ui/react"

import {Provider as UserProvider} from "./App/Context"
//import Orden from "./App/Orden"
import "./theme.css"
import App2 from "./App/App2"

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ChakraProvider>
        {/*
        <Orden />
*/}
        <App2 />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
