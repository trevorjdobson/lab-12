import React, { Component, Fragment }from 'react';
import superagent from 'superagent';
import SimpleMap from './GoogleMap';
import '../App.css';



class Map extends Component{
    constructor(props){
      super(props);
      this.state={
        
      }
      
    }
    componentDidMount(){
      this.setState(this.props.locationData)
      console.log('go and get a map for',this.props.locationData)
    }
    componentDidUpdate(prevProps){
      if(this.props.locationData !== prevProps.locationData){
        console.log('your props are changing, go and get a new map', this.props.locationData)
        this.setState(this.props.locationData)
      }
    }
    
  
    render(){
      return (
        <Fragment>
          <div id="map" className="hide" src="" alt="Map of search query" className="mapouter"><div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.state.formatted_query}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://www.pureblack.de"></a></div></div>
          {/* <SimpleMap data={this.state}/> */}
        </Fragment>
      );
    }
    
  }
  
  export default Map;