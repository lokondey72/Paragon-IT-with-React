import { FaArrowRight, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[rgba(13,121,254,0.3)] ">
      <div className="container py-10">
        <div className="lg:flex justify-between">
          <div className="mx-5 mb-5 lg:m-0">
            <Link to="/">
              <button className="w-38 h-14">
                <img
                  className="w-full h-full"
                  src="/Paragon-it-logo2.png"
                  alt="Paragon-it-logo"
                />
              </button>
            </Link>
            <h3 className="my-10 w-80 text-4xl font-bold font-body">
              The Best IT in Your Home Town
            </h3>
            <p className="w-80 text-lg">
              Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
              lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus
              pretium quam.
            </p>
          </div>
          <div className="mx-5 mb-5 lg:m-0">
            <h4 className="mb-14 text-3xl font-bold font-body">Menu</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-2 items-center">
                <Link to="/">Home</Link>
                <FaArrowRight />
              </li>
              <li className="flex gap-2 items-center">
                <Link to="/course">Course's</Link>
                <FaArrowRight />
              </li>
              <li className="flex gap-2 items-center">
                <Link to="/story">Success story</Link>
                <FaArrowRight />
              </li>
              <li className="flex gap-2 items-center">
                <Link to="/about">About Us</Link>
                <FaArrowRight />
              </li>
            </ul>
          </div>
          <div>
            <div className="mx-5 mb-5 lg:m-0">
              <div>
                <h4 className="mb-14 text-3xl font-bold font-body">
                  Contacts Us
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
              <div className="mt-14 flex gap-10">
                <button className="w-8 h-8">
                  <Link>
                    <FaFacebook className="w-full h-full" />
                  </Link>
                </button>
                <button className="w-8 h-8">
                  <Link>
                    <FaSquareInstagram className="w-full h-full" />
                  </Link>
                </button>
                <button className="w-8 h-8">
                  <Link>
                    <FaLinkedinIn className="w-full h-full" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 text-center bg-gray-500">
        <p className="text-white">
          Copyright 2017. All rights reserved by PARAGON IT
        </p>
      </div>
    </footer>
  );
};

export default Footer;
