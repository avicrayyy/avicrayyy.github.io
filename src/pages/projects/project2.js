import React from "react"
import Layout from "../../components/Layout"

export default function Project2() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title" style={{ marginBottom: 0 }}>
            Clara International Skin &amp; Body
          </h2>
          <p style={{ marginTop: 0 }}>Landing Page</p>
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
          <img src="/clara-main.png" alt="project-01" width="100%" />
        </div>
        <div>
          <p>
            Clara International is Malaysia’s #1 skin and body centre boasting
            of numerous accolades.
          </p>
          <p>
            Clara International Aesthetic Naturale’s vision is to be known in
            promoting all-natural treatments that give exceptional results to
            Filipinos. 16 Years in the Philippines, CLARA is Malaysia’s #1 skin
            and body centre boasting of numerous accolades.
          </p>
          <p>
            See website:{" "}
            <a
              href="https://www.claraaestheticnaturale.com/"
              target="_blank"
              className="project-link"
              style={{ marginBottom: 40 }}
            >
              https://www.claraaestheticnaturale.com/
            </a>
          </p>
        </div>
        <h2>Previous Design</h2>
        <p>
          Prior to a new website and re-brand, I also took part in the
          development of the old Clara International Philippines Website.
        </p>
        <div class="project-img">
          <img src="/clara-prev.png" alt="project-01" width="100%" />
        </div>
      </div>
    </Layout>
  )
}
