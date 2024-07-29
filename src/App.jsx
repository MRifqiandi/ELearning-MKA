import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import Aside from "./components/Aside";
import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import Home from "./pages/DashboardHomeUser";
import CardCompleteCourse from "./components/CardCompleteCourse";
// import AlertCard from "./components/Alert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/sidebar" element={<Aside />} />
        <Route path="/search" element={<SearchInput />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/ccc" element={<CardCompleteCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
