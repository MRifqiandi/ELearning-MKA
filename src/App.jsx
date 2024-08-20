import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterUser from "./pages/RegisterUser";
import Home from "./pages/Dashboard/DashboardHomeUser";
import DashboardAsynchronous from "./pages/Dashboard/DashboardAsynchronous";
import DashboardSynchronous from "./pages/Dashboard/DashboardSynchronous";
import ClassDetailsAsync from "./pages/ClassPages/ClassDetailsAsync";
import CheckoutPages from "./pages/PaymentPages/CheckoutPages";
import PaymentPages from "./pages/PaymentPages/PaymentPages";
import PaymentConfirm from "./pages/PaymentPages/PaymentConfirm";
import RegisterClassUser from "./pages/ClassPages/RegisterClassUser";
import ClassAsynchronous from "./pages/ClassPages/ClassAsynchronous";
// import LessonPage from "./pages/LessonPage";
import LessonPageAsync from "./pages/ClassPages/LessonPageAsync";
import CertificatePage from "./pages/Dashboard/CertificatePage";
import SearchingPage from "./pages/Dashboard/SearchingPage";
import QuestionPage from "./pages/ClassPages/QuestionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeruser" element={<RegisterUser />} />
        <Route path="/dashboardasync" element={<DashboardAsynchronous />} />
        <Route path="/dashboardsync" element={<DashboardSynchronous />} />
        <Route path="/cda" element={<ClassDetailsAsync />} />
        <Route path="/checkout" element={<CheckoutPages />} />
        <Route path="/pay" element={<PaymentPages />} />
        <Route path="/payconfirm" element={<PaymentConfirm />} />
        <Route path="/registerclass" element={<RegisterClassUser />} />
        <Route path="/class" element={<ClassAsynchronous />} />
        <Route path="/lessonAsync/:id" element={<LessonPageAsync />} />
        <Route path="/sertifikatpage" element={<CertificatePage />} />
        <Route path="/searchpage" element={<SearchingPage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
