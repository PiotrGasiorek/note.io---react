import React from 'react';

function Note(props) {
    return (
      <div className='note'>
          <h6 className='note__title'>{props.noteData.noteTitle}</h6>
          <div className="note__details">
            <p className='note__time'>{props.noteData.noteTime}</p>
            <p className='note__date'>{props.noteData.noteDate}</p>
          </div>
      </div>
    );
  }
  
  export default Note;