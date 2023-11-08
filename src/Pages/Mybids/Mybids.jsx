/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/provider";
import MybidsData from "./MybidsData";
import { Helmet } from "react-helmet";

const Mybids = () => {
  const [bids, setBids] = useState([]);
  const [status, setStatus] = useState("");
  const { user } = useContext(AuthContext);

  console.log(status);

  useEffect(() => {
    const apiUrl = `http://localhost:5000/mybids?Email=${user?.email}`;

    // Add sorting parameters based on the selected "status" value
    const sortedUrl =
      status === "asc" ? `${apiUrl}&sortField=status&sortOrder=asc` : apiUrl;

    fetch(sortedUrl, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBids(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [status, user]);

  if (bids.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>Job market | My Bids</title>
      </Helmet>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Byer email</th>
            <th>Job title</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Complete button</th>
            <th>
              <select
                className="input input-bordered"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">Choose one</option>
                <option value="asc">From high to low</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {bids.map((data) => (
            <MybidsData data={data} key={data._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mybids;
