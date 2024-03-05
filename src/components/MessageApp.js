import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
// import firebase from 'firebase/compat/app'; // Use compat import
import { getDocs, collection, addDoc } from 'firebase/firestore';
function MessageApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const todosCollectionRef = collection(db, 'todos');

  const getTodoList = async () => {
    try {
      const data = await getDocs(todosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(filteredData);
      console.log(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  const addTodo = async () => {
    try {
      await addDoc(todosCollectionRef, {
        todo: input,
      });
      getTodoList();
      console.log("succces");
    } catch (err) {
      console.error(err);
    }
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
              <MessageDelete key={it.id} todo={it} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MessageDelete({ todo }) {
  const handleDelete = () => {
    db.collection('todos').doc(todo.id).delete();
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p>{todo.todo}</p>
      </div>
      <button className="btn btn-outline-danger" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default MessageApp;
