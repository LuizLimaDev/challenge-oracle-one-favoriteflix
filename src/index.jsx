import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import NewVideo from './pages/NewVideo';
import EditVideos from './pages/EditData';
import NewCategory from './pages/NewCategory';
import { DataProvider } from './context/controller';
import Modal from './components/Modal/Modal';

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
        element: <EditVideos />
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
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);

