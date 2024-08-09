import { useRef } from 'react';
import './App.css';
import logo from './images/ChiStudios.png';
import useDragger from './hooks/useDragger.jsx';
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
        <div className='pageContainer' ref={containerRef}>
            <Window container={containerRef}>
              <div className='titleContent'>
                <div>
                  <h1 className='titleCardTitle'>Michelle Ferris</h1>
                  <p>
                    Fullstack developer with a love for Python and Javascript <br/>
                    Currently looking to put my skills to good use with a company that represents my values
                  </p>
                </div>
              </div>
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
            </Window>
          </div>
        </div>

      <div className='projects snap'>
        <div className='padding'></div>
      </div>

      <div className='about snap'></div>

      <div className='footer snap'></div>

    </div>
  );
}

export default App;