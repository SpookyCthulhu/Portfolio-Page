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
          <h2>Contact</h2>
          <h2>Projects</h2>
          <h2>About</h2>
        </div>
        <div className='socialBtns'>
            <a href='https://github.com/SpookyCthulhu' target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/michelle-ferris-8790271a6/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href='https://www.instagram.com/ferris7060/' target='_blank'><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <div className='contact snap'>
        <div className='landing'>
          <img src={topWave} className='topWave'/>
          <img src={bottomWave} className='bottomWave'/>
          <h1 className='landingText name'>Michelle</h1>
          <h1 className='landingText name lastName'>Ferris</h1>
          <h1 className='landingText jobDesc'>Fullstack Developer</h1>
        </div>
      </div>

      <div className='projects snap page'>
        <img src={flatTopWave} className='flatTopWave' />
        <div className='pageContainer' >
            <Window>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Michelle Ferris</h1>
                  <p>
                    Fullstack developer with a love for Python and Javascript <br/>
                    Currently looking to put my skills to good use with a company that represents my values
                  </p>
                </div>
              </div>
            </Window>
          </div>
      </div>

      <div className='aboutMe snap'>
        <h1 className='aboutTitle'>About Me</h1>
          <div className='skills'>
            <h2>Attributes</h2>
            <p>Imaginative designer <br/>Computer Scientist <br/>Resourceful problem solver</p>
            <h2>Tech Stack</h2>
            <p>Frontend</p>
            <div className='techstack'>
              <i class="fa-brands fa-js"></i>
              <i class="fa-brands fa-react"></i>
              <i class="fa-brands fa-html5"></i>
              <i class="fa-brands fa-css3-alt"></i>
              <i class="fa-brands fa-figma"></i>
            </div>
            <p>Backend</p>
            <div className='techstack'>
              <i class="fa-solid fa-database"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fa-brands fa-npm"></i>
            </div>
            <p>Scripting</p>
            <div className='techstack'>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-js"></i>
            </div>
            <p>Hosting</p>
            <div className='techstack'>
              <i class="fa-brands fa-docker"></i>
              <i class="fa-brands fa-git"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-aws"></i>
            </div>
          </div>
          <div className='passion'>
            <h2>My Passion</h2>
            <p>I have been building web applications for over a decade. <br/>It has always been a creative outlet for me. <br/>Simulatenously demanding logic and reason, as well as vision and inspriation. <br/> This discipline comes naturally to me, like an artist to a paintbrush. I love to create<br/></p>
          </div>
          <div className='education'>
            <h2>Education</h2>
            <p>University of Maine<br/>2019-2023<br/>B.S. Computer Science<br/><li>Deans list Fall 2020</li></p>
            <h2>Relevant Coursework</h2>
            <p>| Cloud Computing |<br/>| Cyber Security |<br/>| Advanced Data Structures |<br/><br/>
Gained experience with Scrum, DevOps, and Kanban through multiple semester-long group projects. </p>
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