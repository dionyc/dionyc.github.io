import React, { Component } from 'react';
import logo from '../assets/sparta-plaesant-ideawork.png';
import hamburger from '../assets/hamburger-ideawork.jpg';
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky';
import SimpleSlider from './SimpleSlider';
import ReactBemGrid from './React-bem-grid';

class App extends Component {
  render() {
    return ( 
      <StickyContainer className="App">

        <Sticky className="mysticky">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
           <div className="App-header-menu">
           <ul className="Hamburger-list">
             <li className="List-item-phone">212.555.5555</li>
             <li className="List-item-login">LOGIN</li>
             <li className="List-item-hamburger"><img src={hamburger} className="App-menu" alt="hamburger" /></li>
          </ul>
          </div>
        </Sticky>

            <SimpleSlider />
            <ReactBemGrid />

            <div className='footer'>&copy; 2017 &mdash; SPARTA PLAESENT - instagram - facebook - twitter</div>
    
      </StickyContainer>


    );
  }
}

export default App;
