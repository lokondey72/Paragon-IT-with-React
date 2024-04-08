import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Leyout from "./components/Leyout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
