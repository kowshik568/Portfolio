import React from 'react';

interface MarqueeProps {
  variant?: 'editorial' | 'coral' | 'blue';
  reverse?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  variant = 'editorial',
  reverse = false,
  className = '',
}) => {
  const isBlueRibbon = variant === 'coral' || variant === 'blue';

  const ribbonA = [
    { text: 'AI & FULL-STACK' },
    { text: 'PARUL UNIVERSITY 2027' },
    { text: 'REACT & NODE.JS' },
    { text: 'TCS CODEVITA RANK 4014' },
    { text: 'COLLABRIX' },
    { text: 'SYSTEMS & ALGORITHMS' },
  ];

  const ribbonB = [
    { text: 'IDEATION' },
    { text: 'ARCHITECTURE' },
    { text: 'CODE' },
    { text: 'SHIP' },
    { text: 'ITERATE' },
  ];

  const items = isBlueRibbon ? ribbonB : ribbonA;
  const separator = isBlueRibbon ? '→' : '·';

  return (
    <div
      className={`w-full overflow-hidden whitespace-nowrap border-y border-[#202B3B] py-3.5 sm:py-4 select-none ${
        isBlueRibbon ? 'bg-[#0D121C] text-[#F1F4FA]' : 'bg-[#080B12] text-[#F1F4FA]'
      } ${className}`}
      aria-hidden="true"
    >
      <div className={reverse ? 'animate-marquee-reverse flex items-center' : 'animate-marquee flex items-center'}>
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 cursor-default">
            <span className="font-display font-semibold text-lg sm:text-2xl md:text-3xl tracking-tight text-[#F1F4FA]/80 hover:text-[#3987FF] transition-colors duration-200">
              {item.text}
            </span>
            <span className="mx-4 sm:mx-6 text-base sm:text-xl text-[#3987FF]/70 font-mono">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
