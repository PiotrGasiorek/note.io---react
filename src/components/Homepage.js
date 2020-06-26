import React from 'react';

// Import components
import Header from './Header';
import Main from './Main';

function Homepage(props) {
  return (
    <div>
        <Header/>
        <Main toggleBoard={props.toggleBoard}/>
    </div>
  );
}

export default Homepage;
