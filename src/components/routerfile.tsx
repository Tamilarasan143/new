import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import FileIndex from './FileIndex';
import Spa from './Spa-img';
import Partyhall from './partyhall-img';
import Bar from './Bar-img';
import Home from './pages/home';
import Enquriy from './pages/enquriy';
import Contact from './pages/contactus';
import Aboutus from './pages/aboutus';
import Myaccount from './pages/myaccount';


export default function Routerfile() {
    return (
       <Router>
         <Routes>
        <Route path="/" element={<FileIndex />}/>
        <Route path="/party" element={<Partyhall/>}/>
        <Route path="spa" element={<Spa />}/>
        <Route path="home" element={<Home/>}/>  
        <Route path="enquriy" element={<Enquriy />}/>
        <Route path="contactus" element={<Contact />}/>
        <Route path="myaccount" element={<Myaccount/>}/>
        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="bar" element={<Bar />}/>

      </Routes>
       </Router>
    )
}
