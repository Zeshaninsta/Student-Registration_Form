import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage/Page';
import Form from './Components/FormSteps/Form';
import DisplayData from './Components/DisplayData/DisplayData';
import './App.css'
import Navgation from './Components/Navigation'
function App() {
  return (
      <div className="min-h-screen p-2 bg-gray-50">
        <Navgation />
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Form />} />
          <Route path="/students" element={<DisplayData />} />
    </Routes>
      </div>
  );
}

export default App;
