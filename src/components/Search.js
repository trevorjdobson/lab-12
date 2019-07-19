import React, { Component, Fragment }from 'react';
import '../App.css';

class Search extends Component{
    constructor(props){
      super(props);
      this.state={
        input: ''
      }
      
    }
  
    handleInput = (e)=>{
      this.setState({input: e.target.value})
      
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.locationSubmit(this.state.input);
      this.setState({input: ''});
    }
  
    render(){
      return (
        <Fragment>
          <p>Search For Location</p>
          <input onChange={this.handleInput} value={this.state.input}></input>
          <button onClick={this.handleSubmit}>Explore</button>
        </Fragment>
      );
    }
    
  }
  
  export default Search;