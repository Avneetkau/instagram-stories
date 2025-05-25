import React, { useEffect, useState } from "react";

const ProgressBar = ({ duration = 5000 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(0); // reset width when component mounts

    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setWidth((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-600 z-10">
      <div
        className="h-full bg-white transition-all"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;
