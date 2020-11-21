import React from 'react';
import twitter from '../img/twitter.png';

export default function Navbar() {
  return (
    <section className="container woloxers">
      <div className="woloxers-img">
        <h3>
          350 + <span>Woloxers</span>
        </h3>
        <div className="woloxers-twitter">
          <img src={twitter} className="twitter-img" alt="Wolox-twitter" />
          <span>@Wolox</span>
        </div>
        <a href="https://twitter.com/Wolox">Siguenos</a>
      </div>
      <div className="woloxers-right">
        <h3>
          Trabajamos para <br />
          <span>convertir </span> <span id="span2">ideas </span>
          en <br />
          productos.
        </h3>
      </div>
    </section>
  );
}
