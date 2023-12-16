/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import MyPostCard from "./MyPostCard";
import { AuthContext } from "../../AuthProvider/provider";
import { Helmet } from "react-helmet";

const Mypost = () => {
  const { user } = useContext(AuthContext);
  const [cartdata, setData] = useState([]);
  const url = `https://job-market-server.vercel.app/cart?Email=${user?.email}`;
  console.log(cartdata);
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto p-5">
        <Helmet>
          <title>Job market | My post</title>
        </Helmet>
        {cartdata?.map((cart) => (
          <MyPostCard
            cart={cart}
            key={cart._id}
            cartdata={cartdata}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
};

export default Mypost;
