import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaCheckSquare } from "react-icons/fa";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { getDatabase, push, ref, remove, set } from "firebase/database";

const AdminItems = ({ student }) => {
  const db = getDatabase();
  console.log(student);
  // const applyitem = useSelector((state) => state.applyedStudent.applyStuD);

  const handelConfirm = (data) => {
    set(push(ref(db, "studentList/")), {
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
          <p className="w-1/2 text-lg px-2">{student?.studentName}</p>
          <p className="w-1/4 text-lg mx-20">{student?.studentNumber}</p>
          <p className="w-72 text-lg mr-10">{student?.today}</p>
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
