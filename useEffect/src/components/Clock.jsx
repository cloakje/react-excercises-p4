import { useState, useEffect } from "react";

const Clock = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalidId = setInterval(() => {
        setCurrentTime(new Date())

    }, 1000)

    return () => {
        clearInterval(intervalidId)
    };
  }, []);
  return (
    <div>
      <h1>{currentTime.toLocaleTimeString()}</h1>

    </div>
  );
};

export default Clock;
