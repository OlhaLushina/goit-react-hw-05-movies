import { useSearchParams, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // параметри рядка запиту
  const searchText = searchParams.get('query') ?? ''; // Значення для input із рядка запиту
  const location = useLocation();

  /*

   const normalizedSearchText = searchText.toLowerCase().trim();
  const visibleMovies = movies.filter(item =>
    item.toLowerCase().trim().includes(normalizedSearchText)
  );
  */

  /* Зміна параметра пошуку */
  const updateSearchText = evt => {
    const query = evt.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <input type="text" value={searchText} onChange={updateSearchText} />
      <button>Search</button>

      {/*visibleMovies.map(item => return (<li key={item.movieId}><Link to={ } state={{from: location}} /></li>););*/}
      <div>Movies</div>
    </>
  );
};

export default Movies;
