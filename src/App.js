import React, { useState } from "react";
import ActionBar from "./components/ActionBar";
import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";
import { getEnv } from './modules/EnvService';
import LocalStorageDB from './modules/LocalStorageDB';
import { Checkbox } from 'pretty-checkbox-react';

function App() {
  const [toDoList, setToDoList] = useState(LocalStorageDB.getRecords('todo'));

  const addItem = (inputText) => {
    const newTodo = { id: toDoList.length + 1, body: inputText, isCompleted: false };
    LocalStorageDB.addRecord('todo', newTodo);
    setToDoList((prevState) => prevState.concat(newTodo))
  }
  const deleteItem = (id) => {
    // const prevItems = [...items];
    // const deletedItems = prevItems.filter((item, index) => index !== id);
    // setItems(deletedItems);
  }
  const markAsCompleted = (id, isCompleted) => {
    LocalStorageDB.updateRecord('todo', 'id', id, { isCompleted })
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1 class="brand">{getEnv('HEADER_TITLE')}</h1>
        <div class="contents">
        <InputArea onAdd={addItem} />
        </div>
      </div>
      <div class="contents">
        <ul>
          {toDoList.map((todoItem, index) => (
            <li>
              <Checkbox shape="round" variant="fill" animation="smooth" icon={
                <img
                  src="images/checkbox.png"
                  alt="check mark"
                />
              } defaultChecked={todoItem.isCompleted}
                onChange={() => markAsCompleted(todoItem.id, !todoItem.isCompleted)}>
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem.body}
                  onChecked={deleteItem}
                />
              </Checkbox>

            </li>
          ))}
          <li><ActionBar></ActionBar></li>
        </ul>
      </div>
      <div class="drag_drop">Drag and drop to reorder list</div>
    </div>
  );
}

export default App;
