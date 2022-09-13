import './App.css';
import React, { Component } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Explore from './views/Explore';
import Nav from './components/Nav';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/explore' element={<Explore />} />
            {/* <Route path='/login' element={<Login logMeIn={logMeIn} />} />
          <Route path='/signup' element={<SignUp />} /> */}
          </Routes>

        </div>
      </BrowserRouter>
    )
  }
}
