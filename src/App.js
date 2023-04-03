// import Form from './components/Form';
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Test from "./components/Test";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Countries />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
