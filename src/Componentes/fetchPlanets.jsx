const fetchPlanetsApi = async () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const response = await fetch(URL);
  const data = await response.json();
  const remove = await data.results.map(({ residents, ...datafixed }) => datafixed);
  return remove;
};

export default fetchPlanetsApi;