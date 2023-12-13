/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";

const RequestData = ({ data }) => {
  const { Deadline, Email, Price, Jobtitle, _id } = data;

  // Local state to manage status
  const [status, setStatus] = useState(data.status);

  const handelAkcept = (id) => {
    const updatedStatus = { status: "progress" };
    axios
      .patch(`http://localhost:5000/BidRequest/${id}`, updatedStatus)
      .then((response) => {
        // Update status locally upon successful response
        setStatus("progress");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handelReject = (id) => {
    const updatedStatus = { status: "rejected" };
    axios
      .patch(`http://localhost:5000/BidRequest/${id}`, updatedStatus)
      .then((response) => {
        // Update status locally upon successful response
        setStatus("rejected");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <tr data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{Email}</div>
          </div>
        </div>
      </td>
      <td>{Jobtitle}</td>
      <td>{Deadline}</td>
      <td>{Price}</td>
      <td>{status}</td>
      <td>
        <button className="btn" onClick={() => handelAkcept(_id)}>
          Accept
        </button>
      </td>
      <td>
        <button onClick={() => handelReject(_id)} className="btn">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestData;
