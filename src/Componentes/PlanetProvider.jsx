import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import fetchPlanetsApi from './fetchPlanets';

function PlanetProvider({ children }) {
  const [getText, saveText] = useState('');
  const [data, setData] = useState([]);

  const space = async () => {
    const get = await fetchPlanetsApi();
    setData(get);
  };

  useEffect(() => {
    space();
  }, []);

//   const hendlechange = (target) => {
//     const { text, value } = target;

//     saveText({ [text]: value });
//   };

  const contextValue = {
    // getText,
    // saveText,
    // hendleChange,
    setData,
    data,
    space,
    // hendlechange,
    getText,
    saveText,
  };
  return (
    <AppContext.Provider value={ { contextValue } }>{children}</AppContext.Provider>
  );
}

export default PlanetProvider;
