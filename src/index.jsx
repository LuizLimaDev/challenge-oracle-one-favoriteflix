import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/controller';
import Home from './pages/Home'
import NewVideo from './pages/NewVideo';
import EditVideos from './pages/EditVideos';
import NewCategory from './pages/NewCategory';
import VideoDetails from './pages/VideoDetails';

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
        path: '/newcategory',
        element: <NewCategory />
      }
      ,
      {
        path: '/videodetails/:id',
        element: <VideoDetails />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);

