import About from "@/pages/about";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Login from "@/pages/login";
import Complaint from "@/pages/complaints";

import { createBrowserRouter } from "react-router-dom";
import Protected from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/about",
    element: (
      <Protected>
        <About />
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/keluhan",
    element: (
      <Protected>
        <Complaint />
      </Protected>
    )
  }
]);
