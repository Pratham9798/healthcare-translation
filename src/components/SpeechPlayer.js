import React, { useEffect } from 'react';

const SpeechPlayer = ({ translation }) => {
  const speakText = () => {
    if (translation) {
      const speech = new SpeechSynthesisUtterance(translation);
      window.speechSynthesis.speak(speech);
    }
  };

  useEffect(() => {
    if (translation) {
      speakText();
    }
  }, [translation]);

  return (
    <div>
      <button onClick={speakText}>Speak</button>
    </div>
  );
};

export default SpeechPlayer;
