import React from 'react';
import AddNote from './AddNote';
import Options from './Notes';

class NoteApp extends React.Component {
  state = {
    notes: []
  };
  addNote = (note) => {
    if(!note) {
      return 'Enter valid value to add note!'
    }
    this.setState((prevState) => {
      return {
        notes: prevState.notes.concat([note])
      };
    });
  };
  removeNote = (noteToRemove) => {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note !== noteToRemove)
      };
    });
  };
  render () {
    return (
      <div>
        <AddNote addNote={this.addNote} />
        <Options notes={this.state.notes} />
      </div>
    );
  };
};

export default NoteApp;