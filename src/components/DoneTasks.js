import React from 'react';
import { useSelector } from 'react-redux';

const DoneTasks = () => {
  const tasks = useSelector(state => state.tasks.tasks.filter(task => task.done));

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneTasks;
