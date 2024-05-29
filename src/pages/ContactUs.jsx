import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdCall } from "react-icons/md";

const ContactUs = () => {
  const form = useRef();
  // const [name, setName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h6q0pwd", "template_o4xrdyk", form.current, {
        publicKey: "p7jTmXBjZwZ4OV-1d",
      })
      .then(
        () => {
          toast.success("Your Massage Sended,Our Team Contact You Soon...", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
        },
        (error) => {
          console.log("FAILED...", error.code);
        }
      );
  };
  // console.log(name);

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="pt-28 text-center">
          <h4 className="text-center font-bold font-body text-4xl">
            Contact Us
          </h4>
          <div className="w-48 h-1 bg-black m-auto"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="py-20 ml-20 flex items-center justify-center">
            <form
              className="flex flex-col gap-7"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex items-center">
                <p className="w-24">Name :</p>
                <input
                  className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Full Name"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="flex items-center">
                <p className="w-24">Phone :</p>
                <input
                  className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Phone Number"
                  type="number"
                  name="user_number"
                />
              </div>
              <div className="flex items-center">
                <p className="w-24">Email :</p>
                <input
                  className="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email Address"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="flex">
                <p className="w-24">Message :</p>
                <textarea
                  className="border"
                  placeholder="Type your massage..."
                  name="message"
                />
              </div>
              <button className="w-40 py-2 bg-gradient-to-r from-indigo-500 bg-primary text-slate-50 text-lg rounded-xl font-semibold hover:bg-secandery">
                <input className="cursor-pointer" type="submit" value="Send" />
              </button>
            </form>
          </div>
          <div className="lg:w-2/5 flex flex-col lg:items-center justify-center mx-5 lg:mx-0">
            <div className="text-center">
              <h4 className="mb-8 text-3xl font-bold font-body">Paragon IT</h4>
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
    </>
  );
};

export default ContactUs;
