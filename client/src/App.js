import './App.css';

function App() {
  return (
    <div className='grid'>
      <div className='navbar snap'></div>
      <div className='contact snap'>
        {/* <img src='images/background.png' className='background'></img> */}
        <div className='titleCard'>
          <div className='titleBtns'>
            <div className='minimize'></div>
            <div className='viewport'></div>
            <div className='close'></div>
          </div>
          <div>
            <h1>Michelle Ferris</h1>
            <p>
              Fullstack developer with a love for Python and Javascript <br/>
              Currently looking to put my skills to good use with a company that represents my values
            </p>
          </div>
          <div className='contactBtns'>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className='projects snap'></div>
      <div className='about snap'></div>
      <div className='footer snap'></div>

    </div>
  );
}

export default App;
