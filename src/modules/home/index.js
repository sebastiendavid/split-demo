import React from 'react';
import helloGif from 'modules/home/hello_there.gif';
import 'modules/home/index.css';

export default function Home() {
  return (
    <section className="View Home">
      <img
        className="Home__img"
        src={helloGif}
        role="presentation"
      />
    </section>
  );
}
