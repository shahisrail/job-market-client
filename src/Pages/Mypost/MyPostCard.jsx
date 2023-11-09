/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./btn.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyPostCard = ({ cart, setData, cartdata }) => {
  const {
    _id,
    Email,
    Jobtitle,
    Deadline,
    Description,
    Minimumprice,
    Maximumprice,
  } = cart;

  const hnadelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://assaignment-11-server-nu.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainig = cartdata?.filter((datas) => datas._id !== id);
            setData(remainig);
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          JobTitale: {Jobtitle}
        </h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          DeadLine: {Deadline}
        </h5>
        <p className="font-bold  text-gray-700 dark:text-gray-400">
          Price range: {Minimumprice}$- {Maximumprice}$
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Description: {Description}
        </p>
      </a>

      <div className=" lg:flex justify-between">
        <button onClick={() => hnadelDelete(_id)} className="btn-grad w-full">
          Delete
        </button>
        <Link to={`/update/${_id}`}>
          <button className="btn-grad w-full">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default MyPostCard;
