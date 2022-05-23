import { React, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function changeHandle(event) {
    const value = event.target.value;
    setCurrentItem(value);
  }

  function addItem() {
    setTodoList((prevList) => {
      return [currentItem, ...prevList];
    });
    setCurrentItem("");
  }

  function removeItem(id) {
    setTodoList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onClick={addItem}
        onChange={changeHandle}
        value={currentItem}
      />
      <div>
        <ul>
          {todoList.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                item={todoItem}
                onClick={removeItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
