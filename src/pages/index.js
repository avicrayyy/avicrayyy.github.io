import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div
        style={{ display: "flex", zIndex: 2, marginTop: 250 }}
        className="intro-container"
      >
        <div>
          <p className="intro-short">
            hi, i'm <i className="highlight">david</i>
            <br /> and i...
          </p>
        </div>
        <div>
          <h1 className="intro-name">D.A.V.I.D.</h1>
          <p className="intro-description">
            Develop Amazing Virtual Interfaces and Designs
          </p>
        </div>
      </div>
      <img
        src="/home.gif"
        alt="logo"
        min-width="450px"
        width="50%"
        style={{ position: "absolute", zIndex: 1 }}
        className="intro-gif"
      />
    </Layout>
  )
}
