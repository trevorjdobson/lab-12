import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

class Yelp extends Component{
    constructor(props){
      super(props);
      this.state={
        
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
            
          <div>Yelp
              <p>Place to Eat</p>
              <p>Rating </p>
          </div>
          
        </Fragment>
      );
    }
    
  }
  
  export default Yelp;