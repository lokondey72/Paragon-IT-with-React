import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import { GrLike } from "react-icons/gr";

const ApplySuccessfull = () => {
  return (
    <div>
      <div className="container h-screen">
        <div className="flex justify-between">
          <div class="w-2/5 ml-60 flex flex-col items-center justify-center h-screen">
            <div class="w-full bg-white rounded-lg p-6">
              <h2 class="text-3xl text-center font-mono font-bold text-gray-900">
                Application Successfull
              </h2>
              <div className="w-40 h-40 my-14 m-auto">
                <GrLike className="w-full h-full" />
              </div>
              <div className="text-center">
                <p>
                  Thank You,We will be in touch with you soon from our office
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-center justify-center">
            <div>
              <div>
                <h4 className="mb-10 text-3xl font-bold font-body">
                  Paragon IT
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <FaLocationDot />
                <p>1717 Harrison St, San Francisco, CA 94103, United States</p>
              </div>
              <div className="flex items-center gap-3 my-4">
                <MdEmail />
                <p>company@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall />
                <p>+880 1796-959659</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySuccessfull;
