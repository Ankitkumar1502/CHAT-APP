import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Settings, User, LogOut } from "lucide-react";

const Navbar = () => {
  return (

    // only the frontend logics 
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left Section: Logo and App Name */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatty</h1>
            </Link>
          </div>

          {/* Right Section: Settings, Profile, Logout */}
          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="btn btn-sm gap-2 transition-colors hover:bg-primary/10"
            >
              <Settings className="w-5 h-5 text-gray-500 cursor-pointer" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            <Link to="/profile" className="btn btn-sm gap-2 hover:bg-primary/10">
              <User className="w-5 h-5 text-gray-500 cursor-pointer" />
              <span className="hidden sm:inline">Profile</span>
            </Link>

            <button className="btn btn-sm gap-2 hover:bg-primary/10">
              <LogOut className="w-5 h-5 text-gray-500 cursor-pointer" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
