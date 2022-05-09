import { Route, Routes } from "react-router-dom";
import "./app.css";
import Callendar from "./components/Callendar/callendar";
import Canvas from "./components/Graph/canvas";
import Login from "./components/LoginPage/login";
import MainPage from "./components/MainPage/mainpage";
import Town from "./components/SubPage/town";
import UserInfo from "./components/UserPage/userinfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/subPage" element={<Town />} />
        <Route path="/callendar" element={<Callendar />} />
        <Route path="/Graph" element={<Canvas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
