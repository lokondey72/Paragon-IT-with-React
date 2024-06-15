const SessionItem = ({ data }) => {
  // console.log(data.key);
  return (
    <>
      <div className="my-5 mx-5">
        <div className="flex justify-center items-center">
          <button className="py-10 px-16 text-white  hover:bg-primary bg-gray-500 rounded-2xl">
            {data.key}
          </button>
        </div>
      </div>
    </>
  );
};

export default SessionItem;
