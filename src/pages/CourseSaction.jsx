import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { IoIosSearch } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { useEffect, useState } from "react";
import SessionItem from "./SessionItem";

const CourseSaction = () => {
  const db = getDatabase();
  const [show, setShow] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [sessionData, setSessionData] = useState([]);

  const handelAdd = () => {
    if (!sessionName) {
      alert("Enter Session Name Please");
    } else {
      set(push(ref(db, "session/")), {
        sessionName: sessionName,
      }).then(() => {
        setShow(false);
        window.location.reload();
      });
    }
  };

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
  // console.log(sessionData);

  const handelCreate = () => {
    setShow(!show);
  };

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
                // onChange={(e) => setSessionName(e.target.value)}
                placeholder="search"
                type="text"
                className="w-full bg-white pr-10 py-2 text-base font-semibold outline-0"
              />
            </div>
          </div>
        </div>
        <div className="mx-5">
          <button
            onClick={handelCreate}
            className="w-40 mt-2 px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary"
          >
            Create Section :
          </button>
        </div>
        <div className="flex flex-wrap">
          {sessionData.map((item) => (
            <SessionItem data={item} key={item.key} />
          ))}
        </div>
      </div>
      {show && (
        <div className="w-full absolute z-10 bg-[rgb(0,0,0,0.5)]">
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="w-2/5 rounded-xl bg-white flex flex-col justify-center items-center gap-5">
              <button
                onClick={() => setShow(false)}
                className="ml-auto mr-6 mt-5"
              >
                <GiCancel />
              </button>
              <p className="text-xl font-mono font-bold">Section Name</p>
              <input
                onChange={(e) => setSessionName(e.target.value)}
                className="w-1/3 pl-5 pr-10 py-2 border rounded-xl font-semibold text-base outline-0"
                type="text"
                placeholder="Enter Section Name..."
              />
              <button
                onClick={handelAdd}
                className="w-40 mt-2 mb-5 px-5 py-5 rounded-xl text-white bg-gray-500 hover:bg-primary"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSaction;
