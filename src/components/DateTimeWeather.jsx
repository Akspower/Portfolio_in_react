import React, { useState, useEffect } from 'react';

const DateTimeWeather = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [weather, setWeather] = useState('Fetching weather...');

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);

    // Simulate fetching weather data
    fetchWeatherData();

    return () => clearInterval(timer);
  }, []);

  const fetchWeatherData = async () => {
    // Example: replace with a real weather API call
    const weatherData = 'Weather is Pretty Good in Your Area'; // Simulated weather data
    setWeather(weatherData);
  };

  return (
    <div className="flex flex-wrap justify-center items-center text-center text-sm space-x-4 p-2 relative">
      {/* <div className="font-semibold bubble-effect">{dateTime.toLocaleDateString()}</div> */}
      <div className="font-bold text-lg bubble-effect">{dateTime.toLocaleTimeString()}</div>
      {/* <div className="mt-1 bubble-effect">{weather}</div> */}
      <style jsx>{`
        .bubble-effect {
          position: relative;
          overflow: hidden;
        }
        .bubble-effect::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: bubble 6s infinite;
          z-index: 0;
        }
        .bubble-effect > * {
          position: relative;
          z-index: 1;
        }
        @keyframes bubble {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DateTimeWeather;
