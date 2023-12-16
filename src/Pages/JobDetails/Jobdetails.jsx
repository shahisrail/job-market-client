/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/provider";
import { useState } from "react";

const Jobdetails = () => {
  const { user } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const load = useLoaderData();
  console.log(load);
  const loginUSer = user?.email;
  console.log(loginUSer);
  const {
    Email,
    Jobtitle,
    Deadline,
    Price,
    Minimumprice,
    Maximumprice,
    Category,
    Description,
  } = load;

  const isOwner = user?.email === Email; // Check if the current user is the owner
  useEffect(() => {
    setUserEmail(user?.email || "");
  }, [user?.email]);

  console.log(user);
  console.log(isOwner);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Email = form.Email.value;
    const Byeremail = form.Byeremail.value;
    const Deadline = form.Deadline.value;
    const Price = form.Price.value;
    const cart = {
      Email,
      Byeremail,
      Deadline,
      Description,
      Price,
      Jobtitle,
      status: "panding",
      applyed: false,
      availavelvid: true,
    };
    console.log(cart);
    fetch("https://job-market-server.vercel.app/mybids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/mybids");
      });
  };
  console.log(user?.Email);
  return (
    <>
      <a className="block max-w-2xl mx-auto text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Category: {Category}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Job-Titale: {Jobtitle}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Deadline: {Deadline}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Price Range: {Minimumprice}$-{Maximumprice}$
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Description: {Description}$
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{}</p>
      </a>

      <div className="container mx-auto mt-5">
        <div className="bg-[#194656] p-4 md:p-24">
          <h2 className="text-3xl text-yellow-300 mt-[-50px] font-extrabold">
            Place your bid
          </h2>

          <form onSubmit={handelSubmit}>
            <div className="md:flex gap-4 mb-4">
              <div className="form-control w-full md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-yellow-300">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="Price"
                    required
                    placeholder="Price"
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
                    type="email"
                    name="Email"
                    placeholder="Email"
                    defaultValue={userEmail}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              <div className="form-control w-full md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-yellow-300">
                    Buyer email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="Byeremail"
                    required
                    value={Email}
                    placeholder="Buyer email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="mb-8"></div>
            <input
              type="submit"
              value="Bid on"
              className="btn btn-block"
              disabled={isOwner}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Jobdetails;
