import React, { useState } from "react"
import "./styles.css"

export const UnderConstruction = () => {
  const [open, setOpen] = useState(true)
  return (
    <>
      {open ? (
        <div className="center-warn">
          <div className="construction-window">
            <i className="warning">NOTICE: </i>{" "}
            <i>Site is currently being re-designed.</i>
            <a
              onClick={() => {
                setOpen(false)
              }}
              style={{ marginLeft: 12 }}
            >
              X
            </a>
          </div>
        </div>
      ) : null}
    </>
  )
}
