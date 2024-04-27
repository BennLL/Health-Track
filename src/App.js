import './App.css';
import HomePage from './component/homePage';
import Login from './component/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login></Login>}></Route>
          <Route exact path = '/homePage' element = {<HomePage></HomePage>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
