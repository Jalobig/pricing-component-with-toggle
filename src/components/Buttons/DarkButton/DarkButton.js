import React from 'react'
import classesGlobal from '../Buttons.module.scss'
import classes from './DarkButton.module.scss'

const DarkButton = (props) => {
    return (
      <button className={`${classesGlobal.button} ${classes.btn__dark}`}>
        {props.children}
      </button>
    );
  };

export default DarkButton