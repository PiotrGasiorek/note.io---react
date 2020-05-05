import React from 'react';

// Import components
import Note from './Note';

function Notes(props) {
    return (
      <div className='board__notes'>
          {props.notes.map(data => {
            return <Note noteData={data} key={Math.random()}/>
          })}
      </div>
    );
  }
  
  export default Notes;