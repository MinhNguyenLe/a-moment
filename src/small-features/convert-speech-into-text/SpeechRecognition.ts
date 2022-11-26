declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

export interface PropertySpeechRecognition {
    continuous: boolean;
    lang: string;
    interimResults: boolean;
    maxAlertnatives: number;
}

export const configSpeechRecognition = (
    { continuous, lang, interimResults, maxAlertnatives }: PropertySpeechRecognition = {
        continuous: false,
        lang: "en-US",
        interimResults: false,
        maxAlertnatives: 1,
    }
) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecognition = new SpeechRecognition();

    speechRecognition.continuous = continuous;
    speechRecognition.lang = lang;
    speechRecognition.interimResults = interimResults;
    speechRecognition.maxAlertnatives = maxAlertnatives;

    return speechRecognition;
};
