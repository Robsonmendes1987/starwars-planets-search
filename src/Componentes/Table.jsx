// import { element } from 'prop-types';
import React, { useContext, useState } from 'react';
// import { useState } from 'react';
// import fetchPlanetsApi from './fetchPlanets';
// import PlanetProvider from './PlanetProvider';
import AppContext from './AppContext';

function Table() {
  // const [getArray, setArray] = useState([]);
  const { inputtext } = useState('');
  const {
    contextValue: {
      filter,
      setInput,
    },
  } = useContext(AppContext);

  // const x = () => (data.length === 0 ? data : getText);
  // console.log(x);

  // const saveFunction = x();
  // const retorno = () => (getInput.length === 0 ? data : filter);
  // const retorno = () => (getInput.length === 0 ? data : filter);
  // const x = retorno();

  // useEffect(() => {
  //   // x();
  // }, [data]);

  // console.log(getText);
  // const getFilter = data.filter((element) => element.startsWith());
  return (
    <main>

      <label htmlFor="name">
        <input
          type="text"
          // value={ text }
          id="name"
          name="inputEmail"
          value={ inputtext }
          onChange={ (e) => setInput(e.target.value) }
          data-testid="name-filter"
        />
      </label>
      {/* <ul>
          {filterData.map((search) => (
            <li>{search}</li>
          ))}

        </ul> */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbtal Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Filmes</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filter.map(
            ({
              name,
              rotation_period: ROTATION_PERIOD,
              orbital_period: ORBITAL_PERIOD,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: SURFACA_WATER,
              population,
              films,
              created,
              edited,
              url,
            }) => (
              <tr key={ name }>
                <td>{name}</td>
                <td>{ROTATION_PERIOD}</td>
                <td>{ORBITAL_PERIOD}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{SURFACA_WATER}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
}

export default Table;

// function Table() {
//     useEffect(async () =>  {
//       const getApi = await fetchPlanetsApi();
//       console.log('teste', getApi);
//     }, []);
