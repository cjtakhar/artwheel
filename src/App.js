import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
            <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/artwheel" element={<Home />} />
          <Route path="/artwheel/about" element={<About />} />
          <Route path="/artwheel/signup" element={<SignUp />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
