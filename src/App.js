import React, { useState } from 'react';
import VoiceToTextInput from './components/VoiceToTextInput'; // Voice-to-text component
import LanguageTranslator from './components/LanguageTranslator'; // Translation component
import SpeechPlayer from './components/SpeechPlayer'; // Updated import for text-to-speech

const App = () => {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es'); // Default to Spanish
  const [transcript, setTranscript] = useState(''); // Placeholder for transcript

  return (
    <div>
      <h1>Healthcare Translation App</h1>

      {/* Language Selection */}
      <div>
        <label>Source Language: </label>
        <select onChange={(e) => setSourceLang(e.target.value)} value={sourceLang}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <label>Target Language: </label>
        <select onChange={(e) => setTargetLang(e.target.value)} value={targetLang}>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Speech Recognition */}
      <VoiceToTextInput setTranscript={setTranscript} />

      {/* Translation */}
      <LanguageTranslator transcript={transcript} sourceLang={sourceLang} targetLang={targetLang} />

      {/* Speech Player (Text-to-Speech) */}
      <SpeechPlayer translation={transcript} />
    </div>
  );
};

export default App;


