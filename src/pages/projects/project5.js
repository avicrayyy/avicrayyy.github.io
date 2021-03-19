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
            Gaea is a mobile app ideated during a hackathon centered on the
            topic of environmental awareness. Essentially, the idea behind the
            app is that users can report/ post natural calamities and other
            environmental issues via the app.
          </p>
          <p>
            I lead the development of the app, as the Lead Developer; along side
            UI Designer, Mr. Rex Edrosa.
          </p>
          <p style={{ marginBottom: 40 }}>
            Fork it on{" "}
            <a
              href="https://github.com/avicrayyy/htc-gaea"
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
