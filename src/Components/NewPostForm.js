import React from "react";

function NewPostForm() {
  return (
    <>
      <form>
        <label>Title:</label>
        <input type="text" name="title" id="title"></input>
        <label>Post:</label>
        <input type="text" name="post" id="post"></input>
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default NewPostForm;