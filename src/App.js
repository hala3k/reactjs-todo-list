import React, { useState } from "react";
import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";
import { getEnv } from './modules/EnvService';
import LocalStorageDB from './modules/LocalStorageDB';

function App() {
  const [toDoList, setToDoList] = useState(LocalStorageDB.getRecords('todo'));

  const addItem = (inputText) => {
    const newTodo = {id: toDoList.length + 1, body: inputText, isCompleted: false };
    LocalStorageDB.addRecord('todo', newTodo);
    setToDoList((prevState) => prevState.concat(newTodo))
  }
  const deleteItem = (id) => {
    // const prevItems = [...items];
    // const deletedItems = prevItems.filter((item, index) => index !== id);
    // setItems(deletedItems);
  }
  const markAsCompleted = (id, isCompleted) => {
    LocalStorageDB.updateRecord('todo', 'id', id, {isCompleted})
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>{getEnv('HEADER_TITLE')}</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {toDoList.map((todoItem, index) => (
            <>
              <input
                type="checkbox"
                defaultChecked={todoItem.isCompleted}
                onChange={() => markAsCompleted(todoItem.id, !todoItem.isCompleted)}
              />
              <ToDoItem
                key={index}
                id={index}
                text={todoItem.body}
                onChecked={deleteItem}
              />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
