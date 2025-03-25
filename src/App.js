import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from './pages/Home.jsx';
import  AboutAccount  from './pages/AboutAccount.jsx';
import  EditAccount  from './pages/EditAccount.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutAccount/:id" element={<AboutAccount />} />
          <Route path="/AboutAccount/:id/EditAccount" element={<EditAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;