import { Link } from "react-router-dom";

const SessionPage = () => {
  return (
    <>
      <div className="w-full mx-5 my-2">
        <div>
          <div className="w-full py-3 px-10 rounded-xl text-white bg-gray-500 hover:bg-primary">
            <div className="my-2">
              {/* <AdminItems student={student} /> */}
              <div className="w-full flex items-center gap-4">
                <Link
                  className="w-full flex items-center gap-4"
                  to="/admin/Details"
                >
                  <div
                    // onClick={handelStuInfo}
                    className="w-14 h-14 rounded-full overflow-hidden "
                  >
                    <img
                      className="w-full h-full"
                      src="{student?.studentprofile}"
                      alt="Student-img"
                    />
                  </div>
                  <div className="w-11/12 flex">
                    <p className="w-1/2 text-lg px-2">name</p>
                    <p className="w-1/4 text-lg mx-20">65445645645</p>
                    <p className="w-72 text-lg mr-10">today</p>
                  </div>
                </Link>
                <button className="text-green-500 bg-red-500 p-2 mr-5">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionPage;
