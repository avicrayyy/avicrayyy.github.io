import React from "react"
import Layout from "../../components/Layout"

export default function Project1() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title" style={{ marginBottom: 0 }}>
            TomasinoWeb Recruitment Portal 2016
          </h2>
          <p style={{ marginTop: 0 }}>Website</p>
          <div className="tag-group">
            <div className="tag tag-post">
              <img
                src="/Tool-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <p>Project</p>
            </div>
            <div className="tag tag-post">
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <p>Website</p>
            </div>
          </div>
        </div>
        <div class="project-img">
          <img src="/join-tomweb-wire.png" alt="project-01" width="100%" />
        </div>
      </div>
    </Layout>
  )
}
