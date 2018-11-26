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
      <div className="container">
        {this.state.error && <p>{this.state.error}</p>}
        <form className="new-note" onSubmit={this.addNote} >
          <textarea className="new-note__input" name="note" placeholder="note..." rows="15"></textarea>
          <button className="new-note__button">Add note!</button>
        </form>
      </div>
    );
  };
};

export default AddNote;