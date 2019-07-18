import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

class Movies extends Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
    componentDidMount(){
      console.log(this.props.locationData)
      superagent.get(`${this.props.url}/movies`)
      .query({data: this.props.locationData})
      .then(results =>{
        console.log(results.body);
        this.setState({data: results.body})
      })
    }
    componentDidUpdate(prevProps){
      console.log(this.props.locationData)
      console.log('movies is changing')
      console.log(this.props.url)
      if(this.props.locationData !== prevProps.locationData){
        superagent.get(`${this.props.url}/movies`)
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
            
          <div>Movies
              <p>Release</p>
              <h3>Title</h3>
          </div>
          
        </Fragment>
      );
    }
    
  }
  
  export default Movies;