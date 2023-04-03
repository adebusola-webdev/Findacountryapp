// import Form from './components/Form';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import Test from './components/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {<Navbar/>}
      
      {<Countries/>}
      {/* {<Test/>} */}
    </div>
   
  );
}

export default App;
