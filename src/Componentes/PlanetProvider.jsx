import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import fetchPlanetsApi from './fetchPlanets';

function PlanetProvider({ children }) {
  const [filter, setfilter] = useState([]);
  const [getInput, setInput] = useState([]);
  const [data, setData] = useState([]);

  const space = async () => {
    const get = await fetchPlanetsApi();
    setData(get);
    // getText(setData);
    // console.log(getText);
  };

  useEffect(() => {
    space();
  }, []);

  const funçao = () => {
    const getDta = data.filter(({ name }) => name.includes(getInput));
    setfilter(getDta);
    console.log(getDta);
  };
  // console.log(data);

  useEffect(() => {
    funçao();
    // funçao();
    // space();
  }, [getInput]);

  // filterData.filter((search) => console.log(search));

  const contextValue = {
    filter,
    setfilter,
    data,
    setData,
    space,
    getInput,
    setInput,
    funçao,
  };

  return (
    <AppContext.Provider value={ { contextValue } }>
      {children}
    </AppContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
