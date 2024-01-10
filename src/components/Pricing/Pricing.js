import React, { useState } from "react";
import classes from "./Pricing.module.scss";
import DarkButton from "../Buttons/DarkButton/DarkButton";
import LightButton from "../Buttons/LightButton/LightButton";

const Pricing = () => {
  const [isAnnually, setIsAnnually] = useState(false);
  const switchHandler = () => {
    setIsAnnually((prevState) => !prevState);
  };
  return (
    <div className={classes.pricing}>
      <h1 className={classes.pricing__heading}>Our Pricing</h1>
      <div className={classes.pricing__row}>
        <p className={classes.pricing__subheading}>Annually</p>
        <button className={classes.pricing__switch} onClick={switchHandler}>
          <div
            className={`${classes["pricing__switch--toggle"]} ${
              isAnnually ? classes.active : ""
            }`}
          ></div>
        </button>
        <p className={classes.pricing__subheading}>Monthly</p>
      </div>
      <div className={classes.pricing__cardrow}>
        <div className={classes.pricing__card}>
          <h2 className={classes["pricing__card--heading"]}>Basic</h2>
          <p className={classes["pricing__card--amount"]}>
            <span>$</span>
            {isAnnually ? 199.99 : 19.99}
          </p>
          <div className={classes["pricing__card--features"]}>
            <p className={classes["pricing__card--feature"]}>500 GB Storage</p>
            <p className={classes["pricing__card--feature"]}>2 Users Allowed</p>
            <p className={classes["pricing__card--feature"]}>Send up to 3 GB</p>
          </div>
          <DarkButton>Learn More</DarkButton>
        </div>
        <div
          className={`${classes.pricing__card} ${classes["pricing__card--primary"]}`}
        >
          <h2 className={classes["pricing__card--heading"]}>Professional</h2>
          <p className={classes["pricing__card--amount"]}>
            <span>$</span>
            {isAnnually ? 249.99 : 24.99}
          </p>
          <div className={classes["pricing__card--features"]}>
            <p className={classes["pricing__card--feature"]}>1 TB Storage</p>
            <p className={classes["pricing__card--feature"]}>5 Users Allowed</p>
            <p className={classes["pricing__card--feature"]}>
              Send up to 10 GB
            </p>
          </div>
          <LightButton>Learn More</LightButton>
        </div>
        <div className={classes.pricing__card}>
          <h2 className={classes["pricing__card--heading"]}>Master</h2>
          <p className={classes["pricing__card--amount"]}>
            <span>$</span>
            {isAnnually ? 399.99 : 39.99}
          </p>
          <div className={classes["pricing__card--features"]}>
            <p className={classes["pricing__card--feature"]}>2 TB Storage</p>
            <p className={classes["pricing__card--feature"]}>
              10 Users Allowed
            </p>
            <p className={classes["pricing__card--feature"]}>
              Send up to 20 GB
            </p>
          </div>
          <DarkButton>Learn More</DarkButton>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
