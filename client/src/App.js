import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Slider from './Components/Slider';
import { Overview } from './Components/MPdata';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slider/>
    <Overview/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
