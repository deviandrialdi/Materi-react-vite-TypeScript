import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react"; // ini adalah langkah ketiga

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import Favorite from "../pages/Favorite";
import Sandbox from "../pages/Sandbox";

import { ThemeContext } from "../utils/context"; // ini langkah kedua dari context

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

const App = () => {
  const [theme, setTheme] = useState("light"); // langkah kedua
  const background = useMemo(() => ({ theme, setTheme }), [theme]); // langkah ketiga

  useEffect(() => {
    // langkah keempat
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
