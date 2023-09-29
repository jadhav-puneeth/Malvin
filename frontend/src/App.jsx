import './App.css';
import Homepage from './Component/Homepage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Component/About';
import Upload from './Component/Upload';


function App() {
  return (
    <div className='container'> 
    <Router>
      <Routes>
        <Route path='/' element={<><Homepage/></>}/>
        <Route path='/about' element={<><About/></>}/>
        <Route path='/upload' element={<><Upload/></>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
