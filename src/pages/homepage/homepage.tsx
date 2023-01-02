import React from "react";
import Header from "./header/header";
import HomeContent from "./content";
import ImageSlider from "./image-slider";
import Footer from "./footer/footer";
// import ImageSlider from "./slider";
// import Main from "./main";

export default function HomePage() {
  return (
    <>
      <Header />
      <ImageSlider />
      <HomeContent />
      <Footer />
    </>
  );
}
