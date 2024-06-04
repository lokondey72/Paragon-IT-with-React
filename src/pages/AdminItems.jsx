import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const AdminItems = ({ student }) => {
  // const applyitem = useSelector((state) => state.applyedStudent.applyStuD);

  return (
    <>
      <div className="w-full flex items-center gap-4">
        {/* <p className="text-lg font-bold text-blue-400">1</p> */}
        <div className="w-14 h-14 rounded-full overflow-hidden ">
          <img
            className="w-full h-full"
            src={student?.studentprofile}
            alt="Student-img"
          />
        </div>
        <div className="flex">
          <p className="text-lg mx-5">{student?.studentName}</p>
          <p className="text-lg mx-20">{student?.studentNumber}</p>
          <p className="text-lg mx-20">{student?.today}</p>
        </div>
        <button className="">
          <FaEdit />
        </button>
      </div>
    </>
  );
};

export default AdminItems;
