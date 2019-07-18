import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

class Events extends Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
    componentDidMount(){
      console.log(this.props.locationData)
      superagent.get(`${this.props.url}/events`)
      .query({data: this.props.locationData})
      .then(results =>{
        console.log(results.body);
        this.setState({data: results.body})
      })
    }
    componentDidUpdate(prevProps){
      console.log(this.props.locationData)
      console.log('events is changing')
      if(this.props.locationData !== prevProps.locationData){
        superagent.get(`${this.props.url}/events`)
        .query({data: this.props.locationData})
      .then(results =>{
        console.log(results.body);
        this.setState({data: results.body})
      })
      }
    }
    
  
    render(){
      return (
        <Fragment>
            
          <div>Events
              <p>Name Of Event</p>
              <h3>Location</h3>
          </div>
          
        </Fragment>
      );
    }
    
  }
  
  export default Events;