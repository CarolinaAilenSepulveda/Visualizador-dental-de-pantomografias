import React from "react"
import ReactDOM from "react-dom"
import {ChakraProvider} from "@chakra-ui/react"

import App from "./App/App"
import "./theme.css"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
