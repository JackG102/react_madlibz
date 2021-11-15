import React from 'react';

const BlankField = ({blank}) => {
  return (
    <div className="field">
      <label>{blank}</label>
      <input type="text" required />
    </div>
  );
}

export default BlankField;