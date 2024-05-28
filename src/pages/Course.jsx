import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div>
        <div className="container mt-28">
          <div>
            <div>
              <h2 className="text-center text-4xl font-bold font-body">
                Our Course's
              </h2>
              <div className="w-56 h-1 bg-black m-auto"></div>
            </div>
            <div className="lg:flex justify-between text-center lg:mx-4 lg:my-14">
              <div className="my-10 lg:my-0">
                <h4 className="w-64 mx-auto lg:mx-0 text-3xl font-bold font-body">
                  Our Populer Topics
                </h4>
              </div>
              <div className="w-2/6 mx-auto lg:mx-0">
                <p className="text-lg">
                  Diam integer turpis tristique integer tincidunt cursus
                  dignissim. Euismod libero pellentesque et suspendisse posuere.
                  Lorem quis nec nisl viverra ut velit imperdiet.
                </p>
              </div>
              <div className="my-10 lg:my-0">
                <Link to="/apply">
                  <button className="px-10 py-3 font-bold rounded-xl bg-gradient-to-r from-indigo-500 to-primary text-white hover:bg-indigo-600 hover:to-blue-600 transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="lg:flex gap-5 justify-between">
                <div className="lg:w-2/6 mx-5 lg:m-2">
                  <img className="w-full" src="/MS-Word.png" alt="our-course" />
                  <p className="my-5 text-lg">
                    Microsoft Word is a word processor developed by Microsoft.
                    It was first released on October 25, 1983, under the name
                    Multi-Tool Word for Xenix systems.
                  </p>
                  <button className="w-full pl-2 py-1 text-start bg-slate-200">
                    Learn More
                  </button>
                </div>
                <div className="lg:w-2/6 my-5 mx-5 lg:m-2">
                  <img
                    className="w-full"
                    src="/ms-PowerPoint.jpg"
                    alt="our-course"
                  />
                  <p className="my-5 text-lg">
                    Microsoft Word is a word processor developed by Microsoft.
                    It was first released on October 25, 1983, under the name
                    Multi-Tool Word for Xenix systems.
                  </p>
                  <button className="w-full pl-2 py-1 text-start bg-slate-200">
                    Learn More
                  </button>
                </div>
                <div className="lg:w-2/6 mx-5 lg:m-2">
                  <img
                    className="w-full"
                    src="/Excel-img.png"
                    alt="our-course"
                  />
                  <p className="my-5 text-lg">
                    Microsoft Word is a word processor developed by Microsoft.
                    It was first released on October 25, 1983, under the name
                    Multi-Tool Word for Xenix systems.
                  </p>
                  <button className="w-full pl-2 py-1 text-start bg-slate-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="my-10 mx-5">
                <h2 className="text-center text-4xl font-bold font-body">
                  This Software Is Used In The Course
                </h2>
                <div className="lg:w-[610px] h-1 bg-black m-auto"></div>
              </div>
              <div className="flex flex-col items-center flex-wrap lg:flex-row justify-center gap-24 my-10">
                <div className="w-44">
                  <img
                    className="w-full"
                    src="/ms-word-logo.png"
                    alt="course-img"
                  />
                </div>
                <div className="w-44 h-44">
                  <img
                    className="w-full"
                    src="/ms-PowerPoint-logo.png"
                    alt="course-img"
                  />
                </div>
                <div className="w-44 h-44">
                  <img
                    className="w-full"
                    src="/ms-Excel-logo.png"
                    alt="course-img"
                  />
                </div>
                <div className="w-44 h-44">
                  <img
                    className="w-full"
                    src="/ms-Outlook-Logo.png"
                    alt="course-img"
                  />
                </div>
                <div className="w-44 h-44">
                  <img
                    className="w-full"
                    src="/ms-Access-Logo.png"
                    alt="course-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
