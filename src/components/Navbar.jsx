import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="py-3 bg-[rgba(13,121,254,0.3)]">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="#" className="flex items-center gap-2">
              <div className="w-38 h-14">
                <img
                  className="w-full h-full"
                  src="/public/Paragon-it-logo2.png"
                  alt="Paragon-it-logo-(1)"
                />
              </div>
            </Link>
          </div>
          <div>
            <ul className="flex gap-10">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/course">Course's</Link>
              </li>
              <li>
                <Link to="/story">Success story</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex items-center gap-2 px-5 py-2 bg-primary text-slate-50 text-lg rounded-xl font-semibold hover:bg-secandery">
              <span>Join Us</span>
              <FaFacebookSquare />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
