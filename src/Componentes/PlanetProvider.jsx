import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';
import fetchPlanetsApi from './fetchPlanets';
// import testData from '../../cypress/mocks/testData';
function PlanetProvider({ children }) {
  const [filter, setFilter] = useState([]);
  const [getInput, setInput] = useState([]);
  const [data, setData] = useState([]);
  const [getIfoInput, setInfoIput] = useState('');
  const [filterNumber, setFilterNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [numberfilt, setNumberFilt] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',

  ]);
  const [filterArr, setFilterArr] = useState([]);

  const space = async () => {
    const get = await fetchPlanetsApi();
    setData(get);
    setFilter(get);
    // getText(setData);
  };

  useEffect(() => {
    space();
  }, []);

  const funçao = () => {
    const getDta = data.filter(({ name }) => name.includes(getInput));
    setFilter(getDta);
    // setData(getDta);
  };

  useEffect(() => {
    // funçao();
    funçao();
    // space();
  }, [getInput]);

  //  const get = async () => {
  //   const save = await fetchPlanetsApi();
  //   console.log(save);
  //   // const x = data.every((element) => element.includes);
  //   setInfoIput(save);
  // };
  // useEffect(() => {
  //   get();
  //   // funçao();
  //   // space();
  // }, []);

  const contextValue = {
    filter,
    setFilter,
    data,
    setData,
    space,
    getInput,
    setInput,
    funçao,
    numberfilt,
    setNumberFilt,
    getIfoInput,
    setInfoIput,
    filterNumber,
    setFilterNumber,
    filterArr,
    setFilterArr,
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
