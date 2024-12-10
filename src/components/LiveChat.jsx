import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { chatMessages } from "../utilis/chatSlice";
import { generateHindiMusicName, generateRandomName } from "../utilis/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
  const [livemessage, setLivemessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        chatMessages({
          name: generateRandomName(),
          message: generateHindiMusicName(),
        })
      );
    }, 1000);

    return () => clearInterval(i); // Clear interval on component unmount
  }, [dispatch]);

  return (
    <>
      <h1 className="text-xl font-bold pl-2  bg-slate-100 w-screen py-2 ">
        Top Chart :
      </h1>
      <div className="h-full overflow-y-auto flex flex-col-reverse">
        {chatmessages.map((msg, i) => (
          <ChatMessage key={i} name={msg.name} message={msg.message} />
        ))}
      </div>
      <form
        className="flex items-center justify-between mt-4 gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            chatMessages({
              name: "Shahil",
              message: livemessage,
            })
          );
          setLivemessage("");
        }}
      >
        <input
          type="text"
          className="px-2 py-1 bg-gray-200 rounded-xl w-72"
          placeholder="Chat..."
          value={livemessage}
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 bg-green-100 rounded-lg ">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
