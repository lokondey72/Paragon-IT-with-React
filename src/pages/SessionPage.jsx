import { getDatabase, ref, onValue } from "firebase/database";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import StudentPage from "./StudentPage";

const SessionPage = () => {
  const db = getDatabase();
  const [search, setSearch] = useState("");
  let [searchList, setSearchList] = useState([]);
  let [studentList, setStudentList] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  // const sessionKey = sessionData.map((item) => item.key);
  const AllData = sessionData.map((item) => item);
  // console.log(AllData);

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
  // console.log(studentList);

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

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "session/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().key);
      });
      setSessionData(arr);
    });
  }, []);
  console.log(sessionData);

  return (
    <>
      <div className="w-full mx-5 my-2">
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
                            </>
                          )
                      )}
                    </div>
                  </div>
                )
            )
          )}
        </div>
        <div>
          <div className="w-full py-3 px-10 rounded-xl text-white bg-gray-500 hover:bg-primary">
            {/* {sessionData.map((item) => (
              <StudentPage data={item} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionPage;
