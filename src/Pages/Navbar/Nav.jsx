// import { useContext, useEffect, useState } from "react";
// import './Nav.css'
// import { Link, NavLink } from "react-router-dom";
// // import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../AuthProvider/provider";
// import ContentLoader from "react-content-loader";
// const MyLoader = () => (
//   <ContentLoader
//     style={{
//       width: "100%",
//       height: "900px",
//     }}
//   >
//     {/* Only SVG shapes */}
//     <rect width="1400" height="1500" />
//   </ContentLoader>
// );

// const Nav = () => {
//   const [loadingBanner, setLoadingBanner] = useState(true);
//   useEffect(() => {
//     // Simulating data fetching delay for the Banner content
//     const timer = setTimeout(() => {
//       setLoadingBanner(false);
//     }, 2000); // Adjust the delay time as needed or replace it with actual data fetching logic

//     return () => clearTimeout(timer);
//   }, []);
//   const { user, logout } = useContext(AuthContext);
  // const handelSignout = () => {
  //   logout()
  //     .then(() => {
  //       // logut was successful
  //       Swal.fire({
  //         icon: "success",
  //         title: "wow great your logout",
  //       });
  //     })
  //     .catch((error) => {
  //       // An error occurred during logout
  //       Swal.fire({
  //         icon: "error",
  //         title: "oops",
  //         text: error.message,
  //         footer: '<a href="">Why do I have this issue?</a>',
  //       });
  //     });
  // };

//   const userimg =
//     user && user.photoURL
//       ? user.photoURL
//       : "https://i.postimg.cc/jd2TMBgB/download.png";

//   const useName = user && user.displayName;

//   const navLinks = (
//     <>
//       <li className="bg-white">
//         <NavLink to="/">Home</NavLink>
//       </li>
//       {
//         <li>
//           <NavLink to="/Addjob">Add job</NavLink>
//         </li>
//       }
//       {user && (
//         <li>
//           <NavLink to="/mypost">My posted</NavLink>
//         </li>
//       )}
//       {user && (
//         <li>
//           <NavLink to="/mybids">My Bids</NavLink>
//         </li>
//       )}
//       {user && (
//         <li>
//           <NavLink to="/BidRequest">Bid Requests</NavLink>
//         </li>
//       )}

//       <li>
//         <NavLink to="/contact">Contact</NavLink>
//       </li>
//       <li>
//         <NavLink to="/login">Login</NavLink>
//       </li>
//     </>
//   );
//   return (
//     {loadingBanner ? (
//         <MyLoader /> // Render the custom loader while loading
//       ) : (
//             <div className={`navbar   `}>
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             {navLinks}
//           </ul>
//         </div>
//         <div>
//           <Link to='/'>
//             <img
//               className="w-[200px] h-[50px] hidden md:block  "
//               src="https://i.ibb.co/LnyF4B3/Untitled-design-1.png"
//               alt=""
//             />
//           </Link>
//         </div>
//         <a className="normal-case lg:text-xl">Job market</a>
//         <div></div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//       </div>
//       <div className="navbar-end">
//         <h1> {useName} </h1>
//         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//           <div className="w-10 rounded-full">
//             <img src={userimg} alt="" />
//           </div>
//         </label>
//         {user ? (
//           <>
//             <button
//               onClick={handelSignout}
//               className="btn bg-[#62C8BA] font-bold w-[70px] lg:w-[120px] hover:bg-[#0E204D] text-white"
//             >
//               Sign out
//             </button>
//           </>
//         ) : (
//           <Link to="/login">
//             <button className="btn text-white font-bold bg-[#62C8BA] hover:bg-[#0E204D]">
//               Login
//             </button>
//           </Link>
//         )}
//       </div>
//     </div>
       
//       )}

//   );
// };

// export default Nav;
// import { useContext, useEffect, useState } from "react";
// import "./Nav.css";
// import { Link, NavLink } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../AuthProvider/provider";
// import ContentLoader from "react-content-loader";

// const MyLoader = () => (
//   <ContentLoader
//     style={{
//       width: "100%",
//       height: "100%",
//     }}
//   >
//     {/* Only SVG shapes */}
//     <rect  width="1400" height="100" />
//   </ContentLoader>
// );

// const Nav = () => {
//   const [loadingBanner, setLoadingBanner] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoadingBanner(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   const { user, logout } = useContext(AuthContext);

//     const handelSignout = () => {
//       logout()
//         .then(() => {
//           // logut was successful
//           Swal.fire({
//             icon: "success",
//             title: "wow great your logout",
//           });
//         })
//         .catch((error) => {
//           // An error occurred during logout
//           Swal.fire({
//             icon: "error",
//             title: "oops",
//             text: error.message,
//             footer: '<a href="">Why do I have this issue?</a>',
//           });
//         });
//     };


//   const userimg =
//     user && user.photoURL
//       ? user.photoURL
//       : "https://i.postimg.cc/jd2TMBgB/download.png";

//   const useName = user && user.displayName;

//   const navLinks = <>{/* Your navigation links */}</>;

//   return (
//     <div>
//       {loadingBanner ? (
//         <MyLoader />
//       ) : (
//         <div className={`navbar`}>
//           <div className="navbar-start">
//             <div className="dropdown">{/* Dropdown content */}</div>
//             <div>
//               <Link to="/">
//                 <img
//                   className="w-[200px] h-[50px] hidden md:block  "
//                   src="https://i.ibb.co/LnyF4B3/Untitled-design-1.png"
//                   alt=""
//                 />
//               </Link>
//             </div>
//             <a className="normal-case lg:text-xl">Job market</a>
//             <div></div>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">{navLinks}</ul>
//           </div>
//           <div className="navbar-end">
//             <h1> {useName} </h1>
//             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img src={userimg} alt="" />
//               </div>
//             </label>
//             {user ? (
//               <>
//                 <button
//                   onClick={handelSignout}
//                   className="btn bg-[#62C8BA] font-bold w-[70px] lg:w-[120px] hover:bg-[#0E204D] text-white"
//                 >
//                   Sign out
//                 </button>
//               </>
//             ) : (
//               <Link to="/login">
//                 <button className="btn text-white font-bold bg-[#62C8BA] hover:bg-[#0E204D]">
//                   Login
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;
import { useContext } from "react";
import './Nav.css'
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/provider";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const handelSignout = () => {
    logout()
      .then(() => {
        // logut was successful
        Swal.fire({
          icon: "success",
          title: "wow great your logout",
        });
      })
      .catch((error) => {
        // An error occurred during logout
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  const userimg =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/jd2TMBgB/download.png";

  const useName = user && user.displayName;

  const navLinks = (
    <>
      <li className="bg-white">
        <NavLink to="/">Home</NavLink>
      </li>
      {
        <li>
          <NavLink to="/Addjob">Add job</NavLink>
        </li>
      }
      {user && (
        <li>
          <NavLink to="/mypost">My posted</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/mybids">My Bids</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/BidRequest">Bid Requests</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar   `}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Link to='/'>
            <img
              className="w-[200px] h-[50px] hidden md:block  "
              src="https://i.ibb.co/LnyF4B3/Untitled-design-1.png"
              alt=""
            />
          </Link>
        </div>
        <a className="normal-case lg:text-xl">Job market</a>
        <div></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <h1> {useName} </h1>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userimg} alt="" />
          </div>
        </label>
        {user ? (
          <>
            <button
              onClick={handelSignout}
              className="btn bg-[#62C8BA] font-bold w-[70px] lg:w-[120px] hover:bg-[#0E204D] text-white"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn text-white font-bold bg-[#62C8BA] hover:bg-[#0E204D]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
