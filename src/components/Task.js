import React, { useState, useEffect } from 'react';
import './Style.css';

const Task = ({ Task, selected }) => {
  function moveLeft() {}

  function onRemove() {}

  function moveRight() {}

  return (
    <div className="container">
      {!selected || (
        <>
          <button onClick={moveLeft}>left</button>
          <button onClick={onRemove}>delete</button>
          <button onClick={moveRight}>right</button>
        </>
      )}
      <label>{Task}</label>
    </div>
  );
};
export default Task;
