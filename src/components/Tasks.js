import React, { useState } from 'react';
import './Style.css';

const Tasks = ({ listTasks }) => {
  return (
    <div className="container">
      {listTasks.map((Tasks, index) => {
        return (
          <div className="indiviual-tasks" key={index}>
            <label>{Tasks}</label>
          </div>
        );
      })}
    </div>
  );
};
export default Tasks;
