/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Jobdetails = () => {
  const load = useLoaderData();
  console.log(load);
  const {
    Email,
    Jobtitle,
    Deadline,
    pric,
    Minimumprice,
    Maximumprice,
    Category,
    Description,
  } = load;
  return (
    <>
      <a className="block  max-w-2xl mx-auto text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Category:{Category}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {Jobtitle}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Deadline:{Deadline}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          price Range: {Minimumprice}$-
          {Maximumprice}$
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Description: {Description}$
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{}</p>
      </a>
      <div className="container mx-auto mt-5 ">
        <div className="bg-[#194656] p-4 md:p-24 ">
          <h2 className="text-3xl text-yellow-300 mt-[-50px] font-extrabold">
            place your bid
          </h2>
          <form>
            <div className="md:flex gap-4 mb-4">
              <div className="form-control w-full md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-yellow-300">pric</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="pric"
                    required
                    placeholder="pric"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-300">Deadline</span>
                </label>
                <label className="input-group">
                  <input
                    type="date"
                    name="Deadline"
                    required
                    placeholder="Deadline"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            <div className="md:flex mb-4 gap-4  ">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-300">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-full md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-yellow-300">
                    Byer emailmy
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="Jobtitle"
                    required
                    placeholder="Byer emailmy"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="mb-8"></div>
            <input type="submit" value="Add Job" className="btn btn-block" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;
