import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="w-1/4 px-10 bg-gray-200">
        <div className="my-8 py-10 px-10 rounded-2xl bg-white">
          <div className="flex items-center mb-10 gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                className="w-full h-full"
                src="/public/user-dufolt-img.png"
                alt=""
              />
            </div>
            <div>
              <h5>mgd Billah</h5>
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
                  <button className="px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary">
                    Student Details
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
