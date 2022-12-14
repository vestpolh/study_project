import React, { useEffect, useRef, useState } from 'react';

import './App.css';

function App() {
  //const [term, setTerm] = useState('');

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => focusOnName, []);

  // const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(term);
  // };

  const focusOnName = () =>  { nameRef.current?.focus() };
  const focusOnEmail = () =>  { emailRef.current?.focus() };

  return (
    <div className='container'>
      {/* <form onSubmit={submitForm}>
        <input 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type='text'
          placeholder='Enter a term'
          className='input'
        />
        <button className='btn'>Submit</button>
      </form> */}
      <h1>Example</h1>
      <input ref={nameRef} type='text' className='input' placeholder='Name'/>
      <input ref={emailRef} type='text' className='input' placeholder='Email'/>

      <div className='btn-wrapper'>
        <button onClick={focusOnName} className='btn'>Focus on Name</button>
        <button onClick={focusOnEmail} className='btn'>Focus on Email</button>
      </div>
      
    </div>
  );
}

export default App;
