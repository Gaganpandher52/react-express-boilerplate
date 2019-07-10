import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactBnbGallery from 'react-bnb-gallery'
import Gallery from "react-photo-gallery";

// const photos = [{
//   photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
//   caption: "Viñales, Pinar del Río, Cuba",
//   subcaption: "Photo by Simon Matzinger on Unsplash",
//   thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
// }, {
//   photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
//   caption: "La Habana, Cuba",
//   subcaption: "Photo by Gerardo Sanchez on Unsplash",
//   thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
// }, {
//   photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
//   caption: "Woman smoking a tobacco",
//   subcaption: "Photo by Hannah Cauhepe on Unsplash",
//   thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
// }];

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

let photos_new1 = [{
  src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
  width: 4927,
  height: 1000
}]; //empty array of urls
class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   message: 'Click the button to load data!'
    // }
    this.state = { 
      imgs: [] };
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  // componentDidMount() {
  //   axios
  //     .get('https://api.unsplash.com/photos/?client_id=' + '26d750fbc6c381bb4b799351cdf5021c7251dcb04251a4956aa84e50234e8637')
  //     .then(data => {
  //       this.setState({ imgs: data.data });
  //       console.log('seems to work!')
  //     })
  //     .catch(err => {
  //       console.log('Error happened during fetching!', err);
  //     });
  // }

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
