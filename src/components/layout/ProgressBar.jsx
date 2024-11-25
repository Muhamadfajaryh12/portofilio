import React, { useState, useRef } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Loading Bar */}
      <div className="h-2 bg-gray-300 w-full">
        <div
          className="h-2 bg-blue-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-scroll p-4 border border-gray-200"
      >
        {/* Content to scroll */}
        <div className="h-[2000px] bg-gradient-to-b from-gray-100 to-gray-400">
          <p>Scroll down to see the progress bar fill up!</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
