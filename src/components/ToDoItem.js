import React from "react";

function ToDoItem(props) {
  const { onChecked } = props;

  return (
    <div
      onClick={() => {
        onChecked(props.id);
      }}>
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
