import { useEffect, useState } from "react";
import styles from './Countdown.module.css';
import clsx from "clsx";

function getTimeLeft() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const target = new Date(`January 1, ${nextYear} 00:00:00`);

  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(styles.countdown)}>
      <div className={clsx(styles.countdownItem)}>
        <span className={clsx(styles.value)}>{time.days}</span>
        <span className={clsx(styles.label)}>дней</span>
      </div>

      <div className={clsx(styles.countdownItem)}>
        <span className={clsx(styles.value)}>{time.hours}</span>
        <span className={clsx(styles.label)}>часов</span>
      </div>

      <div className={clsx(styles.countdownItem)}>
        <span className={clsx(styles.value)}>{time.minutes}</span>
        <span className={clsx(styles.label)}>минут</span>
      </div>

      <div className={clsx(styles.countdownItem)}>
        <span className={clsx(styles.value)}>{time.seconds}</span>
        <span className={clsx(styles.label)}>секунд</span>
      </div>
    </div>
  );
}
