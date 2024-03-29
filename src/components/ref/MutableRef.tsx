import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | undefined>(undefined); //useRef(null!)

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTime - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
