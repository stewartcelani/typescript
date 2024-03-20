'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Todo } from '@/types';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]); // Use useState to manage todos

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios.get('/api/todo');
      if (response.data) setTodos(response.data);
    }
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      List Page
      <div className="flex flex-col w-10/12  bg-gray-900 p-4 rounded-md shadow-2xl my-4">
        <div className="w-full flex justify-between px-4 opacity-50 mb-2">
          <div>Title</div>
          <div>Category</div>
          <div>Status</div>
        </div>
        {todos.map((todo, idx) => (
          <div
            key={todo.id}
            className={`${todos.length - 1 === idx ? 'rounded-b-md' : ''} ${idx === 0 ? 'rounded-t-md ' : ''} bg-gray-800 hover:bg-gray-700 cursor-pointer flex w-full justify-between p-4`}
          >
            <div>{todo.title}</div>
            <div>{todo.category}</div>
            <div>{todo.completed ? 'Completed' : 'Not Completed'}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
