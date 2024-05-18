import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";
import StudentItems from "./StudentItems";
import { useEffect, useState } from "react";

const StudentDetails = () => {
  const db = getDatabase();
  let [studentList, setStudentList] = useState([]);

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
  console.log(studentList);

  return (
    <>
      <div className="w-full mb-5">
        <div className="rounded-lg bg-gray-200 m-5 p-5">
          <div className="w-full flex items-center rounded-xl overflow-hidden">
            <div className="py-2 px-2 text-2xl bg-white">
              <IoIosSearch />
            </div>
            <div className="w-full">
              <input
                placeholder="search"
                type="text"
                className="w-full bg-white pr-10 py-2 text-base font-semibold outline-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mx-10">
          {studentList.map((item) => (
            <StudentItems student={item} key={item.key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
