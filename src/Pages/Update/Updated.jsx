/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/provider";
import Category from "../Category/Category";

const Updated = () => {
  const { user } = useContext(AuthContext);
  const update = useLoaderData();
  const {
    _id,
    Email,
    Jobtitle,
    Deadline,
    Description,
    Minimumprice,
    Maximumprice,
  } = update;

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Email = form.Email.value;
    const Jobtitle = form.Jobtitle.value;
    const Deadline = form.Deadline.value;
    const Description = form.Description.value;
    const Category = form.Category.value;
    const Minimumprice = form.Minimumprice.value;
    const Maximumprice = form.Maximumprice.value;

    const updatejob = {
      Email,
      Jobtitle,
      Deadline,
      Description,
      Category,
      Minimumprice,
      Maximumprice,
      applyed: false,
      availavelvid: true,
    };
    console.log(updatejob);
    fetch(`http://localhost:5000/cart/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatejob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "job update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-5 ">
      <div className="bg-[#194656] p-4 md:p-24 ">
        <h2 className="text-3xl text-yellow-300 mt-[-50px] font-extrabold">
          Update Job
        </h2>
        <form onSubmit={handelSubmit}>
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
                  value={user?.email}
                  defaultValue={Email}
                  readOnly
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">Job title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Jobtitle"
                  required
                  defaultValue={Jobtitle}
                  placeholder="Job title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-yellow-300">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="Deadline"
                  required
                  defaultValue={Deadline}
                  placeholder="Deadline"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Description"
                  required
                  defaultValue={Description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-yellow-300">Category</span>
              </label>
              <label className="">
                <select
                  name="Category"
                  defaultValue={Category}
                  required
                  className="select  w-full"
                >
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="graphics-design">Graphics Design</option>
                </select>
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-4">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-yellow-300">
                  Minimum price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Minimumprice"
                  required
                  defaultValue={Minimumprice}
                  placeholder="Minimum price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-yellow-300">
                  Maximum price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="Maximumprice"
                  required
                  defaultValue={Maximumprice}
                  placeholder="Maximum price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8"></div>
          <input type="submit" value="Updated" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default Updated;
