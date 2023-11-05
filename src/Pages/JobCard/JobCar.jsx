/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

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
          Price range: {Minimumprice}$ -{Maximumprice}$
        </p>
      </div>
      <div className="p-6 pt-0">
        <a
          className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
          href="#"
        >
          <Link to={`/jobdetails/${_id}`}>
            <button
              className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Bid now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // eslint-disable-next-line react/no-unknown-property
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linecap="round"
                  // eslint-disable-next-line react/no-unknown-property
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default JobCar;