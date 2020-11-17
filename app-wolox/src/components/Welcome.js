import React from 'react';
import control from '../img/control/Ic_ilustra_Hero.png';
export default function Navbar() {
  return (
    <section className="container welcome">
      <h3 className="welcome-title--light">
        Bienvenido a tu
        <br />
        <span className="welcome-title--bold">Entrevista Técnica</span> en
        <br />
        <span className="welcome-title--brand">Wolox</span>
      </h3>
      <img src={control} className="welcome--img" alt="Wolox-control" />
    </section>
  );
}
