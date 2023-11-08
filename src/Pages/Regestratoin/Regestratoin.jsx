/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/provider";
import { Helmet } from "react-helmet";

const Regestratoin = () => {
  const { user, setUser, createuser, signinWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handelregestratoin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    console.log(name, email, password, photo);

    if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        password
      )
    ) {
      Swal.fire({
        icon: "error",
        title:
          "Minimum Six characters, at least one letter, one number and one special character",
      });
      return;
    }

    createuser(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name, photoURL: photo }).then(
          () => {
            // regetare was successful
            Swal.fire({
              icon: "success",
              title: "wow great complete your regestratoin",
            });
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(location?.state ? location.state : "/");
          }
        );
      })
      .catch((error) => {
        // An error occurred during regestare
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  const handleGoogleLogin = () => {
    signinWithGoogle()
      .then(() => {
        // regetare was successful

        Swal.fire({
          icon: "success",
          title: "wow great complete your regestratoin",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // An error occurred during regestare
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div>
      <Helmet>
        <title>Job market | Regestratoin</title>
      </Helmet>
      <section className="py-26 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Regestratoin
              </h2>
            </div>
            <form onSubmit={handelregestratoin}>
              <div className="mb-6">
                <label className="block mb-2 font-extrabold" htmlFor="name">
                  Name
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="text"
                  id="email"
                  placeholder="name"
                  name="name"
                />
              </div>
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
                <label className="block mb-2 font-extrabold" htmlFor="photo">
                  Photo
                </label>
                <input
                  className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                  type="photo"
                  id="email"
                  placeholder="photo"
                  name="photo"
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
                  name="password"
                  placeholder="**********"
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
              <Link to="/login">
                <p className="text-red-500 hover:underline">Sign in</p>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Regestratoin;
