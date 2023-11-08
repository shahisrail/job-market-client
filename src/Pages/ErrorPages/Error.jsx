import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <img
        className="w-[600px] mx-auto h-[70vh]"
        src="https://i.ibb.co/xs6Mm7P/f045c103276f088fd105b8ce3cc81637.png"
        alt=""
      />
      <Link>
        <button className="btn max-w-7xl mx-auto text-center mx-auto">
          Gto to home
        </button>
      </Link>
    </div>
  );
};

export default Error;