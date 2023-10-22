import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import SignPage from "../SignPage/SignPage";
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
    ]
  },

  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signUp",
    element: <SignPage />
  }

]);