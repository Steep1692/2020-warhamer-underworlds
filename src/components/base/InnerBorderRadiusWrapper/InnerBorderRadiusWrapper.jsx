import React from "react";
import * as styles from "./InnerBorderRadiusWrapper.module.scss";
import * as classnames from 'classnames'

const InnerBorderRadiusWrapper = ({className, children, ...restProps}) => {
  return (
    <div className={classnames(styles.root, className)} {...restProps}>
        {children}
    </div>
  )
};

export default InnerBorderRadiusWrapper;