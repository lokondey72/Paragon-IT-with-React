const Banner = () => {
  return (
    <>
      <div className="py-32 h-[650px] bg-BannerImg bg-cover bg-center">
        <div className="container flex justify-between">
          <div className="m-auto text-center">
            <div className="mt-2">
              <p className="text-lg font-normal text-white">
                Entering our 6th year of success
              </p>
              <div className="w-[570px] my-8">
                <h1 className="text-5xl font-bold text-white">
                  Completion of computer and ICT training
                </h1>
              </div>
              <div>
                <button className="px-10 py-3 rounded-xl mr-10 text-white bg-primary">
                  Browse Course
                </button>
                <button className="px-10 py-3 rounded-xl mr-10 text-white bg-primary">
                  Join trile class
                </button>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="rounded-lg overflow-hidden">
              <iframe
                width="590"
                height="355"
                src="https://www.youtube.com/embed/TB7xjRiLJbA?si=SwUkl8nYcWqTz9Ky"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
