import React, { useEffect, useState } from 'react';
import fetchPlanetsApi from './fetchPlanets';

function Table() {
  // console.log(list);
  // async function a () {
  //  const test = await fetchPlanetsApi;
  // }

  // const { fetchPlanetsApi } = useContext()
  const [data, setData] = useState([]);
  // const [text, value] = useState('');
  // console.log(setData);

  const space = async () => {
    const get = await fetchPlanetsApi();
    setData(get);
    console.log(get);
  };

  useEffect(() => {
    space();
  }, []);

  // handleChange = ({ target }) => {
  //   const {name,value} = target;
  //   setData([name] = value)
  // }

  return (
    <main>

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
          {data.map(
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
