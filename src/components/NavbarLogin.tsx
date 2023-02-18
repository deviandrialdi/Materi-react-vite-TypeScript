import { Link } from "react-router-dom";
import { useContext } from "react";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

import Button from "./Button";

import { ThemeContext } from "../utils/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  } // buat function agar ke trigger

  return (
    <div className="navbar bg-base-100 dark:bg-gray-700 justify-between">
      <div className="flex">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Cinephile
        </Link>
        <Link
          to="/favorites"
          className="btn btn-ghost normal-case text-xl text-black dark:text-white"
        >
          Favorite
        </Link>
      </div>

      <div className="flex-none items-center justify-center gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>

      <div>
        <Button label="Theme" onClick={() => handleTheme()} />
      </div>
    </div>
  );
};

export default Navbar;
