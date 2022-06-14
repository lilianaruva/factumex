import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import "./mystyle.scss";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/navbar";
import Employees from "./pages/Employees";
import Upload from "./pages/Upload";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
