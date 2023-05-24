import React from "react";
import * as styles from "./SquadItem.module.scss";
import * as classnames from 'classnames'
import {makeImageWarBandUrl} from '../../../utils/utils'

const SquadItem = ({name, color, icon, className = "", isFocused, ...restProps}) => {
  return (
    <div
      className={classnames(styles.root, className, {
        [styles.focused]: isFocused
      })}
      {...restProps}
    >
      <div style={{backgroundColor: color}} className={styles.imageContainer}>
        <img src={makeImageWarBandUrl(icon)} alt={name} />
      </div>
      {/*<p className={styles.name}>{name}</p>*/}
    </div>
  )
};

export default SquadItem;