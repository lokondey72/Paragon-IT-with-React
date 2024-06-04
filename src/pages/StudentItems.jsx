import { useSelector } from "react-redux";

const StudentItems = () => {
  const applyitem = useSelector((state) => state.applyedStudent.applyStuD);
  // console.log(student);
  return (
    <>
      <div className="w-4/5 h-fit mx-8 my-5 p-5 rounded-3xl bg-gray-200">
        <div className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
          <div className="flex gap-2">
            <p>Apply Date:-</p>
            <p>{applyitem?.today}</p>
          </div>
          <div className="w-48 h-48 mx-auto bg-sky-300 rounded-full hover:rounded-2xl overflow-hidden cursor-pointer">
            <img
              className="w-full h-full"
              src={applyitem?.studentprofile}
              alt="Student-img"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Student Name :</p>
            <p className="text-lg">{applyitem?.studentName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Father's Name :</p>
            <p className="text-lg">{applyitem?.fatherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Mother's Name :</p>
            <p className="text-lg">{applyitem?.motherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Number :</p>
            <p className="text-lg">{applyitem?.studentNumber}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">E-mail :</p>
            <p className="text-lg">{applyitem?.studentEmail}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Address :</p>
            <p className="text-lg">{applyitem?.studentAddress}</p>
          </div>
          <div className="flex gap-5">
            <div className="">
              <p className="w-36 text-lg font-bold">
                Nid Card/Birth Certificate :
              </p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={applyitem?.nidcertificate}
                  alt="NID"
                />
              </div>
            </div>
            <div className="">
              <p className="w-36 text-lg font-bold">JSC/SSC Certificate :</p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={applyitem?.jsccertificate}
                  alt="Certificate"
                />
              </div>
            </div>
            <div className="">
              <p className="w-36 text-lg font-bold">JSC/SSC Registration :</p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={applyitem?.jscRegistration}
                  alt="Registration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentItems;
