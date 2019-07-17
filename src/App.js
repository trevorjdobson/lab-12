import React, { Component, Fragment }from 'react';
import './App.css';

import Header from './components/Header.js';
import Landing from './components/Landing.js';
import Results from './components/Results.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      view: 'landing',
      url: ''

    }

  }
  toggleView = (url) => {
    console.log('app clickity');
    this.setState({view: 'results',url: url})
  }

  render(){
        if(this.state.view==='landing'){
          return (
            <Fragment>
              <Header/>
              <Landing handleSubmit={this.toggleView}/>
            </Fragment>
          )
        }else{
          return (
            <Fragment>
              <Header/>
              <Results url={this.state.url}/>
            </Fragment>
          )
        }
      
  }
  
}

export default App;
