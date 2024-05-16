const Course = () => {
  return (
    <>
      <div>
        <div className="container mt-28">
          <div>
            <div>
              <h2 className="text-center text-4xl font-bold font-mono">
                Our Course's
              </h2>
              <div className="w-64 h-1 bg-black m-auto"></div>
            </div>
            <div className="flex justify-between mx-4 my-14">
              <div>
                <h4 className="w-64 text-3xl font-bold font-mono">
                  Our Populer Topics
                </h4>
              </div>
              <div className="w-2/6">
                <p className="text-lg">
                  Diam integer turpis tristique integer tincidunt cursus
                  dignissim. Euismod libero pellentesque et suspendisse posuere.
                  Lorem quis nec nisl viverra ut velit imperdiet.
                </p>
              </div>
              <div>
                <button className="px-10 py-3 font-bold rounded-xl bg-primary text-white">
                  Apply Now
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-5 justify-between">
                <div className="w-2/6 m-2">
                  <img
                    className="w-full"
                    src="/public/MS-Word.png"
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
                <div className="w-2/6 m-2">
                  <img
                    className="w-full"
                    src="/public/ms-PowerPoint.jpg"
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
                <div className="w-2/6 m-2">
                  <img
                    className="w-full"
                    src="/public/Excel-img.png"
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
            <div className="flex justify-center gap-24 my-10">
              <div className="w-44">
                <img src="/public/ms-word-logo.png" alt="course-img" />
              </div>
              <div className="w-44 h-44">
                <img className="w-full" src="/public/ms-PowerPoint-logo.png" alt="course-img" />
              </div>
              <div className="w-44 h-44">
                <img className="w-full" src="/public/ms-Excel-logo.png" alt="course-img" />
              </div>
              <div className="w-44 h-44">
                <img className="w-full" src="/public/ms-Outlook-Logo.png" alt="course-img" />
              </div>
              <div className="w-44 h-44">
                <img className="w-full" src="/public/ms-Access-Logo.png" alt="course-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
