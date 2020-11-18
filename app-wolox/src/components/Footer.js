import React from 'react';

import logoFooter from '../img/Ic_Wolox_Footer.svg';

export default function Navbar() {
  return (
    <section className="container footer">
      <div className="footer-content">
        <h3>
          Gracias por<span> completar el ejercicio</span>
        </h3>
        <h4>Te invitamos a ver más información</h4>

        <a href="https://www.wolox.com.ar/">Conocer más</a>

        <img src={logoFooter} className="logo-footer" alt="Wolox" />
      </div>
    </section>
  );
}
