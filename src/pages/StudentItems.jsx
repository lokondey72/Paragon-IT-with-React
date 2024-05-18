const StudentItems = ({student}) => {
  return (
    <>
      <div className="w-2/5 p-5 rounded-3xl bg-gray-200">
        <div className="bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3">
          <div className="w-52 h-52 m-auto bg-sky-300 rounded-2xl">
            <img
              className="w-full h-full"
              src="/public/Student-img-1.png"
              alt="Student-img"
            />
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Student Name :</p>
            <p className="text-lg">{student?.studentName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Father's Name :</p>
            <p className="text-lg">{student?.stuFatherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Mother's Name :</p>
            <p className="text-lg">{student?.stuMotherName}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Number :</p>
            <p className="text-lg">{student?.stuNumder}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">E-mail :</p>
            <p className="text-lg">{student?.stuEmail}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Address :</p>
            <p className="text-lg">{student?.stuAddress}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-lg font-bold">Nid Card/Birth Certificate :</p>
            <div className="w-52">
              <img className="w-full" src={student?.stuNidBirthCerti} alt="NID" />
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-lg font-bold">JSC/SSC Certificate :</p>
            <div className="w-52">
              <img
                className="w-full"
                src="/public/JSCSSC Certificate.jpg"
                alt="Certificate"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-lg font-bold">JSC/SSC Registration :</p>
            <div className="w-52">
              <img
                className="w-full"
                src="/public/JSCSSC Registration.jpg"
                alt="Registration"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentItems;
