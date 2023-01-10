import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './App.css';


function FilmInfo() {
  const [id, setId] = useState(1);
  const [film, setFilm] = useState({name: null});
  
  useEffect(() => {
    let isNeedUpdate = true;
    console.log(`useEffect${id}`);

    fetch(`https://10.react.pages.academy/wtw/films/${id}`)
    .then((response) => response.json())
    .then((film) => isNeedUpdate && setFilm(film));
    return () => {isNeedUpdate = false};

  }, [id]);


  return (
    
    <section className='block'>
      <button className='custom-button' onClick={() => setId(id + 1)}>Следующий фильм...</button>
      <h3>Идентификатор фильма: {id}</h3>
      {film.name && <h1>{film.name}</h1>}
    </section>

  );
}

export default FilmInfo;
