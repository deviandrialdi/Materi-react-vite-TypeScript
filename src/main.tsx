import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./utils/redux/store/store";
import App from "./routes";
import "./styles/index.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// provider ini jika sudah diinisialisai pada store dan reducer lalu buat component import { Provider } from "react-redux" dan buat Provider store={store} 


// redux itu state management => library untuk melakukan management state. Provider itu adalah pembungkusnya. component pembungkus namanya provider. yaitu membungkus element2. didalam provider ada props. nama propsnya yaitu store. Store itu kayak didaftarkan.  
