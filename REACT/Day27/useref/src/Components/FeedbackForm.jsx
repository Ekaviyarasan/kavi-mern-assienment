import React, { useRef } from "react";

function FeedbackForm() {
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", nameRef.current.value);
    console.log("Message:", messageRef.current.value);

    // Clear manually
    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Name" />
      <br />
      <textarea ref={messageRef} placeholder="Message"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;