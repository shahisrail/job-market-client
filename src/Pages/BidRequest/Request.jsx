/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/provider';
import RequestData from './RequestData';
import { Helmet } from 'react-helmet';

const Request = () => {
   const [request, setRequest] = useState([]);
   const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/BidRequest?Byeremail=${user?.email}`;

  console.log(url);
  console.log(request);

   useEffect(() => {
     fetch(url, { credentials: "include" })
       .then((res) => res.json())
       .then((data) => setRequest(data))
       .catch((error) => console.error("Error fetching data:", error));
   }, []);

   if (request.length === 0) {
     return <div>Loading...</div>;
   }
  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Job market | Bid Request</title>
      </Helmet>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Job title</th>
            <th>Deadline</th>
            <th>Price</th>
            <th>Status</th>
            <th>Accept </th>
            <th>Reject</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {request.map((data) => (
            <RequestData data={data} key={data._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Request;