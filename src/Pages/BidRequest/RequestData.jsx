/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";

const RequestData = ({ data }) => {
  const { Deadline, Email, Price, Jobtitle, _id, status } = data;

  const handelAkcept = (id) => {
    const status = { status:"progress" };
    axios
      .patch(`http://localhost:5000/BidRequest/${id}`, status)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const handelReject = (id) => {
    const status = { status: "rejected" };
    axios
      .patch(`http://localhost:5000/BidRequest/${id}`, status)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <tr>
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
          akcept
        </button>
      </td>
      <td>
       
        <button onClick={ ()=> handelReject(_id)} className="btn">Reject</button>
      </td>
    </tr>
  );
};

export default RequestData;
