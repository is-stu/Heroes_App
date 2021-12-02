import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPusblisher';

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      <h3>Hero List</h3>

      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>{hero.superhero}</li>
        ))}
      </ul>
    </>
  );
};
