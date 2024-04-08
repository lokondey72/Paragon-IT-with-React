import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Leyout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Leyout;
