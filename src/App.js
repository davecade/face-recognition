import './App.scss';
import Navigation from './components/Navigation/Navigation.component'
import Logo from './components/Logo/Logo.component'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.component'
import Rank from './components/Rank/Rank.component'
import Particles from 'react-particles-js';

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

function App() {
  return (
    <div className="App">
      <Particles 
            params={particlesOptions}
            className="particles"
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
