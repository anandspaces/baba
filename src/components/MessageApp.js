import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import firebase from 'firebase/compat/app'; // Use compat import

function MessageApp() {
  const [todos, setTodos] = useState([]); // Use empty array for initial state
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot
    (snapshot => {
    setTodos(snapshot.docs.map(doc => doc.data()))
    })
    }, [input])
    
  const addTodo = (e) => {
    e.preventDefault();
    db.collection('messageList').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">TODO React Firebase</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={addTodo} className="mt-4">
            <div className="mb-3">
              <label htmlFor="todoInput" className="form-label">
                Write a TODO
              </label>
              <input
                type="text"
                className="form-control"
                id="todoInput"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!input.trim()}
            >
              Add Todo
            </button>
          </form>
          <ul className="list-group">
            {todos.map((it) => (
              <MessageDelete key={it.id} arr={it} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MessageDelete({ arr }) {
  const handleDelete = () => {
    db.collection('messageList').doc(arr.id).delete();
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p>{arr.item}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export { MessageApp };
