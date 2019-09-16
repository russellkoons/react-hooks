import React, { useState, useEffect } from 'react';

export function Example() {
  // State Hook
  const [count, setCount] = useState(0);

  // Effect Hook
  // Changes the title as the DOM is updated
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

// You can also use multiple state hooks in one component

// function ManyStates() {
//   const [age, setAge] = useState(42);
//   const [fruit, setFruit] = useState('strawberry');
//   const [todos, setTodos] = useState([{ text: 'Learn React Hooks!'}]);
// }