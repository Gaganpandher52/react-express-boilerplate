import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'
import Gallery from "react-photo-gallery";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      imgs: [] };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  fetchData = () => {
    console.log(this.imgs);
    axios.get('https://api.unsplash.com/photos/?client_id=' + '26d750fbc6c381bb4b799351cdf5021c7251dcb04251a4956aa84e50234e8637') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      // for(let urls in response.data)
      let new_urls = [];
      for(let urls in response.data){
        new_urls.push({'src':response.data[urls].urls.raw, 'width':200, 'height':300})
        //console.log(response.data[urls].urls.raw) // The entire response from the Rails API
        
      }
      // console.log(photos_new1);
      console.log(new_urls);
      console.log(response.data.message) // Just the message
        this.setState({
          imgs: new_urls
      });
    }) 
  }
  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>{ this.state.message }</h1>
  //       <button onClick={this.fetchData} >
  //         Fetch Data
  //       </button>        
  //     </div>
  //   );
  // }
  render () {
    return (
      <div>
      <button onClick={this.toggleGallery}>Open photo gallery</button>
      <button onClick={this.fetchData} >
           Fetch Data
      </button>
      <Gallery photos ={this.state.imgs}/>
      </div>
    );
  }
  
}

export default App;
