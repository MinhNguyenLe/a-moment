import { HelmetProvider } from "react-helmet-async";
import { createRoot } from "react-dom/client";

import "nprogress/nprogress.css";
import App from "src/architecture/App";
import { SidebarProvider } from "src/contexts/SidebarContext";
import * as serviceWorker from "src/serviceWorker";

const container = document.getElementById("root");

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <HelmetProvider>
        <SidebarProvider>
                <App />
        </SidebarProvider>
    </HelmetProvider>
);

serviceWorker.unregister();
