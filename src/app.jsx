import { Route, Routes } from "react-router-dom";
import "./app.css";
import Callendar from "./components/Callendar/callendar";
import ErrorPage from "./components/ErrorPage/error";
import Canvas from "./components/Graph/canvas";
import Login from "./components/LoginPage/login";
import MainPage from "./components/MainPage/mainpage";
import Town from "./components/SubPage/town";
import UserInfo from "./components/UserPage/userinfo";

function App({authService}) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login authService={authService}/>} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/subPage" element={<Town />} />
        <Route path="/callendar" element={<Callendar />} />
        <Route path="/Graph" element={<Canvas />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
