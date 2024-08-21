// we use form in input box so that on hitting enter it will submit the chat.

import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling using fetch method and convert it into json and dispatch the data
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "😎",
        })
      );
      //   console.log("API Polling");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addMessage({ name: "shubham", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-80"
          type="text"
          value={liveMessage}
          onChange={(event) => {
            setLiveMessage(event.target.value);
          }}
        />
        <button className="px-2 my-2 mx-2 bg-green-100 rounded-md">
          Send{chatMessages.length}
        </button>
      </form>
    </>
  );
};

export default LiveChat;
