import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./assets/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthService from "./services/auth_service";

const authService = new AuthService();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store ={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App authService={authService}/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
