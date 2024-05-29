import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="py-32 h-[800px] bg-BannerImg bg-cover bg-center">
        <div className="container flex justify-center">
          <div className="m-auto text-center">
            <div className="mt-44">
              <p className="lg:text-lg font-normal text-white font-body">
                Entering our 6th year of success
              </p>
              <div className="lg:w-[570px] my-8">
                <h1 className="text-5xl font-bold text-white font-body">
                  Completion of Computer and ICT Training
                </h1>
              </div>
              <div className="m-auto">
                <Link to="/apply">
                  <button className="w-48 py-3 mb-6 lg:mb-0 font-bold rounded-xl mr-10 bg-gradient-to-r from-indigo-500 to-primary text-white hover:bg-indigo-600 hover:to-blue-600 transition">
                    Apply Now
                  </button>
                </Link>
                <button className="w-48 py-3 font-bold rounded-xl mr-10 bg-gradient-to-r from-indigo-500 to-primary text-white hover:bg-indigo-600 hover:to-blue-600 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
