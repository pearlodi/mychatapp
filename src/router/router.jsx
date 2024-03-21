import Index from '../pages/Index';
import Signup from '../auth/signup/Index';

import '../css/main.css'
import {
  createBrowserRouter,
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

export default router

