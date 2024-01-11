import React from 'react';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full h-16 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
      <div className='grid h-full max-w-lg grid-cols-2 mx-auto font-medium'>
        <h1 className='p-5'>Guitar Tunar</h1>
      </div>
    </header>
  );
};

export default Header;
