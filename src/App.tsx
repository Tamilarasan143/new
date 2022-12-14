import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Main from './components/main';
import NoTransitionExample from './components/carcoual';
import Footer from './components/footer';

// import Spa from './components/Spa';
// import Bar from './components/Bar';
// import Partyhall from './components/partyhall';

function App() {
  return (
    <div className="App">
      <Header />
      <NoTransitionExample />
      <Main />
     
      {/* <Spa/>
      <Partyhall/> 
       <Bar/>  */}
      <Footer />
    </div>
  );
}

export default App;