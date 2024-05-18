import { FaEdit } from "react-icons/fa";

const AdminItems = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold text-blue-400">1</p>
        <div className="w-16 h-16 rounded-full overflow-hidden ">
          <img
            className="w-full"
            src="/public/Student-img-1.png"
            alt="Student-img"
          />
        </div>
        <p className="text-lg mx-10">Lokon Dey</p>
        <p className="text-lg mx-20">01796-889071</p>
        <button className="">
          <FaEdit />
        </button>
      </div>
    </>
  );
};

export default AdminItems;
