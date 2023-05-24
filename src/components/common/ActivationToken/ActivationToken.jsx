import React from "react";
import * as styles from "./ActivationToken.module.scss";
import {makeImageIconUrl, makePublicUrl} from '../../../utils/utils'
import * as classnames from 'classnames'

const ActivationToken = ({className = "", isActive = false, ...restProps}) => {
  let imageUrl, imageAlt

  if (isActive) {
    imageUrl = makeImageIconUrl('ic_activation_token')
    imageAlt = "Activation token active"
  } else {
    imageUrl = makeImageIconUrl('ic_activation_token_spent')
    imageAlt = "Activation token spent"
  }

  return (
    <div className={classnames(styles.root, className)} {...restProps}>
      <img src={imageUrl} alt={imageAlt}/>
    </div>
  )
};

export default ActivationToken;