import styles from "./TimerShuldUpdate.module.scss"
import React, {useEffect, useState} from 'react';

const TimerShuldUpdate = () => {
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("")

  const stop = 50;

  useEffect(() => {
    if (timer < stop) {
      setTimeout(() => {
        setTimer(timer + 1)
      }, 100);
    } else {
      setMessage("componentShuldUpdate in : " + (stop / 10) + "sec.")
    }

  }, [timer]);

  return (
    <div className={styles.containerTimerShuldUpdate}>
      <p>Timer ShuldUpdate : <span className={styles.timer}>{`${Math.floor(timer / 10)}:${timer % 10}`}</span> sec. Stopped on <span className={styles.stopTimer}>{stop / 10}</span> sec.</p>
      <p className={styles.attention}>{message}</p>
    </div>
  );
};

export default TimerShuldUpdate;