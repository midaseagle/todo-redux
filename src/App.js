import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DoneTasks from './components/DoneTasks';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector(state => state.tasks.theme);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Todo App</h1>
      <ThemeToggle />
      <AddTask />
      <TaskList />
      <DoneTasks />
    </div>
  );
};

export default App;
