import React, { useState } from 'react';
import './style.css';
import Stage from './components/Stage';

export default function App() {
  return (
    <div>
      <h1>Kanban board</h1>
      <div className="stage-container">
        <Stage />
        <Stage />
        <Stage />
        <Stage />
      </div>
    </div>
  );
}
