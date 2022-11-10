import routes from "./router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
