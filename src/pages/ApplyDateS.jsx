const ApplyDateS = ({ student }) => {
  console.log(student);
  return (
    <>
      <div className="w-fit mx-5 my-2">
        <div>
          <button className="w-full py-3 px-10 text-white bg-gray-500 hover:bg-primary">
            {student?.month}
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyDateS;
