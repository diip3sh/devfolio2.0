import { useState, useEffect } from "react";

const LiveClockUpdate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <span className="hidden md:block text-secondary text-xs font-semibold">
        {date.toLocaleTimeString()} IN
      </span>
    </div>
  );
};

export default LiveClockUpdate;
