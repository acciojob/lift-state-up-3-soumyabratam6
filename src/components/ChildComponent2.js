import React from 'react';

const ChildComponent2 = ({ onSelectOption }) => {
  return (
    <div>
      <div className='child2'>
        <h3>ChildComponent2</h3>
      <p onClick={() => onSelectOption('Option 2')}>Select Option 2</p>
      </div>
    </div>
  );
};

export default ChildComponent2;
