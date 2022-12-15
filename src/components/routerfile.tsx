import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileIndex from './FileIndex';
import SpaDetails from './spaDetails';
import PartyDetails from './partyDetails';
import BarDetails from './barDetails';
import HomePage from './pages/homepage';
import EnquriyPage from './pages/enquriypage';
import ContactPage from './pages/contactuspage';
import AboutusPage from './pages/aboutuspage';
import MyaccountPage from './pages/myaccountpage';


export default function Routerfile() {
  return (
    <Router>
      <Routes>
        <Route path="homepage" element={<HomePage />} />
        <Route path="details/spa" element={<SpaDetails />} />
        <Route path="details/bar" element={<BarDetails />} />
        <Route path="details/party" element={<PartyDetails />} />
        <Route path="enquriypage" element={<EnquriyPage />} />
        <Route path="contactuspage" element={<ContactPage />} />
        <Route path="aboutuspage" element={<AboutusPage />} />
        <Route path="myaccountpage" element={<MyaccountPage />} />
        <Route path="/" element={<FileIndex />} />
      </Routes>
    </Router>
  )
}
