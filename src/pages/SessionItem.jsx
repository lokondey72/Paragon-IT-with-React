const SessionItem = ({ data }) => {
  return (
    <>
      <div className="my-5 mx-5">
        <div className="flex justify-center items-center">
          <button className="py-10 px-16 text-white  hover:bg-primary bg-gray-500 rounded-2xl">
            {data.sessionName}
          </button>
        </div>
      </div>
    </>
  );
};

export default SessionItem;
