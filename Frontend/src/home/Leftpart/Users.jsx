import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div
        className="py-2 overflow-y-auto custom-scrollbar"
        style={{ maxHeight: 'calc(84vh - 10vh)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Users;