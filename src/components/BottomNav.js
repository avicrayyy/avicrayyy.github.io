import { Link } from "gatsby"
import React from "react"

export default function BottomNav() {
  return (
    <nav>
      <Link to="/about" className="bottom-button">
        About me.
      </Link>
      <Link to="/projects" className="bottom-button">
        My Projects.
      </Link>
    </nav>
  )
}
