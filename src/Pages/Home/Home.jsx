/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Working from '../Workin/Working';
import Category from '../Category/Category';
import Service from '../../Service/Service';
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
      
        <title>Job market | Home Page</title>
       
      </Helmet>
      <Banner></Banner>
      <Working></Working>
      <Service></Service>
      <Category></Category>
    </div>
  );
};

export default Home;