/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MyPostCard = ({ cart }) => {
  const { Email, Jobtitle, Deadline,Description, Minimumprice, Maximumprice,} = cart
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Jobtitle}
      </h5>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Deadline}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {Minimumprice}$-
        {Maximumprice}$
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {Description}
      </p>
    </a>
  );
};

export default MyPostCard;