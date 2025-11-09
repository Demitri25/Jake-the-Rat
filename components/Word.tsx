
import React, { useState, useCallback } from 'react';
import { speak } from '../services/ttsService';

interface WordProps {
  text: string;
}

const Word: React.FC<WordProps> = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleWordClick = useCallback(async () => {
    if (isSpeaking || !text.trim().replace(/[^a-zA-Z0-9]/g, '')) return;

    setIsSpeaking(true);
    try {
      const cleanText = text.replace(/[.,!?;:]/g, '');
      await speak(cleanText);
    } catch (error) {
      console.error("Failed to speak word:", error);
      // Optionally show an error state to the user
    } finally {
      setIsSpeaking(false);
    }
  }, [isSpeaking, text]);

  const wordClasses = `
    cursor-pointer 
    transition-all 
    duration-200 
    ease-in-out 
    inline-block
    rounded-md
    px-1
    ${isSpeaking 
      ? 'bg-yellow-300 text-yellow-900 scale-110' 
      : 'hover:bg-purple-200 hover:scale-105'
    }
  `;

  return (
    <span onClick={handleWordClick} className={wordClasses}>
      {text}
    </span>
  );
};

export default Word;
