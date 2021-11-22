import React, { useState } from 'react';
import './Style.css';
import Tasks from './Tasks';

const Stage = ({ title }) => {
  const [isnewTask, setIsNewTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [listTasks, setListTasks] = useState([]);

  function addingNewTask() {
    setIsNewTask(!isnewTask);
  }

  function confirmNewTask() {
    setIsNewTask(!isnewTask);
    if (newTask == '') return;
    setNewTask(newTask);
    setListTasks(listTasks.concat(newTask));
    console.log(listTasks);
  }

  function userInput(e) {
    setNewTask(e.target.value);
  }

  return (
    <div className="container">
      <p>{title}</p>
      <div className="task-containers">
        <Tasks listTasks={listTasks} />
      </div>

      {isnewTask || <button onClick={addingNewTask}>Add Task</button>}
      {!isnewTask || (
        <>
          <input placeholder="New Task" onChange={userInput}></input>
          <button onClick={confirmNewTask}>Confirm</button>
        </>
      )}
    </div>
  );
};
export default Stage;
