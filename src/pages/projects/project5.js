import React from "react"
import Layout from "../../components/Layout"

export default function Project2() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title" style={{ marginBottom: 0 }}>
            Leggo
          </h2>
          <p style={{ marginTop: 0 }}>Web &amp; Mobile App</p>
          <div className="tag-group">
            <div className="tag tag-post">
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <p>Project</p>
            </div>
            <div className="tag tag-post">
              <img
                src="/tv.png"
                alt="profile-picture"
                width="12px"
                style={{ marginRight: 12 }}
              />
              <p>Web App</p>
            </div>
            <div className="tag tag-post">
              <img
                src="/mobile-alt.png"
                alt="profile-picture"
                width="12px"
                style={{ marginRight: 12 }}
              />
              <p>Mobile App</p>
            </div>
          </div>
        </div>
        <div class="project-img">
          <img src="" alt="" width="100%" />
        </div>
        <div>
          <p>
            Leggo is a social, crowd sourcing travel app that allows
            backpackers, travellers, and locals to discover new things, and keep
            track of happenings. Leggo also helps find recommended
            establishments nearby!
          </p>
          <p>
            The app was created and ideated with fellow Google Student
            Ambassadors, Rhan Candia and Mark Balmes, as an entry for a
            hackathon held in the College of Saint Benilde, WhatTheHack2015.
          </p>
          <p style={{ marginBottom: 40 }}>
            Fork it on{" "}
            <a
              href="https://github.com/avicrayyy/WhatTheHack2015"
              target="_blank"
              className="project-link"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
