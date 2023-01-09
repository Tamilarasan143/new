import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import AboutusPage from "./pages/aboutuspage";
import ContactPage from "./pages/contactuspage";
import BarDetails from "./pages/details/barDetails";
import PartyDetails from "./pages/details/partyDetails";
import EnquriyPage from "./pages/enquriypage";
import LoginPage from "./pages/login/loginpage";
import SpaDetails from "./pages/details/spaDetails";
import Signup from "./pages/register/signup";
import MyAccount from "./pages/my-account/layout";
import { HashRouter } from "react-router-dom";
import "./App.css";
import UsersList from "./pages/my-account/users";
import GuestRoomReservation from "./pages/guest-rooms";
import { AdminDashboard } from "./pages/dashboard";
import MyCalender from "./pages/calender";
import MembershipList from "./pages/membership/membership";
import { Spinner } from "react-bootstrap";
import { UserContextProvider } from "./data/providers/users";
import appConfig from "./data/config/app-config";
import Error404 from "./components/errors/e404";
import Forgetpassword from "./pages/login/forgetpassword";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appConfig.init().then((e) => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <UserContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/spa" element={<SpaDetails />} />
          <Route path="details/bar" element={<BarDetails />} />
          <Route path="details/party" element={<PartyDetails />} />
          <Route path="enquiry" element={<EnquriyPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="aboutus" element={<AboutusPage />} />
          <Route path="register" element={<Signup />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgetpassword" element={<Forgetpassword/>} />
          <Route path="*" element={<Error404 />} />
          <Route path="acc" element={<MyAccount />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="members/list" element={<MembershipList />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="calendar" element={<MyCalender />} />
            <Route path="users" element={<UsersList />} />
            <Route path="events" element={<AdminDashboard />} />
            <Route path="events/reservations" element={<AdminDashboard />} />
            <Route path="bars" element={<AdminDashboard />} />
            <Route
              path="guest/reservation"
              element={<GuestRoomReservation />}
            />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </HashRouter>
    </UserContextProvider>
  );
}

export default App;
