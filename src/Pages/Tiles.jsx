import React from "react";
import ReactPlayer from "react-player";

export default function Tiles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4 text-center">Making of Tile</h1>

      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Tile Making"
          className="w-full h-[60dvh] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-xl font-medium mb-4 text-center">
        Watch the Process
      </h2>

      <div className="aspect-w-16 h-96 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
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
