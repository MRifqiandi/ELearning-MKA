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
import SettingPage from "./pages/Dashboard/SettingPage";
import DashboardAdmin from "./pages/Dashboard/DashboardAdmin";
import AllClassesAdmin from "./pages/Dashboard/AllClassesAdmin";
import ClassDetailSync from "./pages/ClassPages/ClassDetailSync";
import FeedbackToMentor from "./pages/Dashboard/FeedbackToMentor";
import TaskUploader from "./pages/ClassPages/TaskUploader";
import ListUsers from "./pages/Dashboard/ListUsers";
import EditLessonsDetail from "./pages/Dashboard/EditLessonsDetail";
import AddClasses from "./pages/Dashboard/AddClasses";
import FeedbackMentor from "./pages/Dashboard/DashboardFeedbackMentor";
import ListTaskUsers from "./pages/Dashboard/ListTaskUsers";
import AddMeetingClasses from "./pages/Dashboard/AddMeetingClass";
import DashboardUsersAttendance from "./pages/Dashboard/DashboardUsersAttendance";
import AddEditQuestion from "./pages/Dashboard/AddEditQuestion";
import UserTasks from "./pages/Dashboard/UserTasks";
import AddTask from "./pages/Dashboard/AddTask";
import AddModuleAndMateri from "./pages/Dashboard/AddModulAndMateri";
// import WeekDetailSync from "./pages/ClassPages/WeekDetailSync";

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
        <Route path="/classasync" element={<ClassAsynchronous />} />
        <Route path="/lessonAsync/:id" element={<LessonPageAsync />} />
        <Route path="/sertifikatpage" element={<CertificatePage />} />
        <Route path="/searchpage" element={<SearchingPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/allclasses" element={<AllClassesAdmin />} />
        <Route path="/cds" element={<ClassDetailSync />} />
        <Route path="/feedbacktomentor" element={<FeedbackToMentor />} />
        <Route path="/taskuploader" element={<TaskUploader />} />
        <Route path="/listusers" element={<ListUsers />} />
        <Route path="/eld" element={<EditLessonsDetail />} />
        <Route path="/addclass" element={<AddClasses />} />
        <Route path="/feedbackmentor" element={<FeedbackMentor />} />
        <Route path="/listtask" element={<ListTaskUsers />} />
        <Route path="/addmeetingclass" element={<AddMeetingClasses />} />
        <Route path="/usersattendance" element={<DashboardUsersAttendance />} />
        <Route path="/addquestion" element={<AddEditQuestion />} />
        <Route path="/usertasks" element={<UserTasks />} />
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/addmodul" element={<AddModuleAndMateri />} />
      </Routes>
    </Router>
  );
}

export default App;
