import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hero = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: hero,
  });

  const heroesFilter = useMemo(() => getHerosByName(hero), [hero]);
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?hero=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search your hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn btn-outline-primary mt-1'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {hero === '' ? (
            <div className='alert alert-primary'> Search a hero</div>
          ) : (
            heroesFilter.length === 0 && (
              <div className='alert alert-danger'>
                Whoops... We don't found anything with "{hero}"
              </div>
            )
          )}
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
