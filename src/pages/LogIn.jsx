import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { logedadmin } from "../Slice/AdminSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const auth = getAuth();
  const db = getDatabase();
  const disptch = useDispatch();
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handelLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user.emailVerified == false) {
          alert("Verified Your E-mail");
        } else {
          console.log(res);
          set(ref(db, "admin/" + res.user.uid), {
            username: res.user.displayName,
            email: res.user.email,
            photoURL: res.user.photoURL,
          }).then(() => {
            toast.success("Login successfull...", {
              position: "top-center",
              autoClose: 3000,
              closeOnClick: true,
              theme: "light",
            });
            console.log("Login Successfull");
            localStorage.setItem("admin", JSON.stringify(res.user));
            disptch(logedadmin(res.user));
            console.log("clilk");
            setTimeout(() => {
              navigate("/admin");
            }, 1500);
          });
        }
      })

      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <ToastContainer />
          <div className="w-40 h-14 my-5">
            <img
              className="w-full h-full"
              src="/Paragon-it-logo2.png"
              alt=""
            />
          </div>
        </div>
        <div className="h- flex items-center justify-center">
          <div className="w-1/4 relative">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
            <div
              id="form-container"
              className="bg-white p-16 rounded-lg shadow-2xl relative z-10 transform transition duration-500 ease-in-out"
            >
              <h2
                id="form-title"
                className="text-center text-3xl font-bold mb-10 text-gray-800"
              >
                Login
              </h2>
              <div className="space-y-5">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Email"
                  type="text"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Password"
                  type="password"
                />
                <div>
                  <Link to="/signup">
                    <button>Sign Up</button>
                  </Link>
                </div>
                <button
                  onClick={handelLogin}
                  className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
                <a
                  className="text-blue-500 hover:text-blue-800 text-sm"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
