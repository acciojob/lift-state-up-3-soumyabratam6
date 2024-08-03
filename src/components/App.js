
import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import './../styles/App.css';
const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 onSelectOption={handleOptionChange} />
      <ChildComponent2 onSelectOption={handleOptionChange} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App;

