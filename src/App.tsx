import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './reducers/hooks';
import { fetchPosts } from './actions/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
}

function App() {
  const dispatch = useDispatch();
  const counter = useAppSelector((state) => state.counter);
  const todo: string[] = useAppSelector((state) => state.todo);
  const posts: Post[] = useAppSelector((state) => state.posts);
  const [todoValue, setTodoValue] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todoValue });
    setTodoValue('');
  };

  return (
    <div className='App'>
      <div className='counterApp'>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <span> {counter} </span>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
      <div className='todoApp'>
        <ul>
          {todo.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input
            type='text'
            value={todoValue}
            onChange={handleChange}
          />
          <button type='submit'>저장</button>
        </form>

        <ul>
          {posts.map((post, idx) => (
            <li key={idx}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
