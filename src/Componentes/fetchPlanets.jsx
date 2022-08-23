const fetchPlanetsApi = async () => {
  const URL = 'https://swapi.dev/api/planets';
  const response = await fetch(URL);
  const data = await response.json();
  const remove = await data.results.map(({ residents, ...datafixed }) => datafixed);
  console.log(remove);
  return remove;
};

export default fetchPlanetsApi;
