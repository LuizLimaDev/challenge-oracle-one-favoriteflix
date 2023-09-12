import { createBrowserRouter } from 'react-router-dom';
import NewCategory from './pages/NewCategory/NewCategory'
import App from './pages/Layout/App';
import Home from './pages/Home/Home';
import NewVideo from './pages/NewVideo/NewVideo';
import EditData from './pages/EditData/EditData';
import ModalPlayVideo from './components/ModalPlayVideo/ModalPlayVideo'
import NotFound from './components/NotFound/NotFound';

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
                element: <ModalPlayVideo />
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
])

export default router;