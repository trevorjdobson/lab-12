import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

import Search from './Search.js'
import Content from './Content.js';
import Map from './Map.js'


class Results extends Component{
  constructor(props){
    super(props);
    this.state={
      id:1,
      search_query:'',
      formatted_query:'',
      latitude:'',
      longitude:'',
      created_at:null
    }
    
  }

  
  handleSubmit = (location) =>{
    console.log('going to get data for', location);
    superagent.get(`${this.props.url}/location?data=${location}`)
      .then(results =>{
        console.log(results.body)
        this.setState(results.body)

      })
  }

  render(){
    if(this.state.search_query === ''){
      return (
        <Fragment>
          <Search locationSubmit={this.handleSubmit}/>
        </Fragment>
      );
    }else{
      return (
        <Fragment>
          <Search locationSubmit={this.handleSubmit}/>
          <p>{this.state.location}</p>
          <Map locationData={this.state}/>
          <Content url={this.props.url} locationData={this.state}/>
        </Fragment>
      );
    }
    
  }
  
}

export default Results;