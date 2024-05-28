import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const AdminNav = () => {
  let [show, setShow] = useState(false);
  const admin = useSelector((state) => state.AdminSlice.admin);

  const [logOut, setLogOut] = useState(false);

  const hendelLogout = () => {
    setLogOut(localStorage.setItem("admin", JSON.stringify("")));
  };

  const handeldrop = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="w-1/4 px-10 bg-gray-200">
        <div className="my-8 py-10 px-10 rounded-2xl bg-white">
          <div className="flex items-center mb-10 gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src={admin?.photoURL}
                alt="Admin"
              />
            </div>
            <div>
              <h5>{admin?.displayName}</h5>
            </div>
            <div className="ml-8">
              <button className="px-2 py-2 text-xl rounded-xl text-white bg-gray-500 hover:bg-primary">
                <Link onClick={() => hendelLogout(logOut)} to="/login">
                  <MdOutlineLogout />
                </Link>
              </button>
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
                  <button
                    onClick={handeldrop}
                    className="flex items-center gap-2 px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary"
                  >
                    <p>Student Details</p>
                    <IoIosArrowDroprightCircle />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {show && (
          <div className="mx-5">
            <div>
              <button className="w-full py-3 text-white bg-gray-500 hover:bg-primary">
                28/05/2024
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminNav;
