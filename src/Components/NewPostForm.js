import React from "react";
import Firebase from "./../firebase";
import { getDoc, doc, addDoc, collection, Timestamp } from "firebase/firestore";

function NewPostForm() {
  
  async function handleFormSubmission(e) {
    e.preventDefault();

    const colRef = collection(Firebase, "posts");
    try {
      const docRef = await addDoc(colRef, {
        title: e.target.title.value,
        post: e.target.post.value,
        created: Timestamp.now()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmission}>
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