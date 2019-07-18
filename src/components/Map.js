import React, { Component, Fragment }from 'react';
import superagent from 'superagent';
import SimpleMap from './GoogleMap';



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
          <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.state.formatted_query}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de">Pureblack.de - Webseite erstellen lassen</a></div></div>
          {/* <SimpleMap data={this.state}/> */}
        </Fragment>
      );
    }
    
  }
  
  export default Map;