import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import {
  getStorage,
  ref as ires,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const Apply = () => {
  const db = getDatabase();
  let [studentName, setStudentName] = useState("");
  let [fatherName, setFatherName] = useState("");
  let [motherName, setMotherName] = useState("");
  let [studentNumber, setStudentNumber] = useState("");
  let [studentEmail, setStudentEmail] = useState("");
  let [studentAddress, setStudentAddress] = useState("");
  let [studentNidBirth, setStudentNidBirth] = useState("");
  let [studentCertificate, setStudentCertificate] = useState({
    nid: "",
    ssc: "",
    jsc: "",
  });
  let [studentRegistration, setStudentRegistration] = useState("");
  let [studentList, setStudentList] = useState([]);
  const storage = getStorage();
  let key = studentList.map((item) => item.key);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "studentList/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setStudentList(arr);
    });
  }, []);
  console.log(key);

  const handelApply = () => {
    console.log("click");

    const storageRef = ires(storage, studentEmail);
    uploadBytes(storageRef, studentNidBirth, studentCertificate)
      .then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          console.log(url);
          // set(ref(db, "studentList/"), {
          //   studentName: studentName,
          //   stuFatherName: fatherName,
          //   stuMotherName: motherName,
          //   stuNumder: studentNumber,
          //   stuEmail: studentEmail,
          //   stuAddress: studentAddress,
          //   stuNidBirthCerti: url,
          //   // stucertificate: studentCertificate,
          //   // stuRegistration: studentRegistration,
          // });
        });
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
console.log(studentCertificate)
  return (
    <>
      <div className="container my-24">
        <div className="flex justify-between">
          <div className="w-2/5 ml-60 flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-lg p-6">
              <h2 className="text-3xl text-center font-mono font-bold text-gray-900 mb-20">
                Admission Form
              </h2>

              <div className="flex flex-col">
                <div className="flex items-center gap-5">
                  <p className="w-40">Applicant Name:</p>
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">Father's Name:</p>
                  <input
                    onChange={(e) => setFatherName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">Mother's Name:</p>
                  <input
                    onChange={(e) => setMotherName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">Number :</p>
                  <input
                    onChange={(e) => setStudentNumber(e.target.value)}
                    type="number"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">E-mail :</p>
                  <input
                    onChange={(e) => setStudentEmail(e.target.value)}
                    type="email"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">Address :</p>
                  <input
                    onChange={(e) => setStudentAddress(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">Nid Card/Birth Certificate:</p>
                  <input
                    onChange={(e) => setStudentCertificate((prv)=>({...prv, nid: e.target.files[0] }) )}
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">JSC/SSC Certificate:</p>
                  <input
                    onChange={(e) => setStudentCertificate(e.target.value)}
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-40">JSC/SSC Registration:</p>
                  <input
                    onChange={(e) => setStudentRegistration(e.target.value)}
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>

                <button
                  onClick={handelApply}
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-primary text-white font-bold py-2 px-4 rounded-md mt-10 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-center justify-center">
            <div>
              <h4 className="mb-10 text-3xl font-bold font-body">Paragon IT</h4>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
            </div>
            <div className="flex items-center gap-3 my-4">
              <MdEmail />
              <p>company@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MdCall />
              <p>+880 1796-959659</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
