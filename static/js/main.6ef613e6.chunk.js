(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(30)},19:function(t,e,a){},26:function(t,e){},30:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(11),r=a.n(l),c=(a(19),a(1)),i=a(2),s=a(4),u=a(3),p=a(5),h=(a(7),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={view:"landing"},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("h1",null,"City Explorer"),o.a.createElement("p",null,"Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!"))}}]),e}(n.Component)),m=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).formSubmit=function(){a.props.handleSubmit(a.state.urlInput)},a.updateUrlInput=function(t){a.setState({urlInput:t.target.value,cityInput:a.state.cityInput})},a.handleCityInput=function(t){a.setState({cityInput:t.target.value,urlInput:a.state.urlInput})},a.state={urlInput:"",cityInput:""},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("p",null,"Enter the URL to your deployed back end, making sure to remove the trailing forward slash"),o.a.createElement("input",{onChange:this.updateUrlInput}),o.a.createElement("button",{onClick:this.formSubmit},"Click Me"))}}]),e}(n.Component),d=a(6),g=a.n(d),f=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleInput=function(t){a.setState({input:t.target.value})},a.handleSubmit=function(t){t.preventDefault(),a.props.locationSubmit(a.state.input),a.setState({input:""})},a.state={input:""},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("p",null,"Search For Location"),o.a.createElement("input",{onChange:this.handleInput,value:this.state.input}),o.a.createElement("button",{onClick:this.handleSubmit},"Explore"))}}]),e}(n.Component),b=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:[{forecast:"Partly cloudy until afternoon.",time:"Mon Jan 01 2001"},{forecast:"Mostly cloudy in the morning.",time:"Tue Jan 02 2001"}]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.locationData),g.a.get("".concat(this.props.url,"/weather")).query({data:this.props.locationData}).then(function(e){console.log(e.body),t.setState({data:e.body})})}},{key:"componentDidUpdate",value:function(t){var e=this;console.log(this.props.locationData),console.log("weather is changing"),this.props.locationData!==t.locationData&&g.a.get("".concat(this.props.url,"/weather")).query({data:this.props.locationData}).then(function(t){console.log(t.body),e.setState({data:t.body})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",null,o.a.createElement("h3",null,"Results from the Dark Sky API"),o.a.createElement("ul",{class:"weather-results"},this.state.data.map(function(t,e){return o.a.createElement("li",{key:e},"The forecast for ",t.time," is: ",t.forecast)}))))}}]),e}(n.Component),v=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:["default"]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.locationData),g.a.get("".concat(this.props.url,"/yelp")).query({data:this.props.locationData}).then(function(e){console.log(e.body),t.setState({data:e.body})})}},{key:"componentDidUpdate",value:function(t){var e=this;console.log(this.props.locationData),console.log("yelp is changing"),this.props.locationData!==t.locationData&&g.a.get("".concat(this.props.url,"/yelp")).query({data:this.props.locationData}).then(function(t){console.log(t.body),e.setState({data:t.body})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",{className:"yelp-container"},o.a.createElement("h3",null,"Results from the Yelp API"),o.a.createElement("ul",{className:"yelp-results"},this.state.data.map(function(t){return o.a.createElement("li",{key:Math.random()},o.a.createElement("a",{href:t.url},t.name),o.a.createElement("p",null,"The average rating is ",t.rating," out of 5 and the average cost is ",t.price," out of 4"),o.a.createElement("img",{src:t.image_url}))}))))}}]),e}(n.Component),y=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:["default"]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.locationData),g.a.get("".concat(this.props.url,"/movies")).query({data:this.props.locationData}).then(function(e){console.log(e.body),t.setState({data:e.body})})}},{key:"componentDidUpdate",value:function(t){var e=this;console.log(this.props.locationData),console.log("movies is changing"),console.log(this.props.url),this.props.locationData!==t.locationData&&g.a.get("".concat(this.props.url,"/movies")).query({data:this.props.locationData}).then(function(t){console.log(t.body),e.setState({data:t.body})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",{className:"movie-container"},o.a.createElement("h3",null,"Results from The Movie DB API"),o.a.createElement("ul",{className:"movies-results"},this.state.data.map(function(t){return o.a.createElement("li",{key:Math.random()},o.a.createElement("p",null,o.a.createElement("span",null,t.title)," was relased on ",t.released_on,". Out of ",t.total_votes," total votes, ",t.title," has an average vote of ",t.average_votes," and a popularity score of ",t.popularity,"."),o.a.createElement("img",{src:t.image_url}),o.a.createElement("p",null,t.overview))}))))}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:["default"]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.locationData),g.a.get("".concat(this.props.url,"/events")).query({data:this.props.locationData}).then(function(e){console.log(e.body),t.setState({data:e.body})})}},{key:"componentDidUpdate",value:function(t){var e=this;console.log(this.props.locationData),console.log("events is changing"),this.props.locationData!==t.locationData&&g.a.get("".concat(this.props.url,"/events")).query({data:this.props.locationData}).then(function(t){console.log(t.body),e.setState({data:t.body})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",null,o.a.createElement("h3",null,"Results from the Eventbrite API"),o.a.createElement("ul",{className:"events-results"},this.state.data.map(function(t){return o.a.createElement("li",{key:Math.random()},o.a.createElement("a",{href:t.url},t.name),o.a.createElement("p",null,"The average rating is ",t.rating," out of 5 and the average cost is ",t.price," out of 4"),o.a.createElement("img",{src:t.image_url}))}))))}}]),e}(n.Component),D=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={data:["default"]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;console.log(this.props.locationData),g.a.get("".concat(this.props.url,"/trails")).query({data:this.props.locationData}).then(function(e){console.log(e.body),t.setState({data:e.body})})}},{key:"componentDidUpdate",value:function(t){var e=this;console.log(this.props.locationData),console.log("yelp is changing"),this.props.locationData!==t.locationData&&g.a.get("".concat(this.props.url,"/trails")).query({data:this.props.locationData}).then(function(t){console.log(t.body),e.setState({data:t.body})})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("section",null,o.a.createElement("h3",null,"Results from the Hiking Project API"),o.a.createElement("ul",{className:"trails-results"},this.state.data.map(function(t){return o.a.createElement("div",{key:Math.random()},o.a.createElement("p",null,"Hike Name: ",o.a.createElement("a",{href:t.trail_url},t.name),", Location: ",t.location,", Distance: ",t.length," miles"),o.a.createElement("p",null,"On ",t.condition_date," at ",t.condition_time,", trail conditions were reported as: ",t.conditions),o.a.createElement("p",null,"This trail has a rating of ",t.stars," stars (out of ",t.star_votes," votes)"),o.a.createElement("p",null,t.summary))}))))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setState(this.props.locationData)}},{key:"componentDidUpdate",value:function(t){this.props.locationData!==t.locationData&&(console.log("your props are changing go get new data",this.props.locationData),this.setState(this.props.locationData))}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"column-container"},o.a.createElement(b,{url:this.props.url,locationData:this.state}),o.a.createElement(v,{url:this.props.url,locationData:this.state}),o.a.createElement(E,{url:this.props.url,locationData:this.state}),o.a.createElement(y,{url:this.props.url,locationData:this.state}),o.a.createElement(D,{url:this.props.url,locationData:this.state})))}}]),e}(n.Component),j=a(12),k=(a(26),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setState(this.props.locationData),console.log("go and get a map for",this.props.locationData)}},{key:"componentDidUpdate",value:function(t){this.props.locationData!==t.locationData&&(console.log("your props are changing, go and get a new map",this.props.locationData),this.setState(this.props.locationData))}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",Object(j.a)({id:"map",className:"hide",src:"",alt:"Map of search query"},"className","mapouter"),o.a.createElement("div",{className:"gmap_canvas"},o.a.createElement("iframe",{width:"600",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q=".concat(this.state.formatted_query,"&t=&z=13&ie=UTF8&iwloc=&output=embed"),frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}),o.a.createElement("a",{href:"https://www.pureblack.de"}))))}}]),e}(n.Component)),w=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).handleSubmit=function(t){console.log("going to get data for",t),g.a.get("".concat(a.props.url,"/location?data=").concat(t)).then(function(t){console.log(t.body),a.setState(t.body)})},a.state={id:1,search_query:"",formatted_query:"",latitude:"",longitude:"",created_at:null},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return""===this.state.search_query?o.a.createElement(n.Fragment,null,o.a.createElement(f,{locationSubmit:this.handleSubmit})):o.a.createElement(n.Fragment,null,o.a.createElement(f,{locationSubmit:this.handleSubmit}),o.a.createElement("p",null,this.state.location),o.a.createElement(k,{locationData:this.state}),o.a.createElement(O,{url:this.props.url,locationData:this.state}))}}]),e}(n.Component),S=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(s.a)(this,Object(u.a)(e).call(this,t))).toggleView=function(t){console.log("app clickity",t),a.setState({view:"results",url:t})},a.state={view:"landing",url:""},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return"landing"===this.state.view?o.a.createElement(n.Fragment,null,o.a.createElement(h,null),o.a.createElement(m,{handleSubmit:this.toggleView})):o.a.createElement(n.Fragment,null,o.a.createElement(h,null),o.a.createElement(w,{url:this.state.url}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(27).config(),r.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.6ef613e6.chunk.js.map