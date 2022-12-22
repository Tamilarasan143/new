import React from "react";
import Header from "../../components/header/header";
import NoTransitionExample from "./carcoual";
import Footer from "../../components/footer/footer";
import Main from "./main";


export default function HomePage() {
  return (
    <div
    style={{
      backgroundColor:"white"
    }}
    >
      <Header />
      <NoTransitionExample />
      <Main />
      <Footer />
    </div>
  );
}
