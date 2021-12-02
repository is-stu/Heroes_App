import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const Hero = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => {
    getHeroById(heroId);
  }, [heroId]);
  const { alter_ego, characters, superhero, first_appearance, id, publisher } =
    hero;

  if (!hero) {
    return <Navigate to='/marvel' />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          className='img-thumbnail'
          src={`/assets/${id}.jpg`}
          alt={superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearence: </b>
            {first_appearance}
          </li>
          <li className='list-group-item'>
            <b>Characters: </b>
            {characters}
          </li>
        </ul>
        <div className='d-grid'>
          <button className='btn btn-outline-info mt-2' onClick={handleReturn}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
