import React from 'react';
import { get } from 'lodash';
import HealthCard from './HealthCard';

const HEALTH_CARDS = {
  title: 'For the dog days of summer',
  cards: [
    {
      title: 'Nothing to sneeze at',
      subtitle: 'Get relief from seasonal allergies with Zyrtec, Flonase, and more.',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-c262/k2-_3df5a67e-191c-48c2-abf2-65d5be7fc083.v1.jpg?odnWidth=444&amp;odnHeight=622&amp;odnBg=ffffff',
    },
    {
      title: 'Rx for your BFF',
      subtitle: 'Get pet prescriptions as fast as possible here, fast and easy',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-6356/k2-_90aaf4d5-231b-44b3-8227-bf1c3ca6975f.v1.jpg?odnWidth=444&odnHeight=622&odnBg=ffffff',
    },
    {
      title: 'Pup Culture',
      subtitle: 'Pup culture Adorable gifts & accessories you can create from pics of your pooch.',
      image: '//i5.walmartimages.com/dfw/4ff9c6c9-a42b/k2-_1958a47a-b871-4447-bebc-3401331a12fe.v1.jpg?odnWidth=444&odnHeight=622&odnBg=ffffff',
    },
  ],
};

const Health = () => {
  const title = get(HEALTH_CARDS, 'title', '');
  const cards = get(HEALTH_CARDS, 'cards', []);

  return (
    <>
      <h2 className="text-center">{title}</h2>
      <div className="health-container row">
        {cards.map(HealthCard)}
      </div>
    </>
  );
};

export default Health;
