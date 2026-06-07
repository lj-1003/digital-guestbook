import { useState, useEffect} from "react";
import { getMessage } from '../../firebaseDB.js'

function Feed() {
  const [messages, setMessages] = useState([]);

  async function loadData() {
    const data = await getMessage();
    setMessages(data);
  }

  useEffect(() => {
    loadData();
    }, []);
    
  return (
    <div className="content-card">
      {messages.map((message, index) =>
      <ul key={index}>
        <li><b>{message.nameInput}</b></li>
        <li>{message.messageInput}</li>
        <br></br>
      </ul>
      )}
    </div>
  );
}

export default Feed;