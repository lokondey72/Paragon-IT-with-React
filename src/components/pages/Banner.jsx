import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="py-32 h-[800px] bg-BannerImg bg-cover bg-center">
        <div className="container flex justify-center">
          <div className="m-auto text-center">
            <div className="mt-44">
              <p className="text-lg font-normal text-white font-mono">
                Entering our 6th year of success
              </p>
              <div className="w-[570px] my-8">
                <h1 className="text-5xl font-bold text-white font-mono">
                  Completion of Computer and ICT Training
                </h1>
              </div>
              <div>
                <button className="px-10 py-3 font-bold rounded-xl mr-10 text-white bg-primary">
                  <Link to="/apply">Apply Now</Link>
                </button>
                <button className="px-10 py-3 font-bold rounded-xl mr-10 text-white bg-primary">
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
