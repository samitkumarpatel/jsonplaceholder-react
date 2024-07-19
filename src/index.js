import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import SeeMore from './views/SeeMore';
import Root from './views/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: < Root/>,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "/:id",
        element: <SeeMore />
      }
    ]
  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);
