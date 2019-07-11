import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'
import Gallery from "react-photo-gallery";
// import config from '../config/environment';
const API_KEY =`${process.env.API_KEY}`
const api_key = process.env.API_KEY;
console.log(process.env.API_KEY)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      imgs: [] };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  fetchData = () => {
    console.log(this.imgs);
    axios.get('https://api.unsplash.com/photos/?client_id=' + api_key)
    .then((response) => {

      let images = [];//empty array of images

      for(let urls in response.data){
        images.push({'src':response.data[urls].urls.raw, 'width':200, 'height':150})
      }
        this.setState({
          imgs: images
      });
    }) 
  }
  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <div>
        {/* <button onClick={this.toggleGallery}>Open photo gallery</button> */}
        <button className = 'fetch-btn' onClick={this.fetchData}>
           Fetch Images
        </button>
        <Gallery photos ={this.state.imgs}/>
      </div>
    );
  }
}

export default App;
