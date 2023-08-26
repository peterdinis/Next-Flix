import React, { useState, useEffect } from "react";

interface ICircularProgressWithLabelProps {
  value: number;
}

function CircularProgressWithLabel(props: ICircularProgressWithLabelProps) {
  return (
    <div className="relative inline-flex">
      <div
        className={`w-120 h-120 border-8 border-teal-500 rounded-full animate-spin ${
          props.value === 100 ? "animate-none" : "animate-spin"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-gray-500">{`${Math.round(
            props.value
          )}%`}</p>
        </div>
      </div>
    </div>
  );
}

export default function FallbackLoader() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
