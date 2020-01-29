import React from "react"
import { Navbar } from "./Navbar"
import "./layout.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "../sass/layout.scss"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
