import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
// import Apply from "./components/Apply";
import About from "./components/About";
import Leyout from "./components/Leyout";
import Course from "./pages/Course";
import SuccessStory from "./pages/SuccessStory";
import ContactUs from "./pages/ContactUs";
import ApplySuccessfull from "./pages/ApplySuccessfull";
import AdminLayout from "./components/AdminLayout";
import AdminPage from "./pages/AdminPage";
import StudentDetails from "./pages/StudentDetails";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ApplyNow from "./components/ApplyNow";
import StudentItems from "./pages/StudentItems";
import ParagonEmployee from "./pages/ParagonEmployee";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/apply" element={<Apply />}></Route> */}
          <Route path="/apply" element={<ApplyNow />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/story" element={<SuccessStory />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/applysuccess" element={<ApplySuccessfull />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />}></Route>
          <Route path="/admin/student" element={<StudentDetails />}></Route>
          <Route path="/admin/Details" element={<StudentItems />}></Route>
          <Route path="/admin/employee" element={<ParagonEmployee />}></Route>
        </Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
