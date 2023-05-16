import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home'
import NewVideo from './routes/NewVideo';
import EditVideos from './routes/EditVideos';
import NewCategory from './routes/NewCategory';
import { DataProvider } from './context/controller';

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
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);

