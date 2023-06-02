// import Form from './components/Form';
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Test from "./components/Test";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Africa } from "./components/List/Africa";
import { Europe } from "./components/List/Europe";
import { Asia } from "./components/List/Asia";
import { Northamerica } from "./components/List/Northamerica";
import { Southamerica } from "./components/List/Southamerica";
import { Antarctica } from "./components/List/Antarctica";
import { Austrailia } from "./components/List/Austrailia";
import { Search } from "./components/Search";
import { Learnmore } from "./components/List/Learnmore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route exact path="/africa" element={<Africa/>} />
          <Route exact path="/europe" element={<Europe/>} />
          <Route exact path="/Asia" element={<Asia/>} />
          <Route exact path="/Namerica" element={<Northamerica/>} />
          <Route exact path="/Samerica" element={<Southamerica/>} />
          <Route exact path="/antarctica" element={<Antarctica/>} />
          <Route exact path="/austrailia" element={<Austrailia/>} />
          <Route exact path="/search" element={<Search/>} />
        <Route exact path="/:id" element={<Learnmore/>}/>
          
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
