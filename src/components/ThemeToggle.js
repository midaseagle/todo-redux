import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/todoSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.tasks.theme);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
