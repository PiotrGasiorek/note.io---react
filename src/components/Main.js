import React from 'react';
import Button from './Button';

function Main() {
  return (
    <main className="main container section">
      <h2 className='main__title title title--lg'>
        Manage your ideas easier
        <br/> 
        than ever before
      </h2>
      <Button classes='main__btn btn--primary' textContent='Try it now'/>
    </main>
  );
}

export default Main;
