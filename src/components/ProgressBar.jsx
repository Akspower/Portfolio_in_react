// src/components/ProgressBar.jsx
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const maxTime = 120; // Maximum time in seconds

    const updateProgress = () => {
      if (seconds < maxTime) {
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : (prevProgress + 100 / maxTime)));
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    };

    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="fixed bottom-4 left-4 w-64 h-8 bg-gray-800 rounded-full shadow-lg z-40">
      <div
        className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
        <span className="text-xs">
          {`Time spent: ${seconds} sec`}
        </span>
      </div>
      <div className="absolute bottom-10 left-0 text-white text-xs p-1 bg-gray-900 rounded-lg shadow-md">
        <p className="text-center">
          {seconds >= 120 ? "All done! You’ve reached the 2-minute mark. No more stalking for now!" : "Caught you! Are you stalking? No worries, I won’t report you to Mr. Aditya. Yet."}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
