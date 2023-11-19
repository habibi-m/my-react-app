import Sidebar from "./Components/Sidebar/Sidebar";
import logo from './logo.svg';
import './App.css';


const App = () => {
    
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Sidebar />
      </header>
    </div>
    </>
  )
}

export default App
