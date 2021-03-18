import React from "react"

// components
import BottomNav from "./BottomNav"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { CustomCursor } from "./CustomCursor"

// stylesheets
import "../styles/global.css"
import "../styles/custom.css"

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <div>
        <div className="loading-bar"></div>
        <Navbar />
        <div className="content">{children}</div>
        <BottomNav />
      </div>
      <Footer />
    </>
  )
}
