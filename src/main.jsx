import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Index from './pages/Index';
import Signup from './pages/Signup';
import './css/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
{
  path: '/',
  element: <Index />,
  errorElement: <div>404 not found</div>
},
{
  path: '/signup',
  element: <Signup />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
