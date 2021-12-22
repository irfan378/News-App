
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<News key="general" PageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" PageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" PageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" PageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" PageSize={this.pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" PageSize={this.pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News key="sports" PageSize={this.pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" PageSize={this.pageSize} country="in" category="technology" />} />


          </Routes>
        </Router>
      </div >
    )
  }
}


