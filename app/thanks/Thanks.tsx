'use client'
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const Thanks: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch('/rocket.json'); // Fetch from public directory
      if (response.ok) {
        const data = await response.json();
        setAnimationData(data);
      } else {
        console.error('Failed to fetch animation data');
      }
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

  return <div ref={container} style={{ width: '100%', height: '100%' }}></div>;
};

export default Thanks;