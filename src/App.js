import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Watches from './watches/Watches';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/watches" element={<Watches />} />
      </Routes>
    </Router>
  );
}

export default App;
