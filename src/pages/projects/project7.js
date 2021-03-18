import React from "react"
import Layout from "../../components/Layout"

export default function Project1() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title" style={{ marginBottom: 0 }}>
            Fuse Design Group
          </h2>
          <p style={{ marginTop: 0 }}>Company Website</p>
          <div className="tag-group">
            <div className="tag tag-post">
              <img
                src="/ToolBox.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <p>Freelance Work</p>
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
          <img src="/fuse-mockup.png" alt="project-01" width="100%" />
        </div>
        <div>
          <p>Fuse Design Group is a San-Francisco, CA-based Design Agency.</p>
          <p>
            My involvement in the project is the development of the website from
            ground-up using HTML, CSS, JavaScript, jQuery, and PHP.
          </p>
        </div>
        <div class="project-img">
          <img src="/fuse-iphone-mockup.png" alt="project-01" width="100%" />
        </div>
        <div class="project-img">
          <img src="/fuse-mock.png" alt="project-01" width="100%" />
        </div>
      </div>
    </Layout>
  )
}
