import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HomeContent from "./content";
import ImageSlider from "./slider";
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
