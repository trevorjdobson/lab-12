// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       lat: 59.95,
//       lng: 30.33
//     }
//   }
//   componentDidUpdate(prevProps){
//     if(this.props.data !== prevProps.data){
//       console.log('set new state', this.props.data)
//       let newState ={lat:this.props.data.latitude, lng:this.props.longitude}
//       this.setState(newState)
//     }
//   }
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ 
//             key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
//             latitude: this.state.lat,
//             longitude: this.state.lng
//           }}
//           defaultCenter={{
//             lat: 59.95,
//             lng: 30.33
//           }}
//           defaultZoom={11}
          
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;