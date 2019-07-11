import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'
import Gallery from "react-photo-gallery";

console.log(process.env)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      imgs: [] };
    
  }

  fetchData = () => {
    console.log(this.imgs);
    axios.get('https://api.unsplash.com/photos/?client_id=' + process.env.REACT_APP_API_KEY)
    .then((response) => {

      let images = [];//empty array of images

      for(let urls in response.data){
        images.push({'src':response.data[urls].urls.raw, 'width':200, 'height':150})
      }
      console.log(images)
        this.setState({
          imgs: images
      });
    }) 
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
