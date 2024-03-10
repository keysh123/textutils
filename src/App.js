// import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// let name="<h1>keya</h1>"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message,type)=> {
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>setalert(null),3000);
  }
  const changemode = () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#212530';
      showalert("dark mode enbled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enbled","success");
    }
  }
  
  return (
    // <>
    // <h1>Holla!!</h1>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Keya
    //     </a>
    //   </header>
    // </div>
    // </>
    // <>
    // <nav>
    //   <li>Home</li>
    //   <li>switch</li>
    //   <li>Contact</li>
    //   <li>About</li>
    // </nav>
    // <div>
    //   hello {name}
    // </div>
    // </>
    <>
  <BrowserRouter>
<Navbar title="TextUtils" mode={mode} togglemode={changemode} showalert={showalert} setmode={setmode}/>

<Alert alert={alert}/>
<div className="container my-3">
  
          <Routes>
          <Route path="/about"
           element={ <About /> }>
          </Route>
          
          <Route path="/" element={
          <TextForm heading="Enter Text to analyze" mode={mode} alert={showalert} /> }>
          </Route>
        </Routes>
        </div>
        </BrowserRouter>


    </>
    
  );
}

export default App;
