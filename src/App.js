import { useRef } from 'react';
import './App.css';
import logo from './images/ChiStudios.png';
import topWave from './images/topWave.png';
import bottomWave from './images/bottomWave.png';
import flatTopWave from './images/flatTopWave.png';
import Window from './components/Window.jsx';

function App() {
  const containerRef = useRef(null);

  return (
    <div className='grid'>
      <div className='navbar snap'>
        <img src={logo} className='navTitle'/>
        <div className='navBtns'>
          <a href='#contact'>Home</a>
          <a href='#projects'>Projects</a>
          <a href='#about'>About</a>
        </div>
        <div className='socialBtns'>
            <a href='https://github.com/SpookyCthulhu' target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/michelle-ferris-8790271a6/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className='seperatorLG'></div>
      <div className='snip'>
        <div className='contact snap' id='contact'>
          <div className='landing'>
            <img src={topWave} className='wave topW'/>
            <img src={bottomWave} className='wave bottomW'/>
            <div class='padding'></div>
            <h1 className='landingText name'>Michelle</h1>
            <h1 className='landingText name lastName'>Ferris</h1>
            <h1 className='landingText jobDesc'>Fullstack Developer</h1>
          </div>
        </div>
      </div>
      
      <div className='projects snap page' id='projects'>
        <img src={flatTopWave} className='flatTopWave' />
            <Window style='main abs'>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Application Title</h1>
                  <p>TBD</p>
                </div>
              </div>
            </Window>
            <Window style='mini abs'>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Application Description</h1>
                  <p>Description of project and the workflow used goes here</p>
                </div>
              </div>
            </Window>
      </div>

      <div className='seperator'></div>
      <img src={topWave} className='waveSeperator' />

      <div className='aboutMe snap' id='about'>
        <h1 className='aboutTitle'>About Me</h1>
        <div className='skills'>
          <h2>Attributes</h2>
          <p>Imaginative designer <br/>Computer Scientist <br/>Resourceful problem solver</p>
          <h2>Tech Stack</h2>
          <p>Frontend</p>
          <div className='techstack'>
            <div class="icon-container">
              <i class="fa-brands fa-js"></i>
              <p class="tooltip-text">Javascript</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-react"></i>
              <p class="tooltip-text">React</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-html5"></i>
              <p class="tooltip-text">HTML5</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-css3-alt"></i>
              <p class="tooltip-text">CSS3</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-figma"></i>
              <p class="tooltip-text">Figma</p>
            </div>
          </div>
          <p>Backend</p>
          <div className='techstack'>
            <div class="icon-container">
              <i class="fa-solid fa-database"></i>
              <p class="tooltip-text">MySQL</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-node"></i>
              <p class="tooltip-text">Node.js</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-npm"></i>
              <p class="tooltip-text">NPM</p>
            </div>
          </div>
          <p>Scripting</p>
          <div className='techstack'>
            <div class="icon-container">
              <i class="fa-brands fa-python"></i>
              <p class="tooltip-text">Python</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-js"></i>
              <p class="tooltip-text">Javascript</p>
            </div>
          </div>
          <p>Hosting</p>
          <div className='techstack'>
            <div class="icon-container">
              <i class="fa-brands fa-docker"></i>
              <p class="tooltip-text">Docker</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-git"></i>
              <p class="tooltip-text">Git</p>
            </div>
            <div class="icon-container">
              <i class="fa-brands fa-github"></i>
              <p class="tooltip-text">Github</p>
            </div>
          </div>
        </div>
        <div className='passion'>
          <h2>My Passion</h2>
          <p>I have been building web applications for over a decade. <br/>It has always been a creative outlet for me. <br/>Simulatenously demanding logic and reason, as well as vision and inspriation. <br/> This discipline comes naturally to me, like an artist to a paintbrush. I love to create<br/></p>
        </div>
         <div className='education'>
          <h2>Education</h2>
          <p>University of Maine<br/>2019-2023<br/>B.S. Computer Science<br/>Deans list Fall 2020</p>
        </div>
        <div className='relevant'>
            <h2>Relevant Coursework</h2>
            <p>Cloud Computing<br/>Cyber Security<br/>Advanced Data Structures<br/><br/></p>
        </div>
        <div className='group'>
          <p>Gained experience with Scrum, DevOps, and Kanban through multiple semester-long group projects.</p>
        </div>

        <div className='bottomAbout'>
          <div className='contactBtns'>
                <div>
                  <i class="fa-solid fa-house"></i>
                  <p>Gardiner, ME, USA<br/>04359</p>
                </div>
                <div>
                  <i class="fa-solid fa-phone"></i>
                  <p>207-427-1574</p>
                </div>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                  <p>ferrismichelled<br/>@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='about'>
        </div>
      </div>

    </div>
  );
}

export default App;