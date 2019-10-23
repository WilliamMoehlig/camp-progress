import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createTodoCreator, completeTodoCreator } from '../../store/todo/todoCreator';
import todo from '../../store/todo/todo';
import '../../styles/todos.scss';

function Todos() {
  const todoRef = useRef(null);

  const dispatch = useDispatch();
  const todos = useSelector(state => Object.values(state.todos));
  const remainingTodos = todos.filter(e => !e.completed);

  const onEnter = e => {
    e.preventDefault();
    dispatch(createTodoCreator(todo(todos.length + 1, todoRef.current.value, false)));
    todoRef.current.value = '';
  };

  const onClick = id => {
    dispatch(completeTodoCreator(id));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="todos col-4">
          <h1>Todos</h1>
          <form onSubmit={onEnter}>
            <input type="text" aria-label="newTodoName" className="form-control" ref={todoRef} placeholder="Add todo" />
          </form>
          <hr />
          <ul className="list-unstyled todos__list">
            {remainingTodos.map(elem => {
              if (elem.completed) {
                return null;
              }
              return (
                <li key={elem.id} className="todos__list-item">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={elem.completed}
                        onChange={() => onClick(elem.id)}
                      />
                      {elem.name}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
          <hr />
          <div className="todos__footer">
            <strong>
              <span>{remainingTodos.length}</span>
            </strong>
            items remaining
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
