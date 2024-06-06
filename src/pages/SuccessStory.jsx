const SuccessStory = () => {
  return (
    <>
      <div className="bg-brand">
        <div className="container py-28">
          <div>
            <h2 className="text-center text-4xl font-bold font-body">
              Success Story
            </h2>
          </div>
          <div className="lg:flex gap-10 mt-20">
            <div className="mx-5 lg:mx-0 lg:w-1/2">
              <img
                className="w-full"
                src="/success-story-1.jpg"
                alt="success-story"
              />
            </div>
            <div className="mx-auto w-1/2">
              <h3 className="text-center text-3xl font-bold font-body my-8">
                Certificate Ceremony
              </h3>
              <p className="text-center text-lg mb-5">
                Date: 27/11/2020
              </p>
              <p className="lg:w-80 m-auto text-center text-lg">
                At the end of the course, the main program of the 6-month
                Govment Certificate Ceremony
              </p>
            </div>
          </div>
          <div className="lg:flex gap-10 mt-20">
            <div className="lg:w-1/2">
              <h3 className="text-center text-3xl font-bold font-body my-8">
                The Exem Ceremony
              </h3>
              <p className="text-center text-lg mb-5">
                Date: 27/11/2021
              </p>
              <p className="w-80 m-auto text-center text-lg">
                At the end of the course, the main program of the 6-month
                Govment Certificate Ceremony
              </p>
            </div>
            <div className="mx-5 mt-10 lg:m-0 lg:w-1/2">
              <img
                className="w-full"
                src="/success-story-2.jpg"
                alt="success-story"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
