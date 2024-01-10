import React from "react";
import BGTop from "../../images/bg-top.svg";
import BGBottom from "../../images/bg-bottom.svg";
import classes from "./Main.module.scss";
import Pricing from "../../components/Pricing/Pricing";
const Main = () => {
  return (
    <main className={classes.main}>
      <img src={BGTop} alt="Background Top" className={classes.bg__top} />
      <img
        src={BGBottom}
        alt="Background bottom"
        className={classes.bg__bottom}
      />
      <Pricing />
    </main>
  );
};

export default Main;
