import React from "react";
import VideoCard from "./VideoCard";

const MainContent = () => {
  const videos = [
    {
      title: "Nâng Dưới Chân May",
      channel: "Orinn Mix",
      views: "54K",
      time: "3 weeks ago",
    },
    {
      title: "Đại Đế Lộ Flex Cái Tông Môn Phái",
      channel: "Pikapi Channel",
      views: "449K",
      time: "2 months ago",
    },
    {
      title: "Kẻ Cô Tơn Sũng Thủy Cái",
      channel: "Pikapi Channel",
      views: "SSS",
      time: "10 months ago",
    },
    {
      title: "Mix - (S)TRONG Trong Hiệu - Kho Bâu",
      channel: "Official Music Video",
      views: "Mix",
      time: "Live",
    },
    {
      title: "Smoooothed Brown Noise - Noise Cancelling",
      channel: "RAIN Sounds For Relaxation",
      views: "24:00:01",
      time: "",
    },
    {
      title: "Playlist Lofi Chillhop Beat ~ Soft Vibes",
      channel: "Chill Chill Lofi",
      views: "",
      time: "2:29:26",
    },
  ];

  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
