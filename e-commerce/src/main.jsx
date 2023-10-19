import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Wrapper from './content/wrapper'
import Sidebar from './component/sidebar'

import Login from './auth/login.jsx'
import Register from './auth/register.jsx'
import Logout from './auth/logout';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/home",
    element: <Wrapper />
  },
  {
    path: "/home_seller",
    element: <Wrapper />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
