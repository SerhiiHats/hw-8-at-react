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
    <div>
      <p>Timer: {`${Math.round(timer / 10)}:${timer % 10}`} sec.</p>
    </div>
  );
};

export default Timer;