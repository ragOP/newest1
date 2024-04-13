import React from "react";
import Header from "../components/Header";
import MainBox from "../components/MainBox";
import Counter from "../components/Counter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="app_box">
        <MainBox />
      </div>
      <Counter />
      <Footer />
    </div>
  );
};

export default HomePage;
