
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <News></News>
      </div>
    )
  }
}


