import React from "react";

const videoSrcFake = "http://localhost:3000/api/videos/vodieukien1_obito.mp4";
const VideoCard = ({ title, channel, views, time, videoSrc }) => {
  return (
    <div className="mb-4 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Video player */}
      <div className="w-full aspect-video bg-black">
        <video
          src={videoSrcFake}
          controls
          className="w-full h-full object-cover"
          preload="metadata"
        />
      </div>

      {/* Video info */}
      <div className="text-sm p-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500">{channel}</p>
        <p className="text-gray-500 text-xs">
          {views} views • {time}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
