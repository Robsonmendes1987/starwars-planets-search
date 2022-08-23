import React, { useContext } from 'react';

import AppContext from './AppContext';
import Table from './Table';

function FilterPlanets() {
  const { contextValue: {
    filterNumber,
    setFilterNumber,
    filter,
    setFilter,
  } } = useContext(AppContext);

  const hendlerIput = ({ target }) => {
    const { name, value } = target;
    setFilterNumber({
      ...filterNumber,
      [name]: value,
    });
  };

  const eventClcick = () => {
    // console.log(filter);
    const { column, comparison, value } = filterNumber;
    console.log(column, comparison, value);
    const getFilter = filter.filter((element) => {
      if (comparison === 'menor que' && (Number(element[column]) < Number(value))) {
        return element;
      }
      if (comparison === 'maior que' && (Number(element[column]) > Number(value))) {
        return element;
      }
      if (comparison === 'igual a' && (Number(element[column]) === Number(value))) {
        return element;
      }
      // const filterOPtion = numberfilt.filter((ele) => ele !== column);
      // setNumberFilt(filterOPtion);
      return 0;
    });
    // setFilterArr(getFilter);
    setFilter(getFilter);
    console.log(getFilter);
  };

  // useEffect(() => {
  //   // setData;
  // }, [data]);

  return (
    <main>
      <label htmlFor="getNumber">

        <select
          data-testid="column-filter"
          onChange={ hendlerIput }
          name="column"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>rotation_period</option>
          <option>surface_water</option>
          <option>diameter</option>
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ hendlerIput }
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          type="number"
          id="getNumber"
          data-testid="value-filter"
          name="value"
          onChange={ hendlerIput }
          value={ filterNumber.value }
        />

        <button
          data-testid="button-filter"
          type="submit"
          // onChange={ (e) => setFilterNumber(e.target.value) }
          onClick={ eventClcick }
        >
          Filtrar

        </button>
        <Table />
      </label>

      {/* {data.map(({ population, orbital_period, diameter, rotation_period, surface_water }) => (

        ))} */}

    </main>
  );
}

export default FilterPlanets;
