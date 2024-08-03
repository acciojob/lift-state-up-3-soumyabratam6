import React from 'react';

const ChildComponent1 = ({ onSelectOption }) => {
  return (
    <div>
      <div className='child1'>
      <h3>ChildComponent1</h3>
      <button onClick={() => onSelectOption('Option 1')}>Select Option 1</button>
      </div>
    </div>
  );
};

export default ChildComponent1;
