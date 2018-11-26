import React from 'react';
import Note from './Note';

const Notes = (props) => (
  <div className="container">
    <div className="notes">
      <div className="notes__header">
        <h3>Recent notes</h3>
        <h3>Action</h3>
      </div>
      {props.notes.map((note) => (
        <Note
          note={note}
          key={note}
          removeNote={props.removeNote}
        />
      ))}
    </div>
  </div>
);

export default Notes;