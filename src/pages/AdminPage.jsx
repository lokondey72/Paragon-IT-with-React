import { IoIosSearch } from "react-icons/io";
import AdminItems from "./AdminItems";

const AdminPage = () => {
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

        <div className="mx-20">
          <div className="w-fit p-5 rounded-3xl bg-gray-200">
            <div className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
              <div className="ml-10">
                <ul className="flex gap-10 py-3">
                  <li>Photo</li>
                  <li className="mx-10">Name</li>
                  <li className="mx-24">Number</li>
                  <li className="mr-2">Edit</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <AdminItems />
                <AdminItems />
                <AdminItems />
                <AdminItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
