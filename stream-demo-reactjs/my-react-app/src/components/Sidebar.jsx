import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4">
      <ul>
        <li className="mb-2">
          <a href="#" className="text-blue-500">
            Home
          </a>
        </li>
        <li className="mb-2">Shorts</li>
        <li className="mb-2">Subscriptions</li>
        <li className="mb-2">History</li>
        <li className="mb-2">Playlists</li>
        <li className="mb-2">Watch Later</li>
        <li className="mb-2">Liked Videos</li>
        <li className="mb-2">Downloads</li>
        <li className="mb-2">Explore</li>
      </ul>
    </div>
  );
};

export default Sidebar;
