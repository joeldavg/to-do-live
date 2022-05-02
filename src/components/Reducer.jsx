function Reducer(state, action) {
  switch (action.type) {
    case "add-note":
      const newNote = {
        id: Math.floor(Math.random() * 100),
        message: action.payload.message,
        title: action.payload.title,
        done: false,
      };

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
      const newListOfNotes = state.listOfNotes.filter(
        (note) => note.id !== updatedNote.id
      );

      const newListOfNotesWithModification = [...newListOfNotes, updatedNote];

      const newStateModifiedCheckbox = {
        ...state,
        listOfNotes: newListOfNotesWithModification,
      };

      return newStateModifiedCheckbox;
  }
}

export default Reducer;
