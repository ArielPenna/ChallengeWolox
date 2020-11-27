import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTechs } from '../redux/actions/userActions';
import TechCard from '../components/TechCard';

const TechList = () => {
  const dispatch = useDispatch();
  const Techs = useSelector((state) => state.techs);

  useEffect(() => {
    dispatch(getTechs());
  }, []);
  // FIXME: dejo este console.log para que observen cual es el error que esta trayendo y no permite ejecutar el codigo entre las lineas 28 y 34
  console.log('techlist', Techs);

  return (
    <section className="techList">
      <h3>Nuestras Tecnologias</h3>
      <div className="techList--list">
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        <TechCard />
        {/* FIXME: el codigo de abajo esta comentado por que arroja undefined sobre Techs, a mi parecer estan bien los codigos */}
        {/* <h4>techlist...</h4>
      {!Techs.length ? (
        <div>
          <h1>No hay datos</h1>
        </div>
      ) : (
        Techs.map((tech) => <TechCard tech={tech.tech} year={tech.year} author={tech.author} license={tech.license} language={tech.language} type={tech.type} logo={tech.logo} />)
      )} */}
      </div>
    </section>
  );
};

export default TechList;
