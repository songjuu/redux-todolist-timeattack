import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <h2>Working.</h2>
          {todos
            .filter((item) => {
              return item.isDone === false;
            })
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <Link to={`/${todo.id}`}>상세 페이지</Link>
                  <br />
                  {todo.id}
                  <br />
                  {todo.title}
                  <br />
                  {todo.body}
                  <br />
                  {todo.isDone.toString()}
                  <br />
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    완료
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
        </div>
        <div>
          <h2>Done.</h2>
          {todos
            .filter((item) => {
              return item.isDone === true;
            })
            .map((todo) => {
              return (
                <div
                  key={todo.id}
                  style={{
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <Link to={`/${todo.id}`}>상세 페이지</Link>
                  <br />
                  {todo.id}
                  <br />
                  {todo.title}
                  <br />
                  {todo.body}
                  <br />
                  {todo.isDone.toString()}
                  <br />
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    취소
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    삭제
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default List;
