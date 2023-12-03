import React, { useState } from 'react';
import { TodoTitle } from '../types';

interface Props {
  saveTodo: (title: TodoTitle) => void;
}

const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && inputValue !== '') {
      saveTodo({ title: inputValue });
      setInputValue('');
    }
  };

  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      onKeyDown={handleKeyDown}
      placeholder="¿Qué quieres hacer?"
      autoFocus
    />
  );
};

export default CreateTodo;
