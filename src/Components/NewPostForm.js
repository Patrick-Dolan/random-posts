import React from "react";

function NewPostForm() {
  return (
    <>
      <form>
        <label for="title">Title:</label>
        <input type="text" name="title" id="title"></input>
        <label for="post">Post:</label>
        <input type="text" name="post" id="post"></input>
        <button type="submit">Post</button>
      </form>
    </>
  );
}

export default NewPostForm;