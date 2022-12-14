import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import spa from './main';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' element={<spa />}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
