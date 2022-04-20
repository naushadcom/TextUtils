// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


// let name="Naushad"
function App() {
  const [mode,setMode]=useState("light") //Weather dark mode is anable or not

  const [alert, setAlart] = useState(null);
  const showAlert=(message,type)=>{
    setAlart({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlart(null)
    },1500)
  }
  
  const toggleMode =()=>{ 
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#093b79'
      showAlert("Dark mode has been enabled ", "success  ")
      document.title="TextUtils - Dark mode"
      setInterval(()=>{
        document.title="TextUtils - is amazing "
      },2000)
      setInterval(()=>{
        document.title="Install TextUtils now"
      },1500)
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success  ")
      document.title="TextUtils - Light mode"
    }
    
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* <Routes>
            <Route path="/" >
              <Route path="about" element={<About/>} />
              <Route path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text analyse below" mode={mode}/>} />
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert}  heading="Enter the text analyse below" mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;



{/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}



// <div classNameName="blank">Lovely</div>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         </nav>
//         <div classNameName="container">
//         <h1>Hello {name}</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus doloribus incidunt illum sequi quo. Facere, labore? Reprehenderit similique consequatur eum rerum ipsam recusandae, totam, officia pariatur, consequuntur mollitia numquam iure accusamus. Nulla, inventore?</p>
//         </div>








{/* <h1>fkusdhbkf</h1>
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Naushad
        </a>
      </header>
    </div> */}

