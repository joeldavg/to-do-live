function Reducer(state, action) {
  switch (action.type) {
    case "get-notes":
      const stateWithAllNotes = {
        ...state,
        listOfNotes: action.payload,
      };

      return stateWithAllNotes;
    case "add-note":
      const newNote = action.payload;
      console.log(newNote);
      const newListOfNotesAddedOne = [...state.listOfNotes, newNote];

      const newStateAddNote = {
        ...state,
        listOfNotes: newListOfNotesAddedOne,
      };

      return newStateAddNote;
    case "remove-note":
      const deletedNote = action.payload;
      const newListOfNoteWithoutPayloadNote = state.listOfNotes.filter(
        (note) => note.id !== deletedNote.id
      );
      const newStateWithNoteDeleted = {
        ...state,
        listOfNotes: newListOfNoteWithoutPayloadNote,
      };

      return newStateWithNoteDeleted;
    case "update-note":
      const updatedNote = action.payload;
      const newListOfNotes = state.listOfNotes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      });

      const newStateModifiedCheckbox = {
        ...state,
        listOfNotes: newListOfNotes,
      };

      return newStateModifiedCheckbox;
  }
}

export default Reducer;
