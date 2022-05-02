import React, { useContext, useRef, useState } from "react";
import { Store } from "./StoreProvider";

const Form = () => {
  //

  const formRef = useRef(null);

  const onAdd = (event) => {
    event.preventDefault();
    if (title && message) {
      dispatch({
        type: "add-note",
        payload: {
          title,
          message,
        },
      });

      formRef.current.reset();
    }
  };

  const { state, dispatch } = useContext(Store);

  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");

  const addingTitle = (e) => {
    setTitle(e.target.value);
  };

  const addingMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form ref={formRef}>
      <label>Title:</label>
      <input type="text" onChange={addingTitle} name="title" />
      <label>Message</label>
      <input type="text" onChange={addingMessage} name="message" />
      <button onClick={onAdd}>Add Note</button>
    </form>
  );
};

export default Form;
