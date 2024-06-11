import { FaEdit } from "react-icons/fa";
import { applyData } from "../Slice/applyedStudent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminItems from "./AdminItems";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";

const SearchList = ({ student }) => {
  const disptch = useDispatch();

  const handelStuInfo = () => {
    // setShow(!show);
    disptch(applyData(student));
  };
  return (
    <>
      <div>
        <Link to="/admin/Details">
          <div onClick={handelStuInfo}>
            <div className="flex">
              <div className="w-14 h-12 rounded-full overflow-hidden ">
                <img
                  className="w-full h-full"
                  src={student?.studentprofile}
                  alt="Student-img"
                />
              </div>
              <p className="mx-5 my-5">{student.studentName}</p>
              <p className="mx-5 my-5">{student.studentNumber}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SearchList;
