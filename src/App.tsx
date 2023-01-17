import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './styles.css';
import FilmInfo from './film-info';

const KEY_ESCAPE = 'Escape';

function App() {
  const [isVisibleFilmInfo, setVisibleFilmInfo] = useState(true);

  useEffect(()=>{
    document.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
    };
  }, [isVisibleFilmInfo])

  const onKeyDownEsc = (evt: KeyboardEvent) => {
    if (evt.key == KEY_ESCAPE) {
      setVisibleFilmInfo(false);
    }
  }

  const clickHandle = () =>  {
    setVisibleFilmInfo((prevState)=> !prevState);
  }



  return (
    
    <div className='container'>
      <button 
        className='custom-button button-danger'
        onClick={clickHandle}>
          {isVisibleFilmInfo ? '- Скрыть' : '+ Показать'}
      </button>
      <p></p>
      {isVisibleFilmInfo && <FilmInfo />}
    </div>
  );
}

export default App;
