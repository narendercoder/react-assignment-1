
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Property from './pages/Property';

function App() {
  return (
    <div className="App bg-purple-50 min-h-screen w-screen">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/property/:id" element={<Property/>} />  
      </Routes>
    </div>
  );
}

export default App;
