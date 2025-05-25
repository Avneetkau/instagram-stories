import { useEffect, useState } from "react";
import StoryList from "./components/StoryList.jsx";
import Storyviewer from "./components/Storyviewer.jsx";
import storiesData from "./data/data.json";

function App() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    setStories(storiesData);
  }, []);

  const openStory = (index) => setCurrentIndex(index);
  const closeStory = () => setCurrentIndex(null);

  const goNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      closeStory();
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      closeStory();
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white">
      <h1 className="text-center text-2xl p-4">Instagram Stories</h1>
      <StoryList stories={stories} onOpen={openStory} />
      {currentIndex !== null && (
        <Storyviewer
          story={stories[currentIndex]}
          onNext={goNext}
          onPrev={goPrev}
          onClose={closeStory}
        />
      )}
    </div>
  );
}

export default App;
