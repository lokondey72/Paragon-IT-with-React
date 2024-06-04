import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ParagonEmployee = () => {
  const admin = useSelector((state) => state.AdminSlice.admin);
  return (
    <div className="w-full bg-gray-200">
      <div>
        <button className="w-40 mt-5 mx-5 px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary">
          Add Employee
        </button>
      </div>
      <div className="w-1/4 my-5 mx-5 py-10 px-5 rounded-2xl bg-white">
        <div className="flex flex-col items-center mb-10 gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img className="w-full h-full" src={admin?.photoURL} alt="Admin" />
          </div>
          <div>
            <h5>{admin?.displayName}</h5>
          </div>
        </div>
        <div className="px-5">
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/admin">
                <button className="px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary">
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <Link to="/admin/student">
                <button className="flex items-center gap-2 w-40 pl-4 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary">
                  <p>Student Details</p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParagonEmployee;
