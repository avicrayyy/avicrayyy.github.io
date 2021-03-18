import React from "react"
import Layout from "../../components/Layout"

export default function Project2() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title" style={{ marginBottom: 0 }}>
            FCN Medical &amp; Vaccination Clinic
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
          <img src="/fcn-main.png" alt="project-01" width="100%" />
        </div>
        <div>
          <p>
            FCN Medical &amp; Vaccination Clinic is a clinic in Ermita, Manila
            specializing in Travel Vaccination.
          </p>
          <p>
            At FCN Medical and Vaccination Center, they handle immunization
            requirements of land-based OFWs and seafarers to Asia, Middle East,
            and Africa and other parts of the globe.
          </p>
          <p style={{ marginBottom: 40 }}>
            See website:{" "}
            <a
              href="http://fcnvaccination.com/"
              target="_blank"
              className="project-link"
            >
              http://fcnvaccination.com/
            </a>
          </p>
        </div>
        <div class="project-img">
          <img src="/fcn-wire.png" alt="project-01" width="100%" />
        </div>
      </div>
    </Layout>
  )
}
