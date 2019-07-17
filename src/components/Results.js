import React, { Component, Fragment }from 'react';


import Search from './Search.js'
import Content from './Content.js';
import Map from './Map.js'


class Results extends Component{
  constructor(props){
    super(props);
    this.state={
      location: ''
    }
    
  }

  
  handleSubmit = (location) =>{
    console.log('going to get data for', location);
    this.setState({location: location})
  }

  render(){
    if(this.state.location === ''){
      return (
        <Fragment>
          <Search locationSubmit={this.handleSubmit}/>
        </Fragment>
      );
    }else{
      return (
        <Fragment>
          <Search locationSubmit={this.handleSubmit}/>
          <p>{this.state.location}</p>
          <Map/>
          <Content/>
        </Fragment>
      );
    }
    
  }
  
}

export default Results;