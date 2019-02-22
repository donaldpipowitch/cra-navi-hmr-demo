import { useState, useEffect } from 'react';

export function useLifetime() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return seconds;
}
