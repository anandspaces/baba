import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { getDocs, collection, addDoc, deleteDoc } from 'firebase/firestore';

function MessageApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const todosCollectionRef = collection(db, 'todos');

  const getTodoList = useCallback(async () => {
    try {
      const data = await getDocs(todosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(filteredData);
    } catch (err) {
      console.error(err);
    }
  }, [todosCollectionRef]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      await addDoc(todosCollectionRef, {
        todo: input,
      });
      setInput('');
      getTodoList();
      console.log("success");
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
            {todos.map((todo) => (
              <MessageDelete key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MessageDelete({ todo }) {
  const handleDelete = async () => {
    try {
      await deleteDoc(db.collection('todos').doc(todo.id));
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
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
