import React from 'react'
import * as styles from "./GameEnd.module.scss";
import Button from "../../base/Button/Button";
import {ROUTES} from "../../App";
import {Link} from "react-router-dom";
import {getCardLossesCount} from '../../../utils/utils'
import {useSelector} from 'react-redux'
import {useTranslation} from 'react-i18next'

const GameEnd = () => {
  const { t } = useTranslation()
  const {
    rounds,
  } = useSelector(({game}) => game);

  const cardLossesCount = rounds.reduce((accum, {cards}) => {
    return accum + getCardLossesCount(cards);
  }, 0);
  const gloryPointsWastedCount = rounds.reduce((accum, {gloryPoints}) => {
    return accum + gloryPoints.wasted.count;
  }, 0);
  const gloryPointsNotWastedCount = rounds.reduce((accum, {gloryPoints}) => {
    return accum + gloryPoints.notWasted.count;
  }, 0);

  return (
    <div className={styles.root}>
      <div className={styles.title}>{t("gameEnd")}</div>
      <div className={styles.statistics}>
        <table>
          <thead>
          <tr>
            <td>{t("gloryPointTokens")}</td>
            <td>{gloryPointsNotWastedCount}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{t("notWasted")}</td>
            <td>{gloryPointsNotWastedCount}</td>
          </tr>
          <tr>
            <td>{t("wasted")}</td>
            <td>{gloryPointsWastedCount}</td>
          </tr>
          </tbody>
          <thead>
          <tr>
            <td>{t("fightersInTheSquad")}</td>
            <td>{gloryPointsNotWastedCount}</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{t("casualties")}</td>
            <td>{cardLossesCount}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.bottom}>
        <Link to={ROUTES.MAIN.path}><Button className={styles.buttonAccept}>{t("accept")}</Button></Link>
      </div>
    </div>
  )
};

export default GameEnd;