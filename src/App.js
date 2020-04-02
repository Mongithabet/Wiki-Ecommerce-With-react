import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
class  App extends React.Component {
  state= {
    color:"navbar-brand navba"
  }
mouseLeave = ()=>{
  this.setState({
    color:"navbar-brand navba"
  })
}
mouseEnter = ()=>{
  this.setState({
    color:"navbar-brand navba bg"
  })
}
  render(){
  return (
    <div className="App">
    <Navbar color={this.state.color} ml={this.mouseLeave} me={this.mouseEnter}/>
    <Home/>
    </div>
  );
}}

export default App;
