import React, { useRef, useState } from "react";

function TypingTracker() {
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  const handleTyping = () => {
    setIsTyping(true);

    // Clear previous timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timer
    timeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div>
      <input type="text" onChange={handleTyping} placeholder="Type here..." />
      {!isTyping && <p>User stopped typing...</p>}
    </div>
  );
}

export default TypingTracker;