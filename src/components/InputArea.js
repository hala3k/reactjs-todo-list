import React, { useState } from "react";

const CREATE_AREA_TEXTS = {
  note: "Create a new todo...",
};
function InputArea(props) {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const handleClick = () => {
    props.onAdd(inputText);
    setInputText("");
  };

  return (
    <div className='form'>
      <input
        onChange={handleChange}
        type='text'
        placeholder={CREATE_AREA_TEXTS.note}
        value={inputText}
      />
      <button onClick={handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
