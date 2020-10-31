import React from "react";
import * as styles from "./ButtonSecondary.module.scss";

const ButtonSecondary = ({className = "", ...restProps}) => {
  return (
    <button className={`${styles.root} ${className}`} {...restProps} />
  )
};

export default ButtonSecondary;