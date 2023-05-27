import styles from "./Clock.module.scss";
import React, {useEffect, useState} from 'react';

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    setTimeout(()=>{
      setClock(new Date().toLocaleTimeString())
    }, 1000);
  });
  return (
    <div className={styles.containerClock}>
      {clock}
    </div>
  );
};

export default Clock;