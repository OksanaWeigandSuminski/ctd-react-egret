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
function TodoList() {
    return (
    <div>
        <ul>
          {todoList.map(function(item){
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
}
export default TodoList;