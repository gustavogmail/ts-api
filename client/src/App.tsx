import './App.css';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import Dashboard from './components/dashboard/Dashboard';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/:contactId",
    element: <UserDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;