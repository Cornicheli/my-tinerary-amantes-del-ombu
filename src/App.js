
import './App.css';
import React from 'react';
import Slider from './componentes/Slider/Slider';
import EventsCarousel from './data/dataCities.js';
import {Footer} from './componentes/Footer';
import {FooterToTop} from './componentes/Arrow';

function App() {

  return (
       <>
    <EventsCarousel/>
    {<Footer/>}
    {<FooterToTop/>}
    </>
  );
}
export default App;