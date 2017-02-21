import React from 'react';
import './index.css';
import helloGif from './hello_there.gif';
import { debug } from '../../../utils/log';

debug('load home component');

export default function Home() {
  debug('render home component');
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
