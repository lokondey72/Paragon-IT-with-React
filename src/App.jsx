import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Leyout from "./components/Leyout";
import Course from "./components/pages/Course";
import SuccessStory from "./components/pages/SuccessStory";
import ContactUs from "./components/pages/ContactUs";
import Apply from "./components/Apply";
import ApplySuccessfull from "./components/pages/ApplySuccessfull";
import AdminPage from "./components/pages/AdminPage";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import AdminLayout from "./components/AdminLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/story" element={<SuccessStory />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/apply" element={<Apply />}></Route>
          <Route path="/applysuccess" element={<ApplySuccessfull />}></Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />}></Route>
        </Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
