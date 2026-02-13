import { useEffect, useState } from "react";

const VALENTINE_DATE = new Date("2025-02-14T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = VALENTINE_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, passed: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      passed: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft.passed) {
    return (
      <div className="text-center font-handwritten text-2xl text-primary animate-pulse-heart">
        💕 It's Valentine's Day! 💕
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center">
      <p className="font-handwritten text-lg text-muted-foreground mb-2">
        Time until Valentine's Day ♥
      </p>
      <div className="flex justify-center gap-3">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-primary font-body tabular-nums">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground font-body">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
