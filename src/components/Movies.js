import React, { Component, Fragment }from 'react';
import superagent from 'superagent';

class Movies extends Component{
    constructor(props){
      super(props);
      this.state={
        data: ['default']
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
           {this.state.data.map(el=>{
             return (
              <div key={Math.random()}>
              <p><span>{el.title}</span> was relased on {el.released_on}. Out of {el.total_votes} total votes, {el.title} has an average vote of {el.average_votes} and a popularity score of {el.popularity}.</p>
              <img src={el.image_url}/>
              <p>{el.overview}</p>
              </div>
             )
           })} 
          
        </Fragment>
      );
    }
    
  }
  
  export default Movies;