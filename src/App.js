import './App.css'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from './Pages/Home';
import About from './Pages/About';
import WorkX from './Pages/WorkX';
import Contact from './Pages/Contact';

function App() {
  const longText = 'heheheheheehhehehehehehehehehehhehehehehehehehehheheh'
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} text={longText} maxLength={100} />
        <Route path='/workX' element={<WorkX/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
      <Footer/>

    </div>
  );
}

export default App;
