import React from 'react';

const todoList = [
  {
    id: 1,
    title: "Complete the CTD assignment for week 1"

  },
  {
    id: 2,
    title: "Start React tutorials for week 2"
  },
  {
    id: 3,
    title: "Complete the assignment for week 2 by Monday"
  }
];

function App() {
  return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todoList.map(function(item){
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
  );
}

export default App;
