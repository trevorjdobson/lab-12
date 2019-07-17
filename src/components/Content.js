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
  
    
  
    render(){
      return (
        <Fragment>
            
          <Weather/>
          <Yelp/>
          <Events/>
          <Movies/>
          <Hiking/>
        </Fragment>
      );
    }
    
  }
  
  export default Content;