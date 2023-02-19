import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react"; // ini adalah langkah
import { useDispatch } from "react-redux";

import Homepage from "pages";
import DetailMovie from "pages/DetailMovie";
import Favorite from "pages/Favorite";
import Sandbox from "pages/Sandbox";

import { ThemeContext } from "utils/context"; // ini langkah kedua dari context
import { setFavorites } from "utils/redux/reducers/reducer"; // ini adalah updaternya

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
  const dispatch = useDispatch(); // untuk melakukan perubahan data. tidak bisa menggunakan set. harus menggunakan useDispatch. Setelah itu buat useeffect baru
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

  useEffect(() => {
    const getFavMovie = localStorage.getItem("FavMovie");
    if (getFavMovie) {
      dispatch(setFavorites(JSON.parse(getFavMovie)));
    }
  }, []); // ini adalah mengambil dan merubah data dari local storage

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;

// javascript itu adalah asscyronus artinya jalannya barengan
// wadahnya diinisialisasi dulu baru dirubah datanya. Jangan wadahnya diinisialisasi dulu sembari dilakukan perubahan data. aartinya tidak singkron. Karena wadah belum ready tapi udah diubah datanya. Maka dari itu main dibungkus dengan redux.