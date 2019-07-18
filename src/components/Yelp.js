import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

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
            
            {this.state.data.map(el=>{
             return (
              <div key={Math.random()}>
              <a href={el.url}>{el.name}</a>
      <p>The average rating is {el.rating} out of 5 and the average cost is {el.price} out of 4</p>
      <img src={el.image_url}></img>
              </div>
             )
           })} 
          
        </Fragment>
      );
    }
    
  }
  
  export default Yelp;