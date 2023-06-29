import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_TODO",
            payload: {
              id: shortid.generate(),
              title: title,
              body: content,
              isDone: false,
            },
          });
          setTitle("");
          setContent("");
        }}
      >
        <div>
          <label>제목</label>
          <input
            name="제목"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>내용</label>
          <input
            name="내용"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button>입력</button>
      </form>
    </>
  );
}

export default Form;
