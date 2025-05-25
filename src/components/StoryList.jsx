import React from "react";

const StoryList = ({ stories, onOpen }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-2">
      {stories.map((story, index) => (
        <button
          key={story.id}
          onClick={() => onOpen(index)}
          className="inline-block mx-2"
        >
          <img
            src={story.imageUrl}
            alt={`Story ${story.id}`}
            className="w-16 h-16 rounded-full border-2 border-pink-500 object-cover"
          />
        </button>
      ))}
    </div>
  );
};

export default StoryList;

