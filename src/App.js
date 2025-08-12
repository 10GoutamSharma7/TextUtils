import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const togglemode = ()=> {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled","success");
      document.title = "TextUtils - NIGHT mode";
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
      document.title = "TextUtils - DAY mode";
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container mt-5">

        <Routes>
          
          {/* exact usage:-
          /useres       --> component 1
          /users/home   --> component 2
          will create confusion while rendering page */}

           <Route exact path="/about" element={<About mode={mode} />} />
           <Route exact path="/" element={<Textform heading="Enter Your Text" showAlert={showAlert} mode={mode}/>} />
        </Routes>

      </div> 
    </Router>
    </>
  );
}

export default App;
