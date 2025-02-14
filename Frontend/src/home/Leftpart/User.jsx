import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

import profile from "../../../public/user.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket, onlineUsers } = useSocketContext();

  // Debugging: Check if user object contains fullname
  console.log("User data:", user);

  const isSelected = selectedConversation?._id === user?._id;
  const isOnline = onlineUsers.includes(user?._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profile} alt="User profile" />
          </div>
        </div>
        <div>
          {/* Ensure fullname is displayed properly */}
          <h1 className="font-bold text-white">{user?.fullname || "No Name"}</h1>
          <span className="text-gray-300">{user?.email || "No Email"}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
