import React from 'react';
import Note from './Note';

const Notes = (props) => (
  <div>
    {props.notes.map((note) => (
      <Note
        note={note}
        key={note}
        removeNote={props.removeNote}
      />
    ))}
  </div>
);

export default Notes;