/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const JobCar = ({ cart }) => {
  const {
    Category,
    _id,
    Jobtitle,
    Deadline,
    Description,
    Minimumprice,
    Maximumprice,
  } = cart;

  const deadlineDate = new Date(Deadline);
  const currentDate = new Date();
  const isDeadlinePassed = deadlineDate < currentDate;

  const handleClick = () => {
    if (isDeadlinePassed) {
      Swal.fire({
        icon: "error",
        title: "Date has expired",
        text: "You cannot bid on this job as the deadline has passed.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Category: {Category}
        </h5>
        <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Job title: {Jobtitle}
        </h5>
        <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Deadline: {Deadline}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Short description: {Description}
        </p>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Price range: {Minimumprice}$ - {Maximumprice}$
        </p>
      </div>
      <div className="p-6 pt-0">
        {isDeadlinePassed ? (
          <button
            className={`flex btn  disabled: items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500  rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 cursor-not-allowed`}
            type="button"
            data-ripple-dark="true"
            onClick={handleClick}
            disabled
          >
            Bid on this project
          </button>
        ) : (
          <Link to={`/jobdetails/${_id}`}>
            <button
              className={`flex btn-grad items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30`}
              type="button"
              data-ripple-dark="true"
            >
              Bid on this project
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobCar;
