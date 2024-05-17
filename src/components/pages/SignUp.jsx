import {
  getAuth,
  updateProfile,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userName, setUserName] = useState("");

  const handelSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password, userName)
      .then((res) => {
        sendEmailVerification(auth.currentUser);
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: "/user-dufolt-img.png",
        });
        console.log("Sign Up Successfull");
        alert("Sign Up Successfull");
        console.log(res);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <div className="w-44 h-18 my-16">
            <img
              className="w-full h-full"
              src="/public/Paragon-it-logo2.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-1/4 relative">
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
            <div className="bg-white p-10 rounded-lg shadow-2xl relative z-10 transform transition duration-500 ease-in-out">
              <h2
                id="form-title"
                className="text-center text-3xl font-bold mb-10 text-gray-800"
              >
                Sign Up
              </h2>
              <div className="space-y-5">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                  placeholder="Name"
                  type="text"
                />
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
                <button className="text-blue-500 hover:text-blue-800 text-sm">
                  <Link to="/login">Login</Link>
                </button>
                <button
                  onClick={handelSignUp}
                  className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
