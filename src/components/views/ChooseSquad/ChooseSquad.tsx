import React, {useEffect, useState} from 'react'
import classes from "./ChooseSquad.module.scss";
import SquadItem from "../../common/SquadItem/SquadItem";
import Button from "../../base/Button/Button";
import {Link} from "react-router-dom";
import {ROUTES} from "../../App";
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'
import {gameActions} from '../../../store/gameReducer'

const ChooseSquad = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { t: tWarBands } = useTranslation("warBands")
  const [focusedSquad, setFocusedSquad] = useState(0);
  const bandItems: any[] = tWarBands("items", { returnObjects: true })

  useEffect(() => {
    dispatch(gameActions.resetGame())
  }, [])

  useEffect(() => {
    // Current war band is set in the App.js useEffect.
    dispatch(gameActions.setCurrentWarBand(focusedSquad))
  }, [focusedSquad]);

  const squadElements = bandItems.map(({name, icon, color}, i) => {
    return <SquadItem
      name={name}
      icon={icon}
      color={color}
      key={`war-band-${i}`}
      isFocused={focusedSquad === i}
      onClick={() => {
        setFocusedSquad(i);
      }}
    />
  });

  return (
    <div className={classes.root}>
      <div className={classes.title}>{t("chooseSquad")}</div>
      <div className={classes.paper}>
        <div className={classes.items}>
          {squadElements}
        </div>
        <div className={classes.bottom}>
          <Link to={ROUTES.PLAY_FIELD.path}><Button>{t("acceptChoose")}</Button></Link>
        </div>
      </div>
    </div>
  )
};

export default ChooseSquad;