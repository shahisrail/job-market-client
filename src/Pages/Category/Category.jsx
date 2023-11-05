/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCar from "../JobCard/JobCar";

const Category = () => {
  const data = useLoaderData(); 
  console.log(data);
   
  const filter = data?.filter((p) => p.Category.includes("web"));
  const filter1 = data?.filter((p) => p.Category.includes("digital"));
  const filter2 = data?.filter((p) => p.Category.includes("graphics"));
  console.log(filter);
   
  return (
    <div className="mt-5">
      <h2 className="text-center text-3xl font-semibold mt-5">
        Browse By Category
      </h2>
      <Tabs className="text-center mt-5">
        <TabList className="gap-12">
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-5 mx-auto p-5">
            {filter.map((cart) => (
              <JobCar cart={cart} key={cart.id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5 mx-auto p-5">
            {filter1.map((cart) => (
              <JobCar cart={cart} key={cart.id} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5 mx-auto p-5">
            {filter2.map((cart) => (
              <JobCar cart={cart} key={cart.id} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
