import React from "react"
import "./styles.css"

export const CustomCursor = () => {
  const cursorRef = React.useRef(null)
  const cursor2Ref = React.useRef(null)

  React.useEffect(() => {
    document.addEventListener("mousemove", e => {
      const { clientX, clientY } = e
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.cssText =
        "left: " + mouseX + "px; top: " + mouseY + "px;"
      cursor2Ref.current.style.cssText =
        "left: " + mouseX + "px; top: " + mouseY + "px;"
    })
  })
  return (
    <>
      <div className="cursor-2" ref={cursor2Ref} />
      <div className="cursor" ref={cursorRef} />
    </>
  )
}
