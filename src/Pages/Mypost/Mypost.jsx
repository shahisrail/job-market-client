/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyPostCard from './MyPostCard';

const Mypost = () => {
  const loader = useLoaderData()
  console.log(loader);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5">
        {loader.map((cart) => (
          <MyPostCard cart={cart} key={cart.id} />
        ))}
      </div>
    </div>
  );
};

export default Mypost;