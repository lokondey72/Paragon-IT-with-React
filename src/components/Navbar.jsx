import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  let [show, setShow] = useState(false);

  const handeldrop = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="py-3 w-full lg:w-full relative lg:fixed top-0 bg-[rgba(13,121,254,0.3)] px-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center gap-1">
              <div className="w-14 h-14">
                <img
                  className="w-full h-full"
                  src="/Paragon-it-logo-(1).png"
                  alt="Paragon-it-logo-(1)"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">PARAGON IT</h2>
              </div>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={handeldrop}
              className="items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 bg-primary text-slate-50 text-4xl rounded-xl font-semibold hover:bg-secandery"
            >
              <CgDetailsMore />
            </button>
          </div>

          {show && (
            <div className="w-full py-8 absolute top-[80px] right-0 flex flex-col bg-[rgb(0,0,0,0.5)]">
              <div className="mx-auto">
                <ul className="flex flex-col text-white text-xl gap-10">
                  <li className=" hover:text-primary">
                    <Link onClick={() => setShow(!show)} to="/">
                      Home
                    </Link>
                  </li>
                  <li className=" hover:text-primary">
                    <Link onClick={() => setShow(!show)} to="/course">
                      Course's
                    </Link>
                  </li>
                  <li className=" hover:text-primary">
                    <Link onClick={() => setShow(!show)} to="/story">
                      Success story
                    </Link>
                  </li>
                  <li className=" hover:text-primary">
                    <Link onClick={() => setShow(!show)} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className=" hover:text-primary">
                    <Link onClick={() => setShow(!show)} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 mx-auto">
                <Link to="/apply">
                  <button
                    onClick={() => setShow(!show)}
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 bg-primary text-slate-50 text-lg rounded-xl font-semibold hover:bg-secandery"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="hidden lg:block">
            <ul className="flex text-white text-xl gap-10">
              <li className=" hover:text-primary">
                <Link to="/">Home</Link>
              </li>
              <li className=" hover:text-primary">
                <Link to="/course">Course's</Link>
              </li>
              <li className=" hover:text-primary">
                <Link to="/story">Success story</Link>
              </li>
              <li className=" hover:text-primary">
                <Link to="/about">About Us</Link>
              </li>
              <li className=" hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link to="/apply">
              <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 bg-primary text-slate-50 text-lg rounded-xl font-semibold hover:bg-secandery">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
