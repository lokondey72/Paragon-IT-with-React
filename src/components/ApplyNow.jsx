import { getDatabase, push, ref, set } from "firebase/database";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import {
  getStorage,
  ref as ires,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const ApplyNow = () => {
  const db = getDatabase();
  let [studentName, setStudentName] = useState("");
  let [fatherName, setFatherName] = useState("");
  let [motherName, setMotherName] = useState("");
  let [studentNumber, setStudentNumber] = useState("");
  let [studentEmail, setStudentEmail] = useState("");
  let [studentAddress, setStudentAddress] = useState("");
  let [studentCertificate, setStudentCertificate] = useState({
    studentprofile: "",
    nidcertificate: "",
    jsccertificate: "",
    jscRegistration: "",
  });
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const month = monthNames[d.getMonth()];
  const storage = getStorage();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + month + "/" + yyyy;

  const handelApply = async () => {
    const certificates = {};
    for (let certificateName in studentCertificate) {
      const storageRef = ires(storage, `${studentEmail} - ${certificateName}`);
      await uploadBytes(storageRef, studentCertificate[certificateName]);
      const downloadURL = await getDownloadURL(storageRef);
      certificates[certificateName] = downloadURL;
    }
    await set(push(ref(db, "applyList/")), {
      studentName,
      fatherName,
      motherName,
      studentNumber,
      studentEmail,
      studentAddress,
      month,
      today,
      ...certificates,
    });
  };

  return (
    <>
      <div className="container my-24">
        <div className="lg:flex justify-between">
          <div className="lg:w-2/5 lg:ml-60 flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-lg p-6">
              <h2 className="text-3xl text-center font-mono font-bold text-gray-900 mb-20">
                Admission Form
              </h2>

              <div className="flex flex-col">
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Applicant Name:</p>
                  <input
                    onChange={(e) => setStudentName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Father's Name:</p>
                  <input
                    onChange={(e) => setFatherName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Mother's Name:</p>
                  <input
                    onChange={(e) => setMotherName(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Number :</p>
                  <input
                    onChange={(e) => setStudentNumber(e.target.value)}
                    type="number"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">E-mail :</p>
                  <input
                    onChange={(e) => setStudentEmail(e.target.value)}
                    type="email"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Address :</p>
                  <input
                    onChange={(e) => setStudentAddress(e.target.value)}
                    type="text"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Applicant Photo:</p>
                  <input
                    onChange={(e) =>
                      setStudentCertificate((prv) => ({
                        ...prv,
                        studentprofile: e.target.files[0],
                      }))
                    }
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">Nid/Birth Certificate:</p>
                  <input
                    onChange={(e) =>
                      setStudentCertificate((prv) => ({
                        ...prv,
                        nidcertificate: e.target.files[0],
                      }))
                    }
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">JSC/SSC Certificate:</p>
                  <input
                    onChange={(e) =>
                      setStudentCertificate((prv) => ({
                        ...prv,
                        jsccertificate: e.target.files[0],
                      }))
                    }
                    type="file"
                    className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    placeholder="Certificate"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <p className="w-32 lg:w-40">JSC/SSC Registration:</p>
                  <input
                    onChange={(e) =>
                      setStudentCertificate((prv) => ({
                        ...prv,
                        jscRegistration: e.target.files[0],
                      }))
                    }
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
          <div className="lg:w-2/5 flex flex-col lg:items-center justify-center mx-5 lg:mx-0">
            <div className="text-center">
              <h4 className="mb-8 text-3xl font-bold font-body">Paragon IT</h4>
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

export default ApplyNow;
