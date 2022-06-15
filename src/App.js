import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import "./mystyle.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import Employees from "./pages/Employees";
import UploadPage from "./pages/UploadPage";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { rdxuploadsactions } from "./reducers/upload";

function App() {
  let isLog = useSelector((state) => state.uploadReducer.userLog);

  return (
    <div>
      {isLog ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
