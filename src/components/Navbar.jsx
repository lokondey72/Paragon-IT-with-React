import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="py-3 lg:w-full fixed top-0 bg-[rgba(13,121,254,0.3)]">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-38 h-14">
                <img
                  className="w-full h-full"
                  src="/Paragon-it-logo2.png"
                  alt="Paragon-it-logo-(1)"
                />
              </div>
            </Link>
          </div>
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
          <div>
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
