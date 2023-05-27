import styles from "./Timer.module.scss"
import React, {useEffect, useState} from 'react';

const Timer = () => {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setTimer(timer + 1)
      },
      100);
  });

  return (
    <div className={styles.containerTimer}>
      <p>Timer: <span>{`${Math.round(timer / 10)}:${timer % 10}`}</span> sec.</p>
    </div>
  );
};

export default Timer;