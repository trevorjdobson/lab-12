import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

class Hiking extends Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
  
    
  
    render(){
      return (
        <Fragment>
            
          <div>Hiking
              <p>Last updated 35 minutes ago</p>
              <h3>Trail Name</h3>
          </div>
          
        </Fragment>
      );
    }
    
  }
  
  export default Hiking;