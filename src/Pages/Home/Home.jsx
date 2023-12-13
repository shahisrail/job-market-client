import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Working from "../Workin/Working";
import Category from "../Category/Category";
import Service from "../../Service/Service";
import { Helmet } from "react-helmet";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    style={{
      width: "100%",
      height: "900px",
    }}
  >
    {/* Only SVG shapes */}
    <rect width="1400" height="1500" />
  </ContentLoader>
);

const Home = () => {
  const [loadingBanner, setLoadingBanner] = useState(true);

  useEffect(() => {
    // Simulating data fetching delay for the Banner content
    const timer = setTimeout(() => {
      setLoadingBanner(false);
    }, 1000); // Adjust the delay time as needed or replace it with actual data fetching logic

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Job market | Home Page</title>
      </Helmet>
      {loadingBanner ? (
        <MyLoader /> // Render the custom loader while loading
      ) : (
        <Banner></Banner> // Render the actual Banner component when loading is complete
      )}

      <Working></Working>
      <Service></Service>
      <Category></Category>
    </div>
  );
};

export default Home;
