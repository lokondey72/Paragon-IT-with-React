// import { getDatabase, onValue, ref } from "firebase/database";
// import { useEffect, useState } from "react";
// import StudentItems from "./StudentItems";
import { FaEdit } from "react-icons/fa";
import { applyData } from "../Slice/applyedStudent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminItems from "./AdminItems";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const ApplyDateS = ({ student }) => {
  // const db = getDatabase();
  const disptch = useDispatch();
  // let [studentList, setStudentList] = useState([]);
  // let [dateList, setDateList] = useState([]);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   let arr = [];
  //   const starCountRef = ref(db, "studentList/");
  //   onValue(starCountRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       arr.push(item.val().month + item.val().studentEmail);
  //     });
  //     setDateList(arr);
  //   });
  // }, []);

  // useEffect(() => {
  //   let arr = [];
  //   const starCountRef = ref(db, "studentList/");
  //   onValue(starCountRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       arr.push({ ...item.val(), key: item.key });
  //     });
  //     setStudentList(arr);
  //   });
  // }, []);

  // console.log(studentList);

  const handelStuInfo = () => {
    // setShow(!show);
    disptch(applyData(student));
  };
  // const applyitem = useSelector((state) => state.applyedStudent.applyStuD);
  // console.log(applyitem);

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
                    onClick={handelStuInfo}
                    className="w-14 h-14 rounded-full overflow-hidden "
                  >
                    <img
                      className="w-full h-full"
                      src={student?.studentprofile}
                      alt="Student-img"
                    />
                  </div>
                  <div className="w-11/12 flex">
                    <p className="w-1/2 text-lg px-2">{student?.studentName}</p>
                    <p className="w-1/4 text-lg mx-20">
                      {student?.studentNumber}
                    </p>
                    <p className="w-72 text-lg mr-10">{student?.today}</p>
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

export default ApplyDateS;
