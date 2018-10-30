import React, { Component } from 'react';
import './App.css';
import Header from './Page/Header';
import Body from './Page/Body';
import Footer from './Page/Footer';
import Data from './data.json';
export default class App extends Component {
  constructor(){
    super() 
      this.state = {
        data: Data.classes
      }
    
  }
  remove = (data) =>{
    this.setState({data : data})
  }
  render() {
    const {data} = {...this.state}
    return (
      <React.Fragment >
       <Header />
       <Body classes={data} remove={this.remove} />
       <Footer />
      </React.Fragment>
    );
  }
}


