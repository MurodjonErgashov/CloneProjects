import React, { useEffect, useState } from "react";
import "../style/Chat.css";
import { useParams } from "react-router-dom";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import ChatInput from "./ChatInput";

// import db
import db from "../firebase";
import Message from "./Message";

function Chat() {
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  // console.log(roomDetails);
  // console.log(roomMessages);
  return (
    <div className="chat">
      {/* <h2>You are in the {roomId} room</h2> */}
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>

      <div className="chat_messages">
        {/* <Message /> */}
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            key={timestamp}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channel={"channel"} />
    </div>
  );
}

export default Chat;
