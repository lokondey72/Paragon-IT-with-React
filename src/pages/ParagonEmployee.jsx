import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Employees from "./Employees";

const ParagonEmployee = () => {
  const admin = useSelector((state) => state.AdminSlice.admin);
  return (
    <div className="w-full bg-gray-200">
      <div>
        <button className="w-40 mt-5 mx-5 px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary">
          Add Employee
        </button>
      </div>
      <div className="flex flex-wrap">
        <Employees />
        <Employees />
        <Employees />
        <Employees />
      </div>
    </div>
  );
};

export default ParagonEmployee;
