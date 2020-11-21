import React from 'react';
import { TodoListItem } from './todoListItem';

const todos: Todo[] =[
  {
    text: 'aaa',
    complete: false,
  },
  {
    text: 'bbb',
    complete: true,
  }
]

function Todo() {
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default Todo;
