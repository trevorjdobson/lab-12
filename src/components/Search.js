import React, { Component, Fragment }from 'react';


class Search extends Component{
    constructor(props){
      super(props);
      this.state={
        input: ''
      }
      
    }
  
    handleInput = (e)=>{
      console.log(e.target.value)
      this.setState({input: e.target.value})
      
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.locationSubmit(this.state.input);
    }
  
    render(){
      return (
        <Fragment>
          <p>Search For Location</p>
          <input onChange={this.handleInput}></input>
          <button onClick={this.handleSubmit}>Explore</button>
        </Fragment>
      );
    }
    
  }
  
  export default Search;