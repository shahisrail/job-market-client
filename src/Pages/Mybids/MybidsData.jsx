/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";

const MybidsData = ({ data }) => {
  const { Deadline, Email, Jobtitle, Byeremail, status, _id } = data;

  const handleComplete = (id) => {
    const newStatus = { status: "complete" };
    axios
      .patch(`https://job-market-server.vercel.app/mybids/${id}`, newStatus)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          {/* <div>
            <div className="font-bold">{Email}</div>
          </div> */}
        </div>
      </td>
      <td>
        <div className="font-bold">{Byeremail}</div>
      </td>
      <td>{Jobtitle}</td>
      <td>{Deadline}</td>
      <td>{status}</td>

      <td>
        <button
          onClick={() => handleComplete(_id)}
          className="btn"
          disabled={status === "rejected" || status === "panding"}
        >
          Complete button
        </button>
      </td>
    </tr>
  );
};

export default MybidsData;
