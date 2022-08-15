
import './App.css';
import img from './data/me.png';
import Resume from './Resume.js';
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
      <div className = "About"> 

        <div className = "Me">
          <img src={img} className = "Portrait"/>
            <h3 className = "Email">
              kevinchai218@gmail.com
            </h3>
        </div>

       <div className = "All-Text-Container">
     
        <div className = "All-Text">
      
            <h2 ClassName = "Intro">
              Intro
            </h2>
    

          
          <div className = "Text1">
            I'm a first-generation college graduate from UC Berkeley where I studied Computer Science! 
            I'm passionate about community building, education, and tech for social good. 
            Currently, I'm based in San Francisco, CA working as a Software Engineer at Nextdoor.     
          </div>

          <div className = "Text2">
            I'm extremely grateful for the opportunities I've had in my life and always on the lookout to give back! 
            If there's anything I can do to help, <span style={{fontWeight: 'bold'}}> especially if you're a first-generation student</span>, feel free to reach out. 
          </div>

          <div ClassName = "Hobbies">
            <h2>
              Hobbies
            </h2>

          <div className = "Text2">
            One of my favorite things to do is hanging out with my friends. I love exploring new restaurants, bars, and cities/countries! 
            Right now, some of the places I want to travel to include <span style={{fontWeight: 'bold'}}> Seattle, New York, and Korea</span>.
            While I studied at Berkeley, my favorite restaurants were <span style={{fontWeight: 'bold'}}> Sliver, Thai Basil, and Cafe Mezzo</span>.
          </div>

          <div className = "Text2">
            In addition to spending time with my friends, I love playing video games. 
            My biggest gaming accomplishment was hitting <span style={{fontWeight: 'bold'}}>Diamond </span> in <span style={{fontWeight: 'bold'}}>League of Legends </span> during Season 4. 
            Currently, I'm playing <span style={{fontWeight: 'bold'}}> Genshin Impact, Tower of Fantasy, Dota 2, and Valorant </span>.
          </div>

          <div className = "Text2">
            I also love listening to music and discovering new songs/artists. You can view my Spotify profile <a href = "https://open.spotify.com/user/126274397?si=e998d54eebd341b7" target="_blank"> here</a>. 
          </div>



    
            </div>
          </div>
        </div>
      </div>


      </div>
     
     
   

     
  );
}

export default App;
