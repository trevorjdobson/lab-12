import React, { Component, Fragment }from 'react';
import superagent from 'superagent';
import '../App.css';

class Events extends Component{
    constructor(props){
      super(props);
      this.state={
        data: ['default']
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
            <section>
        <h3>Results from the Eventbrite API</h3>
        <ul className="events-results">
      
            {this.state.data.map(el=>{
             return (
              <li key={Math.random()}>
              <a href={el.url}>{el.name}</a>
      <p>The average rating is {el.rating} out of 5 and the average cost is {el.price} out of 4</p>
      <img src={el.image_url}></img>
              </li>
             )
           })} 
            </ul>
          </section>
        </Fragment>
      );
    }
    
  }
  
  export default Events;