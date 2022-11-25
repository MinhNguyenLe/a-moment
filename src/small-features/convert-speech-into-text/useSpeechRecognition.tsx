import { useState } from "react";
import { configSpeechRecognition, PropertySpeechRecognition } from "./SpeechRecognition";

//NOTE: SR is speech recognition

interface UseSpeechRecognitionReturn {
    onStartMic: () => void;
    onStopMic: () => void;
    getContent: () => string;
    isStarting: boolean;
}

const useSpeechRecognition = (config?: PropertySpeechRecognition): UseSpeechRecognitionReturn => {
    const [isStarting, setIsStarting] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");

    const mic = configSpeechRecognition(config)
console.log(mic)
    const onStartSR = () => {
        mic.onstart(() => {
            console.log("It is starting ...");
        });
    };

    const onStopSR = () => {
        mic.stop();

        onEnd();
    };

    const onEnd = () => {
        mic.onend(() => {
            console.log("It stopped");
        });
    };

    const onResultSR = () => {
        mic.onresult((event) => {
            console.log("Test result:--------", event);
        });
    };

    const getContent = () => {
        return content;
    };

    const onStartMic = () => {
        setIsStarting(true);

        onStartSR();
        onResultSR();
    };

    const onStopMic = () => {
        setIsStarting(false);

        onStopSR();
    };

    return { onStartMic, getContent, onStopMic, isStarting };
};

export default useSpeechRecognition;
