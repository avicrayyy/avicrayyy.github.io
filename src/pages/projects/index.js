import { Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

export default function Projects() {
  return (
    <Layout>
      <div className="projects-containter" style={{ flexDirection: "column" }}>
        <div>
          <h2 className="header-title">Projects</h2>
        </div>
        <table style={{ width: "100%" }}>
          <tr>
            <td>
              <Link to="/projects/project1">01</Link>
            </td>
            <td>
              <Link to="/projects/project1">
                Online-Sabong App Admin Console
              </Link>
            </td>
            <td>
              <Link to="/projects/project1">UI Design</Link>
            </td>
            <td>
              <Link to="/projects/project1">
                <img
                  src="/ToolBox.png"
                  alt="profile-picture"
                  width="21px"
                  style={{ marginRight: 12 }}
                />
                <img
                  src="/Vector-2.png"
                  alt="profile-picture"
                  width="21px"
                  style={{ marginRight: 12 }}
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Clara International Skin &amp; Body</td>
            <td>Landing Page</td>
            <td>
              <img
                src="/Toolbox.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>FCN Medical &amp; Vaccination Center</td>
            <td>Company Website</td>
            <td>
              <img
                src="/Toolbox.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Gaea</td>
            <td>Mobile App</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/mobile-alt.png"
                alt="profile-picture"
                width="12px"
                style={{ marginRight: 12 }}
                className="mobile-ico"
              />
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Leggo</td>
            <td>Web &amp; Mobile App</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/tv.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/mobile-alt.png"
                alt="profile-picture"
                width="12px"
                style={{ marginRight: 12 }}
                className="mobile-ico"
              />
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Collabonator</td>
            <td>Web App</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/tv.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Fuse Design Group</td>
            <td>Company Website</td>
            <td>
              <img
                src="/Toolbox.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>08</td>
            <td>TomasinoWeb Recruitment Portal 2016</td>
            <td>Website</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>09</td>
            <td>University of Santo Tomas Freshmen Portal 2013</td>
            <td>Website</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Personal Website 2013</td>
            <td>Website</td>
            <td>
              <img
                src="/Tools-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
              <img
                src="/Vector-1.png"
                alt="profile-picture"
                width="21px"
                style={{ marginRight: 12 }}
              />
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  )
}
