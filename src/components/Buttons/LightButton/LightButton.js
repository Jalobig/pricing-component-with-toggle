import React from "react";
import classesGlobal from "../Buttons.module.scss";
import classes from "./LightButton.module.scss";

const LightButton = (props) => {
  return (
    <button className={`${classesGlobal.button} ${classes.btn__light}`}>
      {props.children}
    </button>
  );
};

export default LightButton;
