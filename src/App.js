import React, { useState } from 'react'
import './App.scss';
import Navigation from './components/Navigation/Navigation.component'
import Logo from './components/Logo/Logo.component'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.component'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Rank from './components/Rank/Rank.component'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


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
  const [ imageUrl, setImageUrl ] = useState('')
  const [ box, setBox ] = useState({})
  const [ route, setRoute ] = useState('signin')
  const [ isSignedIn, setIsSinedIn ] = useState(false)
  const [ user, setUser ] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: ''
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }


  const onInputChange = event => {
    setInput(event.target.value)
  }

  //https://samples.clarifai.com/face-det.jpg
  const onButtonSubmit = async (e) => {
    setImageUrl(input)
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
    .then( resp => {

        if(resp) {
          fetch('http://localhost:4000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: user.id
            })
          }).then(resp => resp.json())
          .then(count => {
            setUser({
              ...user,
              entries: count
            })
          })
        }

      let boundingBox = resp.outputs[0].data.regions[0].region_info.bounding_box
      setBox(boundingBox)
    })
  }

  const onRouteChange = (event) => {
    if(event === 'signout'){
      setIsSinedIn(false)
    } else if (event === 'home') {
      setIsSinedIn(true)
    }

    setRoute(event)
  }

  return (
    <div className="App">
      <Particles 
            params={particlesOptions}
            className="particles"
      />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === 'home' ? 
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
        : (
          route === 'signin' | route ==='signout' ?
          <SignIn onRouteChange={onRouteChange} loadUser={loadUser} />
          :
          <Register onRouteChange={onRouteChange} loadUser={loadUser} />
        )
      }
    </div>
  );
}

export default App;
