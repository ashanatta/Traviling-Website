import React from "react";
import Header from "../../Commponets/header/Header";
import Footer from "../../Commponets/footer/Footer";
import HomeBaner from "../../Commponets/HomeComponets/HomeBaner";
import HomeMoreDetail from "../../Commponets/HomeComponets/HomeMoreDetail";
import HomeCard from "../../Commponets/HomeComponets/HomeCard";

function Homepage() {
  return (
    <>
      <Header />
      <HomeBaner />
      <HomeMoreDetail />
      <HomeCard />
      <Footer />
    </>
  );
}

export default Homepage;
