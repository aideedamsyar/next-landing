import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const GamingTime: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch('/gaming-time.json'); // Fetch from public directory
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, []);

  useEffect(() => {
    if (animationData && container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData]);

  return <div className="container" ref={container}></div>;
};

export default GamingTime;