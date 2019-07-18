import React, { Component, Fragment }from 'react';

import Weather from './Weather.js';
import Yelp from './Yelp.js';
import Movies from './Movies.js';
import Events from './Events.js';
import Hiking from './Hiking.js';

class Content extends Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
    componentDidMount(){
      this.setState(this.props.locationData)
    }
    componentDidUpdate(prevProps){
      if(this.props.locationData !== prevProps.locationData){
        console.log('your props are changing go get new data', this.props.locationData)
        this.setState(this.props.locationData)
      }
    }
    
  
    render(){
      return (
        <Fragment>
            
          <Weather  url={this.props.url} locationData={this.state}/>
          <Yelp url={this.props.url} locationData={this.state}/>
          <Events url={this.props.url} locationData={this.state}/>
          <Movies url={this.props.url} locationData={this.state}/>
          <Hiking url={this.props.url} locationData={this.state}/>
        </Fragment>
      );
    }
    
  }
  
  export default Content;