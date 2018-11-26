import React from 'react';
import AddNote from './AddNote';
import Header from './Header';
import Notes from './Notes';

class NoteApp extends React.Component {
  state = {
    notes: []
  };
  addNote = (note) => {
    if (!note) {
      return 'Enter valid value to add note!';
    } else if (this.state.notes.indexOf(note) > -1) {
      return 'Note already exists';
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

  componentDidMount() {
    const json = localStorage.getItem('notes');
    const notes = JSON.parse(json);

    if (notes) {
      this.setState(() => ({ notes }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      const json = JSON.stringify(this.state.notes);

      localStorage.setItem('notes', json);
    }
  }
  render() {
    return (
      <div>
        <Header />
        <AddNote
          addNote={this.addNote}
        />
        <Notes
          notes={this.state.notes}
          removeNote={this.removeNote}
        />
      </div>
    );
  };
};

export default NoteApp;