import React from 'react';
import './index.css';
import octocatGif from './octocat.gif';

export default function Octocat() {
  return (
    <section className="View Octocat">
      <img
        className="Octocat__img"
        src={octocatGif}
        alt="Octocat"
      />
    </section>
  );
}
