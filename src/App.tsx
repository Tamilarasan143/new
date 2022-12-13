import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Main from './components/main';
import NoTransitionExample from './components/carcoual';
import Footer from './components/footer';
import Imggallery from './components/imggallery';

function App() {
  return (
    <div className="App">
      <Header />
      <NoTransitionExample />
      <Main />
      <Imggallery/>
      <Footer />
    </div>
  );
}

export default App;
