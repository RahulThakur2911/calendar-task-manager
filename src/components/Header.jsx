import React from "react";

const Header = () => {
  return (
    <header className="bg-sky-600 text-white px-6 py-6 shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Calendar Task Manager
        </h1>
        <p className="text-sm md:text-base opacity-90 mt-2">
          Drag & drop tasks to organize your schedule
        </p>
      </div>
    </header>
  );
};

export default Header;