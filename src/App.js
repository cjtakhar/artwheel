import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/artwheel" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
