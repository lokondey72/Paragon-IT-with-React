import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";
// import StudentItems from "./StudentItems";
import { useEffect, useState } from "react";
import ApplyDateS from "./ApplyDateS";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { applyData } from "../Slice/applyedStudent";
import SearchList from "./SearchList";

const StudentDetails = () => {
  const db = getDatabase();
  const disptch = useDispatch();
  const [search, setSearch] = useState("");
  let [studentList, setStudentList] = useState([]);
  let [searchList, setSearchList] = useState([]);
  const applyitem = useSelector((state) => state.applyedStudent.applyStuD);
  // const mapStuData = studentList.map((stuData) => stuData);
  // console.log(mapStuData);

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

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "studentList/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().studentNumber);
      });
      setSearchList(arr);
    });
  }, []);
  // console.log(studentList);
  // console.log(searchList);
  // const handelStuInfo = () => {
  //   studentList.map((item) => {
  //     console.log(item);
  //     disptch(applyData(item));
  //   });
  // };

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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                type="text"
                className="w-full bg-white pr-10 py-2 text-base font-semibold outline-0"
              />
            </div>
          </div>
        </div>
        <div>
          {search == "" ? (
            <p>{""}</p>
          ) : (
            searchList.map(
              (item) =>
                search == item && (
                  <div className="w-full cursor-pointer absolute left-96 top-20 bg-gray-100">
                    <div className="flex flex-wrap mx-5">
                      {studentList.map(
                        (data) =>
                          search == data.studentNumber && (
                            <>
                              <SearchList student={data} key={data.key} />
                              {/* <div className="flex">
                                <p className="mx-5 my-5">{data.studentName}</p>
                                <p className="mx-5 my-5">{item}</p>
                              </div> */}
                            </>
                            // <ApplyDateS student={item} key={item.key} />
                          )
                      )}
                    </div>
                  </div>
                )
              // <div>
              //   <p>No result</p>
              // </div>
            )
          )}
        </div>
        <div className="flex flex-wrap mx-5">
          {studentList.map((item) => (
            <ApplyDateS student={item} key={item.key} />
          ))}
        </div>

        {/* <div className="flex flex-wrap gap-10 mx-10">
          {studentList.map((item) => (
            <StudentItems student={item} key={item.key} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default StudentDetails;
