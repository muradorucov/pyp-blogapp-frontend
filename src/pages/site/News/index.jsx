import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../../components/common/footer/Footer";
import Navbar from "../../../components/common/navbar";
import Discover from "../../../components/home/discover/Discover";
import Hero from "../../../components/home/hero/Hero";
import Homes from "../../../components/home/mainContent/homes/Home";

function News() {
  return <>
    <Helmet>
      <title>News Page</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <Navbar />
    <Hero />
    <Homes />
    <Discover />
    <Footer />
  </>

    ;
}

export default News;
