import { useTranslation } from 'next-i18next';
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ className }) => {
  const { t } = useTranslation('common'); 
  const [position, setPosition] = useState(0);
  const texts = ['Connecting with Coaches', 'getting Scholarships', 'Earning More with NILs '];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={className}>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <span>We make</span>
          <div className="text-wrapper">
            <div 
              className="scrolling-text"
              style={{ transform: `translateY(${-position * 100}%)` }}
            >
              {texts.map((text, index) => (
                <div
                  key={index}
                  className="text-item"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        <span className="block mt-2">a lot Easier with Jetson Ai.</span>
      </div>

      <style jsx>{`
        .text-wrapper {
          height: 40px;
          overflow: hidden;
          position: relative;
          width: auto;
          min-width: 200px;
        }
        .scrolling-text {
          position: absolute;
          width: 100%;
          transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .text-item {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          opacity: 0.9;
          transform-origin: bottom;
          animation: flipIn 3s infinite;
        }
        @keyframes flipIn {
          0%, 20% {
            transform: rotateX(0deg);
            opacity: 1;
          }
          80%, 100% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;