// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name="<h1>keya</h1>"
function App() {
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
  
<Navbar title="TextUtils"/>
<div className="container my-3">
<TextForm heading="Enter Text to analyze"/>
{/* <About/> */}
</div>
    </>
    
  );
}

export default App;
