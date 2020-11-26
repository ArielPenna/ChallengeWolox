import React from 'react';

const TechCard = ({ tech, year, author, license, language, type, logo }) => {
  return (
    <div>
      <img src={logo} alt="LogoTech" />

      <div>
        <h3>{tech}</h3>
        <h4>{type}</h4>
        <p>{author}</p>
        <p>{year}</p>
        <p>{license}</p>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default TechCard;
