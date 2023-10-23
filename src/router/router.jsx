import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import SignPage from "../SignPage/SignPage";
import Details from "../ProductsDetailsPage/Details";
import Carts from "../MyCarts/Carts";

// Create and render a browser router in main.jsx

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`https://e-commerce-server-shanto001971.vercel.app/details/${params.id}`)
      },
      {
        path: "/myCart",
        element: <Carts/>
      }

    ]
  },

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signUp",
    element: <SignPage />
  },

]);