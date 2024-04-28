import './App.css';
import HomePage from './component/homePage';
import Login from './component/login';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Login></Login>}/>
          <Route exact path='/homePage' element={<HomePage></HomePage>}/>
        </Routes>
    </div>
  );
}

export default App;
