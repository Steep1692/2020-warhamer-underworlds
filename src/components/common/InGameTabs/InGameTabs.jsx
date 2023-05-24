import React from 'react'
import * as styles from './InGameTabs.module.scss'
import {NavLink} from 'react-router-dom'
import {ROUTES} from '../../App'
import ImageButton from '../../icons/Icons'
import {useLocation} from 'react-router'

const InGameTabs = () => {
  const {pathname} = useLocation()
  return (
    <div className={styles.root}>
      <NavLink to={ROUTES.CARDS.path}>
        <ImageButton
          className={styles.button}
          srcDefault="ic_menu_selected_hero"
          srcHover="ic_menu_selected_hero_active"
          srcDisabled="ic_menu_selected_hero_active"
          disabled={pathname === ROUTES.CARDS.path}
        />
      </NavLink>
      <NavLink to={ROUTES.PLAY_FIELD.path}>
        <ImageButton
          className={styles.button}
          srcDefault="ic_menu_game_score"
          srcHover="ic_menu_game_score_active"
          srcDisabled="ic_menu_game_score_active"
          disabled={pathname === ROUTES.PLAY_FIELD.path}
        />
      </NavLink>
      <NavLink exact to={ROUTES.MAIN.path}>
        <ImageButton
          className={styles.button}
          srcDefault="ic_menu_save_and_exit"
          disabled={pathname === ROUTES.MAIN.path}
        />
      </NavLink>
    </div>
  )
}

export default InGameTabs