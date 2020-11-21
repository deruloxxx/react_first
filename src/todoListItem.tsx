import React from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  )
};
