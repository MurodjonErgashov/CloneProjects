import React, { useState } from "react";
import "../style/ChatInput.css";
import db from "../firebase";
import { useStateValue } from "../containers/StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection({
        message: input,
        timestamp: db.firestore.FieldValue.serverTimestamp,
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <from>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowecase}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </from>
    </div>
  );
}

export default ChatInput;
