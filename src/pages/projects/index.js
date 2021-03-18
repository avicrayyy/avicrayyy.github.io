import React from "react"
import Layout from "../../components/Layout"

export default function Projects() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>Projects</div>
        <div className="project-item">
          <p>01</p>
          <p>Project Title</p>
          <p>Project Description</p>
        </div>
        <div className="project-item">
          <p>01</p>
          <p>Project Title</p>
          <p>Project Description</p>
        </div>
        <div className="project-item">
          <p>01</p>
          <p>Project Title</p>
          <p>Project Description</p>
        </div>
        <div className="project-item">
          <p>01</p>
          <p>Project Title</p>
          <p>Project Description</p>
        </div>
      </div>
    </Layout>
  )
}
