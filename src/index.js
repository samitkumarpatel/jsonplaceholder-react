import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import SeeMore from './views/SeeMore';
import Root from './views/Root';
import Users from './views/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
  {
    path: "/",
    element: < Root/>,
    children: [
      {
        path: "",
        element: <Users />,
        loader: () => {
          return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => data)
            .catch(error => error)
        }
      },
      {
        path: "/:id",
        element: <SeeMore />,
        loader: ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => data)
            .catch(error => error)
        }
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
