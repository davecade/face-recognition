import React, { useState } from 'react'
import './App.scss';
import Navigation from './components/Navigation/Navigation.component'
import Logo from './components/Logo/Logo.component'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.component'
import Rank from './components/Rank/Rank.component'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density:  {
        enable: true,
        value_area: 800
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: '0a0461ea46f64dca854a666d16349850'
 });


const App = () => {
  const [ input, setInput ] = useState('')


  const onInputChange = event => {
    setInput(event.target.value)
  }
//https://samples.clarifai.com/face-det.jpg
  const onButtonSubmit = async (e) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg")
    .then( resp => console.log(resp))
  }

  return (
    <div className="App">
      <Particles 
            params={particlesOptions}
            className="particles"
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <div>{input}</div>
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
