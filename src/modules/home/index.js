import React from 'react';
import './index.css';
import helloGif from './hello_there.gif';

export default function Home() {
  return (
    <section className="View Home">
      <img
        className="Home__img"
        src={helloGif}
        alt="Hello"
      />
    </section>
  );
}
