import React from "react"
import { HashRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import { SidebarProvider } from "./components/ui/sidebar"

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" index element={
            <SidebarProvider>
              <Home />
            </SidebarProvider>}></Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
