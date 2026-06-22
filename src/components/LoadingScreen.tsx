import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 2000);
    const t2 = setTimeout(onFinish, 2500);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${hide ? 'opacity-0' : 'opacity-100'}`}
    >
      <h1 className="font-heading text-4xl md:text-5xl font-bold glow-text text-primary mb-8">
        Ahmad Raza
      </h1>
      <div className="w-64 h-1 rounded-full bg-muted overflow-hidden">
        <div className="loading-bar h-full rounded-full" />
      </div>
    </div>
  );
};

export default LoadingScreen;
