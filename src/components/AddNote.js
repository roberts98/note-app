import React from 'react';

class AddNote extends React.Component {
  state = {
    error: ''
  }
  addNote = (e) => {
    e.preventDefault();

    const note = e.target.elements.note.value.trim();
    const error = this.props.addNote(note);

    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      e.target.elements.note.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addNote} >
          <input type="text" name="note" placeholder="note..." />
          <button>Add note!</button>
        </form>
      </div>
    );
  };
};

export default AddNote;