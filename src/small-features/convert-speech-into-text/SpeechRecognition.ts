
declare global{
    interface Window{
        SpeechRecognition: ()=>void;
    }
}

const SpeechRecognition = window.SpeechRecognition 

export const speechRecognition = new  SpeechRecognition();