import React from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import FileIndex from '../Pages/FileIndex';
import Spa from './Spaimg';

export default function Routerfile() {
    return (
       <Router>
         <Routes>
        <Route path="/" element={<FileIndex />}/>
       
        
        <Route path="spa" element={<Spa />}/>   
      </Routes>
       </Router>
    )
}
