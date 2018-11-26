import React from 'react';

const Note = (props) => (
  <div>
    {props.note}
    -
    <button
      onClick={(e) => {
        props.removeNote(props.note);
      }}
    >
      x
    </button>
  </div>
);

export default Note;