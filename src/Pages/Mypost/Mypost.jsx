/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import MyPostCard from "./MyPostCard";
import { AuthContext } from "../../AuthProvider/provider";

const Mypost = () => {
  const {user} = useContext(AuthContext)
  const [cartdata, setData] = useState([]); 
  const url = `http://localhost:5000/cart?Email=${user.email}`;
  console.log(cartdata);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
     
    }, []); 
    return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5">
        {cartdata.map((cart) => (
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
