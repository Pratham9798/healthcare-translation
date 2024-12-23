import React, { useEffect, useState } from 'react';

const LanguageTranslator = ({ transcript, sourceLang, targetLang }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const translateText = async () => {
      if (!transcript) return;
      setLoading(true);
      
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: transcript, sourceLang, targetLang })
        });
        const data = await response.json();
        setTranslatedText(data.translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      } finally {
        setLoading(false);
      }
    };

    translateText();
  }, [transcript, sourceLang, targetLang]);

  return (
    <div>
      <h2>Translated Text</h2>
      {loading ? <p>Loading...</p> : <p>{translatedText}</p>}
    </div>
  );
};

export default LanguageTranslator;
