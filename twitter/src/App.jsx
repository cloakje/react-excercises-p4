import "./App.css";
import MessageList from "./components/MessageList.jsx";
import CreateMessage from "./components/createMessage.jsx";
import { useState } from "react";
 
function App() {
  let name = "bart";
  const [message, setMessage] = useState([]);
  const [textInput, setTextInput] = useState("");
 
 
  return (
    <>
      <CreateMessage
        message={message}
        setMessage={setMessage}
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <MessageList name={name} message={message} />
    </>
  );
}
 
export default App;
