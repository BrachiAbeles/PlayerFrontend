import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MyGroop from './MyGroop';
import MyScore from './MyScore';
import Home from './Home';

function App() {
  return (<>
  <script src="https://unpkg.com/spacingjs" defer></script>
  <Home/>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/myGroop" element={<MyGroop />} />
      <Route path="/api/players" element={<MyScore />} />
    </Routes>
  </>
  );
}

export default App;
