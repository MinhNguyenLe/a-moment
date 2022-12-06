import { useState } from "react";
import { configSpeechRecognition, PropertySpeechRecognition } from "./SpeechRecognition";

//NOTE: SR is speech recognition

interface UseSpeechRecognitionReturn {
    onStartMic: () => void;
    onStopMic: () => void;
    getContent: () => string;
}

const useSpeechRecognition = (config?: PropertySpeechRecognition): UseSpeechRecognitionReturn => {
    const [content, setContent] = useState<string>("");
    const [mic] = useState(configSpeechRecognition(config))

    const onStartSR = () => {
        mic.start();

        mic.onerror = (event) => {
            console.warn(`Have some errors: ${event.error}`)
        }

        mic.onend = () => { console.log("continue") }
    };

    const onStopSR = () => {
        mic.stop();

        onEnd();
    };

    const onEnd = () => {
        mic.onend = () => {
            console.log("It stopped");
        };
    };

    const onResultSR = () => {
        mic.onresult = (event) => {
            const content =
                Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("");

            setContent(content);
        };
    };

    const getContent = () => {
        return content;
    };

    const onStartMic = () => {
        mic.onstart = () => {
            console.log("starting!!!")
        }

        onStartSR();
        onResultSR();
    };

    const onStopMic = () => {
        onStopSR();
    };

    return { onStartMic, getContent, onStopMic };
};

export default useSpeechRecognition;
