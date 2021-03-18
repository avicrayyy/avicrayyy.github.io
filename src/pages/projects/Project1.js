import React from "react"
import Layout from "../../components/Layout"

export default function Project1() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title">Online-Sabong App Admin Console</h2>
          <p>UI Design</p>
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
                src="/Vector-2.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <p>UI Design</p>
            </div>
          </div>
        </div>
        <div class="project-img">
          <img src="/sabong-app-deck.png" alt="project-01" width="100%" />
        </div>
        <div>
          <p>
            The rise in popularity of online cockfighting in the Philippines
            comes new challenges in designing user interfaces centered for both
            young and old cockfighting enthusiasts.
          </p>
          <p>
            In this UI design, I focused on giving admins and agents(those whose
            membership allows them to invite members) a gamified experience as
            they manage their commission, wallet, and players.
          </p>
        </div>
      </div>
    </Layout>
  )
}
