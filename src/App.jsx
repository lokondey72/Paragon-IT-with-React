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
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
