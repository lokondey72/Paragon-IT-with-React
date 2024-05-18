import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="py-32 h-[800px] bg-BannerImg bg-cover bg-center">
        <div className="container flex justify-center">
          <div className="m-auto text-center">
            <div className="mt-44">
              <p className="text-lg font-normal text-white font-body">
                Entering our 6th year of success
              </p>
              <div className="w-[570px] my-8">
                <h1 className="text-5xl font-bold text-white font-body">
                  Completion of Computer and ICT Training
                </h1>
              </div>
              <div>
                <Link to="/apply">
                  <button className="px-10 py-3 font-bold rounded-xl mr-10 bg-gradient-to-r from-indigo-500 to-primary text-white hover:bg-indigo-600 hover:to-blue-600 transition">
                    Apply Now
                  </button>
                </Link>
                <button className="px-10 py-3 font-bold rounded-xl mr-10 bg-gradient-to-r from-indigo-500 to-primary text-white hover:bg-indigo-600 hover:to-blue-600 transition">
                  Join Free class
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
