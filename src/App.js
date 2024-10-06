import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
       setAlert({
         msg: message,
         type: type
       })
       setTimeout(() => {
         setAlert(null)
       }, 1500);
  }
  const toggleMode= () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#070f68';
      showAlert('Dark mode enable', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enable','success');
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Install TextUtils';
      // }, 1500);
    }
  }
  const redMode = () => {
      if (mode === 'light'){
        setMode('Danger');
        document.body.style.backgroundColor = 'red';
      showAlert('Red mode enable','danger');
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
      showAlert('Light mode enable','success');
      }
    }
  
  return (
    <>
     {/* <Navbar title="textutils" abouttext="About textutils" mode={mode}/> */}
     {/* <Router> */}
     <Navbar title="textutils" mode={mode} toggleMode={toggleMode} redMode={redMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     {/* <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to anylayze below" mode={mode}/> } />       
      </Routes> */}
     {<TextForm showAlert={showAlert} heading="Enter the text to anylayze below" mode={mode}/>}
     {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
