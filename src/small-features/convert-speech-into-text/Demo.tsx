import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Container, Grid, ListItem, ListItemText, Switch } from "@mui/material";
import PageHeader from "src/content/dashboards/Crypto/PageHeader";
import useSpeechRecognition from "./useSpeechRecognition";

function ManagementUserSettings() {
    const { onStartMic, onStopMic, getContent } = useSpeechRecognition();

    const onChangeSwitchMic = (e) => {
        if (e.target.checked) {
            onStartMic();
        } else {
            onStopMic();
        }
    }

    return (
        <>
            <Helmet>
                <title>User Settings - Applications</title>
            </Helmet>
            <PageTitleWrapper>
                <PageHeader />
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <ListItem sx={{ p: 3 }}>
                        <ListItemText
                            primaryTypographyProps={{ variant: "h5", gutterBottom: true }}
                            secondaryTypographyProps={{
                                variant: "subtitle2",
                                lineHeight: 1,
                            }}
                            primary="Convert speech into text by Window Speech Recognition"
                            secondary={getContent() || "Please open mic and talk anything ..."}
                        />
                        <Switch color="primary" onChange={onChangeSwitchMic} />
                    </ListItem>
                </Grid>
            </Container>
        </>
    );
}

export default ManagementUserSettings;
