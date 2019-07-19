import React, { Component, Fragment }from 'react';

import superagent from 'superagent';
import '../App.css';


class Weather extends Component{
    constructor(props){
      super(props);
      this.state={
        data: [
          {
            "forecast": "Partly cloudy until afternoon.",
            "time": "Mon Jan 01 2001"
          },
          {
            "forecast": "Mostly cloudy in the morning.",
            "time": "Tue Jan 02 2001"
          },
        ]
      }
      
    }
  componentDidMount(){
    console.log(this.props.locationData)
    superagent.get(`${this.props.url}/weather`)
    .query({data: this.props.locationData})
    .then(results =>{
      console.log(results.body);
      this.setState({data: results.body})
    })
  }
  componentDidUpdate(prevProps){
    console.log(this.props.locationData)
    console.log('weather is changing')
    if(this.props.locationData !== prevProps.locationData){
      superagent.get(`${this.props.url}/weather`)
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
            
          <section>
        <h3>Results from the Dark Sky API</h3>
        <ul class="weather-results">
            {this.state.data.map((el,i)=>{
              return (
                
                    <li key={i}>The forecast for {el.time} is: {el.forecast}</li>
                  
              )
            })}
            </ul>
          </section>
              
          
        </Fragment>
      );
    }
    
  }
  
  export default Weather;