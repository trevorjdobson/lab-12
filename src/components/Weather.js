import React, { Component, Fragment }from 'react';


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
  
    
  
    render(){
      return (
        <Fragment>
            
          <div>Weather
          <p>Last updated 35 minutes ago</p>
            {this.state.data.map((el,i)=>{
              return (
                
                  <div className="forecast-box" key={i}>
                    <h3>Forcast </h3>
                    <p>{el.time}</p>
                    <p>{el.forecast}</p>
                  </div>
              )
            })}
          
              
          </div>
          
        </Fragment>
      );
    }
    
  }
  
  export default Weather;