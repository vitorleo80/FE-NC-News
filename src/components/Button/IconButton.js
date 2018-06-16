import React from "react";
import { Button } from "react-materialize";
import PT from "prop-types";

const IconButton = props => {
  const { id, colour, func, direction, icon, index } = props;
  return (
    <Button
      id={id}
      floating
      className={`${colour}`}
      waves="light"
      icon={`${icon}`}
      onClick={() => func(id, direction, index)}
    />
  );
};

IconButton.propTypes = {
  id: PT.string.isRequired,
  colour: PT.string.isRequired,
  func: PT.func.isRequired,
  icon: PT.string.isRequired
};

export default IconButton;
