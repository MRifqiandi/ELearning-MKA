import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import Aside from "./components/Aside";
import SearchInput from "./components/SearchInput";
import Navbar from "./components/Navbar";
import Home from "./pages/DashboardHomeUser";
// import CardCompleteCourse from "./components/CardCompleteCourse";
import DashboardAsynchronous from "./pages/DashboardAsynchronous";
import DashboardSynchronous from "./pages/DashboardSynchronous";
import RecentActivity from "./components/RecentActivity";
import Instructor from "./components/Instructor";
import ClassDetailsAsync from "./pages/ClassDetailsAsync";
import Chapter from "./components/Chapter";
import CheckoutPages from "./pages/CheckoutPages";

import Cart from "./components/Cart";
import PaymentPages from "./pages/PaymentPages";

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
        <Route path="/ccc" element={<RecentActivity />} />
        <Route path="/dashboardasync" element={<DashboardAsynchronous />} />
        <Route path="/dashboardsync" element={<DashboardSynchronous />} />
        <Route path="/ins" element={<Instructor />} />
        <Route path="/cda" element={<ClassDetailsAsync />} />
        <Route path="/chapter" element={<Chapter />} />
        <Route path="/checkout" element={<CheckoutPages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<PaymentPages />} />
      </Routes>
    </Router>
  );
}

export default App;
