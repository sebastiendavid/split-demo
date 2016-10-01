import React from 'react';
import octocatGif from 'modules/octocat/octocat.gif';
import 'modules/octocat/index.css';

export default function Octocat() {
  return (
    <section className="View Octocat">
      <img
        className="Octocat__img"
        src={octocatGif}
        role="presentation"
      />
    </section>
  );
}
