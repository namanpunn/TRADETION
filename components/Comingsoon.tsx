import { useState, useEffect } from 'react';

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const launchDate = new Date('2024-11-01').getTime();
      const currentTime = new Date().getTime();
      const difference = launchDate - currentTime;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="bg-heroBg flex flex-col items-center justify-center w-full h-[60vh] xl:h-[85vh] 2xl:h-[60vh] text-white px-4 bg-cover bg-no-repeat"
      // style={{ backgroundImage: 'url("/images/stock.png")' }}
    >
      {/* Header */}
      <header className="text-center mb-10 animate-fadeIn pt-12 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          JSR FINTECH
        </h1>
        <p className="text-base md:text-lg mt-4 opacity-80">Stock Market Trading at Your Fingertips</p>
      </header>

      {/* Time left countdown */}
      {timeLeft && (
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl mb-6 font-semibold tracking-wider animate-bounce">We are launching soon!</p>
          <div className="flex flex-wrap justify-center space-x-1">
            {/* Days */}
            <div className="flex flex-col items-center w-20 md:w-24 p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-tl-3xl rounded-bl-3xl shadow-lg mb-2">
              <p className="text-3xl md:text-4xl font-bold">{timeLeft.days}</p>
              <span className="text-xs md:text-sm tracking-wider opacity-80">Days</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center w-20 md:w-24 p-4 bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg mb-2">
              <p className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</p>
              <span className="text-xs md:text-sm tracking-wider opacity-80">Hours</span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center w-20 md:w-24 p-4 bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-lg mb-2">
              <p className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</p>
              <span className="text-xs md:text-sm tracking-wider opacity-80">Minutes</span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center w-20 md:w-24 p-4 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-tr-3xl rounded-br-3xl shadow-lg mb-2">
              <p className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</p>
              <span className="text-xs md:text-sm tracking-wider opacity-80">Seconds</span>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for Stock Chart Animation */}
      <div className="mb-10">
        {/* Uncomment below for animation */}
        {/* <Player
          src="https://assets2.lottiefiles.com/packages/lf20_3E4js8.json"
          className="w-48 md:w-72 h-48 md:h-72"
          loop
          autoplay
        /> */}
      </div>

      {/* Footer */}
      <footer className="text-center mt-auto mb-4">
        <p className="text-xs opacity-70">&copy; 2024 JSR Fintech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
