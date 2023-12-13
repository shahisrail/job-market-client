import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import Login from "../Pages/Login/Login";
import Regestratoin from "../Pages/Regestratoin/Regestratoin";
import PrivateRoute from "./PrivateRoute";
import Mypost from "../Pages/Mypost/Mypost";
import Mybids from "../Pages/Mybids/Mybids";
import BidRequest from "../Pages/BidRequest/Request";
import Jobdetails from "../Pages/JobDetails/Jobdetails";
import Updated from "../Pages/Update/Updated";
import Error from "../Pages/ErrorPages/Error";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assaignment-11-server-nu.vercel.app/cart"),
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
        path: "/contact",
        element: <Contact></Contact>,
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
          fetch(
            `https://assaignment-11-server-nu.vercel.app/cart/${params.id}`
          ),
      },

      {
        path: "/update/:id",
        element: <Updated></Updated>,
        loader: ({ params }) =>
          fetch(
            `https://assaignment-11-server-nu.vercel.app/cart/${params.id}`
          ),
      },
      {
        path: "/mybids",
        element: (
          <PrivateRoute>
            <Mybids></Mybids>,
          </PrivateRoute>
        ),
      },
      {
        path: "/BidRequest",
        element: (
          <PrivateRoute>
            <BidRequest></BidRequest>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
