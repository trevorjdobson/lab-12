import React, { Component, Fragment }from 'react';
import '../App.css';


class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
      urlInput: '',
      cityInput: ''
    }

  }
  formSubmit = ()=>{
    this.props.handleSubmit(this.state.urlInput);
  }
  updateUrlInput = (e)=>{
    this.setState({urlInput: e.target.value,cityInput: this.state.cityInput})
  }
  handleCityInput = (e)=>{
    this.setState({cityInput: e.target.value,urlInput: this.state.urlInput})
  }

  render(){
    return (
      <Fragment>
        <p>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</p>
        <input onChange={this.updateUrlInput}></input>
        <button onClick={this.formSubmit}>Click Me</button>
      </Fragment>
    );
  }
  
}

export default Landing;