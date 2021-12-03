import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div style={{ height: 'calc(100vh - 65px)' }} className='container flex justify-around items-center'>
      <h2 className='primaryHeading'>Seems like you are lost !! 💔💔</h2>
      <Link to='/' className='btn btn--primary'>
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
