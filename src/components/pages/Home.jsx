import React from "react";
import PropTypes from "prop-types";
import Header from "./../layout components/Header";
import Marquee from "react-fast-marquee";
import Navbar from "./../layout components/navbar/Navbar";
import LeftSidebar from "./../layout components/sidebars/LeftSidebar";
import RightSidebar from "./../layout components/sidebars/RightSidebar";
import NewsColumn from "./../layout components/NewsColumn";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div className=" md:max-w-4xl lg:max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex bg-[#F3F3F3] px-4 py-2  my-8">
        <button className="btn bg-[#D72050] text-white rounded  ">
          Latest
        </button>
        <Marquee pauseOnHover speed={120} className="text-[#403F3F]">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-5 mx-auto">
        <LeftSidebar></LeftSidebar>
        <div className="col-span-2 border">
          {news.map((aNews) => (
            <NewsColumn key={aNews._id} aNews={aNews}></NewsColumn>
          ))}
        </div>

        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
