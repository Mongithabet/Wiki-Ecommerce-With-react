import React from 'react'

class Navbar extends React.Component {
  
  
  render(){

    
    return (
        <div>
            
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark bar bg">
  <a className={this.props.color} onMouseOver={this.props.me} onMouseLeave={this.props.ml} href="#">Nos magasins</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="navbar-brand navbar" id="navbarSupportedContent">
   
    <ul className="navbar-nav mr-auto">
      <li className='nav-item'>
        <a className={this.props.color} onMouseOver={this.props.me} onMouseLeave={this.props.ml} href="#">Qui sommes nous </a>
      </li>
      <ul></ul> 

      <li className='nav-item'>
      <a className={this.props.color}  onMouseOver={this.props.me} onMouseLeave={this.props.ml} href="#">Qui sommes nous </a>
      </li>
              
     
      <li className="nav-item">
      </li>
    </ul>
    
  </div>
</nav> 
        </div>
    )
}
}
export default Navbar

