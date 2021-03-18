import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <div>
      <Layout>
        <div className="content-two">
          <div className="left" style={{ display: "block" }}>
            <div style={{}}>
              <img
                src="/prfp.jpg"
                alt="profile-picture"
                width="70px"
                style={{ borderRadius: 35 }}
              />
              <p style={{ marginBottom: 0 }}>
                <b>David Domingo</b>
              </p>
              <p style={{ fontSize: 12, marginTop: 0 }}>
                <b>Software</b> Engineer, <b>Front-End</b> Developer,{" "}
                <b>UI/UX</b> Designer
              </p>
            </div>
            <div>
              <label style={{ paddingBottom: 12 }}>Skills</label>
              <div className="progress-group" style={{ marginTop: 12 }}>
                <label for="file">Web App Development</label>
                <progress id="file" value="90" max="100">
                  32%
                </progress>
              </div>
              <div className="progress-group">
                <label for="file">Mobile App Development</label>
                <progress id="file" value="90" max="100">
                  32%
                </progress>
              </div>
              <div className="progress-group">
                <label for="file">User Experience Design</label>
                <progress id="file" value="80" max="100">
                  32%
                </progress>
              </div>
              <div className="progress-group" style={{ marginBottom: 12 }}>
                <label for="file">
                  User Interface Design &amp; Development
                </label>
                <progress id="file" value="95" max="100">
                  32%
                </progress>
              </div>
            </div>
            <div>
              <label style={{ marginBottom: 12 }}>Other Skills</label>
              <div className="tag-group" style={{ marginTop: 12 }}>
                <div className="tag">C/C++</div>
                <div className="tag">Java</div>
                <div className="tag">SQL</div>
                <div className="tag">NoSQL</div>
                <div className="tag">Git</div>
                <div className="tag">Unix</div>
                <div className="tag">FireBase</div>
                <div className="tag">HTML5/CSS3</div>
                <div className="tag">JavaScript</div>
                <div className="tag">ReactJS</div>
                <div className="tag">NodeJS</div>
                <div className="tag">Bootstrap</div>
                <div className="tag">Wordpress</div>
                <div className="tag">PHP</div>
              </div>
            </div>
          </div>
          <div className="right" style={{ display: "block", margin: "auto" }}>
            <h3>
              <i>
                "Sup? I'm David. I make websites, web apps, and mobile apps."
              </i>
            </h3>
            <p style={{ fontSize: 12, marginLeft: 0 }}>
              I'm a Manila-based Software Engineer and <i>ex-</i>
              <i className="gsa">Google Student Ambassador</i> who finished his
              Bachelors Degree in <i>Computer Science</i> at the{" "}
              <i className="ust">University of Santo Tomas</i>.
            </p>
            <p style={{ fontSize: 12, marginLeft: 0 }}>
              I also took Higher education in{" "}
              <i>Design Thinking &amp; Innovation</i> at Tseng College in{" "}
              <i className="csun">California State University - Northridge</i>.
            </p>
            <p style={{ fontSize: 12, marginLeft: 0, paddingBottom: 12 }}>
              In my free time, I <i>research</i> and try out new technology
              stacks, <i>develop</i> random app ideas, and <i>play</i> video
              games.
            </p>
            <a
              href="https://drive.google.com/file/d/1mwmvZIFxNDttDxp1_yRe_-BCwFjh2vqJ/view?usp=sharing"
              target="_blank"
              className="btn btn-form"
              style={{ marginBottom: 20 }}
            >
              See Resume
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
