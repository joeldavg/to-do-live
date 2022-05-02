import React, { useContext } from "react";
import { Store } from "./StoreProvider";

const ListOfToDo = () => {
  const { state, dispatch } = useContext(Store);

  const onCheckbox = (event, note) => {
    const checked = event.currentTarget.checked;
    const newNote = { ...note, done: checked };
    dispatch({
      type: "update-note",
      payload: newNote,
    });
  };

  return (
    <div>
      <h1>Actions pending to be done</h1>
      <ul>
        {state.listOfNotes.map((note) => {
          return (
            <li
              style={note.done ? { textDecoration: "line-through" } : {}}
              key={note.id}
            >
              {note.title} <br />
              {note.message} <br />
              <input
                onChange={(event) => onCheckbox(event, note)}
                type="checkbox"
                checked={note.done}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfToDo;
