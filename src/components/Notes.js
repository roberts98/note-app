import React from 'react';
import Note from './Note';

const Notes = (props) => (
  <div>
    {props.notes.map((note) => (
      <Note
        note={note}
        key={note}
      />
    ))}
  </div>
);

export default Notes;