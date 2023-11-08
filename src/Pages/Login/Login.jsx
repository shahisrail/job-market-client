/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/provider";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signIn, signinWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handelregestratoin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate(location?.state ? location.state : "/");
        //  navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-in Successful",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Job market | Login</title>
      </Helmet>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Login in
              </h2>
            </div>
            <form onSubmit={handelregestratoin} action="">
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="email">
                  Email
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="password">
                  Password
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="password"
                  id="password"
                  placeholder="**********"
                  name="password"
                />
              </div>
              <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                  <label htmlFor="remember">
                    <input type="checkbox" id="remember" />
                    <span className="ml-1 font-extrabold">Remember me</span>
                  </label>
                </div>
                <div className="w-full lg:w-auto px-4">
                  <a
                    className="inline-block font-extrabold hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <button
              onClick={handleGoogleLogin}
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              type="submit"
            >
              Sign in with Google
            </button>
            <p className="text-center font-extrabold">
              Don't have an account?
              <Link to="/regetraoin">
                <p className="text-red-500 hover:underline">Sign up</p>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
