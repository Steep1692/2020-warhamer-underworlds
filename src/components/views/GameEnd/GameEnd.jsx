import React from "react";
import * as styles from "./GameEnd.module.scss";
import * as t from "../../../assets/lang/ru.json";
import Button from "../../base/Button/Button";
import {ROUTES} from "../../App";
import {Link} from "react-router-dom";

const GameEnd = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{t.gameEnd}</div>
      <div className={styles.statistics}>
        <table>
          <thead>
            <tr>
              <td>{t.famePointTokens}</td>
              <td>0</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t.notWasted}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{t.wasted}</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.bottom}>
        <Link to={ROUTES.MAIN.path}><Button className={styles.buttonAccept}>{t.accept}</Button></Link>
      </div>
    </div>
  )
};

export default GameEnd;