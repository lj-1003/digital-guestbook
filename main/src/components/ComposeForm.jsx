import { addMessage } from '../../firebaseDB.js'
import { useState } from "react";

function ComposeForm() {
  const [newName, setNewName] = useState(""); // keeps track of new name
  const [newMessage, setNewMessage] = useState(""); // keeps track of new message

  async function handleSubmit() {
    const date = new Date();

    const messageData = {
      nameInput: newName,
      messageInput: newMessage,
      createdAt : date
    }
    addMessage(messageData)
  }

  return (
    <div>
      <div className="fillout card">
        <h1>Compose a Message</h1>
          <label htmlFor="content">Name</label>
          <textarea rows="2" cols="30" maxLength="50"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
          <br></br>

          <label htmlFor="content">Share a message with us!</label>
          <textarea rows="4" cols="30" maxLength="150"
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
          />
          <br></br>

        <button onClick={() => handleSubmit()}>
          Submit
        </button>

        <button className="form-buttons"type="button">Reset Form</button>
      </div>
    </div>
  );
}

export default ComposeForm;