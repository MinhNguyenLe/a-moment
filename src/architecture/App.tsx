import { useRoutes } from "react-router-dom";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { CssBaseline } from "@mui/material";
import ThemeProvider from "../theme/ThemeProvider";
import AppRouter from "./router/AppRouter";

function App() {

    return (
        <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                <AppRouter/>
            </LocalizationProvider>
        </ThemeProvider>
    );
}
export default App;
