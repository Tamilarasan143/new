import React from "react";
import Header from "../../components/header/header";
import NoTransitionExample from "./carcoual";
import Footer from "../../components/footer/footer";
import Main from "./main";


export default function HomePage() {
  return (
    <>
      <Header />
      <NoTransitionExample />
      <Main />
      <Footer />
    </>
  );
}
