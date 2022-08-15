
import './App.css';
import Resume from './data/resume.png';
import { Routes ,Route, Router, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <div className='ToolBar'>
        <div className = "ToolBarName">
            <h2>
              Kevin Chai
            </h2>
        </div>
        <div className = "ToolBarButtons">
          <Link to="/about" className = "ToolBarButtons" style={{ textDecoration: 'none' }}>About</Link>
          <Link to="/resume" className = "ToolBarButtons" style={{ textDecoration: 'none' }}>Resume</Link>
        
        </div>
      </div>

      <div className = "ResumeContainer"> 
        <img src={Resume} className = "Resume"/>
      </div>

      </div>

  
     
  );
}

export default App;
