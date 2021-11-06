import React from "react";

function ToDoItem(props) {
  const { onChecked } = props;

  return (
    <div
      onClick={() => {
        onChecked(props.id);
      }}>
      {props.text}
    </div>
  );
}

export default ToDoItem;
