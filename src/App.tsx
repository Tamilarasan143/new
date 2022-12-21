import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import AboutusPage from "./pages/aboutuspage";
import ContactPage from "./pages/contactuspage";
import BarDetails from "./pages/details/barDetails";
import PartyDetails from "./pages/details/partyDetails";
import EnquriyPage from "./pages/enquriypage";
import MyaccountPage from "./pages/account/myaccountpage";
import SpaDetails from "./pages/details/spaDetails";
import Signup from "./pages/account/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/spa" element={<SpaDetails />} />
          <Route path="details/bar" element={<BarDetails />} />
          <Route path="details/party" element={<PartyDetails />} />
          <Route path="enquiry" element={<EnquriyPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="aboutus" element={<AboutusPage />} />
          <Route path="myacc" element={<MyaccountPage />} />
          <Route path="singup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
