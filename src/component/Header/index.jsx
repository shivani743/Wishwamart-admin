import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-900 text-white h-16 flex items-center justify-between px-4">
      <h1 className="text-lg font-bold text-red">Dashboard</h1>
      <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-gray-700">Logout</button>
    </div>
  );
};

export default Header;