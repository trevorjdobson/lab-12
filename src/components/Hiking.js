import React, { Component, Fragment }from 'react';
import superagent from 'superagent';
import '../App.css';

class Hiking extends Component{
    constructor(props){
      super(props);
      this.state={
        data: ['default']
      }
      
    }
    componentDidMount(){
      console.log(this.props.locationData)
      superagent.get(`${this.props.url}/trails`)
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
        superagent.get(`${this.props.url}/trails`)
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
        <h3>Results from the Hiking Project API</h3>
        <ul className="trails-results">
      
            {this.state.data.map(el=>{
              return (
                <div key={Math.random()}>
                <p>Hike Name: <a href={el.trail_url}>{el.name}</a>, Location: {el.location}, Distance: {el.length} miles</p>
      <p>On {el.condition_date} at {el.condition_time}, trail conditions were reported as: {el.conditions}</p>
      <p>This trail has a rating of {el.stars} stars (out of {el.star_votes} votes)</p>
      <p>{el.summary}</p>
      </div>
              )
            })}
            </ul>
            </section>
        </Fragment>
      );
    }
    
  }
  
  export default Hiking;