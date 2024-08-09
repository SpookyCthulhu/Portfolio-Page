import { useRef } from 'react';
import useDragger from './../hooks/useDragger.jsx';

const Window = ({ container, children }) => {
    const cardRef = useRef(null);
    const handleRef = useRef(null);
    // handleRef is where the cursor clicks to drag, if container is not null, restricts drag to within container,
    // cardRef, if added, will designate which element actually gets moved on drag. 
    const { handleMouseDown } = useDragger(handleRef, container, cardRef);
  
  
    return (
        <div className='titleCard' ref={cardRef}>
            <div className='window' ref={handleRef} onMouseDown={handleMouseDown}>
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