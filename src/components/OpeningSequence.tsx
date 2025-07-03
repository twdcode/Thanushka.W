
import React, { useState, useEffect } from 'react';

const OpeningSequence = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentStep(1), 500),
      setTimeout(() => setCurrentStep(2), 1500),
      setTimeout(() => setCurrentStep(3), 2500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Step 1: Name appears */}
        <div className={`transition-all duration-1000 ${
          currentStep >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-white font-crimson">
            SARAH CHEN
          </h1>
        </div>

        {/* Step 2: Title appears */}
        <div className={`transition-all duration-1000 delay-500 ${
          currentStep >= 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] text-white/80">
            PRODUCT DESIGNER & STORYTELLER
          </p>
        </div>

        {/* Step 3: Subtitle appears */}
        <div className={`transition-all duration-1000 delay-1000 ${
          currentStep >= 3 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="space-y-2 text-sm text-white/60">
            <div className="w-16 h-px bg-white/30 mx-auto mb-4" />
            <p className="tracking-widest">DIRECTING DIGITAL EXPERIENCES</p>
          </div>
        </div>
      </div>

      {/* Fade to black effect */}
      <div className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
        currentStep >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`} />
    </div>
  );
};

export default OpeningSequence;
