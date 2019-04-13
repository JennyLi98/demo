import React from 'react';
import Card from './card';
import './index.css';

const CardList = ({animals}) =>{
  const cardComponent = animals.map((user, i) => {
    return <Card name={animals[i].name} description={animals[i].description} url={animals[i].url} />
  });
  return (
    <div className="block">
      {cardComponent}
    </div>
  );
}

export default CardList;
