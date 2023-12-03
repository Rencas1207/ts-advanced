import React from 'react';
import { TodoId, Todo as TodoType } from '../types';

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleteTodo({
      id,
      completed: e.target.checked,
    });
  };

  return (
    <>
      <div className="view">
        <input
          className="toggle"
          checked={completed}
          type="checkbox"
          onChange={handleChangeCheckbox}
        />
        <label>{title}</label>
        <button
          className="destroy"
          onClick={() => {
            onRemoveTodo({ id });
          }}
        ></button>
      </div>
    </>
  );
};

export default Todo;
