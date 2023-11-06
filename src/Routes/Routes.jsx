import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Login from "../Pages/Login/Login";
import Regestratoin from "../Pages/Regestratoin/Regestratoin";
import PrivateRoute from "./PrivateRoute";
import Mypost from "../Pages/Mypost/Mypost";
import Jobdetails from "../Pages/JobDetails/Jobdetails";
import Updated from "../Pages/Update/Updated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/Addjob",
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regetraoin",
        element: <Regestratoin></Regestratoin>,
      },
      {
        path: "/mypost",
        element: (
          <PrivateRoute>
            {" "}
            <Mypost></Mypost>,
          </PrivateRoute>
        ),
        
      },
      {
        path: "/jobdetails/:id",
        element: (
          <PrivateRoute>
            <Jobdetails></Jobdetails>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },

      {
        path: "/update/:id",
        element: <Updated></Updated>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
    ],
  },
]);

export default router;
