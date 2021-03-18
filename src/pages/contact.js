import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="content-two">
        <div className="left">
          <img src="/lets-talk-phone.png" alt="logo" width="350px" className="contact-img"/>
        </div>
        <div className="right right-overflow">
          <div className="">
            <h2>say hi!</h2>
            <p style={{ fontSize: 12, margin: 0, textAlign: "left" }}>
              got an app idea you want to bring to life?
            </p>
            <p style={{ fontSize: 12, margin: 0, textAlign: "left" }}>
              need a killer website or website re-design?
            </p>
            <p style={{ fontSize: 12, marginLeft: 0, textAlign: "left" }}>
              hit me up! let’s talk it over a cup of coffee ☕
            </p>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              method="post"
              action="https://formspree.io/email@domain.tld"
            >
              <label>Email</label>
              <input type="email" name="_replyto" />
              <label>Name</label>
              <input type="text" name="_replyto" />
              <label>Subject</label>
              <input type="text" name="_replyto" />
              <label>Body</label>
              <textarea type="text" name="_replyto" />
              <button className="btn btn-form">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
