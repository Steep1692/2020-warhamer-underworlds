import React from "react";
import * as styles from "./CardItem.module.scss";

const CardItem = ({className, isFocused, ...restProps}) => {
  return (
    <div className={`${styles.root} ${className} ${(isFocused) ? styles.focused : ""}`} {...restProps}>

    </div>
  )
};

export default CardItem;