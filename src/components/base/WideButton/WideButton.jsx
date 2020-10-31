import React from "react";
import * as styles from "./WideButton.module.scss";

const WideButton = ({className = "", ...restProps}) => {
  return (
    <button className={`${styles.root} ${className}`} {...restProps} />
  )
};

export default WideButton;