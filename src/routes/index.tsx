import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Component, ReactNode } from "react";

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import Favorite from "../pages/Favorite";
import Sandbox from "../pages/Sandbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/favorites",
    element: <Favorite />,
  },
  {
    path: "/movie/:id_movie",
    element: <DetailMovie />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
