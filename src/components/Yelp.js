import React, { Component, Fragment }from 'react';
import superagent from 'superagent';
import '../App.css';

class Yelp extends Component{
    constructor(props){
      super(props);
      this.state={
        data: ['default']
      }
      
    }
    componentDidMount(){
      console.log(this.props.locationData)
      superagent.get(`${this.props.url}/yelp`)
      .query({data: this.props.locationData})
      .then(results =>{
        console.log(results.body);
        this.setState({data: results.body})
      })
    }
    componentDidUpdate(prevProps){
      console.log(this.props.locationData)
      console.log('yelp is changing')
      if(this.props.locationData !== prevProps.locationData){
        superagent.get(`${this.props.url}/yelp`)
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
            <section className="yelp-container">
        <h3>Results from the Yelp API</h3>
        <ul className="yelp-results">
        
      
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
  
  export default Yelp;