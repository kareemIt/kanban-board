import React, { useState } from 'react';
import './Style.css';
import Task from './Task';

const Stage = ({ title }) => {
  const [isnewTask, setIsNewTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [listTasks, setListTasks] = useState([]);
  const [seleceted, setSelected] = useState(false);

  function addingNewTask() {
    setIsNewTask(!isnewTask);
  }
  function isSelected() {
    setSelected(!seleceted);
  }

  function confirmNewTask() {
    setIsNewTask(!isnewTask);
    if (newTask == '') return;
    setNewTask(newTask);
    setListTasks(listTasks.concat(newTask));
  }

  function userInput(e) {
    setNewTask(e.target.value);
  }

  return (
    <div className="container">
      <p>{title}</p>
      <div className="task-containers">
        {listTasks.map((Tasks, index) => {
          return (
            <div
              className={
                seleceted ? 'indviudal-task-clicked' : 'indviudal-task'
              }
              key={index}
              onClick={isSelected}
            >
              <Task Task={Tasks} />
            </div>
          );
        })}
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
