import React from 'react';

import clock from '../img/Ic_Hour.svg';
import snaks from '../img/Ic_DrinkSnacks.svg';
import homeOffice from '../img/Ic_HomeOffice.svg';
import laptop from '../img/Ic_laptop.svg';
import brain from '../img/Ic_brain.svg';
import workshops from '../img/Ic_Workshops.svg';

export default function Navbar() {
  return (
    <section className="container beneficts">
      <div id="beneficios">
        <h4 className="beneficts-title">
          Entre los beneficios que te ofrecemos se encuentran <span className="face">;)</span>
        </h4>
        <div className="beneficts-items--container">
          <div className="beneficts-items">
            <img src={clock} className="beneficts-icons" alt="Wolox-benefict" />
            <p>
              Flexibilidad <br />
              Horaria
            </p>
          </div>
          <div className="beneficts-items">
            <img src={homeOffice} className="beneficts-icons" alt="Wolox-benefict" />
            <p>Home Office</p>
          </div>
          <div className="beneficts-items">
            <img src={workshops} className="beneficts-icons" alt="Wolox-benefict" />
            <p>
              Capacitaciones
              <br />y workshops
            </p>
          </div>
          <div className="beneficts-items">
            <img src={snaks} className="beneficts-icons" alt="Wolox-benefict" />
            <p>
              Snacks, frutas
              <br />y bebidas gratis
            </p>
          </div>
          <div className="beneficts-items">
            <img src={laptop} className="beneficts-icons" alt="Wolox-benefict" />
            <p>
              Semana <br />
              Remota
            </p>
          </div>
          <div className="beneficts-items">
            <img src={brain} className="beneficts-icons" alt="Wolox-benefict" />
            <p>
              Trabajar
              <br />
              en ultimas
              <br />
              tecnologias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
