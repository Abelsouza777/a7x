'use client';

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string; // Texto que será exibido
  delay: number; // Intervalo de tempo entre os caracteres
}

const TypingText: React.FC<TypingTextProps> = ({ text, delay }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prevTypedText) => {
        if (prevTypedText.length < text.length) {
          return prevTypedText + text[prevTypedText.length];
        } else {
          clearInterval(interval);
          return prevTypedText;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <div className="flex items-center">
      <span>{typedText}</span>
      <span className="ml-2 w-2 h-2 rounded-full bg-green-500 animate-blink"></span>
    </div>
  );
};

export default TypingText;
