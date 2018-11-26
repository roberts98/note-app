import React from 'react';

const Note = (props) => (
  <div className="notes__item">
    <p className="notes__body">{props.note}</p>
    <button
      className="notes__button"
      onClick={(e) => {
        props.removeNote(props.note);
      }}
    >
      Remove
    </button>
  </div>
);

export default Note;