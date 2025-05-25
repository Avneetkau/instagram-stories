import React, { useEffect, useRef } from "react";
import ProgressBar from "./Progressbar.jsx";

const Storyviewer = ({ story, onNext, onPrev, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onNext();
    }, 5000);

    return () => clearTimeout(timerRef.current);
  }, [story]);

  const handleClick = (e) => {
    const { clientX } = e;
    const halfWidth = window.innerWidth / 2;

    if (clientX < halfWidth) {
      onPrev();
    } else {
      onNext();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      onClick={handleClick}
    >
      <ProgressBar duration={5000} />
      <img
        src={story.imageUrl}
        alt="story"
        className="w-full h-full object-cover"
      />
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white bg-black/50 px-4 py-2 rounded"
      >
        Close
      </button>
    </div>
  );
};

export default Storyviewer;


