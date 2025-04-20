
import React, { useState, useEffect } from "react";

type CountdownTimerProps = {
  targetDate: Date;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = Number(targetDate) - Number(new Date());
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeSegments = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-2">
        <h3 className="text-sm font-mono text-muted-foreground">NEXT DROP</h3>
      </div>
      <div className="flex justify-center space-x-4">
        {timeSegments.map((segment, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-2xl font-mono font-bold bg-cipher-muted px-3 py-2 rounded-sm min-w-[60px]">
              {String(segment.value).padStart(2, "0")}
            </div>
            <div className="text-xs font-mono text-muted-foreground mt-1">
              {segment.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
