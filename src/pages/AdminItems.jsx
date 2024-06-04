import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";

const AdminItems = ({ student }) => {
  // const applyitem = useSelector((state) => state.applyedStudent.applyStuD);

  return (
    <>
      <div className="w-full flex items-center gap-4">
        <div className="w-14 h-12 rounded-full overflow-hidden ">
          <img
            className="w-full h-full"
            src={student?.studentprofile}
            alt="Student-img"
          />
        </div>
        <div className="w-11/12 flex">
          <p className="w-1/2 text-lg px-2">{student?.studentName}</p>
          <p className="w-1/4 text-lg mx-20">{student?.studentNumber}</p>
          <p className="w-72 text-lg mr-10">{student?.today}</p>
        </div>
        <button className="text-red-500 mr-5">
          <MdOutlineCancelPresentation />
        </button>
        <button className="text-green-500 mr-5">
          <FaCheckSquare />
        </button>
      </div>
    </>
  );
};

export default AdminItems;
