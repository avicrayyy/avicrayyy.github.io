import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src="/logo.png" alt="logo" style={{ height: 18 }} />
      </Link>
      <div>
        <Link
          to="/contact"
          className="contact-button border-gradient border-gradient-contact"
        >
          let's talk.
        </Link>
      </div>
    </nav>
  )
}
