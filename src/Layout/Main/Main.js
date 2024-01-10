import React, { useState } from "react";
import BGTop from "../../images/bg-top.svg";
import BGBottom from "../../images/bg-bottom.svg";
import classes from "./Main.module.scss";
import Pricing from "../../components/Pricing/Pricing";
const Main = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const switchHandler = () => {
    setIsAnnually((prevState) => !prevState);
  };
  const keyDownEvent = (event) => {
    if (event.code === "ArrowRight") {
      switchHandler();
    }
    if (event.code === "ArrowLeft") {
      switchHandler();
    }
  };
  return (
    <main className={classes.main} onKeyDown={keyDownEvent} tabIndex={0}>
      <img src={BGTop} alt="Background Top" className={classes.bg__top} />
      <img
        src={BGBottom}
        alt="Background bottom"
        className={classes.bg__bottom}
      />
      <Pricing
        isAnnually={isAnnually}
        switchHandler={switchHandler}
      />
    </main>
  );
};

export default Main;
