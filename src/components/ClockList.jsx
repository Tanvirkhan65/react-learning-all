import React from 'react';
import Clock from './Clock';

const ClockList = ({ quantities }) => (
  <div>
    {quantities.map((quantity) => (<Clock key={quantity} />))}
  </div>
);

export default ClockList;
