import React, { useState,useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { Users } from 'lucide-react';


const users = [
  { _id: "1", fullName: "John Doe", profilePic: "", isOnline: true },
  { _id: "2", fullName: "Jane Smith", profilePic: "", isOnline: false },
  { _id: "3", fullName: "Alex Johnson", profilePic: "", isOnline: true },
  { _id: "4", fullName: "Emily Davis", profilePic: "", isOnline: false },
  { _id: "5", fullName: "Michael Brown", profilePic: "", isOnline: true },
];


const Sidebar = () => {
  // const {getUsers , users , setSelectedUser ,  selectedUser , isUsersLoading } = useChatStore()
  
  // const onlineUsers = [];

  
  // useEffect(() => {
  //   getUsers()
  // }, [getUsers])

  // if(isUsersLoading) return <SidebarSkeleton/>

  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Fake 2 sec loading time
  }, []);

  return (
   <aside className='h-full w-20 lg:w-72 border-base-300 flex flex-col transition-all duration-200' >
    <div className='flex items-center gap-2'>
      <Users className='size-6'/> 
      <span className='font-medium hidden lg:block'>Contacts</span>
    </div>
    <div className="w-full max-w-md mx-auto">
      {loading
        ? // Skeleton Loader (Shows while loading)
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full p-3 flex items-center gap-3 animate-pulse">
              <div className="relative mx-auto lg:mx-0">
                <div className="size-12 bg-gray-300 rounded-full"></div>
              </div>
              <div className="hidden lg:block text-left min-w-0">
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-20"></div>
              </div>
            </div>
          ))
        : // Render Users (When Loaded)
          users.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full p-3 flex items-center gap-3 transition-colors 
                ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : "hover:bg-base-300"}`}
              aria-label={`Chat with ${user.fullName}`}
            >
              <div className="relative mx-auto lg:mx-0">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="size-12 object-cover rounded-full"
                />
                {user.isOnline && (
                  <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
                )}
              </div>
              {/* User Info - Only visible on large screens */}
              <div className="hidden lg:block text-left min-w-0">
                <div className="font-medium truncate">{user.fullName}</div>
                <div className="text-sm text-zinc-400">{user.isOnline ? "Online" : "Offline"}</div>
              </div>
            </button>
          ))}
    </div>
     
   </aside>
  )
}

export default Sidebar