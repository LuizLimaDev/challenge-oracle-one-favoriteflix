import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import EditData from "./pages/EditData";
import NewCategory from "./pages/NewCategory";
import Modal from "./components/Modal/Modal";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/newvideo',
                element: <NewVideo />
            },
            {
                path: '/editvideos',
                element: <EditData />
            },
            {
                path: '/newcategory/',
                element: <NewCategory />
            },
            {
                path: '/newcategory/:id',
                element: <NewCategory />
            },
            {
                path: '/newvideo/:id',
                element: <NewVideo />
            },
            {
                path: '/playvideo/:id',
                element: <Modal />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
])

export default router;