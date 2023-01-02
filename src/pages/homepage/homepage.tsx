import React from "react";
import Header from "./header/header";
import HomeContent from "./content";
import ImageSlider from "./image-slider";
import Footer from "./footer/footer";
import Spinner from "../../components/Spinner";
import TopBar from "../../components/TopBar";
import ToolBar from "../../components/ToolBar";
import NavBar from "../../components/NavBar";
import Slider from "../../components/Slider";
import Facts from "../../components/Facts";
import AboutUs from "../../components/AboutUs";
import Service from "../../components/Service";
import Feature from "../../components/Feature";
import OurTeam from "../../components/OurTeam";
import Testimonial from "../../components/Testimonial";
import FooterNew from "../../components/Footer";
// import ImageSlider from "./slider";
// import Main from "./main";

export default function HomePage() {
  return (
    <>
      {/* <Header />
      <ImageSlider />
      <HomeContent />
      <Footer /> */}

      <>
      
        <TopBar />
        <ToolBar />
        <NavBar/>
        <ImageSlider />
        <Facts/>
        <AboutUs />
        <Service />
        <Feature />
        <OurTeam />
        <Testimonial />
        <FooterNew />

      </>
    </>
  );
}
