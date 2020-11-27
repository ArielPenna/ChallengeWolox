import React from 'react';

// const TechCard = ({ tech, year, author, license, language, type, logo }) => {
const TechCard = () => {
  return (
    <div className="techCard">
      <img src="logo" alt="LogoTech" />
      <div>
        <h3>tech</h3>
        <h4>type</h4>
        <p>author</p>
        <p>year</p>
        <p>license</p>
        <p>language</p>
      </div>
    </div>

    // <div>
    //   <img src={logo} alt="LogoTech" />

    //   <div>
    //     <h3>{tech}</h3>
    //     <h4>{type}</h4>
    //     <p>{author}</p>
    //     <p>{year}</p>
    //     <p>{license}</p>
    //     <p>{language}</p>
    //   </div>
    // </div>
  );
};
// FIXME: el codigo comentado es elq ue deberia funcionar dinamicamente, actualmente tira error undefined, por eso mismo se harcodeo una muestra de la tarjeta asi pueden ver el estilo dado
export default TechCard;
