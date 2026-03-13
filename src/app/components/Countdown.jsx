"use client";

import { useEffect, useMemo, useState } from "react";

const getTimeLeft = (target) => {
  const now = new Date().getTime();
  const distance = Math.max(target - now, 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

export default function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="countdown">
      {[
        { label: "Hari", value: timeLeft.days },
        { label: "Jam", value: timeLeft.hours },
        { label: "Menit", value: timeLeft.minutes },
        { label: "Detik", value: timeLeft.seconds },
      ].map((item) => (
        <div className="countdown-card" key={item.label}>
          <h4>{item.value}</h4>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
