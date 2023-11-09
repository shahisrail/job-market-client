/* eslint-disable no-unused-vars */
import React from "react";

const Working = () => {
  return (
    <div className="bg-[#FEF9F9]">
      <h2 className="text-center mt-10 text-2xl">Working Process</h2>
      <h2 className="text-center  text-5xl">How It Works</h2>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-3 gap-5 p-5"
      >
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" bg-[#FFFFFF] rounded-lg"
        >
          <div className="flex justify-between p-5">
            <div className="flex justify-center items-center">
              <h2 className="flex justify-center items-center text-6xl text-[#4D98E2] font-bold">
                01
              </h2>
            </div>
            <div>
              <img
                className="h-[100px] bg-[#4D98E2] p-2"
                src="https://i.ibb.co/8gsp30x/icon1.png"
                alt=""
              />
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-2xl">Register Your Account</h2>
            <p>
              You need to create an account to find the best and preferred job.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-opacity-50 bg-blur-md bg-[#FFFFFF] rounded-lg"
        >
          <div className="flex justify-between p-5">
            <div className="flex justify-center items-center">
              <h2 className="flex justify-center items-center text-6xl text-[#BC84CA] font-bold">
                02
              </h2>
            </div>
            <div>
              <img
                className="h-[100px] bg-[#BC84CA] p-2"
                src="https://i.ibb.co/7p7j48w/icon2.png"
                alt=""
              />
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-2xl">Register Your Account</h2>
            <p>
              You need to create an account to find the best and preferred job.
            </p>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="bg-[#FFFFFF] rounded-lg "
        >
          <div className="flex justify-between p-5">
            <div className="flex justify-center items-center">
              <h2 className="flex justify-center items-center text-6xl text-[#6AD8B1] font-bold">
                03
              </h2>
            </div>
            <div>
              <img
                className="h-[100px] bg-[#6AD8B1] p-2"
                src="https://i.ibb.co/yR7Hfyj/icon3.png"
                alt=""
              />
            </div>
          </div>
          <div className="p-5">
            <h2 className="text-2xl">Upload Your Resume</h2>
            <p>
              You need to create an account to find the best and preferred job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
