import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
class  App extends React.Component {
  render(){
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    </div>
  );
}}

export default App;
