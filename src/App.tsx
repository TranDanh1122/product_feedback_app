import React from "react"
import { HashRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
