import React, { useState } from 'react';
import './style.css';
import Stage from './components/Stage';

export default function App() {
  const colummns = ['ToDo', 'Tasks', 'Tasks', 'Tasks'];
  return (
    <div>
      <h1>Kanban board</h1>
      <div className="stage-container">
        {colummns.map((Tasks, index) => {
          return (
            <div className="individual-task" key={index}>
              <Stage title={Tasks} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
