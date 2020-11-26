import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTechs } from '../redux/actions/userActions';
import TechCard from '../components/TechCard';

const TechList = () => {
  const dispatch = useDispatch();
  const Techs = useSelector((state) => state.techs);
  console.log('techlist', Techs);

  useEffect(() => {
    dispatch(getTechs(Techs));
  }, [getTechs]);

  return (
    <div>
      <h4>techlist...</h4>
      {!Techs.length ? (
        <div>
          <h1>Realice su busqueda</h1>
        </div>
      ) : (
        Techs.map((tech) => <TechCard tech={tech.tech} year={tech.year} author={tech.author} license={tech.license} language={tech.language} type={tech.type} logo={tech.logo} />)
      )}
    </div>
  );
};

export default TechList;
