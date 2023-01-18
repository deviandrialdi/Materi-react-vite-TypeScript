import React from "react";
import ReactDOM from "react-dom/client";
import DetailMovie from "./pages/DetailMovie";
import axios from "axios";

import Favorite from "./pages/Favorite";
import Class from "./pages/Class";
import App from "./pages";
import "./styles/index.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DetailMovie />
  </React.StrictMode>
);
