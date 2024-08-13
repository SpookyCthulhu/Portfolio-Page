import { useRef } from 'react';
import useDragger from './../hooks/useDragger.jsx';

const Window = ({ children }) => {
  
    return (
        <div className='titleCard'>
            <div className='window'>
              <div className='arrows'>
                <i class='fas fa-arrow-left'></i>
                <i class='fas fa-arrow-right'></i>
                <i class='fas fa-rotate'></i>
              </div>
              <div className='search'>
                <h4>http://www.SpookyCthulhu.com/splashscreen</h4>
              </div>
              <div className='titleBtns'>
                <div className='minimize'></div>
                <div className='viewport'></div>
                <div className='close'></div>
              </div>
            </div>
                {children}
        </div>
    )
};

export default Window;