// import { getDatabase, onValue, ref } from "firebase/database";
// import { useEffect, useState } from "react";
// import StudentItems from "./StudentItems";
import { applyData } from "../Slice/applyedStudent";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminItems from "./AdminItems";

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
      <div className="w-3/4 mx-5 my-2">
        <div>
          <Link to="/admin/Details">
            <button
              onClick={handelStuInfo}
              className="w-full py-3 px-10 rounded-xl text-white bg-gray-500 hover:bg-primary"
            >
              <div className="my-2">
                <AdminItems student={student} />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ApplyDateS;
