import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const StudentCounte = () => {
  const count = useSelector((state) => state.studentCounterSlice.value);
  
  return (
    <div>
      <div className="rounded-lg bg-gray-200 m-5 p-5">
        <div className="w-full flex items-center rounded-xl overflow-hidden">
          <div className="py-2 px-2 text-2xl bg-white">
            <IoIosSearch />
          </div>
          <div className="w-full">
            <div>
              <p>{count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCounte;
