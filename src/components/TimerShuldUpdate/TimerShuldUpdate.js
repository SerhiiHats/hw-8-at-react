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
    <div>
      <p>Timer ShuldUpdate : {`${Math.floor(timer / 10)}:${timer % 10}`} sec. Stopped on {stop / 10} sec.</p>
      <p>{message}</p>
    </div>
  );
};

export default TimerShuldUpdate;