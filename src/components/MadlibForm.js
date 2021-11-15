import React from 'react';
import BlankField from './BlankField';

const MadlibForm = ({blanks}) => {
  console.log(blanks);

  const renderBlankFields = blanks.map((blank) => {
    return (
      <BlankField blank={blank} />
    );
  });

  return (
    <form 
      className="ui form raised segment" 
      style={{display: 'grid', gridTemplateColumns: '50% 50%', gridGap: '10px'}}
    >
      {renderBlankFields}
      <button 
        className="ui positive button" 
        style={{width: 'fit-content'}} 
        type='submit'>
          Submit
      </button>
    </form>
  );
};

export default MadlibForm;