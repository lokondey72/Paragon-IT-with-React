const StudentItems = ({ student }) => {
  // console.log(student);
  return (
    <>
      <div className="w-10/12 m-auto h-fit p-5 rounded-3xl bg-gray-200">
        <div className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
          <div className="w-52 h-52 m-auto bg-sky-300 rounded-full hover:rounded-3xl overflow-hidden cursor-pointer">
            <img
              className="w-full h-full"
              src={student?.studentprofile}
              alt="Student-img"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Student Name :</p>
            <p className="text-lg">{student?.studentName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Father's Name :</p>
            <p className="text-lg">{student?.fatherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Mother's Name :</p>
            <p className="text-lg">{student?.motherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Number :</p>
            <p className="text-lg">{student?.studentNumber}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">E-mail :</p>
            <p className="text-lg">{student?.studentEmail}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Address :</p>
            <p className="text-lg">{student?.studentAddress}</p>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2">
              <p className="w-36 text-lg font-bold">Nid Card/Birth Certificate :</p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={student?.nidcertificate}
                  alt="NID"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="w-36 text-lg font-bold">JSC/SSC Certificate :</p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={student?.jsccertificate}
                  alt="Certificate"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="w-36 text-lg font-bold">JSC/SSC Registration :</p>
              <div className="w-52">
                <img
                  className="w-full"
                  src={student?.jscRegistration}
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
