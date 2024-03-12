import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { getDocs, collection, addDoc, deleteDoc } from 'firebase/firestore';

function Post() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const commentsCollectionRef = collection(db, 'comments');

  const getCommentList = useCallback(async () => {
    try {
      const data = await getDocs(commentsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setComments(filteredData);
    } catch (err) {
      console.error(err);
    }
  }, [commentsCollectionRef]);

  useEffect(() => {
    getCommentList();
  }, [getCommentList]);

  const addComment = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      await addDoc(commentsCollectionRef, {
        comment: input,
      });
      setInput('');
      getCommentList();
      console.log("success");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteDoc(db.collection('comments').doc(commentId));
      // Updating comments state by filtering out the deleted comment
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Social Media Post</h5>
          <p className="card-text">
            Write your comments here
            <i className="bi bi-rocket ml-2"></i>
          </p>
          <form onSubmit={addComment}>
            <div className="form-group">
              <label htmlFor="commentInput" className="form-label">
                Write a Comment
              </label>
              <input
                type="text"
                className="form-control"
                id='commentInput'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="btn btn-primary mt-2" 
              disabled={!input.trim()}
            >
              Post Comment
            </button>
          </form>
          <ul className="list-group">
            {comments.map((comment) => (
              <CommentDelete key={comment.id} comment={comment} onDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CommentDelete({ comment, onDelete }) {
  const handleDelete = () => {
    onDelete(comment.id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p>{comment.comment}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Post;
