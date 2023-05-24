import React, {FC, HTMLAttributes} from 'react'
import styles from "./FighterItem.module.scss";
import classnames from 'classnames'
import {makeImageFighterUrl, makeImageIconUrl} from '../../../utils/utils'
import {Card} from '../../../store/gameReducer'

type Props = {
  item: Card
  isFocused: boolean
} & HTMLAttributes<HTMLDivElement>

const FighterItem:FC<Props> = ({item, className = "", isFocused, ...restProps}) => {
  const {iconName, name, healthPoints, attack, defend, dodge, move} = item;
  const isDead = healthPoints === 0;

  let iconOnItem

  if (isDead) {
    iconOnItem = "ic_fighter_is_dead"
  } else if (attack.applied && move.applied) {
    iconOnItem = "ic_condition_out_of_actions"
  } else if (move.applied && !attack.applied) {
    iconOnItem = "ic_moves"
  } else if (defend.applied) {
    iconOnItem = "ic_action_defense"
  } else if (dodge.applied) {
    iconOnItem = "ic_action_defense"
  }

  return (
    <div
      className={classnames(styles.root, className, {
        [styles.focused]: isFocused
      })}
      {...restProps}
    >
      <div className={styles.imageContainer}>
        <img className={styles.imageFighter} src={makeImageFighterUrl(iconName)} alt={name} />
        {iconOnItem && <img className={styles.iconOnItem} src={makeImageIconUrl(iconOnItem)}/>}
      </div>
    </div>
  )
};

export default FighterItem;