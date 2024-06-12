import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

const AdminItems = ({ student }) => {
  const db = getDatabase();
  const [sessionData, setSessionData] = useState([]);
  const sessionKey = sessionData.map((item) => item.key);
  const sessionTName = sessionData.map((item) => item.sessionName);
  // console.log(student);
  // const applyitem = useSelector((state) => state.applyedStudent.applyStuD);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "session/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setSessionData(arr);
    });
  }, []);
  console.log(sessionTName);

  const handelConfirm = (data) => {
    update(ref(db, "session/" + sessionKey), {
      studentName: student.studentName,
      fatherName: student.fatherName,
      motherName: student.motherName,
      studentNumber: student.studentNumber,
      studentEmail: student.studentEmail,
      studentAddress: student.studentAddress,
      month: student.month,
      today: student.today,
      studentprofile: student.studentprofile,
      nidcertificate: student.nidcertificate,
      jsccertificate: student.jsccertificate,
      jscRegistration: student.jscRegistration,
    });
    remove(ref(db, "applyList/" + data.key));
    window.location.reload();
  };

  const handleCancel = (data) => {
    remove(ref(db, "applyList/" + data.key));
    window.location.reload();
  };

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
          <p className="w-2/5 text-base px-2">{student?.studentName}</p>
          <p className="w-1/4 text-base mr-10">{student?.studentNumber}</p>
          <p className="w-72 text-base mr-10">{student?.today}</p>
        </div>
        <button
          onClick={() => handleCancel(student)}
          className="text-red-500 mr-5"
        >
          <MdOutlineCancelPresentation />
        </button>
        <button
          onClick={() => handelConfirm(student)}
          className="text-green-500 mr-5"
        >
          <FaCheckSquare />
        </button>
      </div>
    </>
  );
};

export default AdminItems;
