import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
  photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
  caption: "Viñales, Pinar del Río, Cuba",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
}, {
  photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
  caption: "La Habana, Cuba",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
}, {
  photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
  caption: "Woman smoking a tobacco",
  subcaption: "Photo by Hannah Cauhepe on Unsplash",
  thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
}];

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   message: 'Click the button to load data!'
    // }
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }
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
      <ReactBnbGallery
      show={this.state.galleryOpened}
      photos={photos}
      onClose={this.toggleGallery} />
      </div>
    );
  }
  
}

export default App;
