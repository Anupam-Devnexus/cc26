import React from "react";
import ReactPlayer from "react-player";

export default function Bricks() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Making of Brick
      </h1>

      <div className="mb-8">
        <img
          src="https://res.cloudinary.com/dy6a2ncau/image/upload/v1747996372/WhatsApp_Image_2025-05-23_at_4.02.22_PM_edty0n.jpg"
          alt="Brick Making"
          className="w-full h-[60dvh] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-xl font-medium mb-4 text-center">
        Watch the Process
      </h2>

      <div className="aspect-w-16 h-96 w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <ReactPlayer
          url="https://youtu.be/DJVkH3C-QNo?si=0ehqz24m8RC33MWD"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
}
