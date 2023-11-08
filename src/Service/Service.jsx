/* eslint-disable no-unused-vars */
import React from 'react';

const Service = () => {
  return (
    <div>
      <h2 className="text-center text-5xl mt-5">our servicec</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 gap-5">
        <div className="relative flex hover:bg-slate-300  text-gray-700 bg-white shadow-md  p-2 items-center rounded-xl bg-clip-border">
          <img
            className="rounded-full border  w-[100px] h-[100px] bg-red-700"
            src="https://i.ibb.co/BZdgHDm/download.jpg"
            alt=""
          />

          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Advertise A Job
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to Naviglio where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
        </div>

        <div className="relative flex p-2 hover:bg-slate-300 text-gray-700 bg-white shadow-md  items-center rounded-xl bg-clip-border">
          <img
            className="rounded-full p-5  w-[100px] h-[100px] "
            src="https://i.ibb.co/j3Yr9t1/search-icon-vector-illustration-on-260nw-416112421.webp"
            alt=""
          />

          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              CV Search
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Our CV Search service allows you to search and find the most
              qualified candidates based on their resumes. You can easily filter
              and discover the best talent for your job openings
            </p>
          </div>
        </div>

        <div className="relative p-2 flex hover:bg-slate-300 text-gray-700 bg-white shadow-md  items-center rounded-xl bg-clip-border">
          <img
            className="rounded-full border p-5 w-[100px] h-[100px] "
            src="https://i.ibb.co/6FkfXhP/man-icon-vector-260nw-1040084344.webp"
            alt=""
          />

          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Recruiter Profiles
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Recruiter Profiles service provides you with access to profiles of
              experienced recruiters. You can connect with expert recruiters who
              can help you find the right candidates for your organization
            </p>
          </div>
        </div>

        <div className="relative flex p-2 hover:bg-slate-300 text-gray-700 bg-white shadow-md  items-center rounded-xl bg-clip-border">
          <img
            className="rounded-full border  w-[100px] h-[100px] p-5 "
            src="https://i.ibb.co/n3YrGY8/img-icons8.png"
            alt=""
          />

          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Display Jobs
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              With Display Jobs, you can showcase your job listings to a large
              audience. Increase the visibility of your job openings and attract
              top talent to your organization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;