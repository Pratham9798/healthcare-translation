# Healthcare Translation Web App with Generative AI

This is a web-based prototype that enables real-time, multilingual translation between patients and healthcare providers. The application converts spoken input into text, provides a live transcript, and offers a translated version with audio playback. The project uses generative AI tools to ensure accurate medical translations.

## Features

- **Voice-to-Text**: Convert spoken input into a real-time text transcript, enhanced with AI to transcribe medical terms accurately.
- **Real-Time Translation**: Translates the transcript into the selected language and displays it alongside the original text.
- **Audio Playback**: Provides a "Speak" button to listen to the translated text in the target language.
- **Mobile-First Design**: Optimized for both mobile and desktop devices.
- **Language Selection**: Users can choose input and output languages easily.
  
## Technologies Used

- **Frontend**: React.js
- **Voice Recognition**: Web Speech API or Google Speech-to-Text
- **Translation API**: OpenAI or Google Translate API
- **Text-to-Speech**: Browser's native `SpeechSynthesis` API or Google Cloud Text-to-Speech
- **Deployment**: Vercel / Netlify (or other deployment platforms)

## Setup Instructions

Follow the steps below to set up the project locally:

### 1. Clone the repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/healthcare-translation-app.git

cd healthcare-translation-app
npm install

npm start
This will open the app in your browser at http://localhost:3000.


