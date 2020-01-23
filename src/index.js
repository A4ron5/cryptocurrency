import React from "react"
import ReactDOM from "react-dom"
import { createInspector } from "effector-logger"
import { App } from "./App"

createInspector()

ReactDOM.render(<App />, document.getElementById("root"))
