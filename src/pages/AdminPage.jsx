import { IoIosSearch } from "react-icons/io";
import AdminItems from "./AdminItems";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

const AdminPage = () => {
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

  return (
    <>
      <div className="w-full mb-5">
        <div className="w-4/5 rounded-lg bg-gray-200 m-5 p-5">
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

        <div className="mx-10">
          <div className="w-fit h-full p-5 rounded-3xl bg-gray-200">
            <div className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
              <div className="w-full mx-5 border-b">
                <ul className="flex gap-10 py-3">
                  <li>Photo</li>
                  <li className="mx-10">Name</li>
                  <li className="mx-20">Number</li>
                  <li className="ml-10">Date</li>
                </ul>
              </div>

              <div className="h-96 flex flex-col gap-4 overflow-y-scroll">
                {studentList.map((item) => (
                  <AdminItems student={item} key={item.key} />
                ))}
                {studentList.map((item) => (
                  <AdminItems student={item} key={item.key} />
                ))}
                {studentList.map((item) => (
                  <AdminItems student={item} key={item.key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
