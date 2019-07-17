import React, { Component, Fragment }from 'react';




class Landing extends Component{
  constructor(props){
    super(props);
    this.state={
      input: ''
    }

  }
  formSubmit = ()=>{
    console.log('this is my state',this.state.input);
    this.props.handleSubmit(this.state.input);
  }
  updateInput = (e)=>{
    console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  render(){
    return (
      <Fragment>
        <p>Enter the URL to your deployed back end, making sure to remove the trailing forward slash</p>
        <input onChange={this.updateInput}></input>
        <button onClick={this.formSubmit}>Click Me</button>
      </Fragment>
    );
  }
  
}

export default Landing;