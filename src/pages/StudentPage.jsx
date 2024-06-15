import { RiDeleteBin6Line } from "react-icons/ri";

const StudentPage = ({ data }) => {
//   console.log(data);
  return (
    <>
      <div className="my-2">
        <div className="w-full flex items-center gap-4">
          <div className="w-full flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden ">
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
          </div>
          <button className="text-green-500 bg-red-500 p-2 mr-5">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
