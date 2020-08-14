import React from "react";
import "../style/Message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img
        src="https://muzfmuz.com/uploads/artist/max/botir-qodirov-800x800.jpg"
        alt=""
      />
      <div className="message_info">
        <h4>
          {user}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
