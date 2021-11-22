import React, { useState } from 'react';
import './Style.css';

const Task = ({ Task }) => {
  return (
    <div className="container">
      <label>{Task}</label>
    </div>
  );
};
export default Task;
