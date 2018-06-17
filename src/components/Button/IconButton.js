import React from "react"
import { Button } from "react-materialize"


const IconButton = props => {
  const { id, colour, func, direction, icon, index } = props
  return (
    <Button
      id={id}
      floating
      className={`${colour}`}
      waves="light"
      icon={`${icon}`}
      onClick={() => func(id, direction, index)}
    />
  )
}


export default IconButton
