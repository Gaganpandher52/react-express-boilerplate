import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'
import Gallery from "react-photo-gallery";

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

const photos_new = [
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    width: 4927,
    height: 1000
  }
];

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   message: 'Click the button to load data!'
    // }
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  // componentDidMount() {
  //   axios
  //     .get('https://api.unsplash.com/photos/?client_id=' + '26d750fbc6c381bb4b799351cdf5021c7251dcb04251a4956aa84e50234e8637')
  //     .then(data => {
  //       this.setState({ imgs: data.data });
  //     })
  //     .catch(err => {
  //       console.log('Error happened during fetching!', err);
  //     });
  // }

  fetchData = () => {
    axios.get('https://api.unsplash.com/photos/?client_id=' + '26d750fbc6c381bb4b799351cdf5021c7251dcb04251a4956aa84e50234e8637') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
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
      <Gallery photos ={photos_new}/>
      <ReactBnbGallery
      show={this.state.galleryOpened}
      photos={photos}
      onClose={this.toggleGallery} />
      </div>
    );
  }
  
}

export default App;
