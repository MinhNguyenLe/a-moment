import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Container, Grid } from "@mui/material";
import Footer from "src/components/Footer";
import PageHeader from "src/content/dashboards/Crypto/PageHeader";
import useSpeechRecognition from "./useSpeechRecognition";
import { useState, useEffect } from "react";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function ManagementUserSettings() {
    // const { onStartMic, onStopMic } = useSpeechRecognition();

    const [isListening, setIsListening] = useState(false);
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([]);

    useEffect(() => {
        handleListen();
    }, [isListening]);

    console.log(mic)

    const handleListen = () => {
        if (isListening) {
            mic.start();
            mic.onend = () => {
                console.log("continue..");
                mic.start();
            };
        } else {
            mic.stop();
            mic.onend = () => {
                console.log("Stopped Mic on Click");
            };
        }
        mic.onstart = () => {
            console.log("Mics on");
        };

        mic.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join("");
            console.log(transcript);
            setNote(transcript);
            mic.onerror = (event) => {
                console.log(event.error);
            };
        };
    };

    const handleSaveNote = () => {
        setSavedNotes([...savedNotes, note]);
        setNote("");
    };

    return (
        <>
            <Helmet>
                <title>User Settings - Applications</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
                <h2>Speech Recognition</h2>
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <>
                        <h1>Voice Notes</h1>
                        <div className="container">
                            <div className="box">
                                {/* <button onClick={onStartMic}>Start</button>
                                <button onClick={onStopMic}>Stop</button> */}
                            </div>
                        </div>
                    </>
                </Grid>
            </Container>
            <Footer />
        </>
    );
}

export default ManagementUserSettings;
