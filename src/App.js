import './App.css';
import About from './Components/About';
import AboutUs from './Components/AboutUs';
import Days from './Components/Days';
import FirstSection from './Components/FirstSection';
import Gdsc from './Components/Gdsc';
import LastSection from './Components/LastSection';
import Speakers from './Components/Speakers';
function App() {
  return (
    <div >
      
      <FirstSection/>
        <div className='parallax flex justify-center text-gray-200 h-20'>
        </div>
      <AboutUs />
      <About/>
      <Speakers />
      <Gdsc />
      <Days />
      <LastSection />
    </div>
  );
}

export default App;






















/*import './App.css';
import About from './Components/About';
import Days from './Components/Days';
import FirstSection from './Components/FirstSection';
import Gdsc from './Components/Gdsc';
import LastSection from './Components/LastSection';
import Speakers from './Components/Speakers';

function App() {
  return (
    <div >
      <FirstSection />
      <About />
      <Speakers />
      <Gdsc />
      <Days />
      <LastSection />
    </div>
  );
}

export default App; */
