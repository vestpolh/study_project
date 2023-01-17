import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const useFilm = (filmId: any) => {
  const [film, setFilm] = useState({name: null});

  useEffect(() => {
    let isNeedUpdate = true;

    fetch(`https://10.react.pages.academy/wtw/films/${filmId}`)
      .then((response) => response.json())
      .then((film) => isNeedUpdate && setFilm(film));
    return () => {isNeedUpdate = false};

  }, [filmId]);

  return film;
};



function FilmInfo() {
  const [id, setId] = useState(1);
  const film = useFilm(id);

  return (
    
    <section className='block'>
      <button className='custom-button' onClick={() => setId(id + 1)}>Следующий фильм...</button>
      <h3>Идентификатор фильма: {id}</h3>
      {film.name && <h1>{film.name}</h1>}
    </section>

  );
}

export default FilmInfo;
