import React from 'react'
import * as styles from "./Menu.module.scss";
import Button from "../../base/Button/Button";
import {Link} from "react-router-dom";
import {ROUTES} from "../../App";
import {useTranslation} from 'react-i18next'
import {useDispatch, useSelector} from 'react-redux'
import {settingsActions} from '../../../store/settingsReducer'

const Menu = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { language } = useSelector(({settings}) => settings)

  const onButtonToggleLanguageClick = () => {
    dispatch(settingsActions.setLanguage(
      (language === 'ru') ? 'en' : 'ru'
    ))
  };

  return (
    <div className={styles.root}>
      <Button theme="secondary" onClick={onButtonToggleLanguageClick}>{language}</Button>
      <div className={styles.items}>
        <div className={styles.title}>{t("welcome")}</div>
        <Link to={ROUTES.CHOOSE_SQUAD.path} className={styles.item}><Button>{t("startGame")}</Button></Link>
        <Link to={ROUTES.PLAY_FIELD.path} className={styles.item}><Button>{t("continue")}</Button></Link>
      </div>
    </div>
  )
};

export default Menu;